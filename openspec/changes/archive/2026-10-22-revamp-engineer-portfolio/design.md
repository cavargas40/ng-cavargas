# Design

## Context

`ng-cavargas` currently runs on Angular 12 (`~12.0.2`) with mixed Angular 9 dependencies (`@angular/material`, `@angular/cdk`, `@ngrx/*`), `ngx-scrollreveal`, `ngx-captcha`, and `pace.min.js`. On Node.js 22, the legacy Webpack 4/5 build fails without OpenSSL workarounds. Visually and structurally, the `/welcome` landing page renders `LanguageSwitcherComponent`, `HeaderComponent`, `AboutMeComponent`, `ResumeComponent`, and `PortfolioComponent` inside `ContentLayoutComponent`, while `NavComponent` and `FooterComponent` are unused `<p>works!</p>` stubs and `ContactComponent` is commented out. See `proposal.md` for full motivation and scope.

## Goals / Non-Goals

**Goals:**
- Upgrade the Angular framework and CLI toolchain to modern Angular (v19 compatible with Node 22) while maintaining the existing module boundaries (`ContentLayoutComponent` hosting the main portfolio experience at `/welcome`, and `AppRoutingModule` lazy-loading `/crypto` and `/3d`).
- Replace `ngx-scrollreveal` and `pace.min.js` with a lightweight, zero-dependency `RevealOnScrollDirective` (`IntersectionObserver`) and modern CSS transitions/variables.
- Redesign the UI around a dark-first Senior Software Engineer & AI Engineering aesthetic while keeping every component's compiled SCSS strictly below the 6KB warning / 10KB error budget in `angular.json`.
- Replace hardcoded/dead portfolio items and skill percentage bars with typed data structures and localized i18n keys (`en`, `es`, `pt`, `ja`).

**Non-Goals:**
- Rewriting the internal business logic of `CryptoModule` (`/crypto`) or `M3dModule` (`/3d`) beyond fixing Angular/TypeScript upgrade compatibility and the renderer instantiation loop bug in `EngineService` if needed for stability.
- Introducing external animation libraries (e.g., GSAP or Framer Motion) or backend APIs for contact submission.
- Adding Propellerhead employment entries to the resume timeline.

## Decisions

### 1. Angular Upgrade Strategy & Module Boundaries
- **Decision**: Upgrade `@angular/*` packages, TypeScript, Zone.js, RxJS, and `@ngx-translate/*` to modern Angular (v19) while keeping the existing `AppModule` / feature module structure (`AboutMeModule`, `ResumeModule`, `PortfolioModule`, `ContactModule` eagerly imported into the `/welcome` shell via `AppModule`, and `CryptoModule` at `/crypto` plus `M3dModule` at `/3d` lazy-loaded in `AppRoutingModule`).
- **Rationale**: Keeping the established module boundaries minimizes churn in routing and existing unit test harnesses while unlocking Node 22 build compatibility, modern TypeScript, and clean dependency management.
- **Alternatives Considered**: Converting every legacy route (`/crypto`, `/3d`) and test file to standalone bootstrap simultaneously—rejected because preserving legacy modules intact was explicitly requested and hybrid module compatibility is natively supported in modern Angular.

### 2. Motion & Animation Architecture (`RevealOnScrollDirective` + CSS Custom Properties)
- **Decision**: Replace `ngx-scrollreveal` and `scrollreveal` with a lightweight directive (`[appReveal]`) backed by browser-native `IntersectionObserver`, paired with CSS custom properties (`--mouse-x`, `--mouse-y`) for bento card spotlight hover effects.
- **Rationale**: `ngx-scrollreveal` relies on an outdated global script and incompatible Angular Ivy/modern peer dependencies. Native `IntersectionObserver` runs off the main thread, requires zero third-party bytes, is trivial to mock in Jasmine unit tests, and respects `prefers-reduced-motion: reduce`.
- **Alternatives Considered**: Keeping `scrollreveal` via `angular.json` scripts—rejected due to global namespace pollution and lack of SSR/headless test safety.

### 3. Component State Flow & Data Models
- **Decision**: Drive all Resume, Capabilities, AI Harness workflow steps, and Engineering Case Studies from strongly typed constant configurations in `src/app/core/constants/` (referencing structured translation keys in `src/assets/i18n/{en,es,pt,ja}.json`):
  - `NavComponent` + `LanguageSwitcherComponent`: Sticky top header bar. `LanguageSwitcherComponent` updates `TranslateService` and `localStorage` (`lang`), replacing `@ng-select/ng-select` with a lightweight accessible language pill switcher so `@ng-select` is no longer needed.
  - `HeaderComponent`: Renders engineer identity, availability badge, primary CTAs (scroll to work, scroll to contact, GitHub, LinkedIn), and an interactive/ambient **AI Spec-Driven Engineering & System Architecture** visual card.
  - `AboutMeComponent`: Stateless presentation + i18n bindings; removes `age` property and `calcualteAge()` method; fixes `mailto:cavargas40@gmail.com`.
  - `ResumeComponent`: Manages `selectedTab` (`'experience' | 'capabilities' | 'education'`) and passes typed timeline records to `TimeLineComponent` (which now renders `title`, `position`, `company`, and `description`) and capability pillars to `SkillsComponent`.
  - `PortfolioComponent`: Renders (1) the **AI Engineering & Agent Harnesses** workflow spotlight (`Context -> Spec -> Design -> Harness -> Verification`) and (2) **Engineering Case Study** bento cards with category filtering (`all` | `ai` | `distributed` | `fullstack`).
  - `ContactComponent` & `FooterComponent`: Replaces the reactive form + `ngx-captcha` + `ContactService` with a direct Connect section featuring a `copyEmail()` state (`copied = true` with a 2.5s reset timer), `mailto:cavargas40@gmail.com`, and social links.

### 4. SCSS Design System & 6KB/10KB Component Budget Compliance
- **Decision**: Centralize design tokens (dark slate surfaces, electric indigo/cyan accents, typography scales, glassmorphism surfaces, and shared badge/card primitives) in `src/app/styles/abstracts/_variables.scss` and `src/app/styles/components/`, while keeping individual `*.component.scss` files lean (layout and component-specific selectors only).
- **Rationale**: `angular.json` enforces a strict `anyComponentStyle` budget (`6kb` warning, `10kb` error). Sharing surface, button, and badge rules in global `src/app/styles/` guarantees every component style bundle compiles well under 4KB.

## Risks / Trade-offs

- **[Risk] Third-party peer dependency conflicts during Angular upgrade** → **Mitigation**: Remove unused/legacy packages (`@ngrx/*`, `@ng-select/ng-select`, `ngx-captcha`, `ngx-scrollreveal`, `scrollreveal`, `pace.min.js`, `codelyzer`, `tslint`, `protractor`) before installing modern Angular packages.
- **[Risk] Component SCSS exceeding the 6KB warning budget** → **Mitigation**: Place shared card, pill, and grid utility styles in `src/app/styles/components/` and verify with `npm run build` (`ng build --configuration production`).
- **[Risk] Translation drift across 4 locales (`en`, `es`, `pt`, `ja`)** → **Mitigation**: Define identical JSON key hierarchies across all four files in `src/assets/i18n/` and verify key parity in unit tests.
