import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 480;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  function handleClick() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Volver arriba"
      className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 shadow-lg shadow-zinc-900/10 backdrop-blur transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-offset-base-950"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
