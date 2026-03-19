import style from "./hero.module.css";

const Hero = () => {
  return (
    <section className={style.hero}>
      {/* Nakładka z przezroczystym tłem */}
      <div
        className={`${style.heroBox} absolute inset-0 flex items-center justify-center`}
        id="hero"
      >
        <div className={`text-center text-[var(--secondary)] px-4`}>
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${style.heroTitle}`}>
            <p className={`!text-[#D6BD68] ${style.heroOrangeText}`}>Jordan AA Trips</p>
            First & Trusted since 2007
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${style.heroSubtitle}`}>
            Private driver in Jordan Travel - <span className={`!text-[#D6BD68]`}>Your way. Comfortable. Flexible. Local.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
