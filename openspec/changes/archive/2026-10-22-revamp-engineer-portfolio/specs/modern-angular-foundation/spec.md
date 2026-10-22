# Spec Delta

## Purpose

Defines the modern Angular runtime, build compatibility on Node 22, legacy dependency removal, and route preservation for `/welcome`, `/crypto`, and `/3d`.

## ADDED Requirements

### Requirement: Application builds and runs on modern Angular and Node 22
The application SHALL build for production and run unit tests cleanly under a modern Angular CLI toolchain on Node.js 22 without requiring legacy OpenSSL flags.

#### Scenario: Production build succeeds
- **WHEN** the production build command is executed
- **THEN** the application compiles without errors and generates production assets within the configured component style budget

#### Scenario: Unit test suite executes cleanly
- **WHEN** the test runner is executed in headless mode
- **THEN** all unit specs pass without missing dependency or compilation errors

### Requirement: Legacy routes remain accessible and functional
The application MUST preserve lazy-loaded routing and functionality for the existing `/crypto` and `/3d` routes alongside the primary `/welcome` route.

#### Scenario: Navigating to /crypto route
- **WHEN** a user navigates to `/crypto`
- **THEN** the AES encryption and decryption interface renders and encrypts or decrypts messages using the provided passphrase

#### Scenario: Navigating to /3d route
- **WHEN** a user navigates to `/3d`
- **THEN** the 3D WebGL canvas view initializes and renders without throwing runtime errors

### Requirement: Deprecated form and unused packages are removed
The system SHALL remove the legacy reCAPTCHA v2 contact form integration, Firebase contact submission endpoint, and unused third-party scripts (`ngx-captcha`, `@ngrx/*`, `pace.min.js`, `ngx-scrollreveal`).

#### Scenario: Application loads without reCAPTCHA or Pace scripts
- **WHEN** a user loads the `/welcome` page
- **THEN** no network requests are made to Google reCAPTCHA, Firebase `contacts.json`, or `pace.min.js`
