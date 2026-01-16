# 📸 PhotoStudio — Editorial Photography Portfolio

A modern, minimal, and editorial-style photography studio website built with **Next.js (App Router)**.  
Designed to feel premium, quiet, and timeless — inspired by high-end studio portfolios and Awwwards-style layouts.

---

## ✨ Features

- 🖤 Minimal black & white editorial design  
- 🧭 Floating navigation with smooth hide/show on scroll  
- 🖼️ Masonry-style portfolio grid (desktop + mobile story mode)  
- 🎞️ Cinematic portfolio detail pages with scroll-based motion  
- 📅 Booking / inquiry form with email delivery  
- 📧 Backend email integration using Nodemailer  
- 🔔 Toast notifications for form submission feedback  
- ⚡ Smooth animations using Framer Motion  
- 📱 Fully responsive across all screen sizes  
- 🧩 Clean component-based architecture (Next.js App Router)

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16 (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- **Sonner (Toasts)**

### Backend
- **Next.js API Routes**
- **Nodemailer (SMTP / Gmail App Password)**

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── portfolio/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       ├── page.tsx
│   │       └── PortfolioDetailClient.tsx
│   ├── book/
│   │   └── page.tsx
│   └── api/
│       └── booking/
│           └── route.ts
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Gallery.tsx
│
├── styles/
│   └── globals.css
│

🖼️ Portfolio System

Each portfolio item uses a slug-based routing system:

/portfolio/studio-portrait
/portfolio/creative-session
/portfolio/quiet-moment


The slug maps to image + title data on the server, ensuring clean URLs and zero hydration issues.

📩 Booking Form & Email Flow

User submits booking form

Data is sent to /api/booking

Emails sent via Nodemailer:

Inquiry email to studio

Confirmation email to user

Toast notification confirms submission

🔐 Environment Variables

Create a .env.local file:

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password
STUDIO_EMAIL=yourstudio@email.com


⚠️ Use Gmail App Passwords, not your real Gmail password.

🚀 Getting Started
npm install
npm run dev


Open:

http://localhost:3000

🎨 Design Philosophy

Editorial typography

No loud colors or gradients

Calm, intentional motion

Space over noise

Content-first layout

Inspired by luxury editorial and Awwwards-style photography portfolios.

📌 Future Enhancements

Booking submit loading state

CMS integration (Sanity / Contentful)

Admin dashboard for inquiries

Image optimization

Dark-mode variant

🧑‍💻 Author
Udesh Bhatti

