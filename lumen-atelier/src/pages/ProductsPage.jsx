import { useMemo, useState } from "react";
import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import AnimatedSection from "../components/AnimatedSection";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import { products, productCategories, filterOptions } from "../data/products";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilters, setSelectedFilters] = useState({
    application: "",
    mounting: "",
    colorTone: "",
    sector: "",
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const applicationMatch =
        !selectedFilters.application || product.environment === selectedFilters.application;
      const mountingMatch =
        !selectedFilters.mounting || product.mounting === selectedFilters.mounting;
      const colorMatch = !selectedFilters.colorTone || product.colorTone === selectedFilters.colorTone;
      const sectorMatch =
        !selectedFilters.sector || product.sector.includes(selectedFilters.sector);

      return categoryMatch && applicationMatch && mountingMatch && colorMatch && sectorMatch;
    });
  }, [selectedCategory, selectedFilters]);

  return (
    <>
      <Seo
        title="Products | Lumen Atelier"
        description="Explore architectural, decorative, facade, and custom LED lighting products for modern spaces."
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Product Collections"
            title="Architectural, Decorative, and Custom Product Families"
            description="Filter by environment, mounting method, and color tone to find the right fixture for your design program."
          />
        </AnimatedSection>

        <AnimatedSection className="mt-10 flex flex-wrap gap-3" animateOnScroll={false}>
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
              selectedCategory === "All"
                ? "border-brand-gold bg-brand-gold text-brand-black"
                : "border-brand-ivory/25 text-brand-ivory/75 hover:border-brand-gold hover:text-brand-gold"
            }`}
          >
            All
          </button>
          {productCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                selectedCategory === category
                  ? "border-brand-gold bg-brand-gold text-brand-black"
                  : "border-brand-ivory/25 text-brand-ivory/75 hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        <div className="mt-10 grid gap-8 lg:grid-cols-[290px_1fr]">
          <AnimatedSection animateOnScroll={false}>
            <FilterSidebar
              filters={filterOptions}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </AnimatedSection>

          <AnimatedSection animateOnScroll={false}>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} priority={index < 6} />
                ))}
              </div>
            ) : (
              <p className="rounded-xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6 text-brand-ivory/75">
                No products match your selected criteria.
              </p>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
