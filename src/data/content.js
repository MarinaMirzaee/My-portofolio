// ==========================================================
// All the text and links of the portfolio live here.
// Edit this file to change your information — no need to touch the components.
// ==========================================================

export const site = {
  name: "Marina Mirzaee",
  role: "Junior Frontend Developer",
  email: "marinamirzai774@gmail.com",
  location: "Kabul, Afghanistan",

  // 👉 Change these two to your real usernames (used for every GitHub / LinkedIn link)
  githubUsername: "YOUR-USERNAME",
  linkedinUsername: "YOUR-USERNAME",

  // The CV must be saved as public/Marina-Mirzaee-CV.pdf
  cvFile: "CV Marina.pdf",

  // To receive messages directly in your inbox:
  //   1. Create a free account at https://formspree.io and make a new form.
  //   2. Paste its URL here, e.g. "https://formspree.io/f/abcdwxyz".
  // While this is empty, the form opens the visitor's email app instead.
  formEndpoint: "",
};

const gh = site.githubUsername;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original icon-light" },
];

export const strengths = [
  {
    title: "Communication",
    text: "I value clear communication and sharing ideas respectfully.",
  },
  {
    title: "Problem-solving",
    text: "I approach challenges patiently and look for practical solutions.",
  },
  {
    title: "Teamwork",
    text: "I enjoy collaborating, sharing feedback, and learning from others.",
  },
  {
    title: "Continuous Learning",
    text: "I am always motivated to improve my skills and learn new tools.",
  },
];

// "slug" is the GitHub repository name; links are built from it automatically.
const project = (icon, title, text, tech, slug) => ({
  icon,
  title,
  text,
  tech,
  demo: `https://${gh}.github.io/${slug}/`,
  repo: `https://github.com/${gh}/${slug}`,
});

export const projects = [
  project(
    "🛍️",
    "ShopEase",
    "A responsive e-commerce interface with product search, category filters, and shopping cart features.",
    "React · Tailwind CSS",
    "shopease",
  ),
  project(
    "✦",
    "Nadiya Brand",
    "A fashion brand website concept inspired by Afghan style and craftsmanship.",
    "HTML · CSS · Bootstrap",
    "nadiya-brand",
  ),
  project(
    "💻",
    "Personal Portfolio",
    "A personal website showcasing my skills, projects, and frontend development journey.",
    "React · CSS",
    "portfolio",
  ),
  project(
    "🌤️",
    "WeatherNow",
    "A weather app where you search any city and instantly see the current conditions and a 5-day forecast.",
    "JavaScript · Weather API",
    "weathernow",
  ),
  project(
    "✅",
    "TaskFlow",
    "A clean task manager to add, edit, complete and filter to-dos, with everything saved in the browser.",
    "React · Local Storage",
    "taskflow",
  ),
  project(
    "🍽️",
    "Savor Restaurant",
    "A modern restaurant landing page with an interactive menu, online reservation form and image gallery.",
    "HTML · CSS · Bootstrap",
    "savor-restaurant",
  ),
];

export const languages = ["Persian / Farsi", "Pashto", "English", "German"];
