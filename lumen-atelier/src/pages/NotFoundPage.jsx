import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="Page Not Found | LDS"
        description="The page you are looking for does not exist."
      />
      <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-6 pt-32 text-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">404</p>
          <h1 className="mt-3 font-display text-5xl text-brand-cream">Page not found</h1>
          <p className="mt-4 text-brand-ivory/75">The page you requested is unavailable.</p>
          <Link
            to="/"
            className="mt-7 inline-flex rounded-full border border-brand-gold bg-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-black"
          >
            Return Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
