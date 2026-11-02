# Proposal: Recruiter-Ready Staff Engineer CV & Expanded Ecosystem

## Why

Technical recruiters and hiring managers in the AI era evaluate candidates in 15 to 30 seconds. The website currently presents strong AI harness concepts, but it underreports daily-driver technologies (Rust, NestJS, Kafka, GraphQL, gRPC, Terraform, Bicep, DRY multi-platform CI/CD, Vite, Playwright, Cypress) and omits critical recruiter logistics (work authorization, remote worldwide availability, and New Zealand timezone). Furthermore, because the website functions as the candidate's actual curriculum vitae, recruiters need the ability to print or export an executive, high-contrast resume directly from the browser without dark backgrounds or terminal effects. Removing personal portrait photos aligns with modern hiring practices (reducing unconscious bias), while a custom Matrix-styled `[CV]` favicon clearly communicates the site's purpose from the browser tab. Removing vague buzzwords like "polyglot" in favor of concrete architectural terms ("distributed microservices") enhances clarity. On desktop viewports, keeping the top navigation header permanently fixed ensures recruiters and hiring managers can navigate between chapters effortlessly.

## What Changes

- **Update Positioning & Logistics**: Reposition title to "Staff Fullstack & AI Systems Engineer". Display explicit logistics: Open to Remote (Worldwide) and New Zealand Timezone (UTC+12 / UTC+13). Do not show physical street or home address.
- **Remove Personal Portrait Photo**: Remove the personal photo (`about-me.jpg`) from the About section. Replace the portrait frame with a terminal-styled operator telemetry and recruiter logistics card.
- **Matrix-Themed CV Favicon**: Replace `src/favicon.ico` with a Matrix-styled `[CV]` icon (phosphor green `#00ff66` glyph on void black `#0d1117`) to signal the living CV from the browser tab.
- **Remove "Polyglot" Wordings**: Replace all instances of "polyglot" across site copy, case files, and career eras with concrete architectural terms ("distributed microservices", "reactive web architecture").
- **Headline Language Options**: Remove Portuguese (`pt`) from the active navbar language switcher, keeping English (`en`), Spanish (`es`), and Japanese (`ja`).
- **Fixed Desktop Navigation Header**: Pin the navigation bar to the top of the viewport on desktop devices (`position: fixed`) so it remains visible and accessible while scrolling through chapters.
- **Restructure 5 Capability Pillars**: Replace the current 4 pillars with 5 specialized tiers:
  1. *AI Systems & Agent Harnesses* (OpenSpec, multi-model LLMs, Claude Code, Cursor, Antigravity, deterministic harnesses, automated verification).
  2. *Systems & Core Languages* (Rust, Golang, TypeScript, Node.js, C# / .NET).
  3. *Backend, APIs & Event Streaming* (NestJS, Kafka, GraphQL, gRPC, TypeORM, PostgreSQL, Redis).
  4. *Cloud Infrastructure, IaC & CI/CD* (AWS, Azure, Terraform, Bicep, reusable DRY pipelines across GitHub Actions, Azure DevOps, and Bitbucket Pipelines).
  5. *Modern Frontend & Test Automation* (Angular, React, Vue.js, Vite, Playwright, Cypress, modular SCSS, 4-language i18n).
- **Expand Production Case Files**: Add a 5th case study dedicated to *Cloud Infrastructure & Unified Reusable CI/CD* (AWS, Azure, Terraform, Bicep, DRY multi-platform pipelines). Add realistic engineering benchmarks across all case studies (40%+ pipeline maintenance reduction, sub-second API latency, zero regressions, 100% test pass rate).
- **Print-to-PDF Resume Optimization**: Implement `@media print` stylesheet rules so printing the site (`Cmd + P`) produces a clean, high-contrast, multi-page CV without dark backgrounds, phosphor glow, rain canvas, or interactive HUD elements.
- **Maintain Translation Parity**: Synchronize translation files for supported languages with all new labels, pillars, logistics, and case studies.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `engineer-profile-and-capabilities`: Restructures the 4 domain pillars into 5 specialized tiers, integrates remote worldwide / NZ timezone logistics, removes the personal portrait photo in favor of a terminal operator card, and eliminates "polyglot" terminology.
- `engineering-case-studies-and-ai`: Expands case studies to 5 cards (adding Cloud Infrastructure & Reusable CI/CD), eliminates "polyglot" phrasing, and integrates quantified impact benchmarks.
- `portfolio-shell-and-motion`: Adds `@media print` print-to-PDF stylesheet optimization, adds the Matrix-themed `[CV]` favicon requirement, enforces fixed desktop navigation header positioning, updates active language switcher options to `en`, `es`, and `ja`, and updates hero badge/headline copy to reflect Staff Fullstack & AI Systems Engineer.

## Impact

- **Affected Feature Modules & Components**:
  - `src/app/core/constants/resume.constants.ts` (Capability pillars, case studies, timeline entries, filter options, removal of "polyglot" wording).
  - `src/app/layout/nav/` (`nav.component.html`, `nav.component.scss` for fixed desktop positioning).
  - `src/app/layout/language-switcher/` (`language-switcher.component.ts`, `language-switcher.component.html` removing Portuguese).
  - `src/app/layout/header/` (`header.component.html`, `header.component.ts`, `header.component.scss`).
  - `src/app/modules/about-me/` (`about-me.component.html`, `about-me.component.scss`).
  - `src/app/modules/portfolio/` (`portfolio.component.html`, `portfolio.component.ts`, `portfolio.component.scss`).
  - `src/app/modules/resume/` (`resume.component.html`, `resume.component.scss`).
  - `src/app/layout/content-layout/` (`content-layout.component.html`, `content-layout.component.scss`).
  - Favicon and assets (`src/favicon.ico`, `src/index.html`).
  - Global styles (`src/app/styles/main.scss`, `src/styles.scss`).
- **Localization Impact**:
  - Translation files (`src/assets/i18n/en.json`, `es.json`, `ja.json`, `pt.json`) receive synchronized updates for the 5th pillar, 5th case study, metrics, logistics tags, and replacement of "polyglot" terms.
- **Budget & Performance**:
  - Component SCSS remains under the 6KB warning / 10KB error Angular budget.
  - Fixed header uses CSS hardware acceleration with zero JS scroll overhead.
  - Zero external PDF assets required; `@media print` eliminates unnecessary file bloat.
- **Out of Scope**:
  - External PDF resume generation or file download endpoints.
  - Changes to the standalone utility modules (`crypto`, `m3d`).
