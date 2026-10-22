# matrix-rain-and-scroll-spine Specification

## Purpose
Defines the full-viewport Retina HiDPI (`1:1` square grid, `12px` dense katakana/hex) Matrix digital rain background canvas, scroll-velocity warp physics, continuous vertical laser spine, and scroll telemetry HUD.

## Requirements

### Requirement: Full-viewport Matrix digital rain renders discrete 1:1 square glyph cells
The portfolio background canvas SHALL render discrete falling character trails using `12px` full-width katakana and hex glyphs (`アイウエオ...0123456789ABCDEFZ`) inside `15x15px` square cells scaled by `window.devicePixelRatio`, locked to `100vw x 100vh` without vertical stretching or line smearing.

#### Scenario: Rendering crisp discrete characters on standard and Retina viewports
- **WHEN** the portfolio loads or the browser window resizes
- **THEN** the canvas scales its backing store by `window.devicePixelRatio`, clears each frame before drawing discrete `[col, row]` cells, renders bright `#ffffff` leading glyphs followed by `#86efac` and fading `#00ff66` trail glyphs, and mutates stationary trail glyphs in place

#### Scenario: Maintaining 1:1 aspect ratio across document scroll height
- **WHEN** the page contains multiple scrollable chapters taller than the viewport
- **THEN** the document `body` MUST NOT apply CSS `perspective`, keeping the `position: fixed` canvas locked to `100vw x 100vh` with square `1:1` character proportions

### Requirement: Matrix glyph rain accelerates with user scroll velocity
The digital rain canvas SHALL track instantaneous scroll delta and temporarily multiply stream drop speed (`RAIN_WARP`) when the user scrolls up or down, decaying smoothly back to `1.0x` when scrolling stops.

#### Scenario: Scrolling accelerates rain velocity and updates HUD telemetry
- **WHEN** the user scrolls vertically across chapters
- **THEN** the rain warp multiplier increases above `1.0x`, accelerates character row stepping, and displays the live `RAIN_WARP` value in the telemetry HUD before decaying back to `1.0x` at rest

### Requirement: Continuous vertical laser spine and telemetry HUD track scroll depth
The portfolio layout SHALL display a top laser progress bar, a continuous vertical spine track whose glowing `#00ff66` laser beam fills proportionally to scroll depth (`0%`–`100%`), chapter node indicators (`00`–`04`), and a desktop telemetry HUD with chapter jump links.

#### Scenario: Scrolling updates laser spine height and depth percentage
- **WHEN** a user scrolls through the portfolio
- **THEN** the vertical laser spine height and top progress bar width match the current scroll percentage, active chapter nodes ignite with a phosphor glow, and the telemetry HUD displays the current depth (`DEPTH // 000%`–`100%`) and active chapter code
