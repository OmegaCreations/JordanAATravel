import { useParams, Link } from "react-router";
import { offersData } from "../utils/offers";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
  useApiIsLoaded,
  useMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const containerStyle = { width: "100%", height: "400px" };

interface MarkerData {
  position: { lat: number; lng: number };
  title: string;
}

function InnerMap({
  markers,
  onMarkerClick,
  activeMarker,
  onInfoClose,
}: {
  markers: MarkerData[];
  onMarkerClick: (idx: number) => void;
  activeMarker: number | null;
  onInfoClose: () => void;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map || markers.length === 0) return;
    const avgLat =
      markers.reduce((sum, m) => sum + m.position.lat, 0) / markers.length;
    const avgLng =
      markers.reduce((sum, m) => sum + m.position.lng, 0) / markers.length;
    map.panTo({ lat: avgLat, lng: avgLng });
  }, [map, markers]);

  return (
    <>
      {markers.map((marker, idx) => (
        <Marker
          key={idx}
          position={marker.position}
          title={marker.title}
          onClick={() => onMarkerClick(idx)}
        />
      ))}
      {activeMarker !== null && markers[activeMarker] && (
        <InfoWindow
          position={markers[activeMarker].position}
          onCloseClick={onInfoClose}
        >
          <div
            onClick={() =>
              window.open(
                `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
                  markers[activeMarker].title + " Jordan"
                )}`,
                "_blank"
              )
            }
            className="text-sm font-semibold cursor-pointer text-[var(--orange1)]"
          >
            {markers[activeMarker].title}
          </div>
        </InfoWindow>
      )}
    </>
  );
}

function MapWithMarkers({ offer }: { offer: any }) {
  const isLoaded = useApiIsLoaded();
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [initialCenter, setInitialCenter] = useState({
    lat: 31.95,
    lng: 35.91,
  });
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  useEffect(() => {
    if (!isLoaded || !offer || markers.length > 0) return;

    const geocoder = new google.maps.Geocoder();

    const rawLocations = offer.places
      .map((p: string) => p.trim())
      .filter((p) => !p.startsWith("!#"));

    const locations = rawLocations
      .map((p) => {
        const placeName = p.split("-")[0].trim();
        return placeName.includes("Jordan")
          ? placeName
          : `${placeName}, Jordan`;
      })
      .filter(Boolean);

    const results: MarkerData[] = [];
    let pending = locations.length;

    if (pending === 0) return;

    locations.forEach((loc) => {
      geocoder.geocode({ address: loc }, (res, status) => {
        if (status === "OK" && res && res[0]) {
          const pos = res[0].geometry.location.toJSON();
          results.push({ position: pos, title: loc.split(",")[0] });
        }
        pending--;
        if (pending === 0 && results.length > 0) {
          setMarkers(results);
          const avgLat =
            results.reduce((sum, m) => sum + m.position.lat, 0) /
            results.length;
          const avgLng =
            results.reduce((sum, m) => sum + m.position.lng, 0) /
            results.length;
          setInitialCenter({ lat: avgLat, lng: avgLng });
        }
      });
    });
  }, [isLoaded, offer]);

  if (!isLoaded)
    return <div className="text-center p-4">Ładowanie mapy...</div>;

  return (
    <Map
      defaultCenter={initialCenter}
      defaultZoom={6}
      gestureHandling="greedy"
      zoomControl
      disableDefaultUI={false}
      style={containerStyle}
    >
      <InnerMap
        markers={markers}
        onMarkerClick={setActiveMarker}
        activeMarker={activeMarker}
        onInfoClose={() => setActiveMarker(null)}
      />
    </Map>
  );
}

export default function OfferDetail() {
  const { id } = useParams<{ id: string }>();
  const offer = offersData.find((o) => o.id === Number(id));

  if (!offer)
    return <div className="p-8 text-center">Brak oferty o takim ID.</div>;

  return (
    <main className="bg-white">
      <div className="relative h-[50vh] flex flex-col justify-center items-center overflow-hidden">
        <img
          src={offer.imageUrl}
          alt={offer.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {offer.title}
          </h1>
          <h2 className="text-xl text-white/90">{offer.subtitle}</h2>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/offers"
          className="text-blue-600 hover:underline text-sm mb-6 inline-block"
        >
          ← Back to offers
        </Link>
        <article className="prose prose-lg prose-gray text-justify">
          <p>{offer.description}</p>
          <h3 className="mt-10 text-xl font-bold">Places to visit</h3>
          <ul className="space-y-4 mt-4">
            {offer.places.map((place, idx) => {
              const cleaned = place.trim().replace(/^!#/, ""); // usuwa !# tylko z początku
              const [title, ...rest] = cleaned.split("-");
              return (
                <li key={idx} className="flex items-start gap-3">
                  <span className="block mt-1 w-3 h-3 bg-[var(--primary)] z-10 absolute rounded-full" />
                  <div className="ml-6">
                    <p className="font-medium text-gray-900">{title.trim()}</p>
                    {rest.length > 0 && (
                      <p className="text-gray-600 text-sm">
                        {rest.join("-").trim()}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
      </div>

      <div className="w-full h-[400px]">
        <APIProvider apiKey="AIzaSyDM-VwvJzDdncSmuFVyw917oCGuMEAx-pM">
          <MapWithMarkers offer={offer} />
        </APIProvider>
      </div>
    </main>
  );
}
