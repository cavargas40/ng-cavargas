# Tasks: Recruiter-Ready Staff Engineer CV & Expanded Ecosystem

## 1. Core Data Models, Constants, and Assets

- [x] 1.1 Update `CapabilityPillar` interface and `CAPABILITY_PILLARS` array in `src/app/core/constants/resume.constants.ts` with 5 tiers (`ai`, `systems`, `backend`, `cloud`, `frontend`) and verify with `npx tsc --noEmit`
- [x] 1.2 Add `CLOUD_IAC_PIPELINES` case study, `'cloud'` category, and quantified impact metrics to `ENGINEERING_CASE_STUDIES` in `src/app/core/constants/resume.constants.ts`, replacing all "polyglot" terminology with "distributed microservices" or "reactive web platforms", and verify with `npx tsc --noEmit`
- [x] 1.3 Update hero core stack list with TypeScript, Rust, Go, Kafka, NestJS, Terraform, and AI harnesses in `src/app/layout/header/header.component.ts` and verify with `npx tsc --noEmit`
- [x] 1.4 Generate and replace `src/favicon.ico` with a Matrix-styled `[CV]` icon (phosphor green `#00ff66` on `#0d1117` void) and verify browser tab rendering in `src/index.html`
- [x] 1.5 Update `src/app/layout/language-switcher/language-switcher.component.ts` to remove Portuguese (`pt`) from active language choices, retaining English (`en`), Spanish (`es`), and Japanese (`ja`), and verify with `npx tsc --noEmit`

## 2. Localization Parity and Terminology Clean-Up

- [x] 2.1 Update `src/assets/i18n/en.json` with Staff Engineer headline, remote/NZ timezone logistics, 5 capability pillars, 5 case studies, engineering benchmarks, and replace all "polyglot" occurrences with concrete architectural terms
- [x] 2.2 Update `src/assets/i18n/es.json` with matching Spanish translations, removing "políglota" terminology
- [x] 2.3 Update `src/assets/i18n/ja.json` with matching Japanese translations for all new and modified keys
- [x] 2.4 Update `src/assets/i18n/pt.json` with matching translations to keep base locale file coherent
- [x] 2.5 Run translation parity verification to ensure zero missing keys across all translation files

## 3. Component Templates & Layout Enhancements

- [x] 3.1 Update `src/app/layout/nav/nav.component.scss` and `src/app/layout/content-layout/content-layout.component.scss` to enforce fixed desktop navigation header positioning (`position: fixed`) with appropriate layout padding compensation
- [x] 3.2 Update `src/app/layout/header/header.component.html` and SCSS to display the Staff Fullstack & AI Systems Engineer title and recruiter logistics badge
- [x] 3.3 Remove the portrait photo (`about-me.jpg`) from `src/app/modules/about-me/about-me.component.html` and replace with a terminal operator telemetry card displaying remote worldwide availability and NZ timezone
- [x] 3.4 Update `src/app/modules/portfolio/portfolio.component.html` and `src/app/modules/portfolio/portfolio.component.ts` to support the 5-pillar grid, 5th case file, and cloud category filter
- [x] 3.5 Verify responsive layout behavior and fixed header anchoring across mobile, tablet, and desktop viewports

## 4. Print-to-PDF Stylesheet Optimization

- [x] 4.1 Add `@media print` rules in `src/app/styles/main.scss` hiding `#matrix-canvas`, `.story-spine-track`, `.telemetry-hud`, `.crt-overlay`, `.top-progress-bar`, and interactive action buttons
- [x] 4.2 Define print typography, pure white background (`#ffffff`), dark text (`#111111`), and clean page breaks for chapters and cards in `src/app/styles/main.scss`
- [x] 4.3 Verify print preview formatting via Chrome headless emulation or manual print check

## 5. Verification Gates and Quality Checks

- [x] 5.1 Update unit tests in `src/app/layout/language-switcher/language-switcher.component.spec.ts` (verifying 3 active languages: en, es, ja), `src/app/layout/header/header.component.spec.ts`, `src/app/modules/about-me/about-me.component.spec.ts` (asserting no portrait `<img>`), and `src/app/modules/portfolio/portfolio.component.spec.ts`
- [x] 5.2 Run `npm run lint` and verify zero linter errors
- [x] 5.3 Run `npm test -- --watch=false` in ChromeHeadless and verify 100% test pass rate
- [x] 5.4 Run production build check `npm run build` to verify component styles stay within the 6KB/10KB Angular budget

## 6. Adversarial Hardening & Defect Remediation (opsx-grill)

- [x] 6.1 Update `src/index.html` OpenGraph meta tags: remove Gravatar image link, add Matrix [CV] banner, and update description to "Staff Fullstack & AI Systems Engineer"
- [x] 6.2 Update `LanguageSwitcherComponent.loadLanguage()` in `src/app/layout/language-switcher/language-switcher.component.ts` to sanitize stored locale against active languages and migrate invalid/'pt' keys to 'en'
- [x] 6.3 Add `ABOUT_ME.LOCATION_VALUE` to all 4 i18n files (`en.json`, `es.json`, `ja.json`, `pt.json`) and bind it in `about-me.component.html`
- [x] 6.4 Update `src/app/modules/portfolio/portfolio.component.html` and `src/app/styles/base/_print.scss` so all 5 case studies print when an on-screen filter is active
- [x] 6.5 Add `scroll-margin-top: 7.2rem` to section targets in `src/app/styles/base/_base.scss` and verify `scrollToSection()` does not occlude headers
- [x] 6.6 Update unit tests in `src/app/layout/language-switcher/language-switcher.component.spec.ts` (verifying legacy 'pt' migration) and `src/app/modules/about-me/about-me.component.spec.ts` (verifying location i18n binding), and run `npm run lint` and `npm test`
