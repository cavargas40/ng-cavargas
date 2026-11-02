# Design: Recruiter-Ready Staff Engineer CV & Expanded Ecosystem

## Context

The current application renders a single-page interactive storytelling experience inside `ContentLayoutComponent`. The layout includes an ambient Matrix rain canvas, a live laser scroll spine, and a floating telemetry HUD.

The site is localized using `@ngx-translate`. All engineering capability pillars and case files are defined as strongly typed constants in `src/app/core/constants/resume.constants.ts`.

See `proposal.md` for the business motivation and target role positioning.

## Goals / Non-Goals

**Goals:**
- Present candidate as a Staff Fullstack & AI Systems Engineer with direct recruiter logistics (Open to Remote Worldwide, New Zealand Timezone).
- Remove personal portrait photo from About section and replace with an operator terminal telemetry card.
- Replace legacy favicon with a Matrix-styled `[CV]` icon in phosphor green on void black.
- Remove all "polyglot" buzzword phrasing across the site, replacing it with clear, concrete architectural descriptions ("distributed microservices", "reactive web architecture").
- Remove Portuguese (`pt`) from active language switcher options in the navbar, maintaining English, Spanish, and Japanese (`en`, `es`, `ja`).
- Pin navigation header permanently on desktop viewports (`position: fixed`) so it remains visible and accessible while scrolling through chapters.
- Expand capability pillars from 4 to 5 distinct tiers to surface daily-driver technologies: Rust, Golang, TypeScript, NestJS, Kafka, GraphQL, gRPC, TypeORM, AWS, Azure, Terraform, Bicep, DRY CI/CD pipelines, Vite, Playwright, and Cypress.
- Add a 5th production case study for Cloud Infrastructure & Unified Reusable CI/CD.
- Add realistic engineering benchmarks to all case studies (e.g. 40%+ pipeline maintenance reduction, sub-second latency, zero regressions, 100% test pass rate).
- Provide a clean print-to-PDF stylesheet via `@media print` so printing produces an elegant, multi-page paper resume.

**Non-Goals:**
- Implementing an external server endpoint or generating a static binary `.pdf` file.
- Altering the standalone utility routes (`/crypto`, `/3d`).
- Removing the interactive Matrix visual theme for on-screen web viewers.

## Decisions

### Decision 1: Restructure Capability Pillars into 5 Tiers
- **Approach**: Update `CapabilityPillar` interface and `CAPABILITY_PILLARS` constant in `src/app/core/constants/resume.constants.ts`. Introduce 5 pillar IDs:
  1. `ai`: AI Systems & Agent Harnesses
  2. `systems`: Systems & Core Languages (Rust, Go, TypeScript, Node.js, C# / .NET)
  3. `backend`: Backend, APIs & Event Streaming (NestJS, Kafka, GraphQL, gRPC, TypeORM, Postgres, Redis)
  4. `cloud`: Cloud Infrastructure, IaC & CI/CD (AWS, Azure, Terraform, Bicep, ADO/GitHub/Bitbucket DRY pipelines)
  5. `frontend`: Modern Frontend & Test Automation (Angular, React, Vue.js, Vite, Playwright, Cypress, SCSS, i18n)
- **Rationale**: Groups skills logically by engineering layer, allowing both technical hiring managers and automated ATS scanners to identify relevant skills quickly.
- **Alternatives Considered**: Keeping 4 pillars and cramming new keywords inside them was rejected because it obscured systems languages (Rust/Go) and event streaming (Kafka).

### Decision 2: Add 5th Case Study & Quantified Impact Metrics
- **Approach**: Add `CLOUD_IAC_PIPELINES` to `ENGINEERING_CASE_STUDIES` in `resume.constants.ts`. Update category types to include `'cloud' | 'ai' | 'distributed' | 'fullstack'`.
- **Rationale**: Demonstrates senior DevOps and infrastructure automation alongside application development. Showcases reusable pipeline architecture across major CI/CD engines.
- **Alternatives Considered**: Merging cloud pipelines into the Rappi case study was rejected because the pipeline work represents a distinct cross-platform architectural achievement.

### Decision 3: Print-to-PDF Layout via Global Print Stylesheet
- **Approach**: Add dedicated `@media print` stylesheet rules in `src/app/styles/main.scss`.
  - Hide non-printable elements: `#matrix-canvas`, `.story-spine-track`, `.telemetry-hud`, `.top-progress-bar`, `.crt-overlay`, `.hero__cta-group`, navigation actions, and buttons.
  - Reset color palette: Set page background to `#ffffff`, text to `#111111`, borders to `#e0e0e0`.
  - Configure page breaks: Set `page-break-inside: avoid` on cards and `page-break-before: always` on major chapters where appropriate.
- **Rationale**: Keeps component SCSS files well within the strict 6KB/10KB Angular budget, while allowing recruiters to use browser-native printing (`Cmd + P`) to generate a clean PDF.
- **Alternatives Considered**: Generating a client-side PDF via `jspdf` was rejected to avoid adding unnecessary heavy dependencies (saving ~300KB in bundle size).

### Decision 4: Recruiter Logistics & Terminal Operator Identity (No Personal Photo)
- **Approach**: In `about-me.component.html`, remove `<img>` (`about-me.jpg`) and replace the photo container with an operator telemetry card displaying:
  - Header: `[OPERATOR // IDENTITY_RECORD]`
  - Fields: `ROLE`, `AVAILABILITY: Open to Remote (Worldwide)`, `TIMEZONE: New Zealand (UTC+12 / UTC+13)`.
  - Direct email and LinkedIn / GitHub social buttons.
  - Keep personal home address omitted.
- **Rationale**: Removes unconscious demographic bias during recruiter evaluation, strengthens the engineer persona, and surfaces critical hiring parameters immediately.

### Decision 5: Matrix-Themed [CV] Favicon
- **Approach**: Replace `src/favicon.ico` with an ICO/SVG icon featuring high-contrast phosphor green `[CV]` glyphs on a deep `#0d1117` background.
- **Rationale**: Reinforces that the entire site is the candidate's living CV directly in browser tabs and bookmarks.

### Decision 6: Fixed Desktop Navigation Header
- **Approach**: In `src/app/layout/nav/nav.component.scss`, ensure `.navbar` uses `position: fixed; top: 0; left: 0; right: 0; width: 100%; z-index: 100` on desktop viewports (`tab-land` and above), and adjust `.site-main` in `content-layout.component.scss` with corresponding top padding.
- **Rationale**: Ensures the navigation links and brand remain immediately accessible regardless of scroll depth, preventing erratic sticky unpinning on high-resolution displays.

### Decision 7: Streamline Active Languages and Remove "Polyglot" Wording
- **Approach**:
  - Update `LanguageSwitcherComponent.languages` to include only English (`en`), Spanish (`es`), and Japanese (`ja`).
  - Replace all occurrences of "polyglot" across `resume.constants.ts` and translation JSON files with clear architectural descriptions ("distributed microservices", "reactive web architecture").
- **Rationale**: Focuses user choice on candidate's primary fluent languages and removes unhelpful recruitment buzzwords in favor of concrete engineering descriptions.

### Decision 8: OpenGraph Telemetry Metadata & Gravatar Photo Purge
- **Approach**: Replace Gravatar photo URL in `src/index.html` `og:image` with a Matrix telemetry banner asset and update `og:description` and page `description` to "Staff Fullstack & AI Systems Engineer".
- **Rationale**: Eliminates unconscious demographic bias during recruiter evaluation when sharing or unfurling URLs across LinkedIn, Slack, and recruitment ATS platforms.

### Decision 9: Client Locale Storage Validation & Legacy Migration
- **Approach**: In `LanguageSwitcherComponent.loadLanguage()`, validate `localStorage.getItem('lang')`. If the stored value is not one of `['en', 'es', 'ja']` (e.g. legacy `'pt'` or invalid keys), sanitize and reset `localStorage.setItem('lang', 'en')` and load English. Wrap access in a defensive try/catch.
- **Rationale**: Prevents returning users or recruiters whose browser previously cached `'pt'` from being trapped in an orphaned locale state with mismatched flags.

### Decision 10: Complete Portfolio Print Dossier (Filter Bypass on Print)
- **Approach**: In `src/app/modules/portfolio/portfolio.component.html` and `src/app/styles/base/_print.scss`, ensure all 5 case study cards are displayed during print output regardless of which interactive category filter is selected in the DOM.
- **Rationale**: Guarantees that recruiters printing the page to PDF always receive the full 5-study executive CV rather than a partial 1-study slice.

### Decision 11: Localized Operator Metadata & Fixed Header Scroll Margin
- **Approach**:
  - Extract the hardcoded "New Zealand" location string in `about-me.component.html` into `ABOUT_ME.LOCATION_VALUE` across all 4 translation files (`en`, `es`, `ja`, `pt`).
  - Add `scroll-margin-top: 7.2rem` to all chapter and section anchor targets in `src/app/styles/base/_base.scss` to prevent the fixed desktop header from occluding section titles during programmatic `scrollIntoView()`.
- **Rationale**: Maintains strict 4-locale i18n parity and prevents visual clipping behind the permanently pinned header.

## Risks / Trade-offs

- **[Risk: Component SCSS exceeding budget]** -> **Mitigation**: Place print styles and global layout adjustments in `src/app/styles/main.scss` using Dart Sass modern `@use` syntax, keeping component-scoped SCSS clean and compact.
- **[Risk: Breaking existing Jasmine unit test suites]** -> **Mitigation**: Update test mocks and assertions in `portfolio.component.spec.ts`, `resume.component.spec.ts`, `language-switcher.component.spec.ts`, `nav.component.spec.ts`, and `about-me.component.spec.ts`.

## Migration Plan

1. Update TypeScript constants, models, and language arrays in `src/app/core/constants/resume.constants.ts` and `src/app/layout/language-switcher/language-switcher.component.ts`.
2. Generate and update Matrix `[CV]` favicon in `src/favicon.ico` and `src/index.html`.
3. Update translation files in `src/assets/i18n/` to remove "polyglot" wording and add new keys.
4. Update navigation header SCSS for fixed desktop positioning in `nav.component.scss` and `content-layout.component.scss`.
5. Update templates in `header.component.html`, `about-me.component.html` (removing portrait photo), and `portfolio.component.html`.
6. Implement print stylesheet rules in `src/app/styles/main.scss`.
7. Sanitize OpenGraph metadata in `src/index.html` and handle legacy `localStorage` migration in `LanguageSwitcherComponent`.
8. Enforce full 5-study print visibility and anchor scroll margins.
9. Run unit tests (`npm test -- --watch=false`) and linter (`npm run lint`) to confirm zero regressions.
