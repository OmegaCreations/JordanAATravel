import { MapPin, BusFront, Wifi } from "lucide-react";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="mainSection py-20 mx-auto px-4 text-center bg-[#f7f7f7]"
    >
      <hr
        style={{
          height: "50px",
          width: "2px",
          backgroundColor: "#3f4238",
          marginBottom: "40px",
        }}
      />
      <h3 className="text-3xl font-bold text-gray-800">What Do We Offer</h3>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto">
        Tailored travel experiences for your journey through Jordan.
      </p>

      <div className="mt-12 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
          <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-green-100 mb-4 group-hover:scale-105 transition">
            <MapPin className="text-green-600 w-7 h-7" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800">
            Full Experience
          </h4>
          <p className="mt-2 text-gray-600">
            Get the most out of each location with guided tips and hidden gems.
          </p>
        </div>

        <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
          <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-green-100 mb-4 group-hover:scale-105 transition">
            <BusFront className="text-green-600 w-7 h-7" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800">Modern Fleet</h4>
          <p className="mt-2 text-gray-600">
            Clean, air-conditioned cars and buses for all group sizes.
          </p>
        </div>

        <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
          <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-green-100 mb-4 group-hover:scale-105 transition">
            <Wifi className="text-green-600 w-7 h-7" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800">Free Wi-Fi</h4>
          <p className="mt-2 text-gray-600">
            Stay connected during your journey across Jordan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
