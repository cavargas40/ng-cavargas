# Proposal

## Why

The current `ng-cavargas` application is frozen in a 2019–2020 snapshot that no longer reflects a Senior Software Engineer's profile: the portfolio grid links exclusively to dead `http://*.portfolio.cavargas.com` tutorial demos, the resume hides job descriptions and uses dated "100% skill bars", the navigation and footer components are unfinished `<p>works!</p>` stubs, and the Angular 12 / Webpack 4 toolchain does not build natively on modern Node.js (v22). Revamping both the Angular foundation and the UI/content turns the site and repository into a credible, modern showcase of fullstack and AI-augmented software engineering (including agent harnesses and spec-driven development).

## What Changes

- **Modern Angular Upgrade**: Upgrade the application from Angular 12 to modern Angular (Standalone-ready architecture, Angular Signals, modern CLI build pipeline) so it builds and runs cleanly on Node 22 while keeping the legacy `/crypto` (`src/app/modules/crypto/*`) and `/3d` (`src/app/modules/m3d/*`) lazy-loaded routes intact and functional.
- **BREAKING (Dependency & Legacy Form Cleanup)**: Remove the commented-out reCAPTCHA v2 / Firebase contact form (`ngx-captcha`, `src/app/data/service/contact.service.ts`) and unused/deprecated packages (`@ngrx/*`, `pace.min.js`, `ngx-scrollreveal`, `scrollreveal`).
- **Layout Shell & Modern Motion (`src/app/layout/*`)**:
  - Replace the unfinished `NavComponent` (`<p>nav works!</p>`) with a sticky glassmorphic navigation bar featuring smooth section scrolling, active section indicators, and the integrated `LanguageSwitcherComponent`.
  - Redesign `HeaderComponent` (`src/app/layout/header/*`) to replace the heavy background stock video (`coding.mp4`) and 80px pixelated Gravatar with a high-contrast Senior Software Engineer hero section and an interactive/ambient engineering architecture visual.
  - Replace the unfinished `FooterComponent` (`<p>footer works!</p>`) and commented-out `ContactComponent` (`src/app/modules/contact/*`) with a clean Contact & Connect section (one-click copy email, fixed `mailto:cavargas40@gmail.com` action, GitHub, and LinkedIn links).
  - Introduce a native `IntersectionObserver` scroll-reveal directive and modern CSS micro-interactions (bento card spotlight hover, spring transitions) to replace `ngx-scrollreveal`.
- **About Me & Resume Redesign (`src/app/modules/about-me/*`, `src/app/modules/resume/*`)**:
  - Remove the `age` calculation (`10/14/1991`), Facebook link, and broken `mailto:email@example.com` link from `AboutMeComponent`.
  - Replace the arbitrary percentage bars in `SkillsComponent` (`src/app/modules/resume/skills/*`) with a 4-pillar Engineering Capabilities Matrix covering: (1) AI-Augmented Engineering & Agent Harnesses, (2) Frontend Architecture, (3) Backend & Distributed Systems, and (4) Cloud, Data & DevOps.
  - Update `TimeLineComponent` (`src/app/modules/resume/time-line/*`) so role descriptions (`DETAIL`) are rendered clearly, and refresh the 2020–Present experience entry to reflect Senior Fullstack & AI-Augmented Engineering.
- **Engineering Case Studies & AI Showcase (`src/app/modules/portfolio/*`)**:
  - Replace the 9 dead `http://*.portfolio.cavargas.com` screenshot links in `PortfolioComponent` with interactive Engineering Case Study cards (problem statement, architecture/stack tags, engineering impact) and a dedicated **AI Engineering, Agent Harnesses & Spec-Driven Development** spotlight section.
- **Multi-Locale i18n Synchronization (`src/assets/i18n/*.json`)**:
  - Update all four locale files (`en.json`, `es.json`, `pt.json`, `ja.json`) with complete translations for the new hero, about, capabilities, experience, case studies, AI harness workflow, and contact sections.

### Out of Scope
- Adding employer-specific details for Propellerhead in the experience timeline.
- Removing or rewriting the core functionality of the legacy `/crypto` (`CryptoModule`) and `/3d` (`M3dModule`) utility routes beyond compatibility updates required by the Angular upgrade.
- Building a backend server or maintaining the legacy Firebase Realtime Database contact endpoint.

## Capabilities

### New Capabilities
- `modern-angular-foundation`: Modern Angular framework upgrade, build/test configuration on Node 22, removal of legacy reCAPTCHA/Firebase form and unused dependencies, and preservation of `/crypto` and `/3d` routes.
- `portfolio-shell-and-motion`: Sticky glassmorphic navigation, modern engineer hero section, direct contact/connect footer, and `IntersectionObserver`-based scroll and bento spotlight animations.
- `engineer-profile-and-capabilities`: Redesigned About Me section (without age or Facebook link), 4-pillar Capabilities Matrix (including AI-Augmented Engineering), and expandable/detailed Experience & Education timeline.
- `engineering-case-studies-and-ai`: Interactive Engineering Case Study cards and dedicated AI Engineering (Agent Harnesses & Spec-Driven Development) showcase replacing dead portfolio links, localized across `en`, `es`, `pt`, and `ja`.

### Modified Capabilities
<!-- No existing specs in openspec/specs/ -->

## Impact

- **Layout Components**: `src/app/layout/content-layout/*`, `src/app/layout/header/*`, `src/app/layout/nav/*`, `src/app/layout/footer/*`, `src/app/layout/language-switcher/*`.
- **Feature Modules**: `src/app/modules/about-me/*`, `src/app/modules/resume/*` (`time-line/*`, `skills/*`), `src/app/modules/portfolio/*`, `src/app/modules/contact/*`, plus compatibility updates in `src/app/modules/crypto/*` and `src/app/modules/m3d/*`.
- **Core, Shared & Data**: `src/app/core/config/translations.ts`, `src/app/core/constants/resume.constants.ts`, `src/app/shared/*`, removal of `src/app/data/service/contact.service.ts`.
- **Localization**: `src/assets/i18n/en.json`, `src/assets/i18n/es.json`, `src/assets/i18n/pt.json`, `src/assets/i18n/ja.json`.
- **Styles & Budgets**: `src/app/styles/abstracts/_variables.scss`, `src/app/styles/base/*`, `src/app/styles/components/*`, and component SCSS files (staying within the 6KB warning / 10KB error per-component style budget in `angular.json`, while reducing overall initial bundle size by dropping `@ngrx/*`, `ngx-captcha`, `scrollreveal`, and `pace.min.js`).
