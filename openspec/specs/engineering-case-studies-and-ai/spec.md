# engineering-case-studies-and-ai Specification

## Purpose
Defines the Engineering Case Study cards and the AI Engineering (Agent Harnesses and Spec-Driven Development) showcase that replace the legacy broken portfolio image links.

## Requirements

### Requirement: Portfolio section renders structured Engineering Case Study cards
The Portfolio section SHALL replace the 9 legacy image-only `*.portfolio.cavargas.com` links with structured Engineering Case Study cards displaying a localized project title, problem/context summary, architecture and technology stack badges, and engineering impact.

#### Scenario: Viewing Engineering Case Study cards
- **WHEN** a user views the Portfolio / Engineering Work section
- **THEN** structured case study cards are rendered with localized titles, descriptions, and stack tags, and no dead `http://*.portfolio.cavargas.com` links are present

#### Scenario: Filtering or inspecting case studies across viewports
- **WHEN** a user interacts with case study cards on desktop or mobile viewports
- **THEN** cards display their full architectural details in a responsive grid without clipping or horizontal scroll

### Requirement: Dedicated AI Engineering and Agent Harnesses workflow showcase is displayed
The Portfolio / Engineering Work section SHALL include a dedicated highlight explaining the engineer's AI-Augmented Engineering workflow using Agent Harnesses, Project Context boundaries, and Spec-Driven Development (Proposal -> Specs -> Design -> Tasks -> Verification).

#### Scenario: Viewing the AI Engineering & Harnesses showcase
- **WHEN** a user views the AI Engineering highlight block in any supported locale (`en`, `es`, `pt`, `ja`)
- **THEN** the section renders the localized explanation and visual pipeline of Spec-Driven AI Engineering and Agent Harnesses
