import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import AnimatedSection from "../components/AnimatedSection";
import {
  faqs,
  installationGuides,
  lightingGlossary,
  resourceCatalogs,
  resourceDatasheets,
} from "../data/resources";

const ResourcesPage = () => {
  return (
    <>
      <Seo
        title="Resources | LDS"
        description="Access lighting catalogs, datasheets, installation guides, glossary terms, and frequently asked questions."
      />
      <section className="mx-auto w-full max-w-7xl space-y-14 px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Resources"
            title="Technical and Planning Documents"
            description="Download references and educational content to support specification, installation, and maintenance."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-3xl text-brand-cream">Catalog Downloads</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {resourceCatalogs.map((catalog) => (
              <article
                key={catalog.id}
                className="rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-brand-gold">{catalog.type}</p>
                <h3 className="mt-2 font-display text-2xl text-brand-cream">{catalog.title}</h3>
                <p className="mt-3 text-sm text-brand-ivory/75">{catalog.description}</p>
                <button
                  type="button"
                  className="mt-6 rounded-full border border-brand-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold"
                >
                  Download
                </button>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6">
              <h2 className="font-display text-3xl text-brand-cream">Datasheets</h2>
              <ul className="mt-4 space-y-2 text-brand-ivory/75">
                {resourceDatasheets.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6">
              <h2 className="font-display text-3xl text-brand-cream">Installation Guides</h2>
              <ul className="mt-4 space-y-2 text-brand-ivory/75">
                {installationGuides.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6">
              <h2 className="font-display text-3xl text-brand-cream">Lighting Glossary</h2>
              <dl className="mt-4 space-y-4 text-sm">
                {lightingGlossary.map((item) => (
                  <div key={item.term}>
                    <dt className="font-semibold uppercase tracking-[0.12em] text-brand-gold">{item.term}</dt>
                    <dd className="mt-1 text-brand-ivory/75">{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </article>
            <article className="rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6">
              <h2 className="font-display text-3xl text-brand-cream">FAQs</h2>
              <div className="mt-4 space-y-4 text-sm">
                {faqs.map((faq) => (
                  <details key={faq.question} className="rounded-xl border border-brand-ivory/10 p-4">
                    <summary className="cursor-pointer font-semibold text-brand-cream">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-brand-ivory/75">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </article>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default ResourcesPage;
