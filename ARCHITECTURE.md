# Architecture

## Overview

ACC is a client-side landing page built as a Vue 3 single-page application. Vite is responsible for development and production bundling, TypeScript provides static typing, Tailwind CSS provides the styling system, and Zod validates data at application boundaries.

The repository is organized around three concerns:

1. Application code lives in `src/`.
2. Tooling and deployment configuration lives at the repository root.
3. Product specifications and AI-assisted workflows live in `openspec/` and `.agents/`.

## Folder structure

```text
.
|-- .agents/
|   \-- skills/                         # OpenSpec workflows configured for Codex
|-- openspec/
|   |-- changes/                        # Product and implementation changes
|   |   \-- create-accounting-landing-page/
|   |       |-- specs/                  # Change-specific requirements
|   |       |-- design.md               # Design decisions and technical approach
|   |       |-- proposal.md             # Change intent and scope
|   |       \-- tasks.md                # Implementation checklist
|   \-- config.yaml                     # OpenSpec project configuration
|-- src/
|   |-- App.vue                         # Application root and page composition
|   |-- lib/
|   |   |-- constants/
|   |   |   \-- product/
|   |   |       \-- product.ts          # Product constants
|   |   \-- product/
|   |       \-- product.ts              # Validated product data
|   |-- schemas/
|   |   \-- product/
|   |       \-- product.ts              # Product validation schema
|   |-- main.ts                         # Vue application bootstrap
|   \-- style.css                       # Global CSS and Tailwind entrypoint
|-- AGENTS.md                           # Repository instructions for coding agents
|-- ARCHITECTURE.md                     # This document
|-- index.html                          # Vite HTML entrypoint and page metadata
|-- package.json                        # Scripts and dependency manifest
|-- pnpm-lock.yaml                      # Reproducible dependency versions
|-- tsconfig*.json                      # TypeScript configurations
|-- vercel.json                         # Vercel build and SPA routing configuration
\-- vite.config.ts                     # Vite, Vue, Tailwind, and path alias setup
```

`node_modules/` and `dist/` are generated locally and are intentionally excluded from version control.

## Application architecture

The runtime entrypoint is `index.html`, which loads `src/main.ts`. The bootstrap file imports the global stylesheet, creates the Vue application, and mounts `App.vue` into `#app`.

`App.vue` is currently the page-level composition root. As the landing page grows, presentational sections should be extracted into `src/components/` and composed from `App.vue` rather than allowing the root component to become monolithic.

Recommended application structure as features are added:

```text
src/
├── components/       # Reusable visual components and landing-page sections
├── composables/       # Reusable Vue composition functions
├── lib/               # Framework-agnostic utilities, function helpers and integrations
├── schemas/           # Zod schemas for forms and external data
├── types/             # Shared TypeScript domain types
├── assets/            # Imported images, icons, and fonts
├── App.vue
├── main.ts
└── style.css
```

Only folders that are needed should be created. Avoid adding empty organizational folders prematurely.

## Naming and nesting rules

- The top-level folder under `src/` communicates the responsibility: `components/`, `composables/`, `lib/`, `schemas/`, `types/`, or `assets/`.
- Group related files in a subfolder named after the feature or domain entity, such as `product/`.
- Name the implementation file after the feature or entity without repeating the responsibility in the filename. Use `src/schemas/product/product.ts`, not `src/schemas/product.schema.ts`.
- Apply the same rule to constants, types, composables, and reusable components. For example, use `src/lib/constants/product/product.ts` and `src/components/hero/Hero.vue`.
- Use `PascalCase` for Vue component filenames and `camelCase` for TypeScript module filenames.
- Do not create a subfolder only to hold one file unless the folder represents a meaningful domain boundary or is part of the established responsibility structure.

## Dependency boundaries

- Vue components own UI composition and interaction state.
- Tailwind classes and `src/style.css` own visual presentation.
- Zod schemas validate form input, URL parameters, and any data received from outside the component tree.
- Vite owns bundling, development server behavior, and the `@/` alias to `src/`.
- OpenSpec artifacts describe intended product and implementation changes; they are not runtime application code.

## Data and navigation flow

```text
Browser request
    ↓
Vercel rewrite → index.html
    ↓
src/main.ts
    ↓
App.vue → page sections in src/components/
    ↓
User interaction → local component state / composables
    ↓
External input → Zod schema → typed application data
```

The application is currently static and client-rendered. If a backend or external service is introduced, keep its client and response schemas in `src/lib/` and `src/schemas/`, respectively, instead of coupling network logic directly to visual components.

## Configuration and deployment

- `vite.config.ts` registers the Vue and Tailwind Vite plugins and exposes the `@/` import alias.
- `vercel.json` runs `pnpm build`, publishes `dist/`, and rewrites client-side routes to `index.html`.
- `tsconfig.app.json` type-checks application files; `tsconfig.node.json` type-checks Vite configuration.
- `package.json` is the source of truth for development and validation commands.

Before handing off changes, run:

```bash
pnpm type-check
pnpm build
```

## Change workflow

For meaningful product or architectural changes:

1. Update or create the relevant OpenSpec change under `openspec/changes/`.
2. Implement application changes inside the appropriate `src/` boundary.
3. Run type-checking and the production build.
4. Update this document when folder responsibilities or runtime boundaries change.
