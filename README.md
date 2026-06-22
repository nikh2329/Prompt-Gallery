# 🎨 Prompt Gallery

> **Discover, share, and copy high-quality AI image generation prompts.**

Prompt Gallery is a modern, responsive, and feature-rich Web Application built on **React, TypeScript, Tailwind CSS, and Supabase**. It provides a beautifully curated space for AI enthusiasts to browse over 180 image prompts, save their favorites, create profiles, and contribute user-generated prompts to the community.

---

## ✨ Features

- **Curated Prompt Gallery**: Browse 180+ stunning AI image prompts categorized by style and subject (e.g., Cyberpunk, Architecture, Couple, Men, Women, Nature, and more).
- **Interactive Lightbox View**: View full-size high-definition image previews and copy AI prompts directly to your clipboard in a single click.
- **Robust Authentication**: Fully integrated authentication powered by Supabase Auth (Sign Up, Sign In, and OAuth support).
- **Personalized Favorites**: Star and save your favorite prompts to a personalized collections tab, persisting directly to your database profile.
- **Community Contributions**: Create and submit your own prompts to the public feed with custom titles, content, categories, and tags.
- **Profile Management**: Update your display name, upload custom profile avatars to Supabase Storage, and toggle notifications and system preferences.
- **Premium User Experience**: Styled with a dark-slate theme, featuring glassmorphism, responsive grids, and micro-interactions powered by Framer Motion and Lucide Icons.

---

## 🛠️ Tech Stack & Key Libraries

* **Core**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vite.dev/)
* **Database & Auth**: [Supabase](https://supabase.com/)
* **Routing**: [React Router DOM v6](https://reactrouter.com/)
* **State Management**: React Context, [React Query v5](https://tanstack.com/query/latest)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
* **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (built on Radix Primitives)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Testing**: [Vitest](https://vitest.dev/)

---

## 📂 Project Structure

```text
Prompt-Gallery/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Logo and prompt images
│   ├── components/         # Reusable UI components & layouts
│   │   └── ui/             # Shadcn primitive design components
│   ├── contexts/           # Auth and Favorites React Context providers
│   ├── hooks/              # Custom hooks (favorites, profile, toast, etc.)
│   ├── integrations/       # Supabase client configurations and types
│   ├── lib/                # Shared utilities & hardcoded prompt data (180 prompts)
│   ├── pages/              # Routed pages (Index, Auth, Favorites, Profile, CreatePrompt)
│   ├── test/               # Test suites and test setups
│   ├── App.tsx             # Main router and provider configuration
│   ├── index.css           # Tailwind base styles and global setup
│   └── main.tsx            # App entry point
├── supabase/               # Database migrations and configurations
│   ├── config.toml         # Supabase CLI configurations
│   └── migrations/         # PostgreSQL schema files
├── tailwind.config.ts      # Tailwind CSS configurations
├── vite.config.ts          # Vite server and plugin configuration
└── package.json            # NPM dependencies and script settings
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### 1. Clone & Install Dependencies

```sh
# Clone the repository
git clone <your-repository-url>
cd Prompt-Gallery

# Install npm dependencies
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

### 3. Database Schema setup

Run the SQL migration scripts in your **Supabase Dashboard -> SQL Editor** in the following order:

1. **Profiles Schema**: Run [20260121085617_a5267770-4f44-412e-b178-30532fb57eaf.sql](file:///c:/ProjectWorks/Prompt-Gallery/supabase/migrations/20260121085617_a5267770-4f44-412e-b178-30532fb57eaf.sql)
   - Creates the `profiles` table.
   - Attaches a trigger to automatically create profile metadata when a user registers.
2. **Prompts Schema**: Run [20260622000000_create_prompts_table.sql](file:///c:/ProjectWorks/Prompt-Gallery/supabase/migrations/20260622000000_create_prompts_table.sql)
   - Creates the `prompts` table for user contributions.
   - Sets up Row Level Security (RLS) policies for secure reading and writing.
   - Installs an `auto_confirm_user` database trigger to automatically verify user emails. This bypasses Supabase SMTP rate limits (`over_email_send_rate_limit`) during development.

### 4. Run the Development Server

```sh
# Run locally (runs on http://localhost:8085/)
npm run dev
```

### 5. Build for Production

```sh
# Build compilation bundle
npm run build

# Preview production build
npm run preview
```
