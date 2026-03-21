import { useEffect, useState } from "react";

export function useScrolled() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let timeout;

    const handler = () => {
      setScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setScrolling(false), 150);
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      clearTimeout(timeout);
    };
  }, []);

  return scrolling;
}