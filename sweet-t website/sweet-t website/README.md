# Sweet'T Perfume Store Website

A responsive five-page website for Sweet'T, a perfume business concept based in Mbombela, Mpumalanga. This repository contains the HTML pages, shared CSS, product/store images and shared JavaScript used for the Part 3 improvements.

## Student and module
- **Student:** Thando Mavimbela
- **Student number:** ST10511968
- **Module:** WEDE5020 – Web Development

## Pages
- `index.html` – homepage and featured perfumes
- `about_us.html` – business story, mission and vision
- `products.html` – perfume collection
- `enquiry.html` – product and order enquiry form
- `contact.html` – contact information and general contact form

## Project structure
```text
 sweet-t website/
 ├── index.html
 ├── about_us.html
 ├── products.html
 ├── enquiry.html
 ├── contact.html
 ├── css/
 │   └── styles.css
 ├── js/
 │   └── main.js
 └── images/
     ├── about-store.jpg
     ├── bold-gentleman.jpg
     ├── cherry-kiss.jpg
     ├── fresh-garden.jpg
     ├── gold-elegance.jpg
     ├── hero-background.jpg
     ├── midnight-bliss.jpg
     ├── ocean-breeze.jpg
     ├── rose-essence.jpg
     └── vanilla-dream.jpg
```

## Run locally
1. Open this folder in Visual Studio Code.
2. Open `index.html` directly in a browser, or use the VS Code Live Server extension.
3. Test the navigation at a mobile viewport (767px wide or less).

## Part 2 feedback corrections / changelog

### [Part 3 – feedback corrections] – 31 October 2026
- Added an accessible hamburger button to all five pages. The button toggles the `.active` class on the navigation menu, updates `aria-expanded` and its accessible label, closes after a navigation link is selected, and supports the Escape key.
- Removed the extra Contact link beside the navigation menu on `index.html`, `products.html`, `about_us.html` and `enquiry.html`; Contact remains in the main navigation once.
- Replaced the previous documentation location (`ReadMe/readme`) with this root-level `README.md`, whose file list and structure reflect the files included in this ZIP. The old README also mentioned testing guides and screenshots that were not included in the ZIP; those claims are not repeated here.
- Added visible `:focus-visible` styles for keyboard users and made the hamburger a semantic button with an accessible label and navigation relationship.
- Corrected WhatsApp links to `https://wa.me/27789654321` and telephone links to `tel:+27789654321`. Added `rel="noopener noreferrer"` to links that open in a new tab.
- Renamed `rose-essnce.jpg` to `rose-essence.jpg` and `charry-kiss.jpg` to `cherry-kiss.jpg`, updated their HTML references, and corrected “affordable luxurypremium fragrances” to “affordable luxury fragrances”.
- Added the shared JavaScript file `js/main.js` for the mobile navigation behavior.

## Part 3 – functionality added so far

### Products page JavaScript enhancements
- Replaced the hard-coded product cards on `products.html` with a product grid populated dynamically from a JavaScript product array in `js/main.js`.
- Added live text search across perfume names, categories and descriptions.
- Added category filters for all perfumes, women, men and unisex. The selected filter updates its visual state and the `aria-pressed` accessibility attribute.
- Added sorting options for featured order, name A–Z, price low-to-high and price high-to-low.
- Added a live result count and a helpful empty-state message when no products match.
- Added an accessible image lightbox. Customers can open a larger perfume image, close it using the close button, the Escape key or by selecting the backdrop, and return keyboard focus to the image button.
- Added lazy loading to product thumbnails and descriptive alternative text.
- Added product search and SEO metadata to `products.html`.

## Current implementation notes
- Technologies present: HTML5, CSS3 and vanilla JavaScript.
- The website has five HTML pages and a shared stylesheet.
- The shared JavaScript currently implements the mobile navigation toggle and the products-page search, category filtering, sorting and image lightbox. Remaining Part 3 work includes enquiry/contact form validation and delivery, an interactive location map, SEO metadata for all pages, `robots.txt`, `sitemap.xml`, final performance/security checks and deployment.
- The forms and contact details should be tested before public deployment. A static HTML website does not send email by itself; a form service or server-side endpoint is needed for real form delivery.

## Part 3 changelog

### [Part 3 – product functionality] – 31 October 2026
- Updated `products.html` with a search field, sorting selector, accessible category filter group, live product result count, empty-results message and lightbox dialog container.
- Updated `js/main.js` to create the eight perfume cards from a JavaScript data array and dynamically render the catalogue based on the selected category, search text and sort order.
- Added accessible image controls and lightbox behavior, including descriptive image alternative text, keyboard Escape support, focus restoration and background scroll locking.
- Added CSS for the product search and sort controls, empty state, image zoom controls and responsive lightbox layout.
- Updated the Products page title and meta description to include relevant local perfume search terms.

## References
- MDN Web Docs. (n.d.). *Using the button role and HTML button element*. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
- MDN Web Docs. (n.d.). *Document: DOMContentLoaded event*. https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
- W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/
- Google Search Central. (n.d.). *SEO Starter Guide*. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- MDN Web Docs. (n.d.). *Element: input event*. https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event
- MDN Web Docs. (n.d.). *Array: sort() method*. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- MDN Web Docs. (n.d.). *ARIA: dialog role*. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role
