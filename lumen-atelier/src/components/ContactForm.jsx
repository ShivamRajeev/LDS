import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6 backdrop-blur-sm sm:p-8"
      aria-label="Contact form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-brand-ivory/80">
          Name
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-brand-ivory/20 bg-brand-black px-3 py-2 text-brand-cream outline-none transition focus:border-brand-gold"
          />
        </label>
        <label className="text-sm text-brand-ivory/80">
          Email
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-brand-ivory/20 bg-brand-black px-3 py-2 text-brand-cream outline-none transition focus:border-brand-gold"
          />
        </label>
        <label className="text-sm text-brand-ivory/80">
          Phone
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-brand-ivory/20 bg-brand-black px-3 py-2 text-brand-cream outline-none transition focus:border-brand-gold"
          />
        </label>
        <label className="text-sm text-brand-ivory/80">
          Company
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-brand-ivory/20 bg-brand-black px-3 py-2 text-brand-cream outline-none transition focus:border-brand-gold"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm text-brand-ivory/80">
        Project type
        <input
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          placeholder="Residential, Hospitality, Facade, etc."
          className="mt-2 w-full rounded-lg border border-brand-ivory/20 bg-brand-black px-3 py-2 text-brand-cream outline-none transition focus:border-brand-gold"
        />
      </label>
      <label className="mt-4 block text-sm text-brand-ivory/80">
        Message
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="mt-2 w-full rounded-lg border border-brand-ivory/20 bg-brand-black px-3 py-2 text-brand-cream outline-none transition focus:border-brand-gold"
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex rounded-full border border-brand-gold bg-brand-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-black transition hover:bg-brand-goldMuted"
      >
        Submit
      </button>
      {submitted && (
        <p className="mt-4 text-sm text-brand-gold">
          Thank you. Your enquiry has been received.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
