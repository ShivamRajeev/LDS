import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import AnimatedSection from "../components/AnimatedSection";

const offerings = [
  "Decorative lighting",
  "Bespoke linear lighting",
  "Facade lighting",
  "Custom optics",
  "Project-specific manufacturing",
];

const workflow = [
  {
    title: "Problem Understanding",
    description:
      "We decode architectural intent, site constraints, and visual goals before defining fixture strategy.",
  },
  {
    title: "Design Collaboration",
    description:
      "Our team co-develops sketches, section details, and light distribution concepts with project stakeholders.",
  },
  {
    title: "Prototype",
    description:
      "Mockups validate beam behavior, material finish, and integration tolerances before production lock-in.",
  },
  {
    title: "Manufacturing",
    description:
      "Precision fabrication and quality controls ensure consistent output and durability at project scale.",
  },
  {
    title: "Installation Support",
    description:
      "Commissioning and aiming support help teams deliver the final lighting scene as intended.",
  },
];

const BuiltToSuitPage = () => {
  return (
    <>
      <Seo
        title="Built-to-Suit | Lumen Atelier"
        description="Custom architectural lighting solutions from concept and prototyping to manufacturing and installation support."
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Built-to-Suit"
            title="Custom Lighting Programs for Signature Architecture"
            description="We engineer bespoke luminaires for projects where standard products are not enough."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {offerings.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-5 text-sm text-brand-ivory/80"
              >
                {item}
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-14">
          <h2 className="font-display text-4xl text-brand-cream">Delivery Workflow</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-5">
            {workflow.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-brand-gold/20 bg-gradient-to-b from-brand-charcoal to-brand-black p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl text-brand-cream">{step.title}</h3>
                <p className="mt-3 text-sm text-brand-ivory/75">{step.description}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default BuiltToSuitPage;
