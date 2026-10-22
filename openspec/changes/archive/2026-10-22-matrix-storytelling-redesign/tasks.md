# Tasks

## 1. Phosphor Matrix Design Tokens, Global Terminal Styles & 4-Locale i18n

- [x] 1.1 Update `src/app/styles/abstracts/_variables.scss`, `src/app/styles/base/_base.scss`, `src/app/styles/base/_typography.scss`, `src/app/styles/base/_animations.scss`, and `src/app/styles/components/_button.scss` with the Phosphor Matrix (`#00FF66`) tokens, `.terminal-card` scan-beam sweep, `.phosphor-*` classes, `.story-chapter` 3D lock-in transitions, `.story-spine-*` laser track, and `.chapter-node` styles (without setting `perspective` on `body`), and verify `npm run build` compiles under the 6KB/10KB style budget.
- [x] 1.2 Update `src/app/core/constants/resume.constants.ts` and `src/assets/i18n/en.json`, `es.json`, `pt.json`, and `ja.json` with typed data and synchronized translations for Chapters 00–04, the 3 architectural evolution eras (`ERA 01`–`ERA 03`), and the 4 interactive AI Harness `SPEC_TRACE` artifact snippets, and verify `src/app/core/config/translations.spec.ts` passes.

## 2. 3D Scroll Lock-In Directive, Katakana Decode Directive & Matrix Rain Shell

- [x] 2.1 Update `RevealOnScrollDirective` (`src/app/shared/reveal-on-scroll.directive.ts`) to toggle `.is-active` on `.story-chapter` elements and create `MatrixDecodeDirective` (`[appMatrixDecode]` in `src/app/shared/matrix-decode.directive.ts`) exported from `SharedModule` (`src/app/shared/shared.module.ts`), and verify unit tests in `src/app/shared/*.spec.ts` pass.
- [x] 2.2 Update `ContentLayoutComponent` (`src/app/layout/content-layout/*`), `NavComponent` (`src/app/layout/nav/*`), and `FooterComponent` (`src/app/layout/footer/*`) to render the `1:1` Retina `12px` Dense Character Rain `<canvas>` (with `devicePixelRatio` scaling and `RAIN_WARP` scroll-velocity acceleration inside `NgZone.runOutsideAngular`), the top laser progress bar, the continuous vertical `.story-spine-laser`, and the right-side scroll telemetry HUD, and verify unit tests in `src/app/layout/**/*.spec.ts` pass.

## 3. Storytelling Chapters 00 & 01 (Signal Initialization & 3-Era Evolution)

- [x] 3.1 Update `HeaderComponent` (`src/app/layout/header/*`) to render `CHAPTER 00 // SIGNAL_INITIALIZATION` with `[appMatrixDecode]` on the engineer title, blinking phosphor cursor, narrative summary, terminal CTAs, and the `cavargas@matrix-core:~/harness` live telemetry card, and verify `header.component.spec.ts` passes.
- [x] 3.2 Update `AboutMeComponent` (`src/app/modules/about-me/*`) to render `CHAPTER 01 // THE_CRAFT_AND_EVOLUTION` with the 3 architectural evolution cards (`ERA 01 // 2010–2016 CORE_RIGOR`, `ERA 02 // 2017–2022 HYPER_SCALE`, `ERA 03 // PRESENT AI_HARNESS`), engineer portrait, and direct `mailto:cavargas40@gmail.com` + GitHub/LinkedIn links (without age or Facebook), and verify `about-me.component.spec.ts` passes.

## 4. Storytelling Chapters 02, 03 & 04 (AI Harness Console, Case Files & Transmission)

- [x] 4.1 Update `PortfolioComponent` (`src/app/modules/portfolio/*`) and `SkillsComponent` (`src/app/modules/resume/skills/*`) to render `CHAPTER 02 // SPEC-DRIVEN_AI_HARNESS_ENGINE` (interactive 4-stage AI Harness Console updating the live `SPEC_TRACE` artifact inspector + 4 Capability Pillars) and `CHAPTER 03 // PRODUCTION_CASE_FILES` (filterable terminal case study dossiers `SYS_01`–`SYS_04`), and verify `portfolio.component.spec.ts` and `skills.component.spec.ts` pass.
- [x] 4.2 Update `ResumeComponent` and `TimeLineComponent` (`src/app/modules/resume/*`) and `ContactComponent` (`src/app/modules/contact/*`) to match the Matrix terminal aesthetic and render `CHAPTER 04 // OPEN_TRANSMISSION_CHANNEL` (`$ copy cavargas40@gmail.com` with clipboard confirmation and `> LAUNCH_MAIL_CLIENT()`), remove the temporary root `matrix-storytelling-preview.html` file, and verify `resume.component.spec.ts`, `time-line.component.spec.ts`, and `contact.component.spec.ts` pass.

## 5. End-to-End Build, Budget & Test Gate Verification

- [x] 5.1 Run production build (`npm run build-prod`), full headless unit test suite (`npx ng test --watch=false --browsers=ChromeHeadlessCI`), and TypeScript linter (`npm run lint`), verifying zero errors, all 35+ specs passing, and all component styles within the 6KB warning budget.

## Workflow follow-up

- Archive the change with `/opsx-archive` after implementation and verification are complete.
