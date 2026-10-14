type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">{description}</p>
      ) : null}
    </div>
  );
}
