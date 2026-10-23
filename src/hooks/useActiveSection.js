import { useEffect, useState } from "react";

// Returns the id of the section that is currently in the middle of the screen.
// `ids` must be a stable array (define it outside the component).
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
