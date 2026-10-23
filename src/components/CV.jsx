import { site } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function CV() {
  // BASE_URL keeps the link working if the site is published inside a sub-folder
  const cvUrl = `${import.meta.env.BASE_URL}${site.cvFile}`;

  return (
    <section className="section cv" id="cv">
      <SectionHeading tag="RESUME">
        My <span>CV.</span>
      </SectionHeading>

      <Reveal className="cv-card" index={2}>
        <div className="cv-icon" aria-hidden="true">
          📄
        </div>

        <div className="cv-info">
          <h3>{site.name} — Curriculum Vitae</h3>
          <p>Education, skills, projects and experience in one clean PDF.</p>
          <div className="cv-meta">
            <span>PDF</span>
            <span>Frontend Developer</span>
            <span>Updated 2026</span>
          </div>
        </div>

        <div className="cv-actions">
          <a href={cvUrl} download className="btn">
            Download CV ↓
          </a>
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            View Online
          </a>
        </div>
      </Reveal>
    </section>
  );
}
