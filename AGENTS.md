# AGENTS.md

- This file is allways your entry point, re-read it when is necessary.
- NEVER ADD COMMENTS ON CODE, its not neccessary. The name methods should explain by itself.
- Do not use magic strings or magic numbers in code. Reuse an existing constant from `src/lib/constants/` or add a responsibility-scoped constant there before using a repeated, domain, configuration, protocol, or user-facing value.
- Check ARCHITECTURE.md file to know about the folder structure. Never modify any of this markdown files without explicit user approval.

## Project overview

ACC is a Spanish-language accounting-system landing page built with Vue 3, Vite, TypeScript, Tailwind CSS, and Zod.

## Tooling and commands

- Use `pnpm` for all package management tasks. Do not introduce npm, yarn, or bun lockfiles.
- `pnpm dev` starts the local Vite development server.
- `pnpm type-check` runs strict Vue and TypeScript checks.
- `pnpm build` runs type-checking and creates the production bundle in `dist/`.
- `pnpm preview` serves the production bundle locally.

## Code practices

- Prefer Vue single-file components with `<script setup lang="ts">`.
- Keep components focused and move reusable UI into `src/components/`.
- Keep domain types and validation schemas close to the feature that owns them.
- Use Zod at external-data boundaries such as forms, query parameters, and API responses. Do not use `as` to bypass validation.
- Keep TypeScript strict. Avoid `any`, `unknown,`, do not use `as` to bypass validation, and non-null assertions unless there is a documented reason.
- Use the `@/` alias for imports from `src/`.
- Keep user-facing copy in Spanish unless a product requirement says otherwise.
- Make all methods and components reusable, and modularized. 
- Apply SOLID design
- Use `camelCase` for variables, functions, methods, properties.
- Use `PascalCase` for components, classes, DTOs, types, interfaces, enums.
- Use descriptive names. Avoid abbreviations that are not already established in the codebase.
- Keep methods small and focused on one responsibility.
- **Zero Nested IFs:** Nested `if` statements (`if` inside an `if`) are strictly prohibited across all codebase layers (frontend and backend). Whenever conditional depth is required, you **must** extract the logic into a modular helper function located in `src/lib/helpers/`. Always check for guard clauses first.
- **Reuse First Policy:** Before implementing any new utility, validation, or helper method, you **must** review existing codebase modules to reuse available methods. Only generate a new one if no suitable reusable method exists.
- Do not leave dead code, commented-out code, debug logs, temporary TODOs, or unused exports.

## Styling

- Tailwind CSS is integrated through the official Vite plugin and imported from `src/style.css`.
- Prefer expressive utility classes and shared component styles over scattered inline styles.
- Keep responsive behavior intentional: check narrow mobile, tablet, and wide desktop layouts.
- Preserve accessible contrast, visible focus states, semantic HTML, keyboard navigation, and descriptive labels.

## OpenSpec workflow

- Treat the existing `openspec/` directory as project history and source-of-truth specifications.
- For meaningful product or architecture changes, update or create the corresponding OpenSpec change before implementation.
- Keep proposals, designs, specifications, and task lists consistent with the implementation.

## Git and delivery

- Work on a descriptive feature branch; the project initialization branch is `init/project-initialitation`.
- Keep commits small and focused when commits are requested.
- Before handing off changes, run `pnpm type-check` and `pnpm build`.
- Do not commit generated output such as `dist/` or `node_modules/`.

## Deployment

- Vercel uses `vercel.json`, the `pnpm build` command, and the `dist` output directory.
- The rewrite in `vercel.json` keeps client-side SPA routes working on direct navigation
