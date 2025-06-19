import annaImg from "./anna.jpg";
import ammarImg from "./ammar.jpg";

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="mainSection py-24 mx-auto px-4 text-center bg-[#fff]"
    >
      <h3 className="text-3xl font-bold headerText">About Us</h3>
      <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
        Meet the team behind Jordan AA Trips — passionate travelers,
        professionals, and local experts.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
        {/* Ammar */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition text-left">
          <div className="flex items-center gap-6">
            <img
              src={ammarImg}
              alt="Ammar Daoud"
              className="w-24 h-24 rounded-full object-cover border-2 border-[var(--orange1)]"
            />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                Ammar Daoud
              </h4>
              <p className="text-sm text-gray-500">
                Tour Operator & Travel Expert
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            My name is Ammar Daoud, a tour operator in Jordan with 17 years of
            experience in tourism. I offer daily tours, full programs from
            airport to airport, transportation with friendly English-speaking
            staff. All vehicles are insured, include Wi-Fi, and offer free
            water. I also handle hotel reservations, Wadi Rum adventures,
            diving, boat tours and more.
          </p>
        </div>

        {/* Anna */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition text-left">
          <div className="flex items-center gap-6">
            <img
              src={annaImg}
              alt="Anna Sala"
              className="w-24 h-24 rounded-full object-cover border-2 border-[var(--orange1)]"
            />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Anna Sala</h4>
              <p className="text-sm text-gray-500">
                Travel Designer & Photographer
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Anna is a seasoned travel designer with a sharp eye for beauty and
            logistics. With a background in photography, she ensures every trip
            is not only well-organized, but also picture-perfect. Fluent in
            Polish, Anna bridges cultures and helps create unforgettable
            memories for our travelers from Europe and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
