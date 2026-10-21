# AGENTS.md — Codexys Landing Page

Este archivo define los lineamientos del proyecto para agentes y contribuidores.
Prevalece sobre convenciones genéricas en caso de conflicto.

## 1. Proyecto

Landing page corporativa de **Codexys** (empresa de software), en español.
Single-page con 7 bloques, en este orden:

1. `Header / Nav` — minimalista, sticky
2. `Hero` — propuesta de valor + 2 CTAs
3. `Servicios` — grid de cards
4. `Stack Tecnológico` — badges/grid
5. `Proceso` — timeline horizontal de 3 pasos:
   - Paso 1: Descubrimiento (entendemos tu negocio y planificamos la arquitectura)
   - Paso 2: Desarrollo Ágil (iteraciones rápidas y entregas continuas con feedback real)
   - Paso 3: Despliegue y QA (pruebas exhaustivas y lanzamiento)
6. `Contacto / Conversión` — Título: "¿Listo para dar el siguiente paso?",
   Subtítulo: "Cuéntanos sobre tu proyecto y recibe una propuesta a la medida.",
   Formulario limpio (nombre, email, mensaje)
7. `Footer` — © Codexys, enlace ficticio de política de privacidad,
   enlaces a GitHub y LinkedIn

## 2. Stack decidido

- **Vite + React + TypeScript** (strict)
- **Tailwind CSS v4** (vía `@tailwindcss/vite`, theme en CSS con `@theme`)
- **Lucide React** para iconos. No usar emojis en la UI.
- Formulario de contacto **mock solo frontend** (validación + estado de éxito simulado,
  sin backend por ahora).

## 3. Comandos

```bash
npm run dev      # desarrollo
npm run build    # build producción (tsc + vite build)
npm run preview  # previsualizar build
npm run lint     # linter (oxlint)
```

## 4. Estructura de carpetas

```text
public/
  favicon.png (temporal, generado desde el logo)
src/
  assets/
    codexys-nombre.png  # nombre CODEXYS (transparente, Header/Footer)
    codexys-cx.png      # marca CX (transparente, Hero + favicon)
    codexys-logo.png    # logo completo (fondo negro, reservado)
  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Servicios.tsx
      Stack.tsx
      Proceso.tsx
      Contacto.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
  App.tsx
  main.tsx
  index.css           # Tailwind + tokens de marca
index.html            # lang="es", título Codexys
AGENTS.md
README.md             # creado a petición del usuario al cierre (2026-10-13)
```

Reglas:

- Un componente por archivo, componentes funcionales.
- Nombres de código en inglés (`Contacto.tsx` se permite por ser sección en español,
  pero preferir `Contact.tsx` si se empieza de cero — no renombrar sin pedirlo).
- No crear archivos `*.md` adicionales sin pedirlo explícitamente.

## 5. Identidad visual / Tema

Logo (en `src/assets/`, todos con fondo transparente salvo el completo):

- `codexys-nombre.png` — nombre CODEXYS, uso en Header (`h-10 w-auto`, barra `h-16`)
  y Footer (`h-8 w-auto`), directo sin wrappers (vale en ambos temas).
- `codexys-cx.png` — marca CX, uso en Hero (`max-w-xs` dentro de card oscura)
  y como `public/favicon.png`.
- `codexys-logo.png` — logo completo (fondo negro no transparente), reservado
  para usos sobre oscuro u OG-image. Si se usa en UI clara, envolver en
  contenedor oscuro.

Paleta base (Tailwind v4, definir en `@theme` en `src/index.css`):

- `--color-brand-blue: #2E7DFF` — azul eléctrico (primario)
- `--color-brand-red: #FF1E2D` — rojo (acento / CTAs secundarios)
- `--color-base-950: #05070F` — fondo base en tema oscuro
- Texto sobre oscuro: `zinc-100 / zinc-400` para secundario
- Tema claro: fondo `white / zinc-50`, texto `zinc-900 / zinc-600`.
  Los acentos de marca se mantienen iguales en ambos temas.

Dual theme claro / oscuro (obligatorio):

- Toggle visible en `Header` (botón con iconos `Sun` / `Moon` de `lucide-react`,
  con `aria-label` y `aria-pressed`).
- Implementación: clase `dark` en `<html>` (`@custom-variant dark` en Tailwind v4),
  estilos con variantes `dark:`.
- Default: `prefers-color-scheme`; persistir elección en `localStorage`
  (clave `codexys-theme`), sin FOUC (script inline mínimo en `index.html` si hace falta).
- Todos los bloques (Header, Hero, Servicios, Stack, Proceso, Contacto, Footer)
  deben verse bien en ambos temas, contraste objetivo AA.

Reglas de uso del logo:

- `codexys-nombre.png` y `codexys-cx.png` son transparentes: van directos,
  sin wrappers, y valen en ambos temas.
- `codexys-logo.png` tiene fondo negro: **nunca renderizarlo directo sobre
  fondo claro**. Si se usa, envolverlo en contenedor oscuro
  (`bg-base-950 rounded-*`).
- Contraste objetivo AA. Focos visibles (`focus-visible:ring`).
- Mobile-first, responsive. Slogan del logo "MEJORES SOLUCIONES" no es obligatorio en UI.

## 6. Convenciones de código

- TypeScript estricto: props tipadas, evitar `any`.
- Tailwind utility-first. Tokens de marca vía `@theme`, no valores hardcodeados
  sueltos (`text-[#2E7DFF]` solo como excepción puntual).
- Iconos: solo `lucide-react` (`Search`, `Code2`, `Rocket`, `Sun`, `Moon`, `Menu`, etc.).
  Excepción: `Github` / `Linkedin` ya no existen en `lucide-react` (removidos en v1),
  usar mini-componentes SVG inline en `Footer.tsx` solo para esas marcas.
- Accesibilidad mínima:
  - `header / main / section / footer`, un solo `h1` en Hero.
  - `label` en cada campo del form, `alt="Codexys"` en logo.
  - Navegación por teclado funcional, menú móvil con `aria-expanded`.
- UI en español. Código, props y comentarios en inglés.
- Formularios: validación nativa + controlada, estados `idle / sending / success / error`
  para el mock (simular envío con `setTimeout`).

## 7. Skills

Activos para este proyecto (verificados Paso 2, 2026-10-13):

- `frontend-design` (local) — dirección estética no genérica, se aplica a
  Hero/Servicios/Stack/Proceso/Contacto para evitar look plantilla.
- `vercel-react-best-practices` (local) — performance React: barrel imports,
  memo, conditional render con ternario, hoist JSX estático, etc.
- `find-skills` — búsqueda ejecutada: `react`, `tailwind`, `vercel`,
  `best-practices` sin resultados; `web design` solo devolvió skills de
  diseño genérico. No se instala skill extra de React/Tailwind por ahora
  (no hay skill específico de Tailwind con calidad suficiente).
  Opcional pendiente de aprobación: `vercel-labs/agent-skills@web-design-guidelines`
  (730K installs, fuente oficial Vercel) — instalar solo si el usuario lo pide
  con `npx skills add vercel-labs/agent-skills@web-design-guidelines -g -y`.

## 8. Flujo de trabajo con el usuario

- Avance **por pasos con OK explícito** del usuario antes de seguir al siguiente.
- Pasos: 1. AGENTS.md → 2. Skills → 3. Scaffold → 4. Base+Header/Footer →
  5. Hero+Servicios → 6. Stack+Proceso → 7. Contacto+QA (+ extras: nav Inicio, README).
- Si algo no queda OK, corregir en el mismo paso hasta aprobar.
- Antes de cada `commit` (solo si se pide): `git status`, `git diff`, staging selectivo,
  sin secretos. No hacer push/PR salvo petición explícita.
- Verificar con `npm run build` al cerrar cada paso de implementación.
