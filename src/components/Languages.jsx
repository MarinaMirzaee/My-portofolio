import { languages } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Languages() {
  return (
    <section className="section languages">
      <SectionHeading tag="LANGUAGES">Languages I Speak</SectionHeading>

      <div className="language-list">
        {languages.map((language, i) => (
          <Reveal key={language} index={i}>
            {language} <span aria-hidden="true">✦</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
