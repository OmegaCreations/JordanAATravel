import { MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-6 py-24 md:py-32 bg-gradient-to-b from-[var(--primary_shade)] via-[#1a1a1a] to-[var(--primary_shade)] text-white text-center relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7e5833]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7e5833]/10 rounded-full blur-3xl" />
      
      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-[#7e5833]/30" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-[#7e5833]/30" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-[#7e5833]/30" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#7e5833]/30" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Premium section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent" />
            <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 headerText tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
            We're here to help you plan your journey in Jordan
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent rounded-full" />
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Ammar Contact Card */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/10 hover:border-[#7e5833]/50 transition-all duration-500 overflow-hidden">
            {/* Decorative corner borders */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7e5833]/10 via-transparent to-[#7e5833]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#7e5833] transition-colors duration-300">
                Ammar Daoud
              </h3>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-[#7e5833]" />
                <p className="text-sm text-gray-400 uppercase tracking-wider">Tour Operator</p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/+00962776403515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#7e5833] via-[#9d6f3e] to-[#7e5833] hover:from-[#9d6f3e] hover:via-[#7e5833] hover:to-[#9d6f3e] text-white font-semibold text-lg px-6 py-4 rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                  <MessageCircle className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">WhatsApp</span>
                </a>

                <a
                  href="mailto:lana.tours2017@gmail.com"
                  className="group/email flex items-center justify-center gap-3 text-gray-300 hover:text-[#7e5833] font-medium transition-all duration-300 py-2"
                >
                  <Mail className="w-5 h-5" />
                  <span className="border-b border-gray-600 group-hover/email:border-[#7e5833] transition-colors duration-300">
                    lana.tours2017@gmail.com
                  </span>
                </a>
              </div>
            </div>
            
            {/* Bottom decorative diamond */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7e5833] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Anna Contact Card */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/10 hover:border-[#7e5833]/50 transition-all duration-500 overflow-hidden">
            {/* Decorative corner borders */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#7e5833]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7e5833]/10 via-transparent to-[#7e5833]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#7e5833] transition-colors duration-300">
                Anna Sala
              </h3>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-[#7e5833]" />
                <p className="text-sm text-gray-400 uppercase tracking-wider">Travel Designer</p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/+48792052004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#7e5833] via-[#9d6f3e] to-[#7e5833] hover:from-[#9d6f3e] hover:via-[#7e5833] hover:to-[#9d6f3e] text-white font-semibold text-lg px-6 py-4 rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                  <MessageCircle className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">WhatsApp</span>
                </a>

                <a
                  href="mailto:jordanaatrips@gmail.com"
                  className="group/email flex items-center justify-center gap-3 text-gray-300 hover:text-[#7e5833] font-medium transition-all duration-300 py-2"
                >
                  <Mail className="w-5 h-5" />
                  <span className="border-b border-gray-600 group-hover/email:border-[#7e5833] transition-colors duration-300">
                    jordanaatrips@gmail.com
                  </span>
                </a>
              </div>
            </div>
            
            {/* Bottom decorative diamond */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7e5833] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
  );
};

export default Contact;
