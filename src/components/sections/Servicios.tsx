import { AppWindow, Globe, Palette, Server } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Sitios y aplicaciones web rápidas, responsive y optimizadas para convertir visitas en clientes.",
  },
  {
    icon: AppWindow,
    title: "Apps a Medida",
    description:
      "Sistemas y paneles a medida que automatizan tu operación y escalan con tu negocio.",
  },
  {
    icon: Server,
    title: "APIs & Cloud",
    description:
      "Arquitectura sólida, integraciones y despliegues continuos sin fricción.",
  },
  {
    icon: Palette,
    title: "UI / UX",
    description:
      "Interfaces limpias y memorables, del prototipo al producto final con tu marca.",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que tu proyecto necesita"
          description="Acompañamiento completo: del diseño al despliegue, con un solo equipo responsable."
        />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 focus-within:ring-2 focus-within:ring-brand-blue sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:shadow-brand-blue/20"
            >
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/12 text-brand-blue sm:mb-4 dark:bg-brand-blue/20">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
