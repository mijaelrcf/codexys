# Codexys — Landing Page

Landing page corporativa de **Codexys** (empresa de software): propuesta de valor,
servicios, stack tecnológico, proceso de trabajo y formulario de contacto. En español,
responsive y con tema claro / oscuro.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com/) (vía `@tailwindcss/vite`)
- [Lucide React](https://lucide.dev/) para iconos (las marcas GitHub/LinkedIn/WhatsApp son
  SVG inline porque Lucide v1 no incluye iconos de marcas comerciales)
- Integración directa con **WhatsApp** para contacto (redirección `wa.me` con mensaje estructurado)

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
  favicon.png            # generado desde la marca CX
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
      Stack.tsx          # principal .NET/C#/SQL Server + secundario + extras
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
- `codexys-nombre.png` (nombre CODEXYS sin slogan, transparente): Header (`h-10`,
  barra `h-16`) y Footer (`h-8`), directo sin wrappers, vale en ambos temas.
- `codexys-cx.png` (marca CX, transparente): visual del Hero y `public/favicon.png`.
- `codexys-logo.png` (logo completo, fondo negro no transparente): reservado para
  usos sobre oscuro u OG-image; si se usa en UI clara, envolver en contenedor oscuro.

## Contacto y WhatsApp

La sección de contacto redirige de forma fluida a WhatsApp:
- **Formulario estructurado:** solicita nombre, email y mensaje del proyecto; al enviar, construye un mensaje estructurado y abre automáticamente `https://wa.me/<NUMERO>?text=...` en una nueva pestaña, ofreciendo también un botón de respaldo en caso de que el navegador bloquee la ventana emergente.
- **Atención directa rápida:** botón en la columna informativa para abrir chat instantáneo sin llenar el formulario.
- **Configuración:** el número de WhatsApp se puede definir en `src/config/contact.ts` o configurando la variable de entorno `VITE_WHATSAPP_PHONE` (formato internacional sin signos `+`, por ejemplo `59170000000`).

## Despliegue

Build estático (`dist/`), sin routing de servidor (navegación por anclas `#`),
listo para cualquier hosting estático.

```bash
npm run build
```

### Cloudflare Pages

- Método: conectar el repo de GitHub (o subir `dist/` manualmente).
- Preset de framework: **Vite**.
- Comando de build: `npm run build` — directorio de salida: `dist`.
- No requiere variables de entorno ni reglas de redirección.

## Licencia

© Codexys. Todos los derechos reservados.
