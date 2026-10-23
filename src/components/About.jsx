import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section about" id="about">
      <SectionHeading tag="ABOUT ME">
        Turning Ideas Into <span>Web Experiences.</span>
      </SectionHeading>

      <Reveal as="p" index={2}>
        I am a Junior Frontend Developer passionate about web development,
        technology, and continuous learning. I enjoy creating clean, responsive,
        and user-friendly interfaces using modern frontend technologies. I
        believe in teamwork, communication, and solving problems step by step.
      </Reveal>
    </section>
  );
}
