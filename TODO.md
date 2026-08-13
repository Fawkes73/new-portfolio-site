# Reference-matching TODO

Comparing our site against the Once UI "Selene Yu" reference screenshots, point by point. All items below verified via actual Playwright screenshots, not assumed.

## Nav island

- [x] Home nav item is now icon-only (no text label) — About/Work/Gallery keep icon+label.
- [x] Theme toggle sits immediately after the last nav item (Gallery), clock is the far-right element.
- [x] Sticky positioning verified working correctly at multiple scroll depths (0px, 900px, 1800px) — was never actually broken, confirmed via screenshot.
- [x] Active page gets a filled pill background.
- [x] Location text on the left, clock on the right.

## Hero section

- [x] Featured project card was showing the light-mode screenshot by default (stark white against the dark theme) — reordered all 3 projects' `images[]` to lead with the dark variant.
  - [x] developer-hub.mdx
  - [x] youtube-channel-dashboard.mdx
  - [x] login-template.mdx
- [x] Re-screenshotted — confirmed the hero and "More projects" cards now default to dark screenshots.

## About page

- [x] TOC ("On this page") moved into the same left sidebar as the avatar/location/language pills, stacked below them — matches the reference. Previously was a separate right column, which was a real structural bug.
- [x] "Schedule a call" button intentionally omitted — confirmed by user, no real calendar link exists.
- [ ] Social links row is still bordered-pill style vs. the reference's more minimal inline look — lower priority, not confirmed as wrong, just a stylistic difference.
- [x] Avatar, location pill, language pills, name/role/bio, Work Experience structure — all confirmed matching.

## Process note

Screenshot with Playwright before claiming something is fixed — especially scroll/interaction states a scroll-top screenshot can't show. This caught the sticky-nav non-issue and confirmed the real TOC-placement bug that a text-only diff never would have.
