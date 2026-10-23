import { useEffect, useRef, useState } from "react";

const canAnimate = () =>
  typeof window !== "undefined" &&
  "IntersectionObserver" in window &&
  !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

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
