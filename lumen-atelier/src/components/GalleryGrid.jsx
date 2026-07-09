const GalleryGrid = ({ images, title }) => {
  return (
    <section className="space-y-6">
      <h3 className="font-display text-3xl text-brand-cream">Gallery</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <figure
            key={`${title}-gallery-${index}`}
            className="overflow-hidden rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70"
          >
            <img
              src={image}
              alt={`${title} gallery visual ${index + 1}`}
              loading="lazy"
              className="h-52 w-full object-cover transition duration-700 hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;
