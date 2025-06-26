# Creative Engineer Portfolio Website

A modern, full-stack developer portfolio built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). Hosted on [Vercel](https://vercel.com/).

## Live Demo

[https://portfolio-website-one-omega-53.vercel.app/](https://portfolio-website-one-omega-53.vercel.app/)

---

## Features

- ⚡️ Next.js 14 App Router
- 🎨 Tailwind CSS for rapid UI development
- 🌗 Dark/light theme with system preference
- 🧩 Modular, reusable UI components
- 📄 SEO optimized with custom metadata
- 📝 Blog, Projects, About, and Contact pages
- 📦 TypeScript for type safety
- ☁️ Hosted on Vercel

---

## Getting Started

### 1. Install Dependencies

This project uses [pnpm](https://pnpm.io/) for fast, disk-efficient package management. If you don't have pnpm:

```bash
npm install -g pnpm
```

Then install dependencies:

```bash
pnpm install
```

### 2. Environment Variables

If you use any environment variables (e.g., for database or API keys), create a `.env.local` file in the root directory. Example:

```
MONGODB_URI=your_mongodb_connection_string
```

> **Note:** The current project uses a local MongoDB connection for blog/contact APIs. Update `lib/mongodb.ts` and `.env.local` as needed.

### 3. Running Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Building for Production

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
app/            # Next.js app directory (pages, layouts, API routes)
components/     # Reusable UI components
hooks/          # Custom React hooks
lib/            # Utility functions, database models
public/         # Static assets
scripts/        # Database seeding scripts
styles/         # Global styles
```

---

## Deployment (Vercel)

This project is deployed on [Vercel](https://vercel.com/):

- Connect your GitHub repository to Vercel
- Set environment variables in the Vercel dashboard (if needed)
- Push to `main` branch to trigger automatic deployments

**Live URL:** [https://portfolio-website-one-omega-53.vercel.app/](https://portfolio-website-one-omega-53.vercel.app/)

---


## Involvement & Credits

- **Developer:** Binara Prabhanga
- **UI Components:** Custom + [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide](https://lucide.dev/)
- **Fonts:** [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Hosting:** [Vercel](https://vercel.com/)

---

