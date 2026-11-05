import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & (
  | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-base-950";

const variantStyles: Record<Variant, string> = {
  primary: "bg-brand-blue text-white hover:brightness-110 focus-visible:ring-brand-blue",
  secondary: "bg-brand-red text-white hover:brightness-110 focus-visible:ring-brand-red",
  ghost:
    "text-zinc-700 hover:bg-zinc-100 focus-visible:ring-brand-blue dark:text-zinc-200 dark:hover:bg-zinc-800",
  whatsapp:
    "bg-[#128C7E] text-white hover:bg-[#0e7467] active:bg-[#0a5c52] shadow-md shadow-[#128C7E]/25 focus-visible:ring-[#128C7E]",
};

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
