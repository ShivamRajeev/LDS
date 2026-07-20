import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import AnimatedSection from "../components/AnimatedSection";
import {
  getCategoryFromSlug,
  getSubcategoryCoverImage,
  getSubcategoryFromSlug,
} from "../data/products";

const ProductSubcategoryPage = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const categoryName = getCategoryFromSlug(categorySlug || "");
  const subcategoryName = getSubcategoryFromSlug(subcategorySlug || "");
  const coverImage = getSubcategoryCoverImage(subcategoryName || "");

  if (categoryName && subcategoryName && coverImage) {
    return (
      <Navigate
        replace
        to={`/products/category/${categorySlug}/subcategory/${subcategorySlug}/products`}
      />
    );
  }

  if (!categoryName || !subcategoryName || !coverImage) {
    return (
      <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-6 pt-32 text-center">
        <div>
          <h1 className="font-display text-4xl text-brand-cream">Subcategory not found</h1>
          <p className="mt-3 text-brand-ivory/70">The product subcategory you selected is unavailable.</p>
          <Link
            to="/products"
            className="mt-6 inline-flex rounded-full border border-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold"
          >
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Seo
        title={`${subcategoryName} | LDS`}
        description={`Open ${subcategoryName} to view its product image page from Light Design Solutions.`}
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-brand-ivory/65">
            <Link to="/" className="transition hover:text-brand-gold">Home</Link>
            <span>/</span>
            <Link to="/products" className="transition hover:text-brand-gold">Products</Link>
            <span>/</span>
            <Link
              to={`/products/category/${categorySlug}`}
              className="transition hover:text-brand-gold"
            >
              {categoryName}
            </Link>
            <span>/</span>
            <span className="text-brand-cream">{subcategoryName}</span>
          </nav>

          <Link
            to="/products"
            className="inline-flex items-center text-xs uppercase tracking-[0.16em] text-brand-gold transition hover:text-brand-cream"
          >
            Back To All Categories
          </Link>
          <h1 className="mt-5 font-display text-4xl text-brand-cream sm:text-5xl">{subcategoryName}</h1>
          <p className="mt-4 max-w-3xl text-brand-ivory/75">Click the subcategory image to open the product page.</p>

          <Link
            to={`/products/category/${categorySlug}/subcategory/${subcategorySlug}/products`}
            className="mt-8 block overflow-hidden rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 transition hover:border-brand-gold/40"
            aria-label={`Open ${subcategoryName} products`}
          >
            <img
              src={coverImage}
              alt={`${subcategoryName} cover`}
              loading="eager"
              decoding="async"
              className="h-72 w-full object-contain p-6 sm:h-80"
            />
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
};

export default ProductSubcategoryPage;
