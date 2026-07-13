import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product, priority = false }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 backdrop-blur-sm"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} placeholder`}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          sizes="(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 92vw"
          className="h-52 w-full bg-brand-black/35 object-contain p-2 transition duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute left-4 top-4 rounded-full border border-brand-gold/40 bg-brand-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-brand-gold">
          {product.category}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <h3 className="font-display text-2xl text-brand-cream">{product.name}</h3>
        <p className="text-sm text-brand-ivory/75">{product.shortDescription}</p>
        <p className="text-xs uppercase tracking-[0.14em] text-brand-ivory/60">
          Application: {product.applicationArea}
        </p>
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center rounded-full border border-brand-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold transition hover:bg-brand-gold hover:text-brand-black"
        >
          View Details
        </Link>
      </div>
    </motion.article>
  );
};

export default ProductCard;
