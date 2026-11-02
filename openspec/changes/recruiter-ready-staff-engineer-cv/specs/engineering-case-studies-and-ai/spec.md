# Spec Delta

## MODIFIED Requirements

### Requirement: Portfolio section renders structured Engineering Case Study cards
The Portfolio section SHALL render five structured Engineering Case Study cards (Spec-Driven AI Engineering, Rappi High-Concurrency Microservices, Cloud Infrastructure & Reusable CI/CD, Modern Reactive Web & i18n, and Enterprise Project Management ERP) displaying localized problem/context summaries, architectural approach, technology tags, and quantified engineering benchmarks.

#### Scenario: Viewing Engineering Case Study cards
- **WHEN** a user views the Portfolio / Engineering Work section
- **THEN** structured case study cards are rendered with localized titles, descriptions, stack tags, and realistic impact benchmarks, and no dead `http://*.portfolio.cavargas.com` links are present

#### Scenario: Filtering or inspecting case studies across viewports
- **WHEN** a user interacts with case study cards on desktop or mobile viewports
- **THEN** cards display their full architectural details in a responsive grid without clipping or horizontal scroll

#### Scenario: Viewing all five case study cards
- **WHEN** a user or recruiter views the Production Case Files section in any supported locale (`en`, `es`, `pt`, `ja`)
- **THEN** five structured case study cards render with localized titles, problem descriptions, architectural breakdowns, technology tags, and realistic impact benchmarks

#### Scenario: Inspecting the Cloud Infrastructure & Unified CI/CD case study
- **WHEN** a user inspects the Cloud Infrastructure & Reusable CI/CD case study
- **THEN** it showcases AWS, Azure, Terraform, Bicep, DRY reusable pipeline templates across GitHub Actions, Azure DevOps, and Bitbucket, with a 40%+ pipeline maintenance reduction metric

### Requirement: Dedicated AI Engineering and Agent Harnesses workflow showcase is displayed
The Portfolio / Engineering Work section SHALL include a dedicated interactive console explaining the engineer's Spec-Driven AI Engineering workflow using multi-model agent harnesses (Claude Code, Cursor, Antigravity, OpenSpec), deterministic context guardrails, behavioral specifications, and automated verification gates.

#### Scenario: Viewing the AI Engineering & Harnesses showcase
- **WHEN** a user views the AI Engineering highlight block in any supported locale (`en`, `es`, `pt`, `ja`)
- **THEN** the section renders the localized explanation and visual pipeline of Spec-Driven AI Engineering and Agent Harnesses

#### Scenario: Interacting with the AI Engineering & Harnesses console
- **WHEN** a user selects any of the execution stages in the AI harness console
- **THEN** the console updates the active stage title, description, and live spec trace snippet in deterministic mode
