# Spec Delta

## Purpose

Defines the scroll-driven 3D perspective chapter transitions (`CHAPTER 00` through `CHAPTER 04`), katakana text-decode animations, 3-era engineering evolution story, interactive 4-stage AI Harness artifact inspector console, and terminal case study dossiers across all 4 supported locales (`en`, `es`, `pt`, `ja`).

## ADDED Requirements

### Requirement: Storytelling chapters lock into 3D focus and decode headings on scroll
Each portfolio chapter (`CHAPTER 00` through `CHAPTER 04`) SHALL transition from a dormant 3D-tilted state into full focus when entering the viewport, stagger its child `.terminal-card` elements with a phosphor scan-beam sweep, and trigger a katakana-to-text decode animation on its heading.

#### Scenario: Entering a chapter triggers 3D lock-in and katakana text decode
- **WHEN** a user scrolls a storytelling chapter into the viewport (or switches language between `en`, `es`, `pt`, and `ja`)
- **THEN** the chapter transitions to `.is-active` (`opacity: 1`, `rotateX(0deg)`, `blur(0)`), child cards stagger into view, and `[appMatrixDecode]` scrambles and resolves the localized heading text

#### Scenario: Reduced motion preference bypasses 3D tilt and scramble loops
- **WHEN** a user has `prefers-reduced-motion: reduce` enabled
- **THEN** chapters and headings render immediately in their final readable state without 3D tilt or rapid glyph scrambling

### Requirement: Chapter 00 and Chapter 01 narrate the engineer's signal initialization and 3-era evolution
Chapter 00 (`SIGNAL_INITIALIZATION`) SHALL display the decoded engineer title, blinking phosphor cursor, narrative summary, and live terminal telemetry card (`cavargas@matrix-core:~/harness`), and Chapter 01 (`THE_CRAFT_AND_EVOLUTION`) SHALL present the three architectural eras (`ERA 01 // 2010–2016 CORE_RIGOR`, `ERA 02 // 2017–2022 HYPER_SCALE`, `ERA 03 // PRESENT AI_HARNESS`) alongside direct contact/social links without displaying age or Facebook.

#### Scenario: Viewing Chapter 00 and Chapter 01 across locales
- **WHEN** a user views Chapters 00 and 01 in any supported locale (`en`, `es`, `pt`, `ja`)
- **THEN** the terminal telemetry card, 3-era evolution cards, portrait, GitHub/LinkedIn links, and `mailto:cavargas40@gmail.com` link render in the active locale with no age calculation or Facebook link

### Requirement: Chapter 02 provides an interactive 4-stage AI Harness artifact inspector and 4 capability pillars
Chapter 02 (`SPEC-DRIVEN_AI_HARNESS_ENGINE`) SHALL provide four interactive stage buttons (`STAGE 01 // CONTEXT_BOUNDARY`, `STAGE 02 // BEHAVIORAL_SPECS`, `STAGE 03 // AGENT_HARNESS`, `STAGE 04 // VERIFICATION_GATE`) that update a live read-only `SPEC_TRACE` code inspector pane, followed by the four engineering capability pillars without percentage bars.

#### Scenario: Selecting an AI Harness stage updates the live artifact inspector
- **WHEN** a user clicks any of the 4 AI Harness stage buttons
- **THEN** the selected button highlights with a phosphor border and the `SPEC_TRACE` inspector pane updates its artifact path, status badge, and specification/verification code snippet

### Requirement: Chapter 03 and Chapter 04 present terminal case files, career timeline, and direct transmission channel
Chapter 03 (`PRODUCTION_CASE_FILES`) SHALL render filterable terminal case study dossiers (`SYS_01`–`SYS_04`) with `> CHALLENGE:` and `> ARCHITECTURE & OUTCOME:` blocks plus the full-detail career timeline (`2010–Present`, excluding Propellerhead), and Chapter 04 (`OPEN_TRANSMISSION_CHANNEL`) SHALL provide `$ copy cavargas40@gmail.com` with clipboard confirmation and `> LAUNCH_MAIL_CLIENT()`.

#### Scenario: Inspecting case files and copying email in Chapter 03 and Chapter 04
- **WHEN** a user filters case studies or clicks `$ copy cavargas40@gmail.com`
- **THEN** Chapter 03 displays matching terminal dossiers with no legacy `*.portfolio.cavargas.com` links, and Chapter 04 copies the email address and shows `[COPIED: cavargas40@gmail.com ✓]` feedback
