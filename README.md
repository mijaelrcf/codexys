# Codexys — Landing Page

Landing page corporativa de **Codexys** (empresa de software): propuesta de valor,
servicios, stack tecnológico, proceso de trabajo y formulario de contacto. En español,
responsive y con tema claro / oscuro.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com/) (vía `@tailwindcss/vite`)
- [Lucide React](https://lucide.dev/) para iconos (las marcas GitHub/LinkedIn son
  SVG inline porque Lucide v1 las removió)
- Formulario de contacto **mock solo frontend** (sin backend por ahora)

## Requisitos

- Node.js ≥ 22
- npm ≥ 10

## Instalación

```bash
npm install
```

## Uso

```bash
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción (tsc + vite build)
npm run preview  # previsualizar el build
npm run lint     # linter (oxlint)
```

## Estructura

```text
public/
  favicon.png            # temporal, generado desde el logo
src/
  assets/
    codexys-nombre.png   # nombre CODEXYS (transparente, Header/Footer)
    codexys-cx.png       # marca CX (transparente, Hero + favicon)
    codexys-logo.png     # logo completo (fondo negro, reservado)
  components/
    layout/
      Header.tsx         # nav sticky + toggle de tema + menú móvil
      Footer.tsx         # ©, privacidad ficticia, GitHub/LinkedIn
    sections/
      Hero.tsx           # propuesta de valor + 2 CTAs
      Servicios.tsx      # grid de 4 servicios
      Stack.tsx          # stack principal + badges extra
      Proceso.tsx        # timeline de 3 pasos
      Contacto.tsx       # título, subtítulo y formulario mock
    ui/
      Button.tsx         # variantes primary / secondary / ghost
      SectionHeading.tsx # eyebrow + título + descripción
  hooks/
    useTheme.ts          # tema dark/light + persistencia
  App.tsx
  main.tsx
  index.css              # Tailwind + tokens de marca (@theme)
index.html               # lang="es", título, script anti-FOUC de tema
AGENTS.md                # lineamientos del proyecto para agentes
```

## Secciones

| # | Bloque | Ancla |
|---|--------|-------|
| 1 | Header / Nav (Inicio, Servicios, Stack, Proceso, Contacto) | `#inicio` |
| 2 | Hero | — |
| 3 | Servicios | `#servicios` |
| 4 | Stack Tecnológico | `#stack` |
| 5 | Proceso (Descubrimiento → Desarrollo Ágil → Despliegue y QA) | `#proceso` |
| 6 | Contacto (“¿Listo para dar el siguiente paso?”) | `#contacto` |
| 7 | Footer | — |

## Tema claro / oscuro

- Toggle en el Header (iconos `Sun` / `Moon`, con `aria-label` y `aria-pressed`).
- Implementación con clase `dark` en `<html>` (`@custom-variant dark` en Tailwind v4).
- Por defecto respeta `prefers-color-scheme` y persiste en `localStorage`
  (clave `codexys-theme`); script inline en `index.html` evita el FOUC.

## Identidad y logo

- Azul eléctrico `#2E7DFF` (primario), rojo `#FF1E2D` (acento),
  fondo oscuro `#05070F` (tokens en `@theme` en `src/index.css`).
- `codexys-nombre.png` (nombre CODEXYS, transparente): Header (`h-8`) y Footer
  (`h-7`), directo sin wrappers, vale en ambos temas.
- `codexys-cx.png` (marca CX, transparente): visual del Hero y `public/favicon.png`.
- `codexys-logo.png` (logo completo, fondo negro no transparente): reservado para
  usos sobre oscuro u OG-image; si se usa en UI clara, envolver en contenedor oscuro.

## Formulario de contacto

Mock frontend con estados `idle / sending / success / error` (envío simulado con
`setTimeout`, sin backend). Campos: nombre, email, mensaje. Para conectarlo a un
backend real (Formspree, Resend, etc.), reemplazar la simulación en
`src/components/sections/Contacto.tsx`.

## Despliegue

Build estático listo para cualquier hosting (`dist/`):

```bash
npm run build
```

## Licencia

© Codexys. Todos los derechos reservados.
