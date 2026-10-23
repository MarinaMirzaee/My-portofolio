import Reveal from "./Reveal";

// The small label + big title shown at the top of every section.
export default function SectionHeading({ tag, children }) {
  return (
    <>
      <Reveal as="p" className="tag" index={0}>
        {tag}
      </Reveal>
      <Reveal as="h2" index={1}>
        {children}
      </Reveal>
    </>
  );
}
