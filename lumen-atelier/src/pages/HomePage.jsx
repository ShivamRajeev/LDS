import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import AnimatedSection from "../components/AnimatedSection";
import ProductCard from "../components/ProductCard";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import ProductFinder from "../components/ProductFinder";
import Seo from "../components/Seo";
import { products } from "../data/products";
import { projects } from "../data/projects";

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  const highlightedProjects = projects.slice(0, 3);

  return (
    <>
      <Seo
        title="Lumen Atelier | Architectural LED Lighting"
        description="Premium architectural and decorative lighting solutions for modern spaces, hospitality, retail, and landmark projects."
      />
      <HeroSection />

      <div className="mx-auto w-full max-w-7xl space-y-24 px-6 py-20 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Featured Products"
            title="Performance Luminaires with Architectural Precision"
            description="A curated collection built for ambient depth, visual comfort, and spatial drama."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionTitle
            eyebrow="Project Highlights"
            title="Lighting Narratives Across Distinct Architecture"
            description="From hospitality landmarks to retail destinations, each project responds to context and intent."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {highlightedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <CTASection
            title="Built-to-Suit Lighting for Complex Design Briefs"
            description="Our custom engineering team collaborates with architects and consultants to create project-specific luminaires, optics, and installation systems."
            buttonText="Explore Built-to-Suit"
            buttonLink="/built-to-suit"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid gap-10 rounded-3xl border border-brand-ivory/10 bg-brand-charcoal/70 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <SectionTitle
                eyebrow="Design Intent"
                title="Lighting as Spatial Psychology"
                description="Understand how light hierarchy, temperature, and contrast influence comfort, orientation, and brand perception."
              />
              <Link
                to="/design-intent"
                className="mt-8 inline-flex rounded-full border border-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold transition hover:bg-brand-gold hover:text-brand-black"
              >
                Read Design Intent
              </Link>
            </div>
            <div className="rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/20 to-transparent p-6">
              <h3 className="font-display text-3xl text-brand-cream">Innovation Culture</h3>
              <p className="mt-4 text-brand-ivory/75">
                Our R&D and prototyping studio tests optics, thermal behavior, and finish integrity so every design performs in real-world conditions.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <SectionTitle
            eyebrow="Product Finder"
            title="Find the Right Fixture by Application"
            description="Narrow your selection by space, mounting strategy, lighting type, and color temperature."
          />
          <div className="mt-8">
            <ProductFinder />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <CTASection
            title="Planning a New Lighting Program?"
            description="Connect with our team to discuss your concept, timelines, and technical requirements."
            buttonText="Contact Us"
            buttonLink="/contact"
          />
        </AnimatedSection>
      </div>
    </>
  );
};

export default HomePage;
