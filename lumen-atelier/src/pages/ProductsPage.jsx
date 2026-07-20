import { useMemo } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import AnimatedSection from "../components/AnimatedSection";
import ProductHierarchyTile from "../components/ProductHierarchyTile";
import {
  getCategorySlug,
  getSubcategoryCoverImage,
  getSubcategoryName,
  getSubcategorySlug,
  productCategoriesOrdered,
  products,
} from "../data/products";

const ProductsPage = () => {
  const groupedProducts = useMemo(
    () =>
      productCategoriesOrdered
        .map((category) => {
          const categoryProducts = products.filter((product) => product.category === category);
          const subcategoryMap = categoryProducts.reduce((acc, product) => {
            const subcategoryName = getSubcategoryName(product);

            if (!acc.has(subcategoryName)) {
              acc.set(subcategoryName, {
                name: subcategoryName,
                slug: getSubcategorySlug(subcategoryName),
                coverProduct: product,
                  coverImage: getSubcategoryCoverImage(subcategoryName) || product.image,
              });
            }

            return acc;
          }, new Map());

          return {
            category,
            categorySlug: getCategorySlug(category),
            subcategories: Array.from(subcategoryMap.values()),
          };
        })
        .filter((group) => group.subcategories.length > 0),
    []
  );

  return (
    <>
      <Seo
        title="Products | LDS"
        description="Our products and solutions grouped by category and subcategory."
      />
      <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-3xl font-semibold uppercase tracking-[0.06em] text-brand-cream sm:text-4xl">
              Our Products &amp; Solutions
            </h1>
            <p className="mx-auto mt-3 max-w-3xl text-sm text-brand-ivory/75 sm:text-base">
              Category -&gt; Subcategory -&gt; Products
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 space-y-14">
          {groupedProducts.map((group, groupIndex) => (
            <AnimatedSection key={group.category} delay={groupIndex * 0.04}>
              <div className="flex items-end justify-between gap-4 border-b border-brand-ivory/20 pb-3">
                <Link
                  to={`/products/category/${group.categorySlug}`}
                  className="text-xl font-semibold uppercase tracking-[0.08em] text-brand-cream transition hover:text-brand-gold sm:text-[1.7rem]"
                >
                  {group.category}
                </Link>
                <Link
                  to={`/products/category/${group.categorySlug}`}
                  className="text-[11px] uppercase tracking-[0.16em] text-brand-gold/90 transition hover:text-brand-cream"
                >
                  Open
                </Link>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                {group.subcategories.map((subcategory) => (
                  <ProductHierarchyTile
                    key={`${group.category}-${subcategory.slug}`}
                    to={`/products/category/${group.categorySlug}/subcategory/${subcategory.slug}/products`}
                    label={subcategory.name}
                    image={subcategory.coverImage}
                    ariaLabel={`Open ${subcategory.name} products`}
                  />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
