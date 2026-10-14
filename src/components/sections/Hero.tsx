import { ArrowRight, Check } from "lucide-react";
import logoCx from "../../assets/codexys-cx.png";
import { Button } from "../ui/Button";

const trustItems = ["Respuesta en 24 h", "Propuesta a medida", "Sin compromiso"];

const codeSnippet = (
  <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-4 text-left font-mono text-[13px] leading-relaxed text-zinc-200 ring-1 ring-black/10 dark:ring-white/10">
    <code>
      <span className="text-brand-blue">{"const"}</span> {"producto = "}
      <span className="text-brand-red">{"await"}</span> {"codexys."}
      <span className="text-white">{"crear"}</span>
      {"({\n"} {"  idea: "}
      <span className="text-emerald-400">{"\"tu negocio\""}</span>
      {",\n"} {"  entrega: "}
      <span className="text-emerald-400">{"\"ágil\""}</span>
      {",\n"} {"  calidad: "}
      <span className="text-emerald-400">{"\"QA total\""}</span>
      {"\n});"}
    </code>
  </pre>
);

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-blue/15 blur-3xl dark:bg-brand-blue/20" />
        <div className="absolute -bottom-32 -right-24 h-72 w-96 rounded-full bg-brand-red/10 blur-3xl dark:bg-brand-red/15" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
            Codexys — Mejores soluciones
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            Creamos software a medida que impulsa tu negocio
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Diseño, desarrollo y despliegue de aplicaciones web modernas. Proceso
            ágil, código limpio y lanzamiento sin fricciones.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto" variant="primary" className="px-6 py-3 text-base">
              Cotizar mi proyecto
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#servicios" variant="ghost" className="border border-zinc-300 px-6 py-3 text-base dark:border-zinc-700">
              Ver servicios
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                <Check className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-brand-blue/25 via-transparent to-brand-red/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl shadow-zinc-900/10 dark:border-white/10 dark:bg-base-950 dark:shadow-black/50">
            <img src={logoCx} alt="Codexys" className="mx-auto h-auto w-full max-w-xs" />
            <div className="mt-4">{codeSnippet}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
