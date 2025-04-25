# NSS Compass OS

![NSS Compass OS Preview](./public/preview.gif)

---

## 🧭 Overview

**NSS Compass OS** is a Lean transformation and strategic planning platform designed to streamline organizational workflows and enhance decision-making processes. Built with modern web technologies, it combines interactive tools, AI assistance, and clean UX to support continuous improvement at every level.

---

## ✨ Features

- 🎬 **Cinematic Landing Page** – Engaging video-driven intro  
- 🗺️ **Value Stream Mapping (VSM) Tool** – Create, analyze, and improve process flows  
- 🤖 **ArminX Assistant** – AI-style support for real-time insights  
- 💳 **Stripe Integration** – Monthly/annual subscription support with founder pricing  
- 📱 **Responsive Design** – Mobile- and desktop-ready  
- 🧠 **Supabase** – Auth and backend logic (future-ready)  

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v14 or higher)  
- npm or yarn  
- Supabase account  
- Stripe account  
- OpenAI API key (optional for ArminX)  

---

### 🔧 Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/yourusername/nss-compass-os.git
   cd nss-compass-os
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env.local` in the root directory with the following:**

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Visit the app:**

   ```
   http://localhost:3000
   ```

---

## 🧰 Tech Stack

| Layer            | Tech                                      |
|------------------|--------------------------------------------|
| Frontend         | Next.js 14 (App Router), React 18          |
| Styling          | Tailwind CSS, shadcn/ui, Framer Motion     |
| Icons            | Lucide React                               |
| Auth & Backend   | Supabase (PostgREST, RLS-ready)            |
| Payments         | Stripe API & Webhooks                      |
| AI Integration   | OpenAI API (optional)                      |
| Hosting          | Vercel                                     |

---

## 📦 Scripts

| Command            | Description                  |
|--------------------|------------------------------|
| `npm run dev`      | Start local dev server       |
| `npm run build`    | Build production assets      |
| `npm start`        | Start server (post-build)    |
| `npm run lint`     | Run ESLint                   |

---

## 📸 Visual Preview

> _(Drop a `.gif` or screenshot named `preview.gif` into your `/public/` folder and it will show up above.)_

---

## 🛡 License

This project is currently licensed for **internal or client-specific use**.  
Please contact us for commercial, open-source, or academic licensing.

---

## 👥 Contact

Want to collaborate, customize, or contribute?

- ✉️ Email: [your-email@example.com]  
- 🌐 Web: [yourcompany.com]  
- 🔗 LinkedIn / Twitter: `@yourhandle`

---

## 🛠 Roadmap

Planned features include:

- 🧩 Modular toolkit system for A3, 5S, Kaizen  
- 🔐 Supabase-authenticated dashboards  
- 📈 VSM version history  
- 🤝 Team-based permissions and seat logic  
- 🧠 Full ArminX OpenAI integration  
