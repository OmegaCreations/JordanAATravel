import style from "./hero.module.css";

const Hero = () => {
  return (
    <section className={style.hero}>
      {/* Nakładka z przezroczystym tłem */}
      <div
        className={`${style.heroBox} absolute inset-0 flex items-center justify-center`}
        id="hero"
      >
        <div className={`text-center text-white px-4`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <p style={{ color: "#EEC170" }}>Jordan AA Trips</p>
            First & Trusted since 2007
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            <b>
              Discover the magic of{" "}
              <span style={{ color: "#F2A65A" }}>Jordan</span>
            </b>{" "}
            — from the ancient city of{" "}
            <span style={{ color: "#F2A65A" }}>Petra </span>
            to the serene waters of the{" "}
            <span style={{ color: "#F2A65A" }}>Dead Sea</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
