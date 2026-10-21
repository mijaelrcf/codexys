import { useEffect, useState } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useTypewriter(text: string, speed = 24, loopDelay = 2200) {
  const total = text.length;
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(() => (prefersReducedMotion() ? total : 0));

  useEffect(() => {
    const id = window.setTimeout(() => setStarted(true), 250);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!started || count >= total) return;
    const delay = text[count] === "\n" ? speed * 5 : speed;
    const id = window.setTimeout(
      () => setCount((value) => Math.min(value + 1, total)),
      delay,
    );
    return () => window.clearTimeout(id);
  }, [started, count, text, speed, total]);

  useEffect(() => {
    if (!started || count < total || prefersReducedMotion()) return;
    const id = window.setTimeout(() => setCount(0), loopDelay);
    return () => window.clearTimeout(id);
  }, [started, count, total, loopDelay]);

  return { count, isTyping: count < total };
}
