import { Link } from "react-router-dom";

const ProductHierarchyTile = ({ to, label, image, ariaLabel }) => {
  return (
    <Link
      to={to}
      className="group relative block aspect-[4/3] overflow-hidden border border-brand-ivory/25 bg-brand-black"
      aria-label={ariaLabel || label}
    >
      <img
        src={image}
        alt={label}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-85"
      />
      <div className="absolute inset-0 bg-brand-black/35 transition group-hover:bg-brand-black/15" />
      <div className="absolute inset-0 flex items-center justify-center px-3 text-center">
        <p className="text-xs font-medium text-brand-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-sm">
          {label}
        </p>
      </div>
    </Link>
  );
};

export default ProductHierarchyTile;
