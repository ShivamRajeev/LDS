import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import AnimatedSection from "../components/AnimatedSection";
import GalleryGrid from "../components/GalleryGrid";
import { projectMap } from "../data/projects";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectMap[slug];

  if (!project) {
    return (
      <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-6 pt-32 text-center">
        <div>
          <h1 className="font-display text-4xl text-brand-cream">Project not found</h1>
          <Link
            to="/projects"
            className="mt-6 inline-flex rounded-full border border-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Seo
        title={`${project.title} | LDS`}
        description={project.shortDescription}
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <img
            src={project.image}
            alt={`${project.title} hero placeholder`}
            className="h-[420px] w-full rounded-3xl border border-brand-ivory/10 object-cover"
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_330px]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">{project.category}</p>
              <h1 className="mt-3 font-display text-5xl text-brand-cream">{project.title}</h1>
              <p className="mt-6 text-brand-ivory/75">{project.shortDescription}</p>

              <div className="mt-8 space-y-6">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Lighting Challenge</h2>
                  <p className="mt-2 text-brand-ivory/75">{project.lightingChallenge}</p>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Solution Provided</h2>
                  <p className="mt-2 text-brand-ivory/75">{project.solutionProvided}</p>
                </div>
              </div>
            </div>
            <aside className="rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6">
              <h3 className="font-display text-2xl text-brand-cream">Project Snapshot</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="uppercase tracking-[0.12em] text-brand-gold">Location</dt>
                  <dd className="mt-1 text-brand-ivory/75">{project.location}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.12em] text-brand-gold">Client Type</dt>
                  <dd className="mt-1 text-brand-ivory/75">{project.clientType}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.12em] text-brand-gold">Products Used</dt>
                  <dd className="mt-2 space-y-1 text-brand-ivory/75">
                    {project.productsUsed.map((name) => (
                      <p key={name}>{name}</p>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12">
          <GalleryGrid images={project.gallery} title={project.title} />
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-12">
          <Link
            to="/contact"
            className="inline-flex rounded-full border border-brand-gold bg-brand-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-black"
          >
            Discuss Your Project
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
};

export default ProjectDetailPage;
