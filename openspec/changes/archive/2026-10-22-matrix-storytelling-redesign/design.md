# Design

## Context

See `proposal.md` for motivation and scope. The user validated the interactive HTML prototype (`matrix-storytelling-preview.html`, `v4`) in Chrome and selected the **Phosphor Matrix (`#00FF66`)** palette paired with **Dense Character Rain (`12px` font inside `15x15px` square Retina cells)**, scroll-velocity warp physics, a continuous vertical laser spine, 3D perspective chapter lock-in transitions, katakana text decoding, and the interactive 4-stage AI Harness artifact inspector.

The application runs on Angular 19.2 (`standalone: false` NgModule architecture) with `ContentLayoutComponent` (`/welcome`) hosting eagerly rendered portfolio chapters (`HeaderComponent`, `AboutMeComponent`, `PortfolioComponent`, `ResumeComponent`, `ContactComponent`, `FooterComponent`) while `/crypto` and `/3d` remain lazy-loaded in `AppRoutingModule`. Component SCSS files are constrained by a 6KB warning / 10KB error budget in `angular.json`.

## Goals / Non-Goals

**Goals:**
- Translate the validated `v4` prototype (`Phosphor Matrix #00FF66` + `Dense Character Rain 12px`) into clean, testable Angular 19 components and directives inside the `/welcome` shell.
- Centralize Matrix terminal surfaces (`.terminal-card`, `.phosphor-text`, `.phosphor-border`, `.phosphor-pill`, `.story-chapter`, `.story-spine-*`, `.chapter-node`, `.stagger-item`) in global SCSS (`src/app/styles/`) so individual component styles remain well under the 6KB warning budget.
- Keep `MatrixRainComponent` (or canvas controller inside `ContentLayoutComponent`) running outside Angular's zone (`NgZone.runOutsideAngular`) so 60fps `requestAnimationFrame` canvas rendering and scroll telemetry never trigger unnecessary Angular change detection cycles.

**Non-Goals:**
- Modifying `/crypto` (`CryptoModule`) or `/3d` (`M3dModule`).
- Adding external animation or canvas libraries (all canvas and scroll mechanics use native browser APIs).

## Decisions

### 1. Discrete `1:1` Retina Matrix Digital Rain Engine (`NgZone.runOutsideAngular`)
- **Decision**: Implement the background canvas inside `ContentLayoutComponent` (or a dedicated `MatrixRainComponent` declared in `AppModule`) that initializes on `AfterViewInit` inside `NgZone.runOutsideAngular`.
  - **HiDPI & Aspect Ratio**: Read `const dpr = window.devicePixelRatio || 1`, set `canvas.width = width * dpr`, `canvas.height = height * dpr`, `canvas.style.width = width + 'px'`, `canvas.style.height = height + 'px'`, and `ctx.setTransform(dpr, 0, 0, dpr, 0, 0)`. Never set CSS `perspective` on `body` so `position: fixed` stays locked to `100vw x 100vh`.
  - **Dense Character Grid (`12px` / `15px` cells)**: Use `cellSize = 15` and `fontSize = 12` with full-width katakana and hex glyphs (`アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789ABCDEFZ`). Step `headRow` by integer cells when `col.progress >= 1`, clear the canvas every frame (`ctx.clearRect`), draw `#ffffff` head glyphs, `#86efac` near-head glyphs, and fading `#00ff66` trail glyphs, and randomly mutate stationary trail characters (`2%` probability per frame).
  - **Scroll-Warp Physics**: Track `window.scrollY` delta in a passive scroll listener to compute `scrollVelocity` (clamped to `3.0`, decaying by `0.9` per frame) and multiply column drop speed by `warpFactor = 1 + scrollVelocity`.
- **Alternatives considered**:
  - *Continuous fractional-pixel `y` movement with translucent `fillRect` fade*: Rejected because fractional pixel movement smears characters into vertical green lines instead of discrete readable glyphs.

### 2. Scroll-Driven Laser Spine, 3D Chapter Lock-In & Katakana Decode Directives
- **Decision**:
  - **Laser Spine & Telemetry HUD (`ContentLayoutComponent`)**: `ContentLayoutComponent` hosts the top `#top-progress-bar`, the continuous `.story-spine-track` with `.story-spine-laser` (`[style.height.%]="scrollPercent"`), and the right-side desktop telemetry HUD (`DEPTH // %`, `RAIN_WARP // x`, active chapter badge, and `[00]`–`[04]` anchor links).
  - **3D Perspective Chapter Lock-In (`RevealOnScrollDirective` `[appReveal]`)**: Apply `transform: perspective(1200px) translate3d(0, 56px, -70px) rotateX(6deg) scale(0.96)` on `.story-chapter` (never on `body`) and toggle `.is-active` via `IntersectionObserver` (`threshold: 0.18`), triggering staggered `.stagger-item` transitions and the `.terminal-card::after` phosphor scan-beam sweep.
  - **Katakana Decode Directive (`MatrixDecodeDirective` `[appMatrixDecode]`)**: Export `[appMatrixDecode]` from `SharedModule`. When the host element (or its parent `.story-chapter`) enters the viewport or when `TranslateService.onLangChange` emits, scramble characters using the full-width katakana/hex glyph set and resolve left-to-right over `~350ms` (or immediately when `prefers-reduced-motion: reduce` is active).
- **Alternatives considered**:
  - *CSS `scroll-timeline` only*: Rejected because Safari/older browser support is inconsistent and cannot trigger the katakana text-decode or `RAIN_WARP` velocity counter.

### 3. Storytelling Chapter Mapping Across Existing Angular Modules
- **Decision**: Map the 5 storytelling chapters cleanly onto the existing module boundaries inside `ContentLayoutComponent` so routing and lazy-loading remain intact:
  - `CHAPTER 00 // SIGNAL_INITIALIZATION` -> `HeaderComponent` (`src/app/layout/header/*`)
  - `CHAPTER 01 // THE_CRAFT_AND_EVOLUTION` -> `AboutMeComponent` (`src/app/modules/about-me/*`), rendering the 3 architectural era cards (`2010–2016 CORE_RIGOR`, `2017–2022 HYPER_SCALE`, `PRESENT AI_HARNESS`) plus engineer portrait and direct social/email links.
  - `CHAPTER 02 // SPEC-DRIVEN_AI_HARNESS_ENGINE` -> `PortfolioComponent` (top half) + `SkillsComponent`, featuring the interactive 4-stage AI Harness Console (`selectedStageIndex: 0..3` updating the live `SPEC_TRACE` artifact inspector) and the 4 Capability Pillars (`[PILLAR_01 // AI]` through `[PILLAR_04 // DATA_OPS]`).
  - `CHAPTER 03 // PRODUCTION_CASE_FILES` -> `PortfolioComponent` (bottom half) + `ResumeComponent` (`TimeLineComponent`), rendering the filterable terminal case study dossiers (`SYS_01`–`SYS_04`) and the career trajectory timeline (`2010–Present`).
  - `CHAPTER 04 // OPEN_TRANSMISSION_CHANNEL` -> `ContactComponent` (`src/app/modules/contact/*`) + `FooterComponent` (`src/app/layout/footer/*`).

### 4. Global vs. Component SCSS Budget Strategy
- **Decision**: Define all shared Matrix terminal classes (`.terminal-card`, `.phosphor-text`, `.phosphor-border`, `.phosphor-pill`, `.story-chapter`, `.stagger-item`, `.chapter-node`, `.cursor-blink`) in `src/app/styles/base/_base.scss`, `_typography.scss`, and `_animations.scss`. Keep component `.scss` files focused strictly on local grid/flex layout (`< 3KB` each), guaranteeing zero 6KB budget warnings during `npm run build-prod`.

## Risks / Trade-offs

- **[Risk] Headless Chrome (`ChromeHeadlessCI`) in Karma unit tests may not support full canvas/IntersectionObserver animations** → **Mitigation**: Guard `HTMLCanvasElement.getContext('2d')`, `IntersectionObserver`, and `window.matchMedia` with safe fallbacks in unit tests so all Karma specs execute deterministically.
- **[Risk] High CPU usage if canvas runs inside Angular Zone** → **Mitigation**: Run `requestAnimationFrame` and passive scroll listeners inside `NgZone.runOutsideAngular` and cancel the animation frame in `ngOnDestroy`.
