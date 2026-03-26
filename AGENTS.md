<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

- This repo is on `next@16.2.1` + `react@19.2.4`; prefer current APIs and verify assumptions against local docs before editing.
- Use App Router patterns under `src/app/` (for example `src/app/layout.tsx`, `src/app/page.tsx`, and nested routes in `src/app/projects/**/page.tsx`).
- Keep shared chrome in layouts/components: root layout wires `Header`, `Footer`, `@vercel/analytics/next` `Analytics`, and the Font Awesome kit script.
- Styling is Tailwind CSS v4 + DaisyUI (`src/app/globals.css` uses `@import "tailwindcss";` and `@plugin "daisyui";`).
- Prefer imports via the configured alias `@/* -> src/*` (for example `@/app/components/Header`).
- Workflow commands: `npm run dev`, `npm run build`, `npm run start`, and `npm run lint` (no test script is currently defined).
<!-- END:nextjs-agent-rules -->
