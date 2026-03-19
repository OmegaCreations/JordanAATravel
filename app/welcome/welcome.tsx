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

      {/* Premium Jordan Welcome Section */}
      <section
        className="mainSection mt-12 py-20 md:py-28 max-w-5xl text-center px-6 relative"
        id="jordan"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#7e5833]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#7e5833]/5 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          {/* Premium decorative border image container */}
          <div className="relative inline-block mb-12 w-full max-w-2xl mx-auto">
            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#7e5833]/40 z-20" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-[#7e5833]/40 z-20" />
            {/* <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-[#7e5833]/40 z-20" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-[#7e5833]/40 z-20" /> */}
            
            <div className="relative p-6 md:p-8">
              <img
                className="bgImg z-10 drop-shadow-2xl w-full h-auto max-w-full"
                src={jordanBorderImg}
                alt="Jordan"
                style={{ minWidth: '300px', maxWidth: '600px', margin: '0 auto', display: 'block' }}
              />
              {/* Gold accent glow */}
              <div className="absolute inset-0 bg-[#7e5833]/10 blur-xl rounded-lg" />
            </div>
          </div>
          
          {/* Premium section header with decorative elements */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent" />
              <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              <span className="headerText bg-gradient-to-r from-[#7e5833] via-[#9d6f3e] to-[#7e5833] bg-clip-text text-transparent">
                Jordan
              </span>
              <span className="text-gray-800"> - your paradise on earth</span>
            </h2>
            
            {/* Gold accent bar */}
            <div className="flex justify-center mb-6">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent rounded-full" />
            </div>
          </div>
          
          {/* Premium description box */}
          <div className="relative max-w-3xl mx-auto">
            {/* Decorative corner elements */}
            <div className="absolute -left-2 -top-2 w-8 h-8 border-l-2 border-t-2 border-[#7e5833]/30" />
            <div className="absolute -right-2 -bottom-2 w-8 h-8 border-r-2 border-b-2 border-[#7e5833]/30" />
            
            <div className="relative bg-gradient-to-br from-[#7e5833]/5 via-white to-[#7e5833]/5 p-8 md:p-10 rounded-2xl border-l-4 border-[#7e5833] shadow-lg">
              <div className="absolute top-4 left-4 w-2 h-2 bg-[#7e5833] rotate-45" />
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light relative z-10">
                From the ancient city of Petra to the serene waters of the Dead Sea,
                experience the wonders of Jordan with our reliable and professional
                transportation services.
              </p>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#7e5833] rotate-45" />
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
      </section>

      <Advantages />
      <Benefits />
      <AboutUs />
      <Contact />
    </main>
  );
}
