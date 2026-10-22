# engineer-profile-and-capabilities Specification

## Purpose
Defines the Senior Software Engineer profile presentation in the About Me section, the 4-pillar Engineering Capabilities Matrix (including AI-Augmented Engineering), and the Experience and Education timeline.

## Requirements

### Requirement: About Me section displays professional summary without age or Facebook link
The About Me section SHALL present a localized professional narrative, valid email link (`mailto:cavargas40@gmail.com`), and professional social profiles (GitHub and LinkedIn), and MUST NOT display the engineer's age or Facebook link.

#### Scenario: Viewing the About Me section
- **WHEN** a user views the About Me section in any supported locale (`en`, `es`, `pt`, `ja`)
- **THEN** the section renders the localized biography, GitHub link, LinkedIn link, and `mailto:cavargas40@gmail.com` link, with no age field or Facebook link present

### Requirement: Capabilities Matrix presents four engineering domains including AI usage
The Resume/Capabilities section SHALL replace percentage skill bars with four structured domain pillars: AI-Augmented Engineering & Agent Harnesses, Frontend Architecture, Backend & Distributed Systems, and Cloud, Data & DevOps.

#### Scenario: Viewing engineering capabilities
- **WHEN** a user views the Capabilities tab or section
- **THEN** all four capability pillars render with their localized domain titles, descriptions, and technology tags, and no numeric percentage bars (`100%`, `90%`, etc.) are displayed

#### Scenario: AI-Augmented Engineering pillar highlights specs and harnesses
- **WHEN** a user inspects the AI-Augmented Engineering capability pillar
- **THEN** it explicitly lists Spec-Driven Development, Agent Harnesses, Context Engineering, and AI-assisted quality workflows

### Requirement: Experience and Education timeline renders full role details
The timeline component SHALL display the period, position title, organization, and full role description (`DETAIL`) for each experience and education entry across all supported locales, without referencing Propellerhead.

#### Scenario: Viewing experience timeline entries
- **WHEN** a user views the Experience tab in the Resume section
- **THEN** each timeline entry displays its localized date range, role title, company name, and detailed description paragraph
