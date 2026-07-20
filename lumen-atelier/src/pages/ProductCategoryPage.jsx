import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import AnimatedSection from "../components/AnimatedSection";
import ProductHierarchyTile from "../components/ProductHierarchyTile";
import {
  getCategoryFromSlug,
  getCategorySlug,
  getSubcategoryCoverImage,
  getSubcategoryName,
  getSubcategorySlug,
  products,
} from "../data/products";

const ProductCategoryPage = () => {
  const { categorySlug } = useParams();
  const categoryName = getCategoryFromSlug(categorySlug || "");
  const categoryProducts = products.filter((product) => getCategorySlug(product.category) === categorySlug);
  const categorySubcategories = Array.from(
    categoryProducts.reduce((acc, product) => {
      const subcategoryName = getSubcategoryName(product);

      if (!acc.has(subcategoryName)) {
        acc.set(subcategoryName, {
          name: subcategoryName,
          slug: getSubcategorySlug(subcategoryName),
          coverProduct: product,
          coverImage: getSubcategoryCoverImage(subcategoryName),
        });
      }

      return acc;
    }, new Map()).values()
  );

  if (!categoryName || categoryProducts.length === 0) {
    return (
      <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-6 pt-32 text-center">
        <div>
          <h1 className="font-display text-4xl text-brand-cream">Category not found</h1>
          <p className="mt-3 text-brand-ivory/70">The category you selected is unavailable.</p>
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
        title={`${categoryName} | LDS`}
        description={`Explore ${categoryName} products from Light Design Solutions.`}
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <Link
            to="/products"
            className="inline-flex items-center text-xs uppercase tracking-[0.16em] text-brand-gold transition hover:text-brand-cream"
          >
            Back To All Categories
          </Link>
          <h1 className="mt-5 font-display text-4xl text-brand-cream sm:text-5xl">{categoryName}</h1>
          <p className="mt-4 max-w-3xl text-brand-ivory/75">
            {categorySubcategories.length} subcategories found in this category. Open any tile to view its types.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-10" animateOnScroll={false}>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
            {categorySubcategories.map((subcategory) => (
              <ProductHierarchyTile
                key={`${categoryName}-${subcategory.slug}`}
                to={`/products/category/${categorySlug}/subcategory/${subcategory.slug}/products`}
                label={subcategory.name}
                image={subcategory.coverImage}
                ariaLabel={`Open ${subcategory.name} products`}
              />
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default ProductCategoryPage;
