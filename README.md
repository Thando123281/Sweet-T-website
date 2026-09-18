#  Sweet'T Premium Perfumes - Website 

> A modern, mobile-responsive e-commerce website for Sweet'T Perfume Store, enabling customers to browse premium fragrances, place enquiries, and connect with the local business in Mbombela, Mpumalanga.

---

##  Student Information
* **Student Name: Thando Mavimbela
* **Student Number: ST10511968
* **Institution: Rosebank international
* **Course/Module: WEDE5020 - Web Development
* **Submission Date:14 September 2026

---

##  Project Overview

Sweet'T is a luxury perfume store based in Mbombela, Mpumalanga, South Africa. The business owner, Thando, created Sweet'T with a vision to provide customers with affordable, premium fragrances that boost confidence and self-expression. 

This project addresses a real-world need: **Sweet'T needs an online presence** to:
- Increase brand visibility beyond the physical store location
- Showcase the perfume collection 24/7 to potential customers
- Enable customers to make enquiries about products without visiting in person
- Build credibility and trust in the local community
- Generate sales and customer engagement through digital channels

The website serves young adults (16-35 years old), gift buyers, working professionals, and anyone looking for quality fragrances. By providing an easy-to-navigate, mobile-friendly platform, Sweet'T can reach customers who prefer to browse online and make informed purchasing decisions.

---

##  Website Goals and Objectives

* **Primary Goal**: To establish a professional online presence that showcases Sweet'T's premium perfume collection and generates customer enquiries and sales through a responsive, user-friendly e-commerce website.

* **Objective 1**: Deliver a fully responsive website that is accessible and functional on mobile devices (375px), tablets (768px), and desktops (1024px+) to reach customers on any device.

* **Objective 2**: Implement an intuitive product browsing experience with filtering capabilities (by gender: Women/Men/Unisex) and detailed product information to help customers find their perfect fragrance.

* **Objective 3**: Provide multiple contact methods (email, WhatsApp, phone, physical address) and functional enquiry/contact forms to facilitate customer communication and order placement.

---

##  Key Features and Functionality

* **Feature 1: Homepage Hero Section** - Eye-catching gradient background with call-to-action buttons to encourage browsing and engagement with featured products.

* **Feature 2: Product Gallery** - Responsive grid displaying 8 perfume products with images, descriptions, prices, and star ratings. Includes filter buttons to sort by category (Women/Men/Unisex).

* **Feature 3: Brand Story (About Us)** - Tells the Sweet'T story, mission, vision, and core values to build customer trust and emotional connection with the business.

* **Feature 4: Multi-Contact Methods** - Email, WhatsApp, phone, and physical address displayed on contact page with embedded Google Map for easy location finding.

* **Feature 5: Enquiry Form** - Comprehensive form allowing customers to ask product questions, request recommendations, inquire about custom orders, and provide contact preferences (email/WhatsApp/phone).

* **Feature 6: Mobile Hamburger Navigation** - Responsive navigation menu that transforms into a compact hamburger menu on mobile devices for improved user experience.

* **Feature 7: Newsletter Signup** - Allows customers to subscribe for exclusive offers, new arrival alerts, and fragrance tips via email.

* **Feature 8: Responsive Design** - Built with mobile-first approach, ensuring seamless experience across all devices and screen sizes.

---

##  Timeline and Milestones

- [x] **Part 1: HTML Structure** — Completed September 7, 2026
  - Created 5 HTML pages (index, about_us, products, enquiry, contact)
  - Established semantic HTML structure and navigation
  - Set up project folder and initial files

- [x] **Part 2: CSS Styling & Responsive Design** — Completed September 8, 2026
  - Created comprehensive styles.css (1,200+ lines)
  - Implemented mobile-first responsive design (3 breakpoints)
  - Applied typography, colors, and layout styling
  - Added 10 optimized product images
  - Fixed duplicate navigation issue in contact page
  - Tested on multiple devices (mobile, tablet, desktop)

- [ ] **Part 3: JavaScript & Interactivity** — Planned for September 9-10, 2026
  - Product filtering functionality
  - Form validation and submission handling
  - Mobile hamburger menu toggle
  - Smooth scrolling effects
  - Character counter for forms
  - Success/error messages

- [ ] **Part 4: Final Testing & Deployment** — Planned for September 10-11, 2026
  - Cross-browser testing
  - Performance optimization
  - Accessibility verification
  - Final submission preparation
  - GitHub repository setup and push

---

##  Part 2 Details
*(Submission for CSS Styling and Responsive Design)*

### Deliverables for Part 2

* **External CSS Stylesheet (styles.css)**: Complete stylesheet with 1,200+ lines of organized, commented CSS code implementing all design specifications including colors, typography, layout, and responsive behavior.

* **Mobile-First Responsive Design**: Implemented using CSS media queries with 3 key breakpoints:
  - Mobile (max-width: 767px) - Single column layouts
  - Tablet (768px - 1023px) - 2-column layouts
  - Desktop (1024px+) - Multi-column layouts with full features

* **Color Palette Implementation**: 
  - Primary Pink (#E8C5D1) - Main brand color
  - Dark Pink (#D4A5B4) - Headings and accents
  - Accent Gold (#D4AF37) - Premium luxury feel
  - Light Gold (#F5E6D3) - Soft backgrounds
  - Proper contrast ratios for accessibility (WCAG AA)

* **Typography Styling**:
  - Playfair Display (serif) for headings - luxury, elegant aesthetic
  - Aptos (sans-serif) for body text - modern, highly readable
  - Responsive font scaling for all screen sizes
  - Proper line-height and letter-spacing for readability

* **Layout Techniques**:
  - CSS Grid for product gallery (auto-fit responsive columns)
  - Flexbox for navigation, forms, and footer
  - CSS variables for colors, spacing, and sizing
  - Consistent 8px-based spacing system

* **Responsive Features**:
  - Touch-friendly button sizing (44px+ height)
  - Responsive images (max-width: 100%)
  - Hamburger navigation menu structure (logic for Part 3)
  - Flexible forms for mobile input
  - Proper viewport meta tag configuration

* **Testing & Documentation**:
  - Tested on iPhone SE (375px), iPhone 12 (414px), iPad (768px), and Desktop (1024px+)
  - Cross-browser compatibility verified (Chrome, Firefox, Safari, Edge)
  - No console errors or warnings
  - Comprehensive mobile testing guide created
  - Screenshot evidence captured at 3 device sizes

### Setup & Local Execution Instructions

1. **Clone the repository**: 
   ```bash
   git clone <your-github-repo-url>
   cd sweet-t-website
   ```

2. **View the website locally**:
   - **Option A (Direct)**: Open `index.html` in your web browser
   - **Option B (Live Server)**: 
     - Install "Live Server" extension in VS Code
     - Right-click on `index.html`
     - Select "Open with Live Server"
     - Website opens automatically in browser

3. **Test responsiveness**:
   - Press `F12` to open Developer Tools
   - Click the device toolbar icon (phone icon) at the top-left
   - Select different devices (iPhone, iPad, Desktop)
   - Test all 5 pages and verify mobile functionality

4. **Test on actual mobile device** (optional):
   - Both devices must be on the same WiFi network
   - Find your computer IP (Windows: `ipconfig` / Mac: `ifconfig`)
   - On your phone browser, navigate to: `[Your-IP]:5500`
   - Example: `192.168.1.100:5500`

---

##  Sitemap

Below is the structural hierarchy and navigation of the website:

```
Sweet'T Website Structure
│
├── Homepage (index.html)
│   ├── Hero Section with CTA
│   ├── Featured Products Grid (4 items)
│   ├── Why Choose Us Section
│   └── Newsletter Signup
│
├── About Us (about_us.html)
│   ├── Brand Story
│   ├── Mission & Vision
│   ├── Core Values (4 pillars)
│   └── Why Choose Us Features
│
├── Products (products.html)
│   ├── Filter Buttons (All/Women/Men/Unisex)
│   ├── Product Gallery (8 items)
│   │   ├── Product Image
│   │   ├── Product Name & Category
│   │   ├── Description
│   │   ├── Price & Ratings
│   │   └── Add to Cart Button
│   └── View All Products Link
│
├── Enquiry (enquiry.html)
│   ├── Enquiry Form
│   │   ├── Name, Email, Phone
│   │   ├── Enquiry Type Dropdown
│   │   ├── Message Textarea
│   │   └── Contact Preference Radios
│   ├── FAQ Section
│   └── Quick Info Cards
│
└── Contact Us (contact.html)
    ├── Contact Methods (Email, WhatsApp, Phone, Address)
    ├── Business Hours
    ├── Quick Contact Form
    ├── Embedded Google Map
    ├── Social Media Links
    └── Newsletter Signup
```

---

##  Project Structure

```
sweet-t-website/
│
├── index.html              (Homepage)
├── about_us.html           (About Us page)
├── products.html           (Products catalog)
├── enquiry.html            (Enquiry form page)
├── contact.html            (Contact information)
│
├── styles.css              (Complete CSS styling - 1,200+ lines)
├── script.js               (JavaScript - Part 3, in progress)
│
├── images/                 (Product & asset images)
│   ├── about-store.jpg
│   ├── bold-gentleman.jpg
│   ├── cherry-kiss.jpg
│   ├── fresh-garden.jpg
│   ├── gold-elegance.jpg
│   ├── hero-background.jpg
│   ├── midnight-bliss.jpg
│   ├── ocean-breeze.jpg
│   ├── rose-essence.jpg
│   └── vanilla-dream.jpg
│
├── README.md               (This comprehensive documentation)
├── MOBILE_TESTING_GUIDE.md (Testing procedures and checklist)
├── HOW_TO_ADD_IMAGES.md    (Image setup instructions)
│
└── .git/                   (GitHub repository files)
```

---

##  Changelog

### [v2.0.0] - Part 2 Submission (September 8, 2026)

#### Added
* **styles.css** - Complete external stylesheet (1,200+ lines)
  - CSS variables for colors, spacing, typography
  - Base styles, typography hierarchy, layout structure
  - Visual styles (colors, shadows, borders, transitions)
  - Responsive design with 3 media query breakpoints
  - Mobile-first approach with relative units (rem, em, %)
  - Hover effects and interactive states
  - Accessibility features (focus indicators, color contrast)

* **10 Optimized Product Images**
  - about-store.jpg (store/lifestyle image)
  - 8 product perfume images (various sizes and styles)
  - hero-background.jpg (hero section background)
  - All optimized for web (compressed file sizes)

* **Clean contact.html Structure**
  - Removed duplicate header navigation
  - Reorganized contact sections
  - Fixed form styling and layout

* **Comprehensive Documentation**
  - Created MOBILE_TESTING_GUIDE.md with testing procedures
  - Created HOW_TO_ADD_IMAGES.md with image setup instructions
  - Updated README with Part 2 details and implementation guide

* **Responsive Design Features**
  - Mobile navigation hamburger menu structure (ready for JS)
  - Responsive product grid (4→2→1 columns)
  - Touch-friendly button sizing (44px+)
  - Flexible forms for all screen sizes
  - Responsive images with max-width: 100%

#### Changed
* Updated all navigation links for consistency
* Reorganized CSS for better maintainability
* Improved responsive breakpoints based on testing

#### Fixed
* Duplicate header navigation in contact.html
* Contact page layout responsiveness
* Product grid responsiveness on tablet
* Image scaling on mobile devices

#### Tested
* iPhone SE (375px width)
* iPhone 12 (414px width)
* iPad (768px width)
* Desktop (1024px+ width)
* Cross-browser testing (Chrome, Firefox, Safari, Edge)
* All 5 pages verified for responsiveness
* No console errors or broken links

---

### [v1.0.0] - Part 1 Submission (September 7, 2026)

#### Added
* Initial project structure and repository setup
* Asset folders (images/, CSS, JavaScript placeholders)
* 5 HTML pages with semantic structure:
  - index.html (Homepage with featured products)
  - about_us.html (Brand story and values)
  - products.html (Product gallery with 8 items)
  - enquiry.html (Customer enquiry form)
  - contact.html (Contact information and map)
* Comprehensive navigation system across all pages
* Responsive meta tags and SEO optimization
* Footer sections on all pages with links and contact info

#### Features Implemented
* Multi-page website structure with proper linking
* Product card components with structured layout
* Form components with proper field organization
* Contact information sections with multiple methods
* Business hours and store location information
* Newsletter signup section
* Social media links placeholder

---

##  Learning Outcomes & Skills Demonstrated

### Part 2 - CSS Styling & Responsive Design

**Learning Outcome 1: Create External CSS Stylesheet**
-  Created `styles.css` linked to all 5 HTML pages
-  Organized CSS with comments and logical sections
-  Used CSS variables for colors, spacing, fonts
-  Established base styles and inheritance

**Learning Outcome 2: Identify Appropriate Selectors**
-  Used class selectors for component styling
-  Used element selectors for base styles
-  Used pseudo-classes (:hover, :focus, :active)
-  Used descendant and child selectors properly

**Learning Outcome 3: Apply Decorative Styling**
-  Implemented color palette (pink, gold, white)
-  Applied shadows for depth (3-level system)
-  Used borders and border-radius
-  Created smooth transitions (0.3s ease)
-  Designed interactive hover effects

**Learning Outcome 4: Apply Layout Styling**
-  Used CSS Grid for responsive product gallery
-  Used Flexbox for navigation and forms
-  Implemented container system with max-width
-  Created consistent spacing (8px base unit)

**Learning Outcome 5: Apply Typography Styling**
-  Selected and applied Playfair Display for headings
-  Selected and applied Aptos for body text
-  Implemented responsive font scaling
- Set proper line-height and letter-spacing

**Learning Outcome 6: Use Browser Developer Tools**
-  Used F12 DevTools for CSS inspection
-  Used device toolbar for responsive testing
-  Verified styles in real-time
-  Checked and fixed responsive issues

**Learning Outcome 7: Apply Responsive Styling**
-  Implemented mobile-first CSS approach
-  Created 3 media query breakpoints
-  Used relative units throughout (rem, em, %)
-  Built responsive grid systems
-  Tested on multiple device sizes

**Learning Outcome 8: Test & Iterate**
-  Tested on 5+ different screen sizes
-  Verified cross-browser compatibility
-  Fixed responsive issues iteratively
-  Documented testing results
-  Created testing guide for reproducibility

---

##  Technical Specifications

### Technologies Used
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling, layout, and responsive design
- **CSS Variables** - Dynamic theming and maintainability
- **CSS Grid** - Responsive product gallery
- **Flexbox** - Navigation and form layouts
- **Responsive Design** - Mobile-first approach
- **Google Fonts** - Playfair Display + System fonts
- **Google Maps API** - Embedded location map

### Browser Compatibility
-  Google Chrome (latest)
-  Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
-  Mobile Safari (iOS)
-  Chrome Mobile (Android)

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Performance
- Page load time: < 3 seconds (optimized images)
- No render-blocking resources
- CSS optimized and organized
- Images compressed for web

---

##  Next Steps (Part 3 - JavaScript)

### Planned Features for JavaScript Implementation
- [ ] Product filtering by category (Women/Men/Unisex)
- [ ] Form validation for enquiry and contact forms
- [ ] Mobile hamburger menu toggle functionality
- [ ] Smooth scrolling navigation
- [ ] Character counter for message textareas
- [ ] Form submission handling with success/error messages
- [ ] Dynamic product display updates
- [ ] Interactive hover effects enhancement

### Estimated Timeline
- **Development**: 2-3 hours
- **Testing**: 1-2 hours
- **Documentation**: 1 hour
- **Submission**: September 10, 2026

---

##  References

1. Mozilla Developer Network. (2024). *CSS Styling*. https://developer.mozilla.org/en-US/docs/Web/CSS
2. W3C. (2024). *Responsive Design and Media Queries*. https://www.w3.org/
3. Google Fonts. (2024). *Playfair Display & Aptos Font Families*. https://fonts.google.com/
4. Web Content Accessibility Guidelines. (2024). *WCAG 2.1 AA Compliance*. https://www.w3.org/WAI/WCAG21/quickref/
5. CSS Tricks. (2024). *A Complete Guide to Grid*. https://css-tricks.com/snippets/css/complete-guide-grid/
6. CSS Tricks. (2024). *A Complete Guide to Flexbox*. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
7. Independent Institute of Education. (2024). *Web Development Modules & Standards*. IIE
8. Sweet'T Business Proposal. (2026). *E-Commerce Website Requirements*. Project Documentation

---

##  Support & Troubleshooting

### Common Issues

**Website not displaying properly on mobile?**
- Clear browser cache (Ctrl + Shift + Delete)
- Hard refresh the page (Ctrl + F5)
- Test in device toolbar (F12  phone icon)

**Images not showing?**
- Verify images are in the `images/` folder
- Check file names match HTML references
- Ensure paths use forward slashes: `images/filename.jpg`

**Responsive layout breaking?**
- Inspect with DevTools (F12)
- Check media queries in styles.css
- Verify viewport meta tag in HTML head

**Forms not working?**
- Check form field names and IDs
- Verify form styling in CSS
- JavaScript implementation needed for Part 3

---

##  Submission Checklist

### Part 2 Requirements
- [x] External CSS Stylesheet (styles.css) created
- [x] Base styles applied to all elements
- [x] Typography styles implemented
- [x] Layout structure created (Grid/Flexbox)
- [x] Visual styles applied (colors, shadows, borders)
- [x] Responsive design implemented (3+ breakpoints)
- [x] Relative units used (rem, em, %)
- [x] Media queries properly implemented
- [x] Testing completed on multiple devices
- [x] Screenshots captured (3 sizes)
- [x] README updated with Part 2 details
- [x] Changelog documented
- [x] No console errors
- [x] All links functional

### Files to Submit
- [x] index.html, about_us.html, products.html, enquiry.html, contact.html
- [x] styles.css (1,200+ lines)
- [x] images/ folder (10 optimized images)
- [x] README.md (comprehensive documentation)
- [x] MOBILE_TESTING_GUIDE.md
- [x] HOW_TO_ADD_IMAGES.md
- [x] Screenshot evidence (3 device sizes)

---

##  Project Status Summary

| Phase | Component | Status | Date |
|-------|-----------|--------|------|
| Part 1 | HTML Structure | Complete | Sep 7 |
| Part 2 | CSS Styling |  Complete | Sep 8 |
| Part 2 | Responsive Design |  Complete | Sep 8 |
| Part 2 | Testing & Documentation |  Complete | Sep 8 |

---

##  Document Information

- **Document**: README.md for Sweet'T Perfume Store Website
- **Version**: 2.0 (Part 2 Submission)
- **Last Updated**: September 8, 2026
- **Student**: Thando Mavimbela (ST10511968)
- **Course**: WEDE5020 - Web Development
- **Institution**: Independent Institute of Education (Pty) Ltd

---

**Ready for Part 3? Let's add JavaScript interactivity!** 
 

Reference 

Shopify. (2024) How to Start a Perfume Business: 9 Steps to Success. Available at: shopify.com (Accessed: 7 August 2026).   

W3C. (2023) Web Content Accessibility Guidelines WCAG 2.2. Available at: w3.org (Accessed: 8 August 2026).   

Google. (2024) Mobile-First Indexing Best Practices. Available at: developers.google.com (Accessed: 9 August 2026)
