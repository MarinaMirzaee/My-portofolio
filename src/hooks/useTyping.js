import { useEffect, useState } from "react";

// Types `text` out letter by letter and returns what has been typed so far.
export default function useTyping(text, startDelay = 700, speed = 55) {
  const reduceMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  const [count, setCount] = useState(reduceMotion ? text.length : 0);

  useEffect(() => {
    if (reduceMotion) return;

    let i = 0;
    let timer;
    const type = () => {
      i += 1;
      setCount(i);
      if (i < text.length) timer = setTimeout(type, speed);
    };
    timer = setTimeout(type, startDelay);

    return () => clearTimeout(timer);
  }, [text, startDelay, speed, reduceMotion]);

  return text.slice(0, count);
}
