# Alexis Alvarez · Portfolio

My portfolio as a macOS-style desktop: projects live in Finder folders, experience opens in Safari, the tech stack in Terminal and the resume as a PDF.

**Live:** [portfolioalexisalvarez.vercel.app](https://portfolioalexisalvarez.vercel.app)

## Stack

React 19 · Vite · Tailwind CSS 4 · GSAP (Draggable) · Zustand + Immer · react-pdf

## Run it

```bash
npm install
npm run dev
```

## Where things are

| What | File |
|---|---|
| Projects, experience, stack, socials | `src/constants/index.js` |
| Windows (Finder, Terminal, Contact…) | `src/windows/` |
| Window open/close/focus state | `src/store/window.js` |
| Drag and open animation for windows | `src/hoc/WindowWrapper.jsx` |
| Project screenshots (WebP) | `public/images/project-*.webp` |
| Resume | `public/files/CV_AlexisAlvarez.pdf` |

To add a project, add a folder to `WORK_LOCATION` in `src/constants/index.js`: a `.txt` with the description, plus links and a screenshot if it has them.
