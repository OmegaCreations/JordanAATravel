import hero from "../welcome/hero3.jpg";
import { Link, Outlet } from "react-router";
import { placesData } from "../utils/places";

export default function Places() {
  return (
    <main className="bg-white">
      {/* Hero sekcja */}
      <div className="relative h-[50vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hero}
            alt="Jordan landscapes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
        </div>
        <div className="relative z-10 px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Jordan
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-light">
            Explore the most fascinating places of the Hashemite Kingdom
          </h2>
        </div>
      </div>

      {/* Miniatury miejsc */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {placesData.map((place) => (
          <Link
            key={place.id}
            to={`/places/${place.id}`}
            className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={place.images[0]}
                alt={place.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {place.name}
              </h3>
              <p className="text-gray-600 text-sm leading-snug">
                {place.description.slice(0, 180).trim()}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
