# portfolio-shell-and-motion Specification

## Purpose
Defines the layout shell, sticky navigation, hero section, direct contact footer, locale switching, and modern scroll and hover motion behaviors across responsive viewports.

## Requirements

### Requirement: Sticky navigation bar provides section navigation and locale switching
The layout shell SHALL render a sticky navigation bar with links to the About, Experience/Capabilities, Engineering Work/AI, and Contact sections, alongside an interactive language selector supporting `en`, `es`, `pt`, and `ja`.

#### Scenario: User navigates to a section from the navbar
- **WHEN** a user clicks a section link in the navigation bar
- **THEN** the viewport scrolls smoothly to the target section

#### Scenario: User switches language from the navigation bar
- **WHEN** a user selects a supported locale (`en`, `es`, `pt`, or `ja`)
- **THEN** all visible section headings, navigation items, and content update immediately to the selected locale and `localStorage.getItem('lang')` stores that locale

### Requirement: Modern engineer hero section replaces background stock video
The header hero section SHALL display the engineer's name, senior title, value proposition, primary call-to-action links, and an interactive or ambient engineering visual without loading the legacy background MP4/WebM stock video or low-resolution 80px Gravatar.

#### Scenario: Hero section renders on initial page load
- **WHEN** a user visits `/welcome`
- **THEN** the hero displays the localized title, engineering summary, and call-to-action buttons without rendering a `<video>` background element

### Requirement: Direct contact and connect footer replaces legacy reCAPTCHA form
The page SHALL include a Contact & Connect section and footer providing direct email actions (including one-click email copy to clipboard and a valid `mailto:cavargas40@gmail.com` link) and professional links to GitHub and LinkedIn.

#### Scenario: User copies email address from contact section
- **WHEN** a user activates the copy-email action in the contact section
- **THEN** `cavargas40@gmail.com` is copied to the clipboard and visual confirmation feedback is displayed

#### Scenario: Responsive layout adapts across mobile and desktop viewports
- **WHEN** the page is viewed at phone (`<= 600px`), tablet (`<= 900px` / `<= 1200px`), and desktop (`> 1200px`) widths
- **THEN** navigation, hero, and footer sections reflow without horizontal overflow

### Requirement: Native scroll-reveal and card micro-interactions animate sections
Page sections and interactive cards SHALL animate into view using browser-native `IntersectionObserver` and CSS transitions, respecting reduced-motion preferences.

#### Scenario: Section enters the viewport during scrolling
- **WHEN** a content section intersects the viewport
- **THEN** the section transitions into its visible state using CSS reveal classes
