# Tasks

## 1. Modern Angular Upgrade & Legacy Cleanup

- [x] 1.1 Update `package.json`, `angular.json`, `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.spec.json` to modern Angular (Node 22 compatible), removing `ngx-captcha`, `@ngrx/*`, `@ng-select/ng-select`, `ngx-scrollreveal`, `scrollreveal`, and `pace.min.js`, and verify `npm install` completes cleanly.
- [x] 1.2 Remove `src/app/data/service/contact.service.ts`, `src/app/data/service/contact.service.spec.ts`, `src/assets/scripts/pace.min.js`, and `recaptchaKey` from `src/environments/environment*.ts`, and verify no references remain in `src/` or `angular.json`.
- [x] 1.3 Update `AppModule`, `SharedModule`, `CryptoModule` (`/crypto`), and `M3dModule` (`/3d`) for modern Angular compilation and fix the renderer loop initialization in `src/app/modules/m3d/engine/engine.service.ts`, verifying `npm run build` compiles `/welcome`, `/crypto`, and `/3d` without errors.

## 2. Multi-Locale i18n Content & Data Models (`en`, `es`, `pt`, `ja`)

- [x] 2.1 Update `src/app/core/constants/resume.constants.ts` with typed constants for Experience, Education, the 4 Capability Pillars (including AI-Augmented Engineering & Agent Harnesses), the AI Spec-Driven Workflow pipeline, and Engineering Case Studies, verifying TypeScript compilation succeeds.
- [x] 2.2 Update `src/assets/i18n/en.json`, `src/assets/i18n/es.json`, `src/assets/i18n/pt.json`, and `src/assets/i18n/ja.json` with synchronized keys for the new Hero, About Me (without `AGE`), 4-Pillar Capabilities, Experience timeline (2020–Present without Propellerhead), AI Harnesses & Spec-Driven Engineering spotlight, Engineering Case Studies, and Contact/Footer sections, and verify key parity in `src/app/core/config/translations.spec.ts`.

## 3. Modern Design System, Motion Directive & Layout Shell

- [x] 3.1 Update `src/app/styles/abstracts/_variables.scss`, `src/app/styles/base/_base.scss`, `src/app/styles/base/_typography.scss`, `src/app/styles/base/_animations.scss`, and `src/app/styles/components/_button.scss` with dark-first engineering design tokens, bento surface styles, and reveal transition classes, verifying `npm run build` passes the 6KB/10KB component style budget.
- [x] 3.2 Create `RevealOnScrollDirective` (`[appReveal]`) in `src/app/shared/` using `IntersectionObserver` (with reduced-motion support) to replace `[ngsReveal]`, and verify unit tests for the directive pass.
- [x] 3.3 Redesign `NavComponent`, `LanguageSwitcherComponent`, `HeaderComponent`, `FooterComponent`, and `ContentLayoutComponent` (`src/app/layout/*`) to implement the sticky glass navbar, interactive language pill switcher, stock-video-free engineer hero with architecture card, and active section layout, and verify unit tests in `src/app/layout/**/*.spec.ts` pass.

## 4. Engineer Profile, 4-Pillar Capabilities & Detailed Timeline

- [x] 4.1 Redesign `AboutMeComponent` (`src/app/modules/about-me/*`) to remove `age` calculation and the Facebook link, fix `mailto:cavargas40@gmail.com`, and render Senior Fullstack & AI-Augmented Engineering highlights, and verify `about-me.component.spec.ts` passes.
- [x] 4.2 Redesign `ResumeComponent`, `TimeLineComponent`, and `SkillsComponent` (`src/app/modules/resume/*`) so `TimeLineComponent` renders full role descriptions (`DETAIL`) and `SkillsComponent` renders the 4-Pillar Engineering Capabilities Matrix (AI-Augmented Engineering, Frontend, Backend/Distributed, Cloud/DevOps) without percentage bars, and verify unit tests in `src/app/modules/resume/**/*.spec.ts` pass.

## 5. Engineering Case Studies, AI Harnesses Showcase & Direct Contact

- [x] 5.1 Redesign `PortfolioComponent` (`src/app/modules/portfolio/*`) to replace the 9 dead `*.portfolio.cavargas.com` image links with the **AI Engineering, Agent Harnesses & Spec-Driven Development** workflow showcase and filterable **Engineering Case Study** bento cards, and verify `portfolio.component.spec.ts` passes.
- [x] 5.2 Redesign `ContactComponent` (`src/app/modules/contact/*`) and enable it in `ContentLayoutComponent` to provide one-click copy-email (`cavargas40@gmail.com`) with feedback state, direct `mailto:` CTA, and GitHub/LinkedIn links without reCAPTCHA, and verify `contact.component.spec.ts` passes.

## 6. End-to-End Build, Budget & Test Verification

- [x] 6.1 Run production build (`npm run build-prod` / `ng build --configuration production`), headless unit tests (`npm test -- --watch=false`), and linter checks, verifying zero errors and all component styles under the 6KB warning budget.

## Workflow follow-up

- Archive the change with `/opsx-archive` after implementation and verification are complete.
