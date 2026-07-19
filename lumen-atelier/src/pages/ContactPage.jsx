import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import AnimatedSection from "../components/AnimatedSection";
import ContactForm from "../components/ContactForm";
import mapPlaceholder from "../assets/placeholders/map-placeholder.svg";

const ContactPage = () => {
  return (
    <>
      <Seo
        title="Contact | LDS"
        description="Reach the LDS team for product enquiries, project consultations, and custom lighting discussions."
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Contact"
            title="Discuss Your Lighting Project"
            description="Share your project goals and our team will respond with product guidance, technical inputs, and next steps."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <aside className="space-y-6 rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Office Address</h2>
                <p className="mt-2 text-brand-ivory/75">Level 12, Studio District, Placeholder City, Country</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Email</h2>
                <p className="mt-2 text-brand-ivory/75">hello@lumenatelier.com</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Phone</h2>
                <p className="mt-2 text-brand-ivory/75">+00 0000 000 000</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Map</h2>
                <img
                  src={mapPlaceholder}
                  alt="Office location map placeholder"
                  loading="lazy"
                  className="mt-3 h-56 w-full rounded-xl border border-brand-ivory/10 object-cover"
                />
              </div>
            </aside>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
