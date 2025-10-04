# Jesse Daniel Mshelizah — Personal Portfolio Website

##  Overview
This is my personal portfolio website built with **HTML5** and **CSS3**.  
It includes the following sections:
- Home
- About
- Projects
- Contact  

The site is hosted live using **GitHub Pages**.

---

## Features
- Fully responsive (mobile-first design)
- Semantic HTML5 structure with `<header>`, `<main>`, `<section>`, `<footer>`
- Accessible navigation with proper headings
- About page with photo and introduction video
- Projects page with categorized tabs
- Contact page with working links

---

## Color Scheme
The color palette was created using **Adobe Color**.

| Hex Code  | Sample |
|-----------|--------|
| `#4089F7` | ![#4089F7](https://via.placeholder.com/20/4089F7/000000?text=+) |
| `#6C40F7` | ![#6C40F7](https://via.placeholder.com/20/6C40F7/000000?text=+) |
| `#4050F7` | ![#4050F7](https://via.placeholder.com/20/4050F7/000000?text=+) |
| `#40C3F7` | ![#40C3F7](https://via.placeholder.com/20/40C3F7/000000?text=+) |
| `#A840F7` | ![#A840F7](https://via.placeholder.com/20/A840F7/000000?text=+) |
| `#C0C5F9` | ![#C0C5F9](https://via.placeholder.com/20/C0C5F9/000000?text=+) |

---

## File Structure
portfolio/
│── index.html
│── about.html
│── projects.html
│── contact.html
│── Gallery/
│ ├── style.css
│ ├── mobile.css
│ ├── tablet.css
│ ├── desktop.css
│ ├── main.js
│ ├── me.jpg
│ └── intro.mp4
│── README.md

yaml
Copy code

---

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Mshelizah001/Portfolio
Open index.html in your browser.

Live Demo
Hosted on GitHub Pages:
  https://mshelizah001.github.io/Portfolio/

GUI / Interface (Rubric Coverage)
1) Responsiveness (Fluid + Media Queries, no flexbox)
Approach: Fluid layout (percent widths, responsive images, inline-block).

No Flexbox: Flexbox is not used anywhere.

Separate CSS per viewport:

Gallery/mobile.css → @media (max-width: 599px)

Gallery/tablet.css → @media (min-width: 600px) and (max-width: 1023px)

Gallery/desktop.css → @media (min-width: 1024px)

Why these dimensions?

≤599px (Mobile): Most smartphones in portrait view.

600–1023px (Tablet): Covers tablet portrait and landscape.

≥1024px (Laptop/Desktop): Standard laptop breakpoint and larger screens.

2) Linear & Angled Linear Gradients
Header gradient (angled): <header> across all pages uses an angled linear gradient
Example:

css
Copy code
header {
  background: linear-gradient(135deg, #6C40F7, #5C30FF);
}
Section gradient (linear): A banner/section uses a straight linear gradient for background styling.

3) Color Scheme
Adobe Color palette is applied consistently across all pages (see table above).

📖 References & Sources
Adobe Color — for palette generation: https://color.adobe.com/

MDN Web Docs — HTML5 & CSS reference: https://developer.mozilla.org/

W3C WAI-ARIA Authoring Practices — guidance on accessible tabs: https://www.w3.org/WAI/ARIA/apg/

👤 Author
Jesse Daniel Mshelizah
📧 jesse.mshelizah@ontariotechu.net