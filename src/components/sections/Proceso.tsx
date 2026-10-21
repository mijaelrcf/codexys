import { RefreshCw, Rocket, Search } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    description: "Entendemos tu negocio y planificamos la arquitectura.",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Desarrollo Ágil",
    description: "Iteraciones rápidas y entregas continuas con feedback real.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Despliegue y QA",
    description: "Pruebas exhaustivas y lanzamiento.",
  },
];

export function Proceso() {
  return (
    <section id="proceso" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
        <SectionHeading
          eyebrow="Proceso"
          title="De la idea al lanzamiento en 3 pasos"
          description="Un flujo simple y transparente, sin sorpresas."
        />
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-zinc-300 md:block dark:border-zinc-700"
          />
          <ol className="relative grid gap-6 sm:gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="flex flex-col items-center text-center">
                <span className="relative z-10 mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/12 text-brand-blue ring-4 ring-base-50 sm:mb-4 sm:h-16 sm:w-16 dark:bg-brand-blue/20 dark:ring-base-950">
                  <step.icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                </span>
                <p className="text-xs font-bold tracking-[0.2em] text-brand-red">
                  PASO {step.number}
                </p>
                <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
