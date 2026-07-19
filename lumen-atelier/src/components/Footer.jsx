import { Link } from "react-router-dom";
import { getCategorySlug, productCategoriesOrdered } from "../data/products";

const quickLinks = [
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Built-to-suit", to: "/built-to-suit" },
  { label: "Design Intent", to: "/design-intent" },
  { label: "Resources", to: "/resources" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-brand-ivory/10 bg-brand-black/95">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-4 lg:px-10">
        <div>
          <h3 className="font-display text-2xl text-brand-cream">Light Design Solutions</h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-ivory/70">
            We craft high-performance architectural luminaires with a focus on spatial emotion,
            technical precision, and long-term reliability.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-ivory/70">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-brand-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Product Categories
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-ivory/70">
            {productCategoriesOrdered.map((category) => (
              <li key={category}>
                <Link to={`/products/category/${getCategorySlug(category)}`} className="transition hover:text-brand-gold">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-ivory/70">
            <li>Studio District, Level 12, Placeholder City</li>
            <li>hello@lumenatelier.com</li>
            <li>+00 0000 000 000</li>
          </ul>
          <div className="mt-4 flex gap-3 text-sm text-brand-ivory/80">
            <a href="#" aria-label="LinkedIn" className="transition hover:text-brand-gold">
              LinkedIn
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:text-brand-gold">
              Instagram
            </a>
            <a href="#" aria-label="YouTube" className="transition hover:text-brand-gold">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-ivory/10 py-5 text-center text-xs uppercase tracking-[0.14em] text-brand-ivory/50">
        Copyright 2026 Light Design Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
