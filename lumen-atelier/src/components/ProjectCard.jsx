import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 backdrop-blur-sm"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} project placeholder`}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-brand-gold/40 bg-brand-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-brand-gold">
          {project.category}
        </span>
      </div>
      <div className="space-y-3 p-6">
        <h3 className="font-display text-2xl text-brand-cream">{project.title}</h3>
        <p className="text-xs uppercase tracking-[0.14em] text-brand-ivory/60">{project.location}</p>
        <p className="text-sm text-brand-ivory/75">{project.shortDescription}</p>
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center rounded-full border border-brand-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold transition hover:bg-brand-gold hover:text-brand-black"
        >
          View Project
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
