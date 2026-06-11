# Gokul VM — Portfolio v2.0

Premium dark-theme portfolio with React + Vite + Tailwind CSS + Framer Motion + React Router.

## 🚀 Quick Start

```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

## 📦 Build & Deploy

```bash
npm run build    # builds to dist/
```
Deploy `dist/` to **Vercel** or **Netlify**.

---

## 🔧 EmailJS Setup (Contact Form)

1. Go to [https://emailjs.com](https://emailjs.com) → create free account
2. Add a **Service** (Gmail) → copy **Service ID**
3. Create an **Email Template** → copy **Template ID**
4. Account → **Public Key** → copy it

5. Open `src/components/Contact.jsx` and replace:
```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

Template variables to use in EmailJS:
- `{{name}}` `{{email}}` `{{subject}}` `{{message}}`

---

## 📁 Structure

```
gokul_portfolio_v2/
├── public/
│   ├── profile.jpg          ← profile photo
│   ├── resume.pdf           ← downloadable resume
│   └── assets/
│       ├── certificates/    ← cert1.png … cert11.jpg
│       ├── internship/      ← logos + photos
│       ├── projects/        ← dashboard screenshots
│       └── roles/           ← leadership photos
├── src/
│   ├── components/          ← Navbar, Hero, About, Skills, etc.
│   ├── pages/               ← Home, ProjectDetail, InternshipDetail, etc.
│   ├── data/portfolio.js    ← ALL content lives here
│   ├── hooks/               ← useTypingEffect, useScrollProgress
│   └── App.jsx              ← Routes
└── package.json
```

## ✏️ Customise

All text, links, and data → **`src/data/portfolio.js`**

## 🌐 New Pages

| Route | Page |
|---|---|
| `/` | Home (all sections) |
| `/project/:id` | Project detail |
| `/internship/:id` | Internship detail |
| `/leadership/:id` | Leadership detail |
| `/education/:id` | Education detail |
| `/certificates` | All certificates + lightbox |
| `/gallery` | Photo gallery + lightbox |

## ✨ Features

- Dynamic greeting (Good Morning ☀️ / Afternoon 🌤️ / Evening 🌙)
- Typing effect with 5 roles
- Clickable cards → dedicated detail pages
- Real project screenshots from your uploads
- Real internship logos
- Certificates grid with lightbox + download
- Masonry photo gallery with lightbox
- Fixed & validated contact form (EmailJS)
- React Router navigation
- Particle background + glassmorphism
- Framer Motion animations throughout
- Fully mobile responsive
