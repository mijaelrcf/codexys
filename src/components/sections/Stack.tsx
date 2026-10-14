import { AppWindow, Blocks, Code2, Database, FileCode2, Layers } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const mainStack = [
  {
    icon: Layers,
    name: ".NET",
    description: "Plataforma principal para APIs y sistemas robustos.",
  },
  {
    icon: FileCode2,
    name: "C#",
    description: "Lenguaje base de nuestras aplicaciones.",
  },
  {
    icon: Database,
    name: "SQL Server",
    description: "Datos relacionales con rendimiento y seguridad.",
  },
];

const secondaryStack = [
  {
    icon: Code2,
    name: "Python",
    description: "Automatización, scripts y servicios.",
  },
  {
    icon: AppWindow,
    name: "Angular",
    description: "Frontends empresariales escalables.",
  },
  {
    icon: Blocks,
    name: "React",
    description: "Interfaces modernas y dinámicas.",
  },
];

const extraStack = ["Node.js", "REST APIs", "PostgreSQL", "Docker", "Git"];

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-20 border-y border-zinc-200/70 bg-zinc-50/70 dark:border-zinc-800 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Stack tecnológico"
          title="Tecnología sólida y probada"
          description="Nuestro stack principal, con el que construimos la mayoría de los proyectos."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {mainStack.map((tech) => (
            <article
              key={tech.name}
              className="rounded-2xl border border-brand-blue/30 bg-white p-6 text-center shadow-lg shadow-brand-blue/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 dark:border-brand-blue/40 dark:bg-zinc-900/60"
            >
              <span className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
                <tech.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                {tech.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {tech.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mb-4 mt-10 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
          Además
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {secondaryStack.map((tech) => (
            <article
              key={tech.name}
              className="rounded-2xl border border-zinc-200 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <span className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/12 text-brand-blue dark:bg-brand-blue/20">
                <tech.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                {tech.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {tech.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            También trabajamos con
          </span>
          {extraStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
