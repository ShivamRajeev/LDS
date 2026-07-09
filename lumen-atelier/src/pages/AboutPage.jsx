import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import AnimatedSection from "../components/AnimatedSection";

const pillars = [
  {
    title: "Company Vision",
    body: "To shape the next generation of architectural spaces through thoughtful, enduring lighting systems.",
  },
  {
    title: "Innovation and R&D",
    body: "Our engineering lab validates optics, heat management, and controls to ensure performance in real environments.",
  },
  {
    title: "Design-Focused Approach",
    body: "We align product language with architectural form so luminaires integrate naturally into each project narrative.",
  },
  {
    title: "Architectural Collaboration",
    body: "We work alongside architects, interior designers, and consultants from concept through commissioning.",
  },
  {
    title: "Quality and Manufacturing",
    body: "Precision manufacturing, strict QA protocols, and durable finishes support long lifecycle performance.",
  },
  {
    title: "Global Outlook",
    body: "Our project experience spans hospitality, commercial, and residential markets across international regions.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Seo
        title="About Us | Lumen Atelier"
        description="Learn about Lumen Atelier's vision, R&D philosophy, design collaboration process, manufacturing quality, and global outlook."
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionTitle
            eyebrow="About Us"
            title="A Design-Driven Lighting Manufacturer"
            description="We build premium lighting systems where technical rigor and architectural expression meet."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6">
                <h2 className="font-display text-3xl text-brand-cream">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-ivory/75">{pillar.body}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
