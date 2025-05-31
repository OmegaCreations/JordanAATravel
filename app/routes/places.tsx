import heroImg from "../welcome/hero3.jpg";

import teatr1 from "../welcome/teatr_1.jpg";
import teatr2 from "../welcome/teatr_2.jpg";
import teatr3 from "../welcome/teatr_3.jpg";

import cytadela1 from "../welcome/cytadela_1.jpg";
import cytadela2 from "../welcome/cytadela_2.jpg";
import cytadela3 from "../welcome/cytadela_3.jpg";

import petra1 from "../welcome/petra_1.jpg";
import petra2 from "../welcome/petra_2.jpg";
import petra3 from "../welcome/petra_3.jpg";

import amman1 from "../welcome/amman_1.jpg";
import amman2 from "../welcome/amman_2.jpg";
import amman3 from "../welcome/amman_3.jpg";

interface Place {
  id: number;
  name: string;
  description: string;
  images: string[];
}

const placesData: Place[] = [
  {
    id: 1,
    name: "Amman Roman Theatre",
    description: `🕍 In the times when the theater was built, Amman was known as Philadelphia – a name derived from Ptolemy II Philadelphus, ruler of Egypt, who bestowed it in the 3rd century BC. The city was part of the Decapolis – ten Roman cities in the Middle East region linked by culture, trade, and Roman law.
    
🎭 The Roman Theatre hosted various performances: dramas, comedies, and even battle reenactments. Shows were often free to gain public support, serving not only as entertainment but also as propaganda for Roman authority.

🎎 Beyond performances, the theater functioned as a venue for public gatherings and discussions. It was the heart of Philadelphia's social life – where citizens met to discuss city affairs, politics, and culture.

🤵‍♀️ The audience was divided into three tiers: lowest for elites, middle for military and dignitaries, and highest for ordinary citizens.

🏗 Reconstruction and renovation: After the Roman Empire's fall, the theater was partially destroyed and later buried under layers of earth for centuries. It wasn't until the 1950s that it was excavated and partially reconstructed. Today, about 70% of its original structure remains visible!

🔊 Exceptional acoustics: Romans had an excellent understanding of acoustics. In Amman's theater, a whisper on stage can be heard clearly even in the highest rows.

🏤 The theater's side chambers house two museums: the Museum of Popular Traditions and the Jordan Folklore Museum, showcasing the region's rich cultural heritage.`,
    images: [teatr1, teatr2, teatr3],
  },
  {
    id: 2,
    name: "Amman Citadel",
    description: `The Citadel in Amman – Heart of Jordan's History
Perched atop Jabal al-Qala'a hill in central Amman, the Citadel stands as a witness to millennia of civilizations and the region's turbulent history. This is where palaces, temples, and structures once stood, now narrating Jordan's epic story.

🏺 The Citadel has been inhabited since prehistoric times – its history stretches back to at least the Bronze Age (c. 1650 BC). Over centuries, it served as the center for powerful empires: Ammonites, Romans, Byzantines, and Umayyads.

❓️ What to see at the Citadel?
▶️ Temple of Hercules – Built in the 2nd century AD under Emperor Marcus Aurelius. Its monumental columns hint at the site's former grandeur.
▶️ Umayyad Palace – Remains of an 8th-century palace built when the Umayyad dynasty made Amman a key center of their caliphate.
▶️ Byzantine Basilica – Traces of a 6th-century church marking the period of Christian rule.
▶️ Archaeological Museum – A treasure trove of Jordan's history featuring the Dead Sea Scrolls, ancient tools, coins, and sculptures.

🌅 Walking through the Citadel, pause to admire Amman's panorama – especially breathtaking at sunset. This is where past and present converge, letting you feel the spirit of ancient civilizations and appreciate the region's rich heritage.`,
    images: [cytadela1, cytadela2, cytadela3],
  },
  {
    id: 3,
    name: "Amman – The Capital of Jordan",
    description: `Amman: Where Ancient History Meets Modern Energy
Jordan's dynamic capital and largest city, nestled in the country's heart, spans seven hills (though modern expansion covers many more!). This metropolis of 4 million blends tradition with modernity – ancient ruins stand shoulder-to-shoulder with skyscrapers and vibrant neighborhoods.

✨ Fascinating Facts:
▶️ Among the world's oldest continuously inhabited cities – with 8,500 years of history!
▶️ Formerly known as Philadelphia during its Decapolis era
▶️ Home to the impressive Roman Theatre (6,000 capacity), still hosting events today
▶️ The Citadel houses the Temple of Hercules, Umayyad Palace, and archaeological treasures
▶️ Known as the "White City" for its limestone buildings that glow in sunlight
▶️ Cultural hub featuring Rainbow Street's cafes, art galleries, and bustling souks
▶️ Renowned for hospitality and aromatic cuisine: falafel, hummus, mansaf (national dish), and cardamom coffee

🚗 Perfect base for exploring Jordan – conveniently located near Petra, Dead Sea, and Wadi Rum.`,
    images: [amman3, amman2, amman1],
  },
  {
    id: 4,
    name: "Petra",
    description: `The Rose-Red City Half as Old as Time
Carved into pink sandstone cliffs over 2,000 years ago by the Nabataeans, Petra remains Jordan's crown jewel. Its most iconic monument, Al-Khazneh (The Treasury), appears dramatically at the end of the Siq canyon. Recognized as a UNESCO World Heritage Site and one of the New Seven Wonders of the World.

🏛️ More than just The Treasury: Explore the Street of Facades, Royal Tombs, and the Monastery (Ad-Deir) with its monumental staircase. The city features sophisticated water management systems that sustained 30,000 inhabitants.

🌄 Best experienced at dawn or dusk when the stone glows in changing light. Allow at least two days to fully appreciate this archaeological marvel spanning 264 square kilometers.`,
    images: [petra3, petra2, petra1],
  },
];

export default function Places() {
  return (
    <main className="bg-white">
      {/* Sekcja hero */}
      <div className="relative h-[50vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
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

      {/* Sekcja miejsc */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {placesData.map((place) => (
          <section key={place.id} className="mb-24 last:mb-0">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Galeria */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <div className="aspect-[3/2] overflow-hidden rounded-xl">
                      <img
                        src={place.images[0]}
                        alt={place.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={place.images[1]}
                      alt={place.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={place.images[2]}
                      alt={place.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Opis */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {place.name}
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {place.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[1, 2, 3].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {["History", "Nature", "Adventure"][tag - 1]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
