# Getwork Landing Page

Single-page marketing site built with Vite, vanilla JS components, and Tailwind CSS.

## Stack

- `vite` for development and production builds
- `tailwindcss` (via PostCSS) for styling
- `eslint` + `@eslint/js` for JavaScript linting
- Component-based HTML rendering in `src/components/*.js`

## Project Structure

- `index.html`: app shell with `#app` mount point
- `src/js/main.js`: imports styles + components, renders page sections (dev / empty `#app`)
- `src/prerender/getAppHtml.js`: same sections as strings for the build-time prerender plugin
- `src/components/header.js`: top navigation/header
- `src/components/hero.js`: hero section and above-the-fold content
- `src/components/services.js`: services section (below hero)
- `src/styles/tailwind.css`: Tailwind imports, base styles, utility classes
- `public/`: static assets (images, fonts)
- `eslint.config.mjs`: ESLint flat config
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow

## Getting Started

### Prerequisites

- Node.js 20+ (Node 22 used in CI)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

### Format (Prettier)

```bash
npm run format        # write
npm run format:check  # CI / verify only
```

Config: `prettier.config.mjs` — **JavaScript** (quotes, semicolons, width), **HTML** (`htmlWhitespaceSensitivity: css`, line wrapping), and **Tailwind** class sorting via `prettier-plugin-tailwindcss` + `tailwindStylesheet` pointing at `src/styles/tailwind.css` (Tailwind v4).

### Lint (ESLint)

```bash
npm run lint       # check
npm run lint:fix   # auto-fix where possible
```

Config: `eslint.config.mjs` — `@eslint/js` **recommended** rules, **Prettier** conflict rules turned off via `eslint-config-prettier`, and **language-specific** settings:

| Area | Files | Settings |
|------|--------|----------|
| Browser (Vite client) | `src/**/*.js` | `sourceType: module`, `globals: browser` |
| Node (ESM tooling) | `**/*.mjs` | `sourceType: module`, `globals: node` |
| Node (CommonJS) | `postcss.config.js`, `tailwind.config.js` | `sourceType: commonjs`, `globals: node` |

**HTML / CSS / workflow YAML** are not linted by ESLint here; use **Prettier** for formatting (`index.html`, `src/styles/tailwind.css`, etc.). Add **Stylelint** or a **YAML** ESLint plugin later if you want stricter checks.

## Build

```bash
npm run build
```

Build output is generated in `dist/`.

### Build-time prerender

Production builds inject the same HTML your components produce into `<main id="app">` via `vite-plugin-prerender-app.mjs` (uses `ssrLoadModule` on `src/prerender/getAppHtml.js`). After injection, the plugin runs **Prettier** on the final `index.html` (same options as `prettier.config.mjs`, including Tailwind class sorting) so `dist/index.html` is readable. In dev, `#app` stays empty until `src/js/main.js` runs; in production, the first paint includes the static markup and `main.js` skips re-rendering when children already exist.

## Preview Production Build

```bash
npm run preview
```

## Deployment (GitHub Pages)

This repo uses GitHub Actions to deploy the `dist/` folder to Pages.

Workflow file: `.github/workflows/deploy.yml`

### Required GitHub Settings

1. Open repository **Settings -> Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` to trigger deployment (or run workflow manually)

### Live URL

- [https://johnnaumann.github.io/getwork/](https://johnnaumann.github.io/getwork/)

## Figma MCP

You can use the **Figma MCP** via the plugin in `plugins/figma/`. Set `FIGMA_ACCESS_TOKEN` (a Figma Personal Access Token) in your environment, then use the Figma MCP from your editor to work with designs from this repo.

## Notes

- Vite `base` is configured for a project-page deployment (`/getwork/`).
- Use imported image URLs in JS components for reliable asset paths in both local and Pages builds.
