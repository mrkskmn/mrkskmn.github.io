# Portfolio Project Context

## Project Overview
Building a personal portfolio website to learn modern web development while leveraging design skills.

## Tech Stack

### Core Framework
- **Astro** (latest) - Static site generator, file-based routing, multi-page app with smooth View Transitions
- **SCSS** - CSS preprocessor for custom styling with design tokens (NO Tailwind)
- **No TypeScript** - Keeping it simple with vanilla JS

### Package Manager & Tools
- **pnpm** - Fast, efficient package management
- **Node.js v24.14.1** (latest LTS via nvm)
- **VS Code** - Primary code editor with One Dark Pro theme
- **Oh My Zsh** with agnoster theme + syntax highlighting + auto-suggestions

### Hosting & Deployment
- **GitHub Pages** - Free hosting with custom domain
- **GitHub Actions** - Automatic builds/deployments on push to main
- **Custom domain** via CNAME (already configured)

### Development Workflow
- **Git branching:** dev branch for work, main branch for production deploys
- **Hot reload:** pnpm dev runs local server at localhost:4321
- **Dev toolbar:** Disabled via astro.config.mjs

## Project Structure (Planned)
src/
├── pages/          # Routes (index.astro, about.astro, projects.astro)
├── components/     # Reusable pieces (Navigation.astro, Footer.astro)
├── layouts/        # Page templates (BaseLayout.astro)
└── styles/         # SCSS design tokens and global styles
└── tokens/         # _colors.scss, _spacing.scss, _typography.scss
public/             # Static assets (images, fonts, CNAME)

## Design System Approach

### SCSS with Design Tokens
- Variables for colors, spacing, typography
- Component-scoped styles (Navigation.scss, etc.)
- Global tokens file that forwards all token partials
- Use @use and @forward for modern SCSS architecture

### Component Philosophy
- Astro components for pages and reusable UI
- Minimal JavaScript - only for interactivity (mobile menu, scroll effects)
- Static-first approach, add JS only when needed

## Learning Goals
- Understand React-like component concepts (props, composition) via Astro
- Build proficiency with modern SCSS patterns
- Learn Git workflows (branching, merging, deployment)
- Comfortable with terminal/CLI tools (pnpm, git, npm scripts)
- Understand build processes and deployment pipelines

## What We're NOT Using
- React (chose Astro for simpler, faster portfolio site)
- Tailwind CSS (want full CSS control and learning)
- TypeScript (keeping complexity low for now)
- SPA routing (Astro MPA with View Transitions instead)
- Complex JavaScript frameworks

## Current State
- Astro installed and running locally
- Dev environment configured (VS Code, terminal, Git)
- Initial setup committed to dev branch
- CNAME file moved to public/ folder for custom domain
- Ready to build: design tokens, layout, navigation, pages

## Developer Profile
- **Experience level:** Proficient in HTML/CSS/SCSS, rusty on JavaScript logic
- **Learning style:** Hands-on, explain concepts as they come up
- **Design background:** 10+ years as digital product designer, currently Head of UX
- **Platform:** macOS with German keyboard layout