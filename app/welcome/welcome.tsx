import Hero from "./hero";
import AboutUs from "./AboutUs";
import Advantages from "./Advantages";
import Contact from "./Contact";
import Benefits from "./Benefits";
import jordanBorderImg from "./Jordan.png";

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <Hero />

      {/* Sekcja powitalna */}
      <section
        className={`mainSection mt-12 max-w-3xl text-center`}
        id="jordan"
      >
        <img className="bgImg" src={jordanBorderImg} />
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
          <span style={{ color: "#F2A65A" }}>Jordan</span> - your paradise on
          earth
        </h2>
        <p className="mt-4 text-gray-600">
          From the ancient city of Petra to the serene waters of the Dead Sea,
          experience the wonders of Jordan with our reliable and professional
          transportation services.
        </p>
      </section>

      <Advantages />
      <Benefits />
      <AboutUs />
      <Contact />
    </main>
  );
}
