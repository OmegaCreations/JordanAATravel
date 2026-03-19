import carImg from "./car1.jpg";
import petra2 from "./car2.jpg";
import petra3 from "./car3.jpg";

const AdvantageRow = ({
  title,
  description,
  imgUrl,
  reverse,
  index,
}: {
  title: string;
  description: string;
  imgUrl: string;
  reverse?: boolean;
  index: number;
}) => {
  return (
    <div
      className={`group flex flex-col md:flex-row items-center ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-10 md:gap-20 px-4 md:px-0 relative`}
    >
      {/* Decorative connecting line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-gradient-to-b from-[#7e5833]/20 via-[#7e5833]/40 to-[#7e5833]/20 hidden md:block" />
      
      {/* Image container with premium styling */}
      <div className="relative w-full md:w-[45%]">
        {/* Decorative corner borders */}
        <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#7e5833]/40 z-10" />
        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-[#7e5833]/40 z-10" />
        
        {/* Premium numbered badge */}
        <div className="absolute -top-6 -right-6 z-20">
          <div className="relative">
            {/* Outer decorative ring */}
            <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-[#7e5833]/30 group-hover:border-[#7e5833]/50 transition-all duration-300 group-hover:scale-110" />
            {/* Inner gradient circle */}
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#7e5833] via-[#9d6f3e] to-[#7e5833] flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-2xl tracking-tight">
                {index}
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent opacity-50" />
            </div>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* Gold accent overlay on hover */}
          <div className="absolute inset-0 bg-[#7e5833]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      
      {/* Content container with premium styling */}
      <div className="relative text-center md:text-left max-w-xl">
        {/* Decorative diamond divider */}
        <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
          <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
          <div className="h-px w-12 bg-gradient-to-r from-[#7e5833] to-transparent" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight group-hover:text-[#7e5833] transition-colors duration-300">
          {title}
        </h3>
        
        {/* Gold accent bar */}
        <div className="h-1 w-20 bg-gradient-to-r from-[#7e5833] to-[#7e5833]/50 rounded-full mb-6 mx-auto md:mx-0 transform scale-x-100 group-hover:scale-x-125 transition-transform duration-500 origin-left" />
        
        <p className="text-gray-700 text-lg leading-relaxed font-light">
          {description}
        </p>
        
        {/* Bottom decorative element */}
        <div className="flex items-center gap-3 mt-6 justify-center md:justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#7e5833]" />
          <div className="w-1.5 h-1.5 bg-[#7e5833] rotate-45" />
        </div>
      </div>
    </div>
  );
};

const Advantages = () => {
  return (
    <section
      id="advantages"
      className="mainSection py-20 md:py-28 px-6 bg-gradient-to-b from-white via-[#f7f7f7] to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#7e5833]/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#7e5833]/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="relative z-10">
        {/* Premium section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent" />
            <div className="w-2 h-2 bg-[#7e5833] rotate-45" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold headerText tracking-tight mb-3">
            Why Choose Jordan AA Trips?
          </h2>
          <p className="text-gray-600 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Experience excellence in every journey with our premium services
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#7e5833] to-transparent rounded-full" />
          </div>
        </div>
        
        <div className="space-y-32 max-w-6xl mx-auto">
          <AdvantageRow
            title="Modern & Well-Maintained Vehicles"
            description="Our cars are always in perfect condition - clean, comfortable, and ready for any route. Modern vehicles regularly serviced to ensure reliability."
            imgUrl={carImg}
            index={1}
          />
          <AdvantageRow
            title="Expert Driver & Route Planning"
            description="Ammar and his team know every turn, road, and local regulation. They drive smoothly and adapt to terrain conditions. Avoid traffic with smart route planning, local shortcuts, and safe parking solutions."
            imgUrl={petra2}
            reverse
            index={2}
          />
          <AdvantageRow
            title="Safety & Passenger Comfort"
            description="Safety is our priority - from functioning seat belts and insurance to emergency preparedness. Enjoy AC even in 45°C heat, complimentary water, spacious luggage room, and comfortable seats. Our cars are mobile sanctuaries where you can relax, enjoy coffee, and learn about local culture."
            imgUrl={petra3}
            index={3}
          />
        </div>
        
        {/* Bottom decorative element */}
        <div className="flex justify-center mt-20">
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

export default Advantages;
