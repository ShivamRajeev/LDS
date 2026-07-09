import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import AnimatedSection from "../components/AnimatedSection";
import { productMap } from "../data/products";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = productMap[slug];

  if (!product) {
    return (
      <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-6 pt-32 text-center">
        <div>
          <h1 className="font-display text-4xl text-brand-cream">Product not found</h1>
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
        title={`${product.name} | Lumen Atelier`}
        description={product.description}
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <div className="grid gap-10 lg:grid-cols-2">
            <img
              src={product.image}
              alt={`${product.name} product visual placeholder`}
              className="h-[420px] w-full rounded-2xl border border-brand-ivory/10 object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">{product.category}</p>
              <h1 className="mt-3 font-display text-5xl text-brand-cream">{product.name}</h1>
              <p className="mt-5 text-brand-ivory/75">{product.description}</p>

              <h2 className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Features</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-brand-ivory/75">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full border border-brand-gold bg-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-black"
                >
                  Download Datasheet
                </button>
                <Link
                  to="/contact"
                  className="rounded-full border border-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12">
          <h2 className="font-display text-3xl text-brand-cream">Technical Specifications</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-brand-ivory/10 bg-brand-charcoal/70 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-brand-gold">Wattage</p>
              <p className="mt-2 text-brand-ivory/75">{product.specifications.wattage}</p>
            </div>
            <div className="rounded-xl border border-brand-ivory/10 bg-brand-charcoal/70 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-brand-gold">Beam Angle</p>
              <p className="mt-2 text-brand-ivory/75">{product.specifications.beamAngle}</p>
            </div>
            <div className="rounded-xl border border-brand-ivory/10 bg-brand-charcoal/70 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-brand-gold">Color Temperature</p>
              <p className="mt-2 text-brand-ivory/75">{product.specifications.colorTemperature}</p>
            </div>
            <div className="rounded-xl border border-brand-ivory/10 bg-brand-charcoal/70 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-brand-gold">IP Rating</p>
              <p className="mt-2 text-brand-ivory/75">{product.specifications.ipRating}</p>
            </div>
            <div className="rounded-xl border border-brand-ivory/10 bg-brand-charcoal/70 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-brand-gold">CRI</p>
              <p className="mt-2 text-brand-ivory/75">{product.specifications.cri}</p>
            </div>
            <div className="rounded-xl border border-brand-ivory/10 bg-brand-charcoal/70 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-brand-gold">Mounting Type</p>
              <p className="mt-2 text-brand-ivory/75">{product.specifications.mountingType}</p>
            </div>
            <div className="rounded-xl border border-brand-ivory/10 bg-brand-charcoal/70 p-4 sm:col-span-2 lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.14em] text-brand-gold">Material</p>
              <p className="mt-2 text-brand-ivory/75">{product.specifications.material}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-12">
          <h2 className="font-display text-3xl text-brand-cream">Applications</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {product.applications.map((application) => (
              <span
                key={application}
                className="rounded-full border border-brand-ivory/20 px-4 py-2 text-xs uppercase tracking-[0.14em] text-brand-ivory/75"
              >
                {application}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default ProductDetailPage;
