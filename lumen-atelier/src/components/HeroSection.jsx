import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroBanner1 from "../assets/placeholders/banner_1.jpg";
import heroBanner2 from "../assets/placeholders/banner_2.jpg";
import heroBanner3 from "../assets/placeholders/banner_3.jpg";
import heroBanner4 from "../assets/placeholders/banner_4.jpg";

const HERO_BANNERS = [heroBanner1, heroBanner2, heroBanner3, heroBanner4];
const BANNER_FILTERS = [
  "none",
  "hue-rotate(75deg) saturate(1.35)",
  "hue-rotate(-45deg) saturate(1.25)",
  "hue-rotate(18deg) saturate(1.15)",
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartXRef = useRef(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % HERO_BANNERS.length);
    }, 3000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const goToNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % HERO_BANNERS.length);
  };

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchEndX - touchStartXRef.current;
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) {
      goToPreviousSlide();
    }

    if (swipeDistance < -swipeThreshold) {
      goToNextSlide();
    }

    touchStartXRef.current = null;
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-24 sm:pt-28"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => {
        touchStartXRef.current = null;
      }}
    >
      {HERO_BANNERS.map((banner, index) => {
        const isActive = index === activeSlide;

        return (
          <img
            key={banner}
            src={banner}
            alt={`Architectural lighting hero visual ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              isActive ? "opacity-70" : "opacity-0"
            }`}
            style={{ filter: BANNER_FILTERS[index] }}
            aria-hidden={!isActive}
          />
        );
      })}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,169,87,0.2),transparent_45%),linear-gradient(170deg,rgba(5,5,5,0.05),rgba(5,5,5,0.74)_65%)]" />
      <div className="relative mx-auto flex min-h-[82vh] w-full max-w-7xl items-end px-6 pb-14 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Premium Architectural Lighting
          </p>
          <h1 className="font-display text-4xl leading-tight text-brand-cream sm:text-5xl lg:text-7xl">
            Architectural Lighting Crafted for Modern Spaces
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-ivory/80 sm:text-lg">
            We design and manufacture premium LED lighting solutions for homes, hospitality, retail, commercial spaces, and architectural landmarks.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/products"
                className="inline-flex items-center rounded-full border border-brand-gold bg-brand-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-black transition hover:bg-brand-goldMuted"
              >
                Explore Products
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/projects"
                className="inline-flex items-center rounded-full border border-brand-ivory/40 bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold"
              >
                View Projects
              </Link>
            </motion.div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={goToPreviousSlide}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-ivory/40 text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold"
              aria-label="Previous banner"
            >
              &lt;
            </button>

            {HERO_BANNERS.map((banner, index) => (
              <button
                key={banner}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeSlide ? "w-8 bg-brand-gold" : "w-2.5 bg-brand-ivory/45 hover:bg-brand-ivory/70"
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}

            <button
              type="button"
              onClick={goToNextSlide}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-ivory/40 text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold"
              aria-label="Next banner"
            >
              &gt;
            </button>
          </div>

          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-brand-ivory/75">
            Slide {activeSlide + 1} of {HERO_BANNERS.length}
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-brand-ivory/65 sm:hidden">
            Swipe to browse
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
