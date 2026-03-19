import annaImg from "./anna.jpg";
import ammarImg from "./ammar.jpg";

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="mainSection py-24 md:py-32 mx-auto px-4 text-center bg-gradient-to-b from-white via-[#f7f7f7] to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#7e5833]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#7e5833]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Premium section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent" />
            <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold headerText tracking-tight mb-3">
            About Us
          </h3>
          <p className="text-gray-600 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Meet the team behind Jordan AA Trips - passionate travelers, professionals, and local experts
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent rounded-full" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Ammar Card */}
          <div className="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-left overflow-hidden">
            {/* Decorative corner borders */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7e5833]/5 via-transparent to-[#7e5833]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                {/* Premium profile image with decorative ring */}
                <div className="relative flex-shrink-0">
                  {/* Outer decorative ring */}
                  <div className="absolute inset-0 w-28 h-28 rounded-full border-2 border-[#7e5833]/30 group-hover:border-[#7e5833]/50 transition-all duration-300 group-hover:scale-110" />
                  {/* Image container with gradient border */}
                  <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-br from-[#7e5833] via-[#9d6f3e] to-[#7e5833] shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={ammarImg}
                      alt="Ammar Daoud"
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none" />
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-[#7e5833] transition-colors duration-300 tracking-tight">
                    Ammar Daoud
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="h-px w-8 bg-[#7e5833]" />
                    <p className="text-sm text-gray-600 font-medium tracking-wide uppercase">
                      Tour Operator & Travel Expert
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative divider */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 bg-[#7e5833] rotate-45" />
                <div className="h-px flex-1 bg-gradient-to-r from-[#7e5833]/50 to-transparent" />
              </div>
              
              <p className="text-gray-700 text-base leading-relaxed font-light">
                Licensed driver and owner of a transport company in Jordan. My name is Ammar Daoud and for over 17 years I have been working in the tourism industry in Jordan as a licensed driver and owner of a transport company. I provide comfortable and safe transport for travelers visiting Jordan - both during one-day trips and longer journeys throughout the country. I offer airport transfers and private transport between the most important places in Jordan. All vehicles are insured, equipped with Wi-Fi and offer free water for passengers. Thanks to many years of experience working with travelers from all over the world, I help guests comfortably and peacefully discover the most beautiful places in Jordan.
              </p>
            </div>
            
            {/* Bottom decorative diamond */}
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#7e5833] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Anna Card */}
          <div className="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-left overflow-hidden">
            {/* Decorative corner borders */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7e5833]/5 via-transparent to-[#7e5833]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                {/* Premium profile image with decorative ring */}
                <div className="relative flex-shrink-0">
                  {/* Outer decorative ring */}
                  <div className="absolute inset-0 w-28 h-28 rounded-full border-2 border-[#7e5833]/30 group-hover:border-[#7e5833]/50 transition-all duration-300 group-hover:scale-110" />
                  {/* Image container with gradient border */}
                  <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-br from-[#7e5833] via-[#9d6f3e] to-[#7e5833] shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={annaImg}
                      alt="Anna Sala"
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none" />
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-[#7e5833] transition-colors duration-300 tracking-tight">
                    Anna Sala
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="h-px w-8 bg-[#7e5833]" />
                    <p className="text-sm text-gray-600 font-medium tracking-wide uppercase">
                      Travel Designer & Photographer
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative divider */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 bg-[#7e5833] rotate-45" />
                <div className="h-px flex-1 bg-gradient-to-r from-[#7e5833]/50 to-transparent" />
              </div>
              
              <p className="text-gray-700 text-base leading-relaxed font-light">
                Jordan has been part of my life for many years and over time it has become my second home. I return here regularly, getting to know the country, its culture and people up close. Thanks to this, today I can help others discover Jordan in a calm, well-planned and authentic way. I specialize in planning trips to Jordan - from short visits to the most important places to more extensive routes that allow you to see the country from different perspectives. My passion is also photography, so during trips I pay special attention to unique places, landscapes and viewpoints that are worth capturing not only in memory, but also in photos. Jordan can captivate with its history, nature and atmosphere - and my goal is to help travelers experience it in a real and well-organized way.
              </p>
            </div>
            
            {/* Bottom decorative diamond */}
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#7e5833] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

export default AboutUs;
