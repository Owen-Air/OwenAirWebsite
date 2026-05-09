# Owen Air Website

Astro website for Owen Air Technical Services (Isle of Man), focused on practical hands-on support across IT, networking, websites, AV/audio systems, van power systems, and technical odd jobs.

## Stack

- Astro 5
- TypeScript
- @astrojs/sitemap

## Local development

1. Install dependencies:
	`npm install`
2. Start the dev server:
	`npm run dev`
3. Build for production:
	`npm run build`
4. Preview production build:
	`npm run preview`

## Project structure

- `src/components`: reusable layout and UI components
- `src/data/services.ts`: central service content model
- `src/pages`: route-based pages
- `public`: static assets (`robots.txt`, icons, OG image)

## Cloudflare Pages deployment

Use these settings in Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

If deploys fail with "Could not read package.json", Cloudflare is likely building an older commit or the wrong root directory. Confirm the deploy branch and root directory, then redeploy.

## Content editing

Most service copy is centralized in `src/data/services.ts`, including:

- service titles
- short descriptions
- intros
- common problems
- example jobs

This keeps content consistent across the home page, services listing, and individual service pages.
