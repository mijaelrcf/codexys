import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import logoNombre from "../../assets/codexys-nombre.png";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../ui/Button";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#stack", label: "Stack" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur dark:border-zinc-800 dark:bg-base-950/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Codexys — inicio">
          <img src={logoNombre} alt="Codexys" className="h-10 w-auto" />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            aria-pressed={isDark}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>

          <span className="hidden md:inline-flex">
            <Button href="#contacto" variant="primary">
              Cotizar proyecto
            </Button>
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue md:hidden dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Navegación móvil" className="border-t border-zinc-200 px-4 py-3 md:hidden dark:border-zinc-800">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#contacto" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Cotizar proyecto
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
