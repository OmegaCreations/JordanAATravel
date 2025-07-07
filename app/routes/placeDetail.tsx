import { useParams, Link } from "react-router";
import { placesData } from "../utils/places";
import type { Place } from "../utils/places";

export default function PlaceDetail() {
  const { id } = useParams<{ id: string }>();
  const place: Place | undefined = placesData.find((p) => p.id === +id!);

  if (!place)
    return <div className="p-8 text-center">Brak miejsca o takim ID.</div>;

  // Wskaźnik zdjęcia do <img> placeholderów
  let imageIndex = 0;

  return (
    <main className="bg-white">
      {/* Hero sekcja */}
      <div className="relative h-[50vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <img
          src={place.images[0]}
          alt={place.name}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b z-0" />
      </div>

      {/* Treść */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          {place.name}
        </h1>
        <Link to="/places" className="back-to-btn text-sm mb-6">
          ← Back to the gallery
        </Link>

        <div className="mt-10 prose prose-lg text-gray-800 text-justify">
          {place.description.split("\n").map((block, idx) => {
            if (block.trim() === "<img>") {
              const image = place.images[imageIndex % place.images.length];
              imageIndex++;
              return (
                <div key={`img-${idx}`} className="my-6">
                  <img
                    src={image}
                    alt={`Ilustracja ${imageIndex}`}
                    className="rounded-xl shadow max-w-full mx-auto max-h-96"
                  />
                </div>
              );
            }

            if (/^\d+\.\s+/.test(block)) {
              return (
                <h2
                  key={`h-${idx}`}
                  className="font-semibold mt-12 mb-8 ml-8 text-3xl"
                >
                  {block}
                </h2>
              );
            }

            return (
              <p key={`p-${idx}`} className="mb-4">
                {block}
              </p>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {["History", "Nature", "Adventure"].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
