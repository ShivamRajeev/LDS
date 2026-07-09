import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 backdrop-blur-sm"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} placeholder`}
          loading="lazy"
          className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
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
