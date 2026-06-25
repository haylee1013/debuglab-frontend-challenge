# Debug Lab Frontend Challenge

## Overview

This repository contains two responsive webpages developed for the **Debug Lab Frontend Developer Technical Assessment**:

* `software-development.html`
* `stem-workshop.html`

The **Holiday Workshop** page (`index.html`) serves as the landing page for this project. It recreates the Debug Lab landing page navigation and provides a starting point for accessing both assessment pages through two interactive cards.


## How to Run

This project is built using **HTML5, CSS3, and vanilla JavaScript**, so no installation, package manager, or build process is required.

### Option 1 (Recommended)

1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html` and select **Open with Live Server**.
4. The website will open in your default browser.
5. Use the navigation bar to access the **Software Development** and **STEM Workshop** pages.

### Option 2

1. Open `index.html` directly in any modern web browser.
2. Navigate between pages using the navigation bar.


## Mobile Testing

The project can also be tested on a mobile device by deploying it to a static hosting service such as **GitHub Pages**, **Netlify**, or **Vercel**. Once deployed, simply open the generated URL on any modern mobile browser to verify the responsive layout, navigation, and mobile menu.



## Navigation Behaviour

The Holiday Workshop landing page contains two clickable cards:

* **Software Development** → Opens `software-development.html`
* **STEM Workshop** → Opens `stem-workshop.html`

The remaining navigation items (Programs, Events, Marketplace, Wall of Fame, Leaderboard, Coaches, and Student) redirect to the official Debug Lab website.

**Note:** After navigating to the official Debug Lab website, the browser leaves this local project. To continue testing the assessment pages, simply use your browser's **Back** button to return to the Holiday Workshop landing page (`index.html`).



## Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* Google Fonts (Outfit)
* Material Symbols

The project was intentionally developed using plain HTML, CSS, and JavaScript because the assessment pages are static and the objective was to demonstrate clean, maintainable frontend development without unnecessary framework overhead.


## Design Decisions

* The implementation follows the requirements and evaluation criteria described in the provided assessment PDF.
* The navigation mirrors the structure and user experience of the official Debug Lab landing page, including the logo, navigation items, dropdown menus, mobile drawer, and Student button.
* All pages were implemented using original HTML, CSS, and JavaScript. No source code from the Debug Lab website was copied, and no frontend frameworks such as Bootstrap or Tailwind CSS were used.
* The design follows the required color palette:

  * `#000000`
  * `#F24405`
  * `#F25C05`
  * `#F28705`
  * `#F2F0E4`
* Shared styles are centralized in `assets/css/style.css` and `assets/css/navbar.css` to maintain consistency across all pages and reduce duplicated code.


## Accessibility

* Semantic HTML5 elements are used throughout (`header`, `nav`, `main`, `section`, `article`, and `footer`).
* The mobile navigation supports keyboard interaction and can be closed using the **Escape** key.
* The current page is identified using `aria-current="page"`.
* Interactive elements include visible keyboard focus states to improve accessibility.


## Browser Support

The project has been developed and tested using the latest version of **Google Chrome** and is expected to work correctly in other modern browsers that support HTML5, CSS3, and ES6 JavaScript.


## Future Improvements

Given additional time, the following improvements could be made:

* Confirm all external Debug Lab navigation URLs with the team before final production deployment.
* Replace placeholder image assets with optimized production assets provided by Debug Lab.
* Extract the shared header and footer into reusable components while keeping the final output as static HTML.
* Perform cross-browser and cross-device testing, together with Lighthouse accessibility and performance audits, before production deployment.
