# Ehab Nasser — Portfolio (EN/AR)

Bilingual (English default + Arabic toggle) portfolio for a Junior AI Automation & Agentic Engineer. Vite + React 18 + React Router. No heavy animation libraries.

## Run locally

```bash
npm.cmd install
npm.cmd run dev
```

Open http://localhost:5173

## Build / Railway

```bash
npm.cmd run build
```

- `build`: `vite build` → `dist/`
- `start`: `serve -s dist -l tcp://0.0.0.0:$PORT` (Railway sets `$PORT`, SPA fallback included)
- Railway: New Project → Deploy from GitHub repo → Networking → Generate Domain (`*.up.railway.app`). Custom domain: add CNAME from Railway panel.
- Free-tier limits change often; static alternatives: Cloudflare Pages / Vercel.

## Edit content

All text in `src/data/content.js` → `content.en` + `content.ar` (projects, skills, experience, education, hero…). Fake items: `demo: true` shows a DEMO badge. Testimonials: empty array hides the section.

Email: `ehabnasserwork@gmail.com` (in `content.js` person.email, both languages).

## Replace images / videos

- Project covers: `public/images/projects/<slug>.svg` + `<slug>-alt.svg` (hover). Keep same filenames.
- Portrait: drop `public/images/ehab.jpg` (fallback SVG shows until then).
- Videos: `public/videos/short-1.mp4`, `short-2.mp4` (vertical 9:16, **under 15 MB each**) + posters `short-1.jpg`, `short-2.jpg`. The `.gitignore` excludes `*.mp4` so large files stay out of git — remove that line if you want them versioned.
- Your source files (`1011 (2).mp4` ~21.9MB, `1012.mp4` ~23.1MB) exceed the budget. Compress first:

```bash
ffmpeg -i "1011 (2).mp4" -vf "scale=720:-2" -c:v libx264 -crf 28 -preset veryfast -an public/videos/short-1.mp4
ffmpeg -i "1012.mp4" -vf "scale=720:-2" -c:v libx264 -crf 28 -preset veryfast -an public/videos/short-2.mp4
```

(ffmpeg wasn't installed on the build machine, so the repo ships with graceful video fallbacks until you add the files.) Posters: export any frame as JPG ~720px wide.

## Notes

- Language toggle (EN/AR) persists in `localStorage`; sets `html lang` + `dir` (RTL/LTR).
- Lite mode auto-enables on reduced-motion / weak CPU / touch; animations toggle persists too.
- No phone number anywhere by design. No fake testimonials/metrics.
