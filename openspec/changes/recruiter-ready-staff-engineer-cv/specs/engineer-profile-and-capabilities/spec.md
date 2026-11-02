# Spec Delta

## MODIFIED Requirements

### Requirement: About Me section displays professional summary without age or Facebook link
The About Me section SHALL present a localized professional narrative with recruiter logistics (Open to Remote Worldwide, New Zealand Timezone UTC+12/UTC+13), a valid email link (`mailto:cavargas40@gmail.com`), and professional social profiles (GitHub and LinkedIn), and MUST NOT display a personal portrait photo, physical street address, age, or Facebook link.

#### Scenario: Viewing the About Me section
- **WHEN** a user views the About Me section in any supported locale (`en`, `es`, `pt`, `ja`)
- **THEN** the section renders the localized biography, remote availability in NZ timezone, GitHub link, LinkedIn link, and `mailto:cavargas40@gmail.com` link, with no personal portrait photo, age field, Facebook link, or street address present

#### Scenario: Viewing the About Me section with recruiter logistics
- **WHEN** a user or recruiter views the About Me section in any supported locale (`en`, `es`, `pt`, `ja`)
- **THEN** the section renders the localized narrative, terminal-styled identity metadata, remote availability, NZ timezone, GitHub link, LinkedIn link, and `mailto:cavargas40@gmail.com` link, without showing a personal photo, age field, Facebook link, or street address

#### Scenario: Localizing operator telemetry location without hardcoded English
- **GIVEN** a user views the About Me operator card in a non-English locale (`es`, `ja`, `pt`)
- **WHEN** the section renders the candidate location
- **THEN** the location string SHALL be resolved via `@ngx-translate` using `ABOUT_ME.LOCATION_VALUE`, and MUST NOT render hardcoded English text

### Requirement: Capabilities Matrix presents four engineering domains including AI usage
The Capabilities section SHALL present five structured domain pillars (AI Systems & Agent Harnesses; Systems & Core Languages; Backend, APIs & Event Streaming; Cloud Infrastructure, IaC & CI/CD; and Modern Frontend & Test Automation) featuring modern tooling including Rust, Golang, TypeScript, NestJS, Kafka, GraphQL, gRPC, TypeORM, AWS, Azure, Terraform, Bicep, DRY CI/CD pipelines, Vite, Playwright, and Cypress.

#### Scenario: Viewing engineering capabilities
- **WHEN** a user views the Capabilities tab or section
- **THEN** all five capability pillars render with their localized domain titles, subtitles, descriptions, and technology tags, with zero percentage bars displayed

#### Scenario: AI-Augmented Engineering pillar highlights specs and harnesses
- **WHEN** a user inspects the AI-Augmented Engineering capability pillar
- **THEN** it explicitly lists Spec-Driven Development (OpenSpec), Agent Harnesses, Context Engineering, Multi-Model LLMs, and AI-assisted quality workflows

#### Scenario: Viewing five engineering capability pillars
- **WHEN** a user views the Capabilities section in any supported locale
- **THEN** all five capability pillars render with their localized domain titles, subtitles, descriptions, and technology tags, with zero percentage bars displayed

#### Scenario: AI Systems and Agent Harnesses pillar highlights modern workflows
- **WHEN** a user inspects the AI Systems & Agent Harnesses capability pillar
- **THEN** it explicitly lists Spec-Driven Development (OpenSpec), Agent Harnesses, Multi-Model LLMs, Claude Code, Cursor, Antigravity, and Automated Test Verification
