import { useEffect, useRef } from "react";

// The thin aqua bar at the very top that shows how far the page is scrolled.
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = percent + "%";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />;
}
