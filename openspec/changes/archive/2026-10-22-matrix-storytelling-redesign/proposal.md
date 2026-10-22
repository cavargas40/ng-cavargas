# Proposal

## Why

The initial Angular 19 revamp replaced legacy dependencies and broken portfolio links, but its visual presentation relied on flat slate-blue SaaS cards (`#070b14` + cyan borders) without atmosphere, scroll reactivity, or narrative flow. Replacing that flat card layout with the validated **Phosphor Matrix (`#00FF66`) scroll-driven storytelling architecture**—featuring a dense `1:1` Retina katakana glyph-rain canvas, scroll-velocity warp physics, a live laser progress spine, 3D chapter lock-in transitions, text-decode animations, and an interactive AI Harness artifact inspector—delivers a distinctive, high-taste Senior Software Engineer experience.

## What Changes

- **Phosphor Matrix Design System & Tokens (`src/app/styles/`)**:
  - Replace the slate-cyan palette in `src/app/styles/abstracts/_variables.scss`, `src/app/styles/base/_base.scss`, `src/app/styles/base/_typography.scss`, `src/app/styles/base/_animations.scss`, and `src/app/styles/components/_button.scss` with the validated **Phosphor Matrix (`#00FF66`)** palette (`--bg-void: #020503`, `--bg-panel: rgba(3, 12, 7, 0.82)`, `--phosphor: #00ff66`, `--phosphor-head: #ffffff`, `--text-main: #ecfdf3`, `--text-muted: #86efac`) and subtle radial CRT vignette.
  - Ensure `body` never sets CSS `perspective` so fixed viewport layers (`100vw x 100vh`) maintain an exact `1:1` aspect ratio.
- **Dense `1:1` Retina Matrix Digital Rain Canvas & Scroll Telemetry Shell (`src/app/layout/`, `src/app/shared/`)**:
  - Add a dedicated background canvas component/directive (`MatrixRainComponent` in `src/app/layout/matrix-rain/` or inside `ContentLayoutComponent`) rendering the approved **Dense Character Rain (`12px` font on `15x15px` square cells)** with `window.devicePixelRatio` HiDPI scaling, full-width katakana + hex glyphs (`アイウエオ...0123456789ABCDEFZ`), glowing white leading glyphs, in-place trail glyph mutation, and scroll-velocity warp acceleration (`RAIN_WARP`).
  - Redesign `ContentLayoutComponent` (`src/app/layout/content-layout/*`) and `NavComponent` (`src/app/layout/nav/*`) to include the top laser scroll progress bar, the continuous vertical laser spine (`.story-spine-track` + `.story-spine-laser` + `.story-spine-pulse`), chapter nodes (`CHAPTER 00` through `CHAPTER 04`), and the fixed right-side scroll telemetry HUD (`DEPTH // %`, `RAIN_WARP // x`, active chapter indicator, and quick-jump links).
- **3D Scroll-Driven Chapter Lock-In & Katakana Text-Decode Directives (`src/app/shared/`)**:
  - Enhance `RevealOnScrollDirective` (`src/app/shared/reveal-on-scroll.directive.ts`) to drive the 3D perspective chapter lock-in transition (`.story-chapter` -> `.is-active`), staggered child cards (`.stagger-item`), and horizontal phosphor scan-beam sweep across `.terminal-card` elements when entering the viewport.
  - Create `MatrixDecodeDirective` (`[appMatrixDecode]` in `src/app/shared/matrix-decode.directive.ts`) to scramble and decode chapter headings from katakana/hex glyphs into localized text when a chapter locks into view.
- **Storytelling Chapters (`CHAPTER 00` – `CHAPTER 04`) Across Feature Modules (`src/app/layout/header/*`, `src/app/modules/*`)**:
  - **Chapter 00 (`HeaderComponent` in `src/app/layout/header/*`)**: `CHAPTER 00 // SIGNAL_INITIALIZATION` with katakana-decoded name (`CARLOS VARGAS` + blinking phosphor cursor), narrative summary card, terminal CTA buttons (`> ENTER_THE_MATRIX_TRACE()`, `> INSPECT_AI_HARNESS`), and the live terminal telemetry card (`cavargas@matrix-core:~/harness` with `TTY // ACTIVE`).
  - **Chapter 01 (`AboutMeComponent` in `src/app/modules/about-me/*`)**: `CHAPTER 01 // THE_CRAFT_AND_EVOLUTION` presenting the 3-era engineering evolution cards (`ERA 01 // 2010–2016 CORE_RIGOR`, `ERA 02 // 2017–2022 HYPER_SCALE`, `ERA 03 // PRESENT AI_HARNESS`) along with the engineer portrait and direct social/email telemetry (without age or Facebook link).
  - **Chapter 02 (`PortfolioComponent` & `SkillsComponent` in `src/app/modules/portfolio/*` and `src/app/modules/resume/*`)**: `CHAPTER 02 // SPEC-DRIVEN_AI_HARNESS_ENGINE` featuring the interactive 4-stage AI Harness Console (clicking Stage 01 `config.yaml`, Stage 02 `specs/*.md`, Stage 03 `design + tasks`, or Stage 04 `CI / Karma` updates the live read-only `SPEC_TRACE` artifact inspector) alongside the 4 Capability Pillars (`[PILLAR_01 // AI]`, `[PILLAR_02 // FRONTEND]`, `[PILLAR_03 // BACKEND]`, `[PILLAR_04 // DATA_OPS]`).
  - **Chapter 03 (`PortfolioComponent` & `ResumeComponent` / `TimeLineComponent` in `src/app/modules/portfolio/*` and `src/app/modules/resume/*`)**: `CHAPTER 03 // PRODUCTION_CASE_FILES` rendering filterable system case study dossiers (`SYS_01`–`SYS_04` with `> CHALLENGE:` and `> ARCHITECTURE & OUTCOME:` terminal blocks) and the career trajectory timeline (`2010–Present`, excluding Propellerhead).
  - **Chapter 04 (`ContactComponent` & `FooterComponent` in `src/app/modules/contact/*` and `src/app/layout/footer/*`)**: `CHAPTER 04 // OPEN_TRANSMISSION_CHANNEL` with `$ copy cavargas40@gmail.com` one-click clipboard action, `> LAUNCH_MAIL_CLIENT()`, GitHub/LinkedIn links, and terminal footer.
- **Cleanup of Temporary Prototype File**:
  - Remove the temporary root `matrix-storytelling-preview.html` once its design and mechanics are integrated into the Angular application (or keep only in artifacts).

## Out of Scope

- Modifying `/crypto` (`src/app/modules/crypto/*`) or `/3d` (`src/app/modules/m3d/*`) feature functionality.
- Adding Propellerhead employment details to the timeline or case studies.
- Re-introducing reCAPTCHA, Firebase contact forms, or backend API services.

## Capabilities

### New Capabilities
- `matrix-rain-and-scroll-spine`: Full-viewport Retina HiDPI (`1:1` square grid, `12px` dense katakana/hex) Matrix digital rain canvas with scroll-velocity warp physics, top laser progress bar, continuous vertical laser spine, chapter nodes, and right-side scroll telemetry HUD.
- `storytelling-chapters-and-decode`: Scroll-driven 3D perspective chapter lock-in transitions (`CHAPTER 00` through `CHAPTER 04`), katakana text-decode animations, 3-era engineering evolution narrative, interactive 4-stage Spec-Driven AI Harness artifact inspector console, terminal case study dossiers, and transmission channel connect UI across all 4 locales (`en`, `es`, `pt`, `ja`).

### Modified Capabilities

## Impact

- **Affected Layout & Shared Files**: `src/app/layout/content-layout/*`, `src/app/layout/nav/*`, `src/app/layout/header/*`, `src/app/layout/footer/*`, `src/app/shared/reveal-on-scroll.directive.ts`, `src/app/shared/matrix-decode.directive.ts`, `src/app/shared/shared.module.ts`.
- **Affected Feature Modules**: `src/app/modules/about-me/*`, `src/app/modules/resume/*`, `src/app/modules/portfolio/*`, `src/app/modules/contact/*`, `src/app/core/constants/resume.constants.ts`.
- **Localization (`src/assets/i18n/*.json`)**: All new chapter headers, era cards, and terminal labels will be synchronized across `en.json`, `es.json`, `pt.json`, and `ja.json`.
- **Production Bundle & Style Budgets**: Zero new npm dependencies required (uses native HTML5 `<canvas>` and `IntersectionObserver`). Shared `.terminal-card`, `.phosphor-*`, and `.story-chapter` styles live in global `src/app/styles/` so every component SCSS file remains well below the 6KB warning / 10KB error budget.
