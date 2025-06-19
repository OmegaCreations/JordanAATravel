import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-6 py-20 bg-[var(--primary_shade)] text-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 headerText">
        Get in Touch
      </h2>

      <p className="text-lg text-gray-300 mb-10">
        We're here to help you plan your journey in Jordan.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <a
          href="https://wa.me/+00962776403515"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary_shade)] border-1 border-[var(--primary)] hover:border-[var(--secondary)] text-white font-medium text-lg px-6 py-3 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
          WhatsApp - Ammar
        </a>

        <a
          href="mailto:lana.tours2017@gmail.com"
          className="text-lg font-medium underline transition duration-300"
        >
          lana.tours2017@gmail.com
        </a>
      </div>
      <div className="flex mt-10 flex-col md:flex-row justify-center items-center gap-8">
        <a
          href="https://wa.me/+48792052004"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary_shade)] border-1 border-[var(--primary)] hover:border-[var(--secondary)] text-white font-medium text-lg px-6 py-3 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
          WhatsApp - Anna
        </a>

        <a
          href="mailto:annam4696@gmail.com"
          className="text-lg font-medium text-blue-300 underline hover:text-blue-200 transition duration-300"
        >
          jordanaatrips@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
