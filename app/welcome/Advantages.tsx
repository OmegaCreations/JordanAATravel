import carImg from "./car1.jpg";
import petra2 from "./car2.jpg";
import petra3 from "./car3.jpg";

const AdvantageRow = ({
  title,
  description,
  imgUrl,
  reverse,
}: {
  title: string;
  description: string;
  imgUrl: string;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-10 md:gap-20 px-4 md:px-0`}
    >
      <img
        src={imgUrl}
        alt="advantage"
        className="w-full md:w-[40%] rounded-xl shadow-lg object-cover h-72 md:h-96"
      />
      <div className="text-center md:text-left max-w-xl">
        <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Advantages = () => {
  return (
    <section
      id="advantages"
      className="mainSection py-20 px-6 bg-gradient-to-b from-[#fff] to-[#f7f7f7]"
    >
      <h2 className="text-4xl font-bold text-center text-[#f2a65a] mb-20">
        Why Choose Jordan AA Trips?
      </h2>
      <div className="space-y-24 max-w-6xl mx-auto">
        <AdvantageRow
          title="Modern & Well-Maintained Vehicles"
          description="Our cars are always in perfect condition - clean, comfortable, and ready for any route. Modern vehicles regularly serviced to ensure reliability."
          imgUrl={carImg}
        />
        <AdvantageRow
          title="Expert Driver & Route Planning"
          description="Ammar and his team know every turn, road, and local regulation. They drive smoothly and adapt to terrain conditions. Avoid traffic with smart route planning, local shortcuts, and safe parking solutions."
          imgUrl={petra2}
          reverse
        />
        <AdvantageRow
          title="Safety & Passenger Comfort"
          description="Safety is our priority - from functioning seat belts and insurance to emergency preparedness. Enjoy AC even in 45°C heat, complimentary water, spacious luggage room, and comfortable seats. Our cars are mobile sanctuaries where you can relax, enjoy coffee, and learn about local culture."
          imgUrl={petra3}
        />
      </div>
    </section>
  );
};

export default Advantages;
