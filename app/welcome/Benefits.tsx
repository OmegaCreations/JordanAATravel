import { MapPin, BusFront, Wifi } from "lucide-react";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="mainSection py-20 md:py-28 mx-auto px-4 text-center bg-gradient-to-b from-white via-[#f7f7f7] to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#7e5833]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#7e5833]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10">
        {/* Premium section header with decorative elements */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent" />
            <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold headerText tracking-tight mb-3">
            What Do We Offer
          </h3>
          <p className="text-gray-600 text-lg font-light tracking-wide max-w-xl mx-auto">
            Tailored travel experiences for your journey through Jordan
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent rounded-full" />
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Full Experience Card */}
          <div className="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Decorative corner borders */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7e5833]/5 via-transparent to-[#7e5833]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="relative z-10">
              {/* Premium icon with decorative ring */}
              <div className="flex justify-center items-center mb-6">
                <div className="relative">
                  {/* Outer decorative ring */}
                  <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-[#7e5833]/20 group-hover:border-[#7e5833]/40 transition-all duration-300 group-hover:scale-110" />
                  {/* Inner gradient circle */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#7e5833] via-[#9d6f3e] to-[#7e5833] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <MapPin className="text-white w-8 h-8" />
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent opacity-50" />
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#7e5833] transition-colors duration-300 tracking-tight">
                Full Experience
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Get the most out of each location with guided tips and hidden gems.
              </p>
            </div>
            
            {/* Bottom decorative diamond */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7e5833] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Modern Fleet Card */}
          <div className="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Decorative corner borders */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7e5833]/5 via-transparent to-[#7e5833]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="relative z-10">
              {/* Premium icon with decorative ring */}
              <div className="flex justify-center items-center mb-6">
                <div className="relative">
                  {/* Outer decorative ring */}
                  <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-[#7e5833]/20 group-hover:border-[#7e5833]/40 transition-all duration-300 group-hover:scale-110" />
                  {/* Inner gradient circle */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#7e5833] via-[#9d6f3e] to-[#7e5833] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <BusFront className="text-white w-8 h-8" />
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent opacity-50" />
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#7e5833] transition-colors duration-300 tracking-tight">
                Modern Fleet
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Clean, air-conditioned cars and buses for all group sizes.
              </p>
            </div>
            
            {/* Bottom decorative diamond */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7e5833] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Free Wi-Fi Card */}
          <div className="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Decorative corner borders */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7e5833]/5 via-transparent to-[#7e5833]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="relative z-10">
              {/* Premium icon with decorative ring */}
              <div className="flex justify-center items-center mb-6">
                <div className="relative">
                  {/* Outer decorative ring */}
                  <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-[#7e5833]/20 group-hover:border-[#7e5833]/40 transition-all duration-300 group-hover:scale-110" />
                  {/* Inner gradient circle */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#7e5833] via-[#9d6f3e] to-[#7e5833] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Wifi className="text-white w-8 h-8" />
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent opacity-50" />
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#7e5833] transition-colors duration-300 tracking-tight">
                Free Wi-Fi
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Stay connected during your journey across Jordan.
              </p>
            </div>
            
            {/* Bottom decorative diamond */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7e5833] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
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
  );
};

export default Benefits;

