const SectionTitle = ({ eyebrow, title, description, center = false }) => {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-brand-cream sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-brand-ivory/75 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
