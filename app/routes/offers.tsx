// app/routes/Offers.tsx
import React from "react";
import imgUrl from "../welcome/offer1.jpg";
import heroImg2 from "../welcome/hero2.png";

interface Offer {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  places: string[];
  imageUrl: string;
}

const offersData: Offer[] = [
  {
    id: 1,
    title: "I Classic Trip",
    subtitle:
      "We invite you to travel to the heart of the Middle East - Jordan!",
    description: `Over 8 days, you will discover the unique history, culture and landscapes of this fascinating country.
From the bustling Amman, through the ancient ruins of Jerash, the mosaics of Madaba and Mount Nebo, to the mighty castle in Karak. You will visit the mysterious Petra 🕍 - one of the new seven wonders of the world, and the Wadi Rum desert will delight you with its red sands and picturesque rock formations. You will also relax by the salty Dead Sea⛱️ - a place you have to see with your own eyes.
This is a journey full of history, extraordinary places and unforgettable memories.`,
    places: [
      "Amman",
      "Jerash",
      "Madaba",
      "Mount Nebo",
      "Karak",
      "Petra",
      "Wadi Rum",
      "Dead Sea",
    ],
    imageUrl: imgUrl,
  },
  {
    id: 2,
    title: "II Classic Trip",
    subtitle:
      "Are you looking for an adventure that will transport you back in time, let you explore the wonders of nature, and feel the magic of the desert?",
    description: `We have a ready-made 7-day travel plan in Jordan, filled with incredible places:`,
    places: [
      "Amman - A modern capital with soul - The Citadel, Roman Theatre, and the charming Rainbow Street are the perfect start to your adventure.",
      "Jerash - One of the best-preserved Roman cities in the world - colonnades, amphitheaters, and ancient streets right in the middle of the desert.",
      "Madaba - Famous for its mosaics – especially the legendary Map of the Holy Land in St. George’s Church.",
      "Mount Nebo - The place where Moses saw the Promised Land. The view over the Jordan Valley and the Dead Sea is breathtaking.",
      "Baptism Site (Al-Maghtas) - The sacred place where Jesus was baptized in the Jordan River – a unique experience for visitors of all faiths.",
      "Al-Karak - An impressive Crusader castle full of history and incredible views over the valley.",
      "Dana - A nature reserve with stunning canyons, hiking trails, and tranquility like nowhere else.",
      "Petra - A Wonder of the World – the Nabatean city carved into the rocks. The Treasury, the Monastery, the Siq canyon – every step is a journey back in time.",
      "Wadi Rum - A desert that feels like Mars – red sand, canyons, rock formations. Jeep safari and a night under the stars in a Bedouin camp.",
      "Dead Sea - The lowest point on Earth – floating in the water and mud baths are an unforgettable experience.",
    ],
    imageUrl: imgUrl,
  },
  {
    id: 3,
    title: "III Historical Places Trip",
    subtitle: "Route - Historical Sites of Jordan",
    description: `We have prepared a unique route for you, which will allow you to discover the most important historical and cultural treasures of Jordan. Perfect for lovers of history, archeology and amazing views!`,
    places: [
      "Amman - the capital with a Roman theatre and Citadel",
      "Quasr al-Mushatta - ruins of the early Islamic Umayyad Palace",
      "Madaba - famous for its mosaics, especially the Map of the Holy Land",
      "Iraq al-Amir - Hasmonean palace and caves",
      "Ajloun - Ajloun Castle, a medieval defensive fortress",
      "Jerash - one of the best-preserved Roman cities",
      "Mount Nebo - the place where Moses saw the Promised Land",
      "Umm ar-Rasas - an archaeological site with Byzantine and Roman ruins",
      "Karak - a mighty Crusader castle overlooking the valley",
      "Shoubak - a Crusader castle, less known but full of secrets",
      "Petra - a wonder of the world, a Nabataean city carved into the rock",
      "Wadi Rum - desert landscapes, Martian views and Bedouin stories",
    ],
    imageUrl: imgUrl,
  },
];

export default function Offers() {
  return (
    <main className="bg-white">
      {/* Sekcja hero */}
      <div className="relative h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg2}
            alt="Jordan landscape"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>

        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Offer
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 font-light">
            Check what we have prepared for your adventure! We are tailoring all
            of the sample routes below to your needs and preferences.
          </h2>
        </div>
      </div>

      {/* Sekcja ofert */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {offersData.map((offer) => (
          <div
            key={offer.id}
            className="mb-24 last:mb-0 flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Tekst */}
            <div className="lg:w-1/2 w-full space-y-6">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  {offer.title}
                </h2>
                <h3 className="text-xl text-indigo-600 mt-1">
                  {offer.subtitle}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {offer.description}
              </p>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  Places to visit
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {offer.places.map((place, idx) => (
                    <div
                      key={idx}
                      className="flex items-start py-2 border-b border-gray-100"
                    >
                      <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600">{place}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Obrazek */}
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
