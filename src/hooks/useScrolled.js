import { useEffect, useState } from "react";

// true once the page has been scrolled down more than `offset` pixels
export default function useScrolled(offset = 30) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > offset);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}
