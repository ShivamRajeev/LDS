import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import AnimatedSection from "../components/AnimatedSection";
import ProductCard from "../components/ProductCard";
import {
  getCategoryFromSlug,
  getCategorySlug,
  getSubcategoryFromSlug,
  getSubcategoryName,
  products,
} from "../data/products";

const ProductTypePage = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const categoryName = getCategoryFromSlug(categorySlug || "");
  const subcategoryName = getSubcategoryFromSlug(subcategorySlug || "");
  const isBollardProducts = categorySlug === "outdoor-lighting" && subcategorySlug === "bollard";

  const subcategoryProducts = products.filter(
    (product) =>
      getCategorySlug(product.category) === categorySlug &&
      getSubcategoryName(product) === subcategoryName
  );

  if (!categoryName || !subcategoryName || subcategoryProducts.length === 0) {
    return (
      <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-6 pt-32 text-center">
        <div>
          <h1 className="font-display text-4xl text-brand-cream">Product page not found</h1>
          <p className="mt-3 text-brand-ivory/70">The selected product page is unavailable.</p>
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
        title={`${subcategoryName} Products | LDS`}
        description={`Explore ${subcategoryName} products and technical details from Light Design Solutions.`}
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-brand-ivory/65"
          >
            <Link to="/" className="transition hover:text-brand-gold">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="transition hover:text-brand-gold">
              Products
            </Link>
            <span>/</span>
            <Link to={`/products/category/${categorySlug}`} className="transition hover:text-brand-gold">
              {categoryName}
            </Link>
            {!isBollardProducts && (
              <>
                <span>/</span>
                <Link
                  to={`/products/category/${categorySlug}/subcategory/${subcategorySlug}`}
                  className="transition hover:text-brand-gold"
                >
                  {subcategoryName}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-brand-cream">Products</span>
          </nav>

          <Link
            to={isBollardProducts ? `/products/category/${categorySlug}` : `/products/category/${categorySlug}/subcategory/${subcategorySlug}`}
            className="inline-flex items-center text-xs uppercase tracking-[0.16em] text-brand-gold transition hover:text-brand-cream"
          >
            {isBollardProducts ? "Back To Category" : "Back To Image"}
          </Link>
          <h1 className="mt-5 font-display text-4xl text-brand-cream sm:text-5xl">
            {subcategoryName} Products
          </h1>
          <p className="mt-4 max-w-3xl text-brand-ivory/75">
            {subcategoryProducts.length} product{subcategoryProducts.length > 1 ? "s" : ""} found on this page. Open any card to
            see complete specifications, features, and datasheet details.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-10" animateOnScroll={false}>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {subcategoryProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 3} />
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default ProductTypePage;
