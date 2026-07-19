import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import headerLogo from "../assets/placeholders/header-logo.svg";

const navItems = [
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Built-to-suit", to: "/built-to-suit" },
  { label: "Design Intent", to: "/design-intent" },
  { label: "Resources", to: "/resources" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoReplayKey, setLogoReplayKey] = useState(() => Date.now());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-400 ${
        scrolled
          ? "border-b border-brand-ivory/10 bg-brand-black/88 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center" aria-label="LDS home">
          <span className="sr-only">LDS</span>
          <img
            src={`${headerLogo}?replay=${logoReplayKey}`}
            alt="LDS"
            className="h-17 w-auto max-w-[18rem] object-contain sm:h-18 sm:max-w-[20rem] lg:h-20 lg:max-w-[22rem]"
            onMouseEnter={() => setLogoReplayKey((currentKey) => currentKey + 1)}
            onFocus={() => setLogoReplayKey((currentKey) => currentKey + 1)}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.14em] transition ${
                  isActive ? "text-brand-gold" : "text-brand-ivory/75 hover:text-brand-gold"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex rounded-full border border-brand-gold bg-brand-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-black transition hover:bg-brand-goldMuted"
            >
              Enquire Now
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((previous) => !previous)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-ivory/20 text-brand-ivory lg:hidden"
        >
          <span className="sr-only">Open navigation menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="border-t border-brand-ivory/10 bg-brand-black/95 px-6 py-6 lg:hidden"
          >
            <nav className="grid gap-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-[0.14em] ${
                      isActive ? "text-brand-gold" : "text-brand-ivory/75"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-max rounded-full border border-brand-gold bg-brand-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-black"
              >
                Enquire Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
