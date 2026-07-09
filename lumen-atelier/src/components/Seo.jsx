import { useEffect } from "react";

const Seo = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    const metaDescription =
      document.querySelector("meta[name='description']") || document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", description);

    if (!document.querySelector("meta[name='description']")) {
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);

  return null;
};

export default Seo;
