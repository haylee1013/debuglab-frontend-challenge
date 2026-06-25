# Debug Lab Frontend Challenge

Two responsive Debug Lab pages built for the front-end developer technical assessment:

- `software-development.html`
- `stem-workshop.html`

The project also includes a lightweight local `index.html` so the shared navigation can be tested end to end.

## How to Run

This project is built using HTML5, CSS3, and vanilla JavaScript, so no installation or build process is required.

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click index.html and select Open with Live Server.
4. The website will open in your default browser.
5. Use the navigation bar to access the Software Development and STEM Workshop pages.d.

## Tech Stack

- Semantic HTML5
- Modern CSS with custom properties, Flexbox, Grid, `gap`, and `clamp()`
- Vanilla JavaScript for mobile navigation and active link state
- Google Fonts: Outfit
- Material Symbols for icon consistency with the Debug Lab landing page

I chose plain HTML, CSS, and JavaScript because the assessment pages are static, and the brief asked for clean, maintainable frontend code without unnecessary framework overhead.

## Key Decisions

- The official PDF was treated as the source of truth for scope, content requirements, accessibility, responsiveness, and scoring criteria.
- The navigation follows the actual Debug Lab landing page structure: logo lockup, Programs dropdown, Events dropdown, Marketplace, Wall of Fame, Leaderboard, Coaches link, Student button, and mobile drawer.
- The implementation recreates the design in original code. It does not copy the Debug Lab source code or use Tailwind/Bootstrap.
- The color system is constrained to the requested palette: `#000000`, `#F24405`, `#F25C05`, `#F28705`, and `#F2F0E4`.
- Reusable page patterns were centralized in `assets/css/style.css` and `assets/css/navbar.css` so both pages feel like one product.

## Accessibility Notes

- Pages use semantic landmarks: `header`, `nav`, `main`, `section`, `article`, and `footer`.
- The mobile menu exposes `aria-expanded`, supports Escape to close, and closes when a link or overlay is selected.
- Current page links are marked with `aria-current="page"` by JavaScript.
- Focus states are visible and keyboard-accessible.

## What I Would Improve With More Time

- Replace placeholder links for Marketplace, Wall of Fame, Leaderboard, Coaches, and Student with confirmed production URLs.
- Add locally hosted optimized image assets if provided by Debug Lab.
- Add a small shared HTML include/build step to remove repeated header and footer markup while keeping the deployed output static.
- Run a full browser/device QA matrix and Lighthouse accessibility/performance checks before final submission.
