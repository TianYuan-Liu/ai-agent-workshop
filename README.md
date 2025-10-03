# AI Agent Workshop

Workshop materials for "How to Make Your Science Easier with AI Support" including the Beamer slide deck and three accompanying demos.

## Repository Layout
- `src/` – LaTeX sources (`ai_workshop_slides.tex`, theme, bibliography, shared assets)
- `examples/` – Hands-on demos (`demo1` ReAct slides, `demo2` context-engineering web app, `demo3` CI/CD React project)
- `docs/` – Facilitator notes and archived documentation (`slide-instruction.md`, `beamer-template.md`, `CLAUDE.md`)
- `build/` – Generated LaTeX outputs (ignored by git)
- `.github/workflows/` – CI/CD pipeline for automated deployment of `examples/demo3`

## Working With The Slides
```bash
# Compile with latexmk (outputs to build/)
latexmk

# Clean build artifacts
latexmk -c
```

The document adds `src/assets/` to the graphics path, so keep shared media in that directory.

## Demo Overview

### Demo 1: Beamer Slide Generation
**Location:** `examples/demo1`  
Demonstrates prompt engineering and slide generation using the custom Conesa Group Beamer theme.

### Demo 2: LaTeX CV Generator
**Location:** `examples/demo2`  
**Live Demo:** https://tianyuan-liu.github.io/ai-agent-workshop/examples/demo2/  
Static HTML prompt generator for creating LaTeX CVs with AI assistance.

### Demo 3: React Portfolio with CI/CD
**Location:** `examples/demo3`  
**Live Demo:** https://tianyuan-liu.github.io/ai-agent-workshop/  
Full-stack React + Tailwind portfolio with automated testing, linting, and deployment via GitHub Actions.

## GitHub Pages Setup

The repository uses GitHub Actions to automatically deploy Demo 3 to GitHub Pages on every push to `master`.

### Initial Setup
1. Go to **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to `GitHub Actions`
3. The workflow will automatically trigger on the next push

### Workflow Details
- **Trigger:** Push to `master` branch or manual dispatch
- **Steps:** Checkout → Setup Node.js → Install deps → Run tests → Build → Deploy
- **Config:** `.github/workflows/deploy.yml`
- **Output:** Deploys `examples/demo3/dist` to GitHub Pages

## Troubleshooting

### GitHub Actions Issues
- **Cache error:** Ensure `cache-dependency-path` points to `examples/demo3/package-lock.json`
- **Pages not found:** Enable GitHub Pages with "GitHub Actions" as the source in repository settings
- **Empty page:** Vite build must use `--base=/ai-agent-workshop/` for proper asset paths

### Local Development
```bash
# Run demo3 locally
cd examples/demo3
npm install
npm run dev

# Run tests with coverage
npm run test:coverage
```

## Additional Documentation
Detailed facilitation instructions and the original template README live in `docs/`. Start with `docs/slide-instruction.md` for the workshop run book.
