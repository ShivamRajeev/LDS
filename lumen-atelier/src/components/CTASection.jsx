import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-brand-gold/25 bg-gradient-to-br from-brand-charcoal via-brand-black to-brand-charcoal p-8 sm:p-12">
      <div className="pointer-events-none absolute -right-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-brand-gold/20 blur-3xl" />
      <h3 className="font-display text-3xl text-brand-cream sm:text-4xl">{title}</h3>
      <p className="mt-4 max-w-2xl text-brand-ivory/75">{description}</p>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link
          to={buttonLink}
          className="mt-8 inline-flex items-center rounded-full border border-brand-gold bg-brand-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-black transition hover:bg-brand-goldMuted"
        >
          {buttonText}
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
