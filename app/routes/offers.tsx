import { Link } from "react-router";
import { offersData } from "../utils/offers";
import heroImg2 from "../welcome/desert1.jpeg";

export default function Offers() {
  return (
    <main className="bg-white">
      {/* Hero sekcja */}
      <div className="hero-places relative flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg2}
            alt="Jordan landscapes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative z-10 px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Offer
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-light">
            Choose your dream journey across Jordan!
          </h2>
        </div>
      </div>

      {/* Lista ofert */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {offersData.map((offer) => (
          <Link
            key={offer.id}
            to={`/offers/${offer.id}`}
            className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#7e5833]/20 hover:border-[#7e5833]/40 bg-white"
          >
            <div className="bg-gradient-to-b from-gray-50 to-white p-4 flex items-center justify-center min-h-[400px]">
              <img
                src={offer.imageUrl}
                alt={offer.title}
                className="object-contain w-full h-full max-h-[400px]"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900!">
                {offer.title}
              </h3>
              <p className="text-sm text-[var(--primary)] mb-2">
                {offer.subtitle}
              </p>
              <p className="text-sm text-gray-600">
                {offer.description.slice(0, 150).replace(/<img>/g, "").trim()}
                ...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
