import { useParams, Link } from "react-router";
import { offersData } from "../utils/offers";
import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const containerStyle = { width: "100%", height: "400px" };

interface MarkerData {
  position: [number, number]; // [lat, lng] for Leaflet
  title: string;
}

// Pre-cached coordinates for common Jordan locations to avoid API rate limits
const JORDAN_LOCATIONS: Record<string, [number, number]> = {
  "amman": [31.9454, 35.9284],
  "amman citadel": [31.9539, 35.9346],
  "amman roman theatre": [31.9515, 35.9383],
  "petra": [30.3285, 35.4444],
  "wadi rum": [29.5759, 35.4184],
  "jerash": [32.2811, 35.8908],
  "aqaba": [29.5320, 35.0063],
  "dead sea": [31.5590, 35.4732],
  "madaba": [31.7167, 35.7833],
  "mount nebo": [31.7690, 35.7272],
  "karak castle": [31.1847, 35.7042],
  "ajloun castle": [32.3325, 35.7517],
  "wadi mujib": [31.4500, 35.6000],
  "baptismal site": [31.8361, 35.5481],
  "al-maghtas": [31.8361, 35.5481],
  "umm qays": [32.6528, 35.6833],
  "gadara": [32.6528, 35.6833],
  "little petra": [30.3667, 35.4167],
  "shobak castle": [30.5167, 35.5667],
  "umm ar-rasas": [31.5000, 35.9167],
  "qasr al-mushatta": [31.7333, 36.0167],
  "khirbet al-dharieh": [30.2500, 35.3500],
  "rainbow street": [31.9539, 35.9346],
  "blue mosque": [31.9800, 35.9300],
  "king abdullah i mosque": [31.9800, 35.9300],
};

// Function to find coordinates from cache
function findCachedCoordinates(placeName: string): [number, number] | null {
  const normalized = placeName.toLowerCase().trim();
  
  // Direct match
  if (JORDAN_LOCATIONS[normalized]) {
    return JORDAN_LOCATIONS[normalized];
  }
  
  // Partial match - check if any cached location is contained in the place name
  for (const [key, coords] of Object.entries(JORDAN_LOCATIONS)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return coords;
    }
  }
  
  return null;
}

// Custom gold marker icon
const createGoldIcon = (number: number) => {
  return L.divIcon({
    className: "custom-gold-marker",
    html: `
      <div style="position: relative; width: 40px; height: 40px;">
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGradient${number}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#9d6f3e;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#7e5833;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#9d6f3e;stop-opacity:1" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="18" fill="url(#goldGradient${number})" stroke="#5d3f24" stroke-width="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"/>
          <circle cx="20" cy="20" r="14" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
          <text x="20" y="26" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">${number}</text>
        </svg>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
};

// Component to fit map bounds to markers
function MapBoundsHandler({ markers }: { markers: MarkerData[] }) {
  const map = useMap();

  useEffect(() => {
    if (markers.length === 0) return;

    if (markers.length === 1) {
      map.setView(markers[0].position, 10);
    } else {
      const bounds = L.latLngBounds(markers.map((m) => m.position));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, markers]);

  return null;
}

function MapWithMarkers({ offer }: { offer: any }) {
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      setIsLoading(true);

      // Process all places and track their original indices
      const processedPlaces = offer.places
        .map((p: string, originalIdx: number) => {
          const trimmed = p.trim();
          // Skip items that start with !# or are empty
          if (!trimmed || trimmed.startsWith("!#") || trimmed.length === 0) {
            return null;
          }
          
          // Remove any emoji or special characters at the start
          let cleaned = trimmed.replace(/^[^\w\s()\[\]]+/, "").trim();
          
          // Split by newline first (for multi-line descriptions in offer 3)
          const firstLine = cleaned.split('\n')[0].trim();
          
          // For places with parentheses like "Baptismal Site (Al-Maghtas)", keep the full name including parentheses
          // Then split by dash to separate from description
          let placeName = firstLine;
          
          // Find the position of the dash that separates name from description
          // Look for " - " (dash with spaces) which typically separates name from description
          const dashIndex = placeName.indexOf(" - ");
          if (dashIndex > 0) {
            placeName = placeName.substring(0, dashIndex).trim();
          }
          
          // If the place name is too long (likely includes description), take only first part
          if (placeName.length > 60) {
            placeName = placeName.split(/\s{2,}|\.{2,}/)[0].trim();
          }
          
          // Skip if empty or too short
          if (!placeName || placeName.length < 3) {
            return null;
          }
          
          // Add Jordan if not already present
          const searchQuery = placeName.toLowerCase().includes("jordan")
            ? placeName
            : `${placeName}, Jordan`;
            
          return {
            original: placeName,
            search: searchQuery,
            displayIndex: originalIdx + 1 // Keep track of original position for display
          };
        })
        .filter(Boolean);

      const results: MarkerData[] = [];

      // First, try to use cached coordinates to avoid API rate limits
      for (const loc of processedPlaces) {
        if (!loc) continue;
        
        // Check cache first
        const cachedCoords = findCachedCoordinates(loc.original);
        if (cachedCoords) {
          results.push({
            position: cachedCoords,
            title: loc.original,
          });
          console.log(`✓ Cached: ${loc.original} at [${cachedCoords[0]}, ${cachedCoords[1]}]`);
          continue;
        }
        
        // If not in cache, try API (with rate limiting)
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              loc.search
            )}&limit=1&countrycodes=jo`,
            {
              headers: {
                "User-Agent": "JordanAATravel/1.0",
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
              results.push({
                position: [parseFloat(data[0].lat), parseFloat(data[0].lon)],
                title: loc.original,
              });
              console.log(`✓ API Found: ${loc.original} at [${data[0].lat}, ${data[0].lon}]`);
            } else {
              console.log(`✗ No results for: ${loc.search}`);
            }
          } else if (response.status === 429) {
            console.warn(`⚠ Rate limit hit for: ${loc.search}`);
          }

          // Add delay to respect Nominatim's usage policy (max 1 request per second)
          await new Promise((resolve) => setTimeout(resolve, 1100));
        } catch (error) {
          console.error(`Error geocoding ${loc.search}:`, error);
        }
      }

      console.log(`Total markers found: ${results.length} out of ${processedPlaces.length} places`);
      setMarkers(results);
      setIsLoading(false);
    };

    fetchCoordinates();
  }, [offer]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#7e5833] border-t-transparent mb-4"></div>
          <p className="text-gray-600 font-medium">Ładowanie mapy...</p>
        </div>
      </div>
    );
  }

  if (markers.length === 0) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-gray-50 rounded-lg">
        <p className="text-gray-600">Nie można załadować lokalizacji na mapie.</p>
      </div>
    );
  }

  // Default center (Jordan)
  const defaultCenter: [number, number] = [31.95, 35.91];

  // Route line positions
  const routePositions = markers.map((m) => m.position);

  return (
    <MapContainer
      center={defaultCenter}
      zoom={7}
      style={containerStyle}
      scrollWheelZoom={true}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Route polyline connecting all markers */}
      {markers.length > 1 && (
        <Polyline
          positions={routePositions}
          pathOptions={{
            color: "#7e5833",
            weight: 4,
            opacity: 0.8,
            dashArray: "10, 10",
            lineCap: "round",
            lineJoin: "round",
          }}
        />
      )}

      {/* Markers with custom gold icons */}
      {markers.map((marker, idx) => (
        <Marker
          key={idx}
          position={marker.position}
          icon={createGoldIcon(idx + 1)}
        >
          <Popup>
            <div
              onClick={() =>
                window.open(
                  `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
                    marker.title + " Jordan"
                  )}`,
                  "_blank"
                )
              }
              className="text-sm font-semibold cursor-pointer text-[#7e5833] hover:text-[#5d3f24] transition-colors"
            >
              {marker.title}
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Fit bounds to show all markers */}
      <MapBoundsHandler markers={markers} />
    </MapContainer>
  );
}

export default function OfferDetail() {
  const { id } = useParams<{ id: string }>();
  const offer = offersData.find((o) => o.id === Number(id));

  if (!offer)
    return <div className="p-8 text-center">Brak oferty o takim ID.</div>;

  return (
    <main className="bg-white">
      {/* Premium Hero Section with Photo Collage */}
      <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-gradient-to-b from-black/5 to-white">
        {/* Photo Collage Grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-3 p-4 md:p-6">
          {/* Main large image - takes up most space */}
          <div className="col-span-12 md:col-span-8 row-span-4 md:row-span-6 relative overflow-hidden rounded-2xl shadow-2xl group">
            <img
              src={offer.imageUrl}
              alt={offer.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            {/* Decorative corner accent */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#7e5833] opacity-60" />
          </div>
          
          {/* Secondary images - smaller accent pieces */}
          <div className="col-span-6 md:col-span-4 row-span-2 md:row-span-3 relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src={offer.collageImages?.[0] || offer.imageUrl}
              alt={`${offer.title} view 2`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/30" />
            {/* Gold accent overlay */}
            <div className="absolute inset-0 bg-[#7e5833]/10 mix-blend-overlay" />
          </div>
          
          <div className="col-span-6 md:col-span-4 row-span-2 md:row-span-3 relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src={offer.collageImages?.[1] || offer.imageUrl}
              alt={`${offer.title} view 3`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-black/50 via-transparent to-black/30" />
            {/* Gold accent overlay */}
            <div className="absolute inset-0 bg-[#7e5833]/10 mix-blend-overlay" />
          </div>
        </div>

        {/* Premium Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <div className="max-w-7xl mx-auto">
            {/* Decorative top border */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-0.5 w-16 bg-gradient-to-r from-[#7e5833] to-transparent" />
              <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
              <div className="h-0.5 w-8 bg-gradient-to-r from-[#7e5833] to-transparent" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1] drop-shadow-2xl">
              {offer.title}
            </h1>
            
            {offer.subtitle && (
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light tracking-wide drop-shadow-lg mb-6">
                {offer.subtitle}
              </h2>
            )}
            
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-[#7e5833]" />
                <span className="text-[#7e5833] text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                  Exclusive Journey
                </span>
                <div className="h-px w-12 bg-[#7e5833]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <Link
          to="/offers"
          className="inline-flex items-center gap-2 text-[#7e5833] hover:text-[#5d3f24] transition-all duration-300 mb-16 group font-medium"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-2 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="tracking-wide uppercase text-sm">Back to Offers</span>
          <div className="h-px w-0 group-hover:w-8 bg-[#7e5833] transition-all duration-300" />
        </Link>

        {/* Description with Premium Styling */}
        <article className="prose prose-lg max-w-none">
          <div className="relative mb-20">
            {/* Decorative corner elements */}
            <div className="absolute -left-2 -top-2 w-12 h-12 border-l-2 border-t-2 border-[#7e5833]/30" />
            <div className="absolute -right-2 -bottom-2 w-12 h-12 border-r-2 border-b-2 border-[#7e5833]/30" />
            
            <div className="relative bg-gradient-to-br from-[#7e5833]/5 via-white to-[#7e5833]/5 p-10 md:p-12 rounded-2xl border-l-4 border-[#7e5833] shadow-lg">
              <div className="absolute top-6 left-6 w-3 h-3 bg-[#7e5833] rotate-45" />
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light italic relative z-10">
                "{offer.description}"
              </p>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-[#7e5833] rotate-45" />
            </div>
          </div>

          {/* Places Section with Premium Design */}
          <div className="mt-20">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent" />
                <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                Places to Visit
              </h3>
              <p className="text-gray-600 text-lg font-light tracking-wide">
                Curated destinations for your exclusive journey
              </p>
            </div>
            
            <div className="grid gap-5 md:gap-6">
              {offer.places.map((place, idx) => {
                const cleaned = place.trim().replace(/^!#/, "");
                const [title, ...rest] = cleaned.split("-");
                return (
                  <div
                    key={idx}
                    className="group relative pl-20 py-6 pr-8 bg-white rounded-xl border-2 border-gray-100 hover:border-[#7e5833]/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7e5833]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#7e5833] to-[#7e5833]/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                    
                    {/* Premium numbered badge */}
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="relative">
                        {/* Outer decorative ring */}
                        <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-[#7e5833]/20 group-hover:border-[#7e5833]/40 transition-all duration-300 group-hover:scale-110" />
                        {/* Inner gradient circle */}
                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#7e5833] via-[#9d6f3e] to-[#7e5833] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          {/* Number */}
                          <span className="text-white font-bold text-lg tracking-tight">
                            {idx + 1}
                          </span>
                          {/* Shine effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent opacity-50" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <p className="font-bold text-lg md:text-xl text-gray-900 mb-2 group-hover:text-[#7e5833] transition-colors duration-300 tracking-tight">
                        {title.trim()}
                      </p>
                      {rest.length > 0 && (
                        <p className="text-gray-600 leading-relaxed text-base">
                          {rest.join("-").trim()}
                        </p>
                      )}
                    </div>
                    
                    {/* Corner decoration */}
                    <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-[#7e5833]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </div>

      {/* Map Section with Premium Styling */}
      <div className="w-full bg-gradient-to-b from-white via-gray-50/50 to-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent" />
              <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              Journey Map
            </h3>
            <p className="text-gray-600 text-lg font-light tracking-wide">
              Explore the route of your exclusive adventure
            </p>
          </div>
          
          <div className="relative">
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#7e5833]/40 z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-[#7e5833]/40 z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-[#7e5833]/40 z-10" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-[#7e5833]/40 z-10" />
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-200">
              <MapWithMarkers offer={offer} />
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7e5833]" />
              <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
              <div className="h-px w-24 bg-[#7e5833]" />
              <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#7e5833]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Made with Bob
