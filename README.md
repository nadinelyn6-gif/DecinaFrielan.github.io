# Freillan Decina Albo — Portfolio

A dark, neon-accented one-page portfolio built with **React + Vite**. The design
follows the bento-style reference: glowing background blobs, a glassy pill
navigation, a spinning avatar ring, colour-coded "What I build" cards, a skills
cloud, and a project grid.

## Run it locally

Node.js is required. Install the **LTS** version from
[nodejs.org](https://nodejs.org/) (or via `winget install OpenJS.NodeJS.LTS`),
then in this folder:

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for hosting

```bash
npm run build
```

The production files land in `dist/`. Because `vite.config.js` sets
`base: './'`, the build works on GitHub Pages, Netlify, Vercel, or any static
host.

### GitHub Pages

The live site is published from the **`gh-pages`** branch, which contains the
static build. The React source stays on `main`.

To publish an update:

```bash
npm run build
```

Then copy the contents of `dist/` (plus an empty `.nojekyll` file) to the root
of the `gh-pages` branch, commit, and push. Everything the site needs is
already inside `dist/`, so any static host works the same way.

## Where to edit content

Almost all text lives in **`src/data.js`**:

| What | Where |
| --- | --- |
| Name, age, birthday, location, email | `profile` object |
| Photo | `profile.photo` (see below) |
| Hero headline / intro | `src/components/Hero.jsx` |
| "What I build" cards | `buildCards` array |
| Skills pills (sized core / mid / light) | `skills` array |
| Projects | `projects` array |
| Contact quick facts | `facts` array |

> The skills and projects that shipped with this build are **samples** — replace
> them with your real ones so the portfolio is accurate.

## Adding your photo

1. Put your photo in the `public` folder, e.g. `public/profile.jpg`.
2. In `src/data.js`, change:
   ```js
   photo: './profile.svg',
   ```
   to:
   ```js
   photo: './profile.jpg',
   ```

Square photos work best; the frame crops them into a circle.

## Project structure

```
├─ .github/workflows/deploy.yml   GitHub Pages deployment
├─ index.html                     Fonts, meta tags, app mount point
├─ public/                        profile.svg + favicon.svg
├─ src/
│  ├─ components/                 Background, Navbar, Hero, sections, Footer
│  ├─ data.js                     All editable content
│  ├─ App.jsx                     Page composition + scroll reveal
│  ├─ index.css                   Full design system and responsive styles
│  └─ main.jsx                    React entry point
└─ vite.config.js
```

## Accessibility & polish

- Keyboard-friendly navigation, visible focus rings, and a skip link.
- Mobile hamburger menu with Escape-to-close and scroll locking.
- Projects dropdown closes on outside click.
- Respects `prefers-reduced-motion` (disables the glow drift, ring spin, and
  reveal animations).
