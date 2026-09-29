## 1. Project Setup

- [x] 1.1 Create the standalone Vue 3 + TypeScript project with Vite and pnpm.
- [x] 1.2 Configure the Vite build, local development command, production build command, and Vercel-compatible output.
- [x] 1.3 Add the environment configuration contract for `VITE_SYSTEM_URL` and production validation for missing or malformed values.
- [x] 1.4 Establish the source structure for semantic landing components, centralized Spanish content, visual tokens, and shared configuration.

## 2. Content and Visual System

- [x] 2.1 Add centralized Spanish copy for the hero, navigation, features, qualitative results, CTA, and footer.
- [x] 2.2 Define the light visual tokens for canvas, surfaces, text, muted text, borders, orange accent, blue accent, spacing, radii, and content widths.
- [x] 2.3 Add base typography, reset styles, focus styles, responsive spacing, and reduced-motion rules.
- [x] 2.4 Verify that the page uses no logo, image asset, screenshot, stock photography, provider-specific AI name, company name, or fabricated numeric metric.

## 3. Test-First Behavior Contracts

- [x] 3.1 Add failing tests for the required section order, stable section IDs, navigation labels, and Spanish content before implementing the landing components.
- [x] 3.2 Add failing tests for the hero CTA label, configured external URL, current-tab navigation, and invalid URL configuration behavior.
- [x] 3.3 Add failing tests for the three feature capabilities, generic AI-assisted document-processing copy, export-for-accountants messaging, and qualitative results copy.
- [x] 3.4 Add failing tests for mobile navigation behavior, keyboard-accessible controls, and reduced-motion-safe navigation behavior where the selected test tooling supports them.

## 4. Landing Page Implementation

- [x] 4.1 Implement the semantic page shell with `header`, `nav`, `main`, `section`, and `footer` landmarks.
- [x] 4.2 Implement internal anchor navigation for `Inicio`, `Funcionalidades`, and `Resultados`, including the mobile disclosure state and close-on-selection behavior.
- [x] 4.3 Implement the hero with the approved Spanish value proposition, supporting copy, and single external `Ingresar al sistema` CTA.
- [x] 4.4 Implement the three-feature section for AI-assisted document processing, fiscal control, and centralized/exportable accounting information.
- [x] 4.5 Implement the qualitative results section without numeric performance claims.
- [x] 4.6 Implement the footer with only approved closing content and no unapproved branding or links.
- [x] 4.7 Make the component styles mobile-first and responsive across mobile, tablet, and desktop widths without horizontal overflow.
- [x] 4.8 Replace generic hero artwork with a domain-specific document workflow visualization and visible process strip.
- [x] 4.9 Add the provisional `Accountant-system` wordmark and operational editorial visual direction while preserving the approved palette.

## 5. Accessibility and Metadata

- [x] 5.1 Add the Spanish document title, meta description, viewport metadata, and deployment-appropriate canonical URL strategy.
- [x] 5.2 Verify heading hierarchy, landmark structure, accessible link names, keyboard order, visible focus states, and color contrast.
- [x] 5.3 Verify reduced-motion behavior and ensure no required interaction depends on decorative animation.

## 6. Verification and Deployment

- [x] 6.1 Run the automated test suite and update implementation until all landing-page behavior tests pass.
- [x] 6.2 Run the production build with a valid staging system URL and verify the generated CTA target.
- [ ] 6.3 Verify responsive layouts and anchor navigation on representative mobile, tablet, and desktop viewports.
- [x] 6.4 Verify there are no image requests, exposed secrets, unsupported claims, or provider-specific AI references in the production output.
