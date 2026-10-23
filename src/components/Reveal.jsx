import { useEffect, useRef, useState } from "react";

const canAnimate = () =>
  "IntersectionObserver" in window &&
  !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Wraps any element and fades/slides it in the first time it scrolls into view.
//   <Reveal as="article" className="project-card" index={2}>...</Reveal>
// `index` staggers items that sit next to each other in a grid or list.
export default function Reveal({
  as: Tag = "div",
  index = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [phase, setPhase] = useState(() => (canAnimate() ? "hidden" : "done"));
  const delay = Math.min(index, 8) * 0.08;

  // hidden → visible when the element enters the screen
  useEffect(() => {
    if (phase !== "hidden" || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [phase]);

  // visible → done: drop the helper classes after the animation, so the
  // element's own hover transitions are not slowed down by the reveal.
  useEffect(() => {
    if (phase !== "visible") return;
    const timer = setTimeout(() => setPhase("done"), (0.8 + delay) * 1000 + 60);
    return () => clearTimeout(timer);
  }, [phase, delay]);

  const classes = [
    className,
    phase === "hidden" && "reveal",
    phase === "visible" && "reveal visible",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ ...style, "--delay": `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
