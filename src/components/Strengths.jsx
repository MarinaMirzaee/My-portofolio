import { strengths } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Strengths() {
  return (
    <section className="section strengths">
      <SectionHeading tag="PERSONAL SKILLS">More Than Just Code</SectionHeading>

      <div className="strengths-grid">
        {strengths.map((item, i) => (
          <Reveal as="article" key={item.title} index={i}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
