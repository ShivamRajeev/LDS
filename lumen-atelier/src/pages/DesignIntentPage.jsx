import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import AnimatedSection from "../components/AnimatedSection";

const sections = [
  {
    title: "Lighting for Homes",
    body: "Residential lighting should blend visual comfort, warmth, and flexibility. Layered illumination supports daily routines while preserving moments of calm and intimacy.",
  },
  {
    title: "Lighting for Hospitality",
    body: "Hospitality spaces rely on emotional tone. Controlled contrast and warm color temperatures create welcome, while task zones maintain clarity and safety for guests and staff.",
  },
  {
    title: "Facade Lighting",
    body: "Facade lighting shapes night identity and orientation. Thoughtful grazing, washing, and highlighting reveal depth without over-lighting urban environments.",
  },
  {
    title: "Retail Lighting",
    body: "Retail environments use light hierarchy to guide attention, support color fidelity, and improve product interaction. Precision beams elevate visual merchandising impact.",
  },
  {
    title: "Workplace Lighting",
    body: "Workplace lighting should reduce fatigue and support focus. Balanced illuminance, glare control, and adaptable scenes improve productivity and long-term wellbeing.",
  },
  {
    title: "Human-Centric Lighting",
    body: "Human-centric strategies align light with circadian rhythms. Tunable scenes can reinforce alertness during daytime and comfort during evening transitions.",
  },
];

const DesignIntentPage = () => {
  return (
    <>
      <Seo
        title="Design Intent | Lumen Atelier"
        description="Educational insights on architectural lighting for homes, hospitality, facade, retail, workplaces, and human-centric environments."
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Design Intent"
            title="How Lighting Shapes Comfort, Safety, and Ambience"
            description="A practical framework for making informed architectural lighting decisions across project typologies."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6">
                <h2 className="font-display text-3xl text-brand-cream">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-ivory/75">{item.body}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
};

export default DesignIntentPage;
