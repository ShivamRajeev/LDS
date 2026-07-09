import { useMemo, useState } from "react";
import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import AnimatedSection from "../components/AnimatedSection";
import { projectCategories, projects } from "../data/projects";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Seo
        title="Light Design Solutions"
        description="Discover architectural lighting case studies across hospitality, retail, residential, facade, and heritage projects."
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Project Showcase"
            title="Our Projects"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-8 flex flex-wrap gap-3">
          {["All", ...projectCategories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                activeCategory === category
                  ? "border-brand-gold bg-brand-gold text-brand-black"
                  : "border-brand-ivory/25 text-brand-ivory/75 hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default ProjectsPage;
