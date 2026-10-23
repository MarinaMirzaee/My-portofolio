import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <SectionHeading tag="MY WORK">Featured Projects</SectionHeading>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
