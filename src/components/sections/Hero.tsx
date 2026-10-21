import { ArrowRight, Check } from "lucide-react";
import logoCx from "../../assets/codexys-cx.png";
import { Button } from "../ui/Button";
import { TypewriterCode, type CodeToken } from "../ui/TypewriterCode";

const trustItems = ["Respuesta en 24 h", "Propuesta a medida", "Sin compromiso"];

const punctuation = "text-zinc-500 dark:text-zinc-400";
const method = "text-blue-600 dark:text-brand-blue";
const string = "text-emerald-700 dark:text-emerald-400";

const codeLines: CodeToken[][] = [
  [{ text: "codexys", className: "text-zinc-900 dark:text-white" }],
  [
    { text: "  .crearNuevoProyecto", className: method },
    { text: "(", className: punctuation },
    { text: "\"TuNegocio\"", className: string },
    { text: ")", className: punctuation },
  ],
  [
    { text: "  .desarrollar", className: method },
    { text: "(", className: punctuation },
    { text: "\"Tu sistema a medida\"", className: string },
    { text: ")", className: punctuation },
  ],
  [
    { text: "  .desplegarSistemaEn", className: method },
    { text: "(", className: punctuation },
    { text: "\"TuDominio.com\"", className: string },
    { text: ");", className: punctuation },
  ],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-blue/15 blur-3xl dark:bg-brand-blue/20" />
        <div className="absolute -bottom-32 -right-24 h-72 w-96 rounded-full bg-brand-red/10 blur-3xl dark:bg-brand-red/15" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
            Codexys — Mejores soluciones
          </p>
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white">
            Creamos software a medida que impulsa tu negocio
          </h1>
          <p className="mt-3 max-w-xl text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
            Diseño, desarrollo y despliegue de aplicaciones web modernas. Proceso
            ágil, código limpio y lanzamiento.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button href="#contacto" variant="primary" className="px-6 py-3 text-base">
              Cotizar mi proyecto
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#servicios" variant="ghost" className="border border-zinc-300 px-6 py-3 text-base dark:border-zinc-700">
              Ver servicios
            </Button>
          </div>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 sm:mt-6">
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
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 shadow-2xl shadow-zinc-900/10 sm:p-6 dark:border-white/10 dark:bg-base-950 dark:shadow-black/50">
            <img src={logoCx} alt="Codexys" className="mx-auto h-auto w-full max-w-56 sm:max-w-xs" />
            <div className="mt-3 sm:mt-4">
              <TypewriterCode lines={codeLines} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
