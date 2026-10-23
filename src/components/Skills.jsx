import { skills } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <SectionHeading tag="MY EXPERTISE">
        Skills &amp; Technologies
      </SectionHeading>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} className="skill" index={i}>
            <i className={skill.icon} aria-hidden="true" />
            <span>{skill.name}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
