# Portfolio — Software Engineer

A clean, modern portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky nav with mobile menu
│   │   └── Footer.tsx       # Simple footer
│   ├── data/
│   │   └── portfolio.ts     # ← Edit YOUR info here
│   ├── hooks/
│   │   └── useInView.ts     # Scroll-triggered animations
│   ├── sections/
│   │   ├── Hero.tsx         # Hero / About section
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Skills.tsx       # Skills + Experience timeline
│   │   └── Contact.tsx      # Contact form
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## ✏️ Customization

All personal data lives in **`src/data/portfolio.ts`** — update your:
- Name, role, bio, location
- Projects (title, description, tags, links)
- Skills by category
- Work experience

### Colors
Edit `tailwind.config.js` to change the palette:
- `cream` — page background
- `ink` — primary text
- `accent` — highlight color (currently warm amber)
- `stone` — secondary/muted text

### Fonts
Fonts are loaded via Google Fonts in `index.html`. Current stack:
- **Playfair Display** — headings (serif, elegant)
- **DM Sans** — body copy
- **JetBrains Mono** — labels & code

## 📦 Deploying

```bash
npm run build
# Upload the /dist folder to Vercel, Netlify, or any static host
```

**Recommended:** Push to GitHub → import to [Vercel](https://vercel.com) for instant deployments.

## 📬 Contact Form

The form in `Contact.tsx` is set up for easy integration. Wire it to:
- [Formspree](https://formspree.io) — easiest, free tier available
- [EmailJS](https://emailjs.com) — client-side email sending
- Your own backend API
