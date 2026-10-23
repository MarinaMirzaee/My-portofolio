import Reveal from "./Reveal";

const canTilt = () =>
  window.matchMedia("(hover: hover)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ProjectCard({ project, index }) {
  // little 3D tilt that follows the mouse
  const handleMouseMove = (e) => {
    if (!canTilt()) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transition = "border-color 0.35s, box-shadow 0.35s";
    card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition =
      "transform 0.5s, border-color 0.35s, box-shadow 0.35s";
    card.style.transform = "";
  };

  return (
    <Reveal
      as="article"
      className="project-card"
      index={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-icon" aria-hidden="true">
        {project.icon}
      </div>
      <h3>{project.title}</h3>
      <p>{project.text}</p>
      <div className="tech">{project.tech}</div>

      <div className="project-links">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="primary"
        >
          Live Demo ↗
        </a>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          <i className="devicon-github-original" aria-hidden="true" /> GitHub
        </a>
      </div>
    </Reveal>
  );
}
