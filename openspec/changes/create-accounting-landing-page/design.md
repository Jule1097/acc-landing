## Context

The landing page will live in a separate repository from the current accounting application. The approved wireframe at `Untitled-2025-11-13-1414.svg` defines the content order and broad composition, but the final page must use a light visual direction and must not depend on image assets, a logo, or product screenshots. The page is a static SPA whose only external interaction is the hero link into the accounting system.

## Goals / Non-Goals

**Goals:**

- Build a small standalone Vue 3 SPA with Composition API and TypeScript.
- Use Vite for development and production bundling, pnpm for package management, and Vercel for deployment.
- Keep the visual system intentionally small: light canvas, white surfaces, dark text, orange primary accent, and soft blue supporting accent.
- Keep user-facing content centralized so Spanish copy can be reviewed without searching through component markup.
- Make the page mobile-first, keyboard accessible, responsive, and respectful of reduced-motion preferences.
- Make the system URL environment-specific without coupling the landing page to the accounting application's implementation.

**Non-Goals:**

- No authentication, backend integration, contact form, lead capture, analytics pipeline, or CMS.
- No product dashboard embedding, screenshots, stock photography, logo creation, or image generation.
- No numeric performance claims, customer testimonials, company references, or provider-specific AI branding.
- No changes to the current Next.js application or its API contracts.

## Decisions

### Standalone Vite project

The landing page will be implemented as a standalone Vue 3 + TypeScript project initialized and bundled with Vite. Vite is preferred over introducing the page into the current Next.js application because the intended deliverable is a separate SPA with an independent Vercel deployment and no server-side behavior.

Alternative considered: adding a public route to the existing Next.js application. This would reduce repository count but would couple the marketing page to the accounting application's release and runtime concerns, which is outside the approved scope.

### Native CSS with scoped visual tokens

The page will use standard CSS rather than a utility framework. A small set of custom properties will define canvas, surface, text, muted text, border, orange accent, blue accent, spacing, radii, and content-width tokens. Components will consume those tokens instead of repeating raw values.

Alternative considered: Tailwind CSS. Tailwind would be viable, but the page has a small surface area and does not need a shared component library; native CSS keeps the new repository lean and makes the visual system easier to audit.

### Component boundaries

The page will be split into semantic components with one responsibility each:

- `LandingNavigation`: internal anchor links, the right-aligned external CTA, and a mobile-accessible navigation state.
- `LandingHero`: value proposition, supporting copy, and the visible document workflow from attachment through export.
- `FeatureSection`: the three feature blocks for AI-assisted document processing, fiscal control, and centralized/exportable information.
- `ResultsSection`: qualitative outcomes without numeric metrics.
- `LandingFooter`: copyright and any approved non-interactive closing copy.

Static copy, navigation labels, section IDs, workflow states, process steps, and the external URL configuration contract will live outside the component templates in responsibility-scoped modules.

### Operational editorial direction

The visual system will preserve the approved warm off-white, dark navy, orange, and soft blue palette while replacing generic SaaS cards with an operational editorial composition. The hero will use the provisional visible wordmark `Accountant-system` and a workflow visualization that makes the product mechanism legible: attach a document, process it, validate the information, save it when correct, and export it when ready. Thin connectors, technical metadata labels, strong display typography, and open grid compositions will provide a modern, slightly technological character without relying on screenshots or unsupported claims.

### Section anchors and navigation

The page will use stable identifiers for `inicio`, `funcionalidades`, and `resultados`. Navigation links will use hash URLs. Smooth scrolling will be implemented with CSS where supported, with a reduced-motion override that restores instant scrolling. The navigation will not contain a logo or CTA; desktop links will be visually centered or grouped without leaving a misleading empty brand slot, while mobile links will remain reachable through a compact disclosure control.

### External CTA configuration

The browser-facing configuration will expose the accounting-system URL through `VITE_SYSTEM_URL`. The build or validation step will reject an absent or malformed value for production builds. The CTA will use the configured URL and will not hardcode an environment-specific host in component markup.

The link will open in the current tab because it is the primary continuation of the landing-page journey and does not represent an auxiliary reference.

### Mobile-first layout

Base styles will target narrow viewports first. The hero will stack its content vertically, the feature blocks will form a single column, and the results statements will remain readable without horizontal scrolling. Wider breakpoints will introduce more generous spacing and multi-column arrangements only when the viewport supports them.

The layout will use a constrained reading width, fluid horizontal padding, and content-driven heights. It will avoid fixed viewport heights that could clip copy or interfere with browser UI on mobile devices.

### Accessibility and metadata

Semantic `header`, `nav`, `main`, `section`, and `footer` landmarks will define the document. One page-level `h1` will introduce the product, with section headings following a logical hierarchy. Links will have descriptive labels, focus states will be visible, and contrast will be checked against the final palette.

The document head will define Spanish title and description metadata, viewport behavior, and a deployment-appropriate canonical URL. No client-side secret will be required or embedded.

### Motion and visual treatment

The page will rely on spacing, typography, borders, soft surfaces, and restrained accent shapes for hierarchy. Decorative motion is not required. Any reveal or hover transition must be short, functional, and disabled under `prefers-reduced-motion: reduce`.

## Risks / Trade-offs

- [No visual product imagery] → The page will communicate through precise copy, typography, layout, and CSS-based visual examples; a real product screenshot can be added later as a separate scoped change if needed.
- [No measured metrics] → The results section will use qualitative outcomes only and will be reviewed to remove any wording that implies unsupported quantified impact.
- [External CTA configuration failure] → Validate the format of `VITE_SYSTEM_URL` during production build and provide a clear error before deployment.
- [Native CSS consistency] → Keep tokens centralized, use semantic class names, and verify the rendered page at mobile, tablet, and desktop widths before deployment.
- [Hash navigation and mobile disclosure state] → Ensure navigation closes after selecting a section on mobile and verify keyboard focus remains visible after navigation.

## Migration Plan

1. Create the separate Vite project with Vue 3, TypeScript, and pnpm.
2. Add the static content, visual tokens, semantic components, anchor navigation, and environment configuration described in this design.
3. Run production build, accessibility checks, responsive checks, and link validation with a staging system URL.
4. Configure the production `VITE_SYSTEM_URL` in Vercel and deploy the static SPA.
5. Roll back by redeploying the previous Vercel deployment if the landing page or external CTA fails validation; the accounting application remains unaffected.
