import { useMemo } from "react";
import { useTypewriter } from "../../hooks/useTypewriter";

export type CodeToken = {
  text: string;
  className?: string;
};

type TypewriterCodeProps = {
  lines: CodeToken[][];
  speed?: number;
};

export function TypewriterCode({ lines, speed = 24 }: TypewriterCodeProps) {
  const tokens = useMemo(
    () =>
      lines.flatMap((line, index) =>
        index === 0 ? line : [{ text: "\n", className: undefined }, ...line],
      ),
    [lines],
  );

  const fullText = useMemo(
    () => tokens.map((token) => token.text).join(""),
    [tokens],
  );

  const { count, isTyping } = useTypewriter(fullText, speed);

  const offsets = useMemo(
    () =>
      tokens.map((_, index) =>
        tokens
          .slice(0, index)
          .reduce((sum, token) => sum + token.text.length, 0),
      ),
    [tokens],
  );

  const visibleTokens = useMemo(
    () =>
      tokens.map((token, index) => {
        const visibleCount = Math.min(
          Math.max(count - offsets[index], 0),
          token.text.length,
        );
        return token.text.slice(0, visibleCount);
      }),
    [tokens, offsets, count],
  );

  return (
    <>
      <span className="sr-only">{fullText}</span>
      <pre
        aria-hidden="true"
        className="min-h-[6.875rem] overflow-x-auto rounded-xl bg-zinc-100/80 p-4 text-left font-mono text-[12px] leading-relaxed text-zinc-800 ring-1 ring-zinc-200 sm:min-h-[7.25rem] sm:text-[13px] dark:bg-zinc-950 dark:text-zinc-200 dark:ring-white/10"
      >
        <code>
          {visibleTokens.map((text, index) =>
            text ? (
              <span key={index} className={tokens[index].className}>
                {text}
              </span>
            ) : null,
          )}
          {isTyping ? (
            <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 animate-pulse bg-brand-blue" />
          ) : null}
        </code>
      </pre>
    </>
  );
}
