import projectImage1 from "../assets/placeholders/Project/Raymond.png";
import projectImage2 from "../assets/placeholders/Project/Vital_Medicare.png";
import projectImage3 from "../assets/placeholders/Project/Residency1.png";
import projectImage4 from "../assets/placeholders/Project/Residency2.png";
import projectImage5 from "../assets/placeholders/Project/OrangeCity.png";
import projectImage6 from "../assets/placeholders/Project/Residency3.png";

export const projectCategories = [
  "Retail",
  "Residential",
  "Commercial",
  "Healthcare",
];

export const projects = [
  {
    id: "raymond",
    slug: "raymond",
    title: "Raymond Flagship Store",
    location: "Mumbai, India",
    category: "Retail",
    clientType: "Retail Clothing Brand",
    shortDescription: "A premium retail destination offering an extensive range of Raymond's finest fabrics, ready-to-wear apparel, custom tailoring services, and lifestyle products.",
    lightingChallenge:
      "Balancing dramatic merchandise contrast with visual comfort across long trading hours.",
    solutionProvided:
      "A layered scheme combining adjustable track accents, integrated shelf lines, and tunable scenes.",
    productsUsed: ["Vela Track Pro", "Prism Track Mini", "Aurora Line 60"],
    image: projectImage1,
    gallery: [],
  },
  {
    id: "medicare",
    slug: "medicare",
    title: "Vital Medicare",
    location: "Mumbai, India",
    category: "Healthcare",
    clientType: "Healthcare Provider",
    shortDescription: "A state-of-the-art healthcare facility offering comprehensive medical services and patient care.",
    lightingChallenge:
      "Ensuring optimal lighting for medical procedures while maintaining a comfortable environment for patients.",
    solutionProvided:
      "A combination of task-specific lighting, ambient illumination, and adjustable controls for different medical scenarios.",
    productsUsed: ["Vela Track Pro", "Prism Track Mini", "Aurora Line 60"],
    image: projectImage2,
    gallery: [],
  },
   {
    id: "residency1",
    slug: "residency1",
    title: "Akash Residency",
    location: "Delhi, India",
    category: "Residential",
    clientType: "Residential Developer",
    shortDescription: "A state-of-the-art residential facility offering luxurious living spaces and modern amenities.",
    lightingChallenge:
      "Ensuring optimal lighting for residential spaces while maintaining a comfortable environment for residents.",
    solutionProvided:
      "A combination of task-specific lighting, ambient illumination, and adjustable controls for different medical scenarios.",
    productsUsed: ["Vela Track Pro", "Prism Track Mini", "Aurora Line 60"],
    image: projectImage3,
    gallery: [],
  },
  {
    id: "residency2",
    slug: "residency2",
    title: "Jainam Heights",
    location: "Delhi, India",
    category: "Residential",
    clientType: "Residential Developer",
    shortDescription: "A state-of-the-art residential facility offering luxurious living spaces and modern amenities.",
    lightingChallenge:
      "Ensuring optimal lighting for residential spaces while maintaining a comfortable environment for residents.",
    solutionProvided:
      "A combination of task-specific lighting, ambient illumination, and adjustable controls for different medical scenarios.",
    productsUsed: ["Vela Track Pro", "Prism Track Mini", "Aurora Line 60"],
    image: projectImage4,
    gallery: [],
  },
    {
    id: "commercial1",
    slug: "commercial1",
    title: "Orange City Commercial Complex",
    location: "Delhi, India",
    category: "Commercial",
    clientType: "Commercial Developer",
    shortDescription: "A state-of-the-art commercial facility offering modern office spaces and amenities.",
    lightingChallenge:
      "Ensuring optimal lighting for commercial spaces while maintaining a comfortable environment for employees.",
    solutionProvided:
      "A combination of task-specific lighting, ambient illumination, and adjustable controls for different medical scenarios.",
    productsUsed: ["Vela Track Pro", "Prism Track Mini", "Aurora Line 60"],
    image: projectImage5,
    gallery: [],
  },
  {
    id: "residency3",
    slug: "residency3",
    title: "Sunrise Residency",
    location: "Delhi, India",
    category: "Residential",
    clientType: "Residential Developer",
    shortDescription: "A state-of-the-art residential facility offering luxurious living spaces and modern amenities.",
    lightingChallenge:
      "Ensuring optimal lighting for residential spaces while maintaining a comfortable environment for residents.",
    solutionProvided:
      "A combination of task-specific lighting, ambient illumination, and adjustable controls for different medical scenarios.",
    productsUsed: ["Vela Track Pro", "Prism Track Mini", "Aurora Line 60"],
    image: projectImage6,
    gallery: [],
  },
];

export const projectMap = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});
