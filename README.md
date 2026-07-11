# Affan Shahzada — Portfolio

Personal portfolio website built with Astro and Tailwind CSS.

**Live:** [affanshz.my.id](https://affanshz.my.id) <!-- update when deployed -->  
**GitHub:** [github.com/AffanShz](https://github.com/AffanShz)  
**LinkedIn:** [linkedin.com/in/affanshahzada](https://www.linkedin.com/in/affanshahzada/)

---

## Tech Stack

- [Astro](https://astro.build/) — static site framework
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- Vanilla JS — DecryptedText scramble animation (no React, no extra deps)

## Features

- Decrypted text scramble animation on hero name (animates on scroll into view) and navbar links (animates on hover)
- Parallax background layers
- Grayscale-to-color project card hover effect
- Fully static output — zero JS frameworks at runtime

## Project Structure

```
src/
├── components/
│   └── DecryptedText.astro   # Scramble animation component
├── layouts/
│   └── Layout.astro          # HTML shell, fonts, meta
├── pages/
│   └── index.astro           # Main page (hero, about, stack, work, contact)
└── styles/
    └── global.css            # Tailwind base + custom utilities
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output to dist/
npm run preview   # preview the build locally
```

## Sections

| Section        | Anchor     |
| -------------- | ---------- |
| Hero           | —          |
| About          | `#about`   |
| Stack / Skills | `#stack`   |
| Work           | `#work`    |
| Contact        | `#contact` |

---

&copy; 2025 Affan Shahzada
