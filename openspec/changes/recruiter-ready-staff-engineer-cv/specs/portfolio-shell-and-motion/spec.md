# Spec Delta

## ADDED Requirements

### Requirement: Browser print renders clean executive CV document
The application SHALL provide print stylesheet rules (`@media print`) that format the website into an executive, high-contrast curriculum vitae document when printed or exported to PDF via the browser.

#### Scenario: Printing or saving the page to PDF
- **WHEN** a user or recruiter initiates a browser print action (`Cmd + P` or `window.print()`)
- **THEN** interactive animation elements (HiDPI matrix rain canvas, laser spine, telemetry HUD, CRT overlay, and interactive action buttons) are hidden, and content sections render with black text on pure white background with clean page breaks between major chapters

#### Scenario: Print layout displays complete candidate information
- **WHEN** the printed document is generated
- **THEN** the candidate name, Staff Engineer title, remote/NZ timezone availability, contact email, GitHub/LinkedIn links, capability pillars, case studies, and experience timeline are legibly rendered

#### Scenario: Browser print overrides active category filters
- **GIVEN** a user or recruiter has activated an interactive category filter (`'ai'`, `'cloud'`, or `'distributed'`) in the browser
- **WHEN** the browser print action is triggered
- **THEN** all five engineering case studies SHALL be rendered in the printed document, and the active on-screen filter MUST NOT suppress any case studies from the output

### Requirement: Matrix-styled CV favicon is displayed
The application SHALL serve a Matrix-themed favicon featuring a stylized `[CV]` glyph in phosphor green (`#00ff66`) on a void background (`#0d1117`).

#### Scenario: Browser loads Matrix-styled CV favicon
- **WHEN** a user visits the application root or any subroute in a web browser
- **THEN** the browser tab displays the custom Matrix-styled `[CV]` icon

## MODIFIED Requirements

### Requirement: Sticky navigation bar provides section navigation and locale switching
The layout shell SHALL render a navigation bar that remains permanently fixed at the top of the viewport on desktop viewports during scrolling, with links to the About, Experience/Capabilities, Engineering Work/AI, and Contact sections, alongside an active language switcher supporting English, Spanish, and Japanese (`en`, `es`, `ja`).

#### Scenario: User navigates to a section from the navbar
- **WHEN** a user clicks a section link in the navigation bar
- **THEN** the viewport scrolls smoothly to the target section

#### Scenario: User switches language from the navigation bar
- **WHEN** a user selects an active locale (`en`, `es`, or `ja`)
- **THEN** all visible section headings, navigation items, and content update immediately to the selected locale and `localStorage.getItem('lang')` stores that locale

#### Scenario: Fixed navigation header on desktop viewports
- **WHEN** a user scrolls vertically through content chapters on a desktop viewport (`> 900px`)
- **THEN** the navigation bar remains pinned at `top: 0` without clipping or horizontal overflow

#### Scenario: Programmatic navigation with fixed header offset
- **GIVEN** a user triggers section navigation via `scrollToSection` from the navigation bar or telemetry HUD
- **WHEN** the viewport scrolls to the target anchor
- **THEN** the target section heading and content SHALL NOT be occluded behind the fixed navigation bar

#### Scenario: Sanitizing legacy or invalid locale from client storage
- **GIVEN** a client has an unsupported or legacy locale key (such as `'pt'`) saved in `localStorage`
- **WHEN** the application initializes `LanguageSwitcherComponent`
- **THEN** the component SHALL sanitize the selection to `'en'`, persist `'en'` to `localStorage`, and display English without broken UI state or missing flag errors

### Requirement: Modern engineer hero section replaces background stock video
The header hero section SHALL display the candidate name, Staff Fullstack & AI Systems Engineer title, localized value proposition highlighting modern TypeScript, Go, Rust, event-driven systems, and AI harnesses, primary call-to-action buttons, and recruiter logistics.

#### Scenario: Hero section renders on initial page load
- **WHEN** a user visits `/welcome`
- **THEN** the hero displays the localized Staff Engineer title, engineering summary, core stack tags, and call-to-action buttons without rendering a `<video>` background element

#### Scenario: Hero section renders updated staff engineer positioning
- **WHEN** a user visits `/welcome` in any supported locale
- **THEN** the hero badge displays "Staff Fullstack & AI Systems Engineer", the headline emphasizes deterministic AI harnesses and distributed systems, and core stack tags include TypeScript, Go, Rust, Kafka, NestJS, and Terraform

#### Scenario: OpenGraph metadata sanitization
- **WHEN** social network or ATS link crawlers inspect `index.html`
- **THEN** `og:image` SHALL NOT reference any personal portrait photo or Gravatar URL, and `og:description` SHALL describe candidate as a Staff Fullstack & AI Systems Engineer
