# AI Agent Workshop

Workshop materials for "How to Make Your Science Easier with AI Support" including the Beamer slide deck and three accompanying demos.

## Repository Layout
- `src/` – LaTeX sources (`ai_workshop_slides.tex`, theme, bibliography, shared assets)
- `examples/` – Hands-on demos (`demo1` ReAct slides, `demo2` context-engineering web app, `demo3` CI/CD React project)
- `docs/` – Facilitator notes and archived documentation (`slide-instruction.md`, `beamer-template.md`, `CLAUDE.md`)
- `build/` – Generated LaTeX outputs (ignored by git)
- `.github/workflows/` – CI pipelines for `examples/demo3`

## Working With The Slides
```bash
# Compile with latexmk (outputs to build/)
latexmk

# Clean build artifacts
latexmk -c
```

The document adds `src/assets/` to the graphics path, so keep shared media in that directory.

## Demo Overview
1. `examples/demo1` – Prompt + slide generation using the custom Conesa Group Beamer theme
2. `examples/demo2` – Static HTML prompt generator for LaTeX CVs
3. `examples/demo3` – React + Tailwind portfolio with full CI/CD (GitHub Actions configs live in `.github/workflows/`)

Follow each demo's README for local setup and deployment guidance. CI workflows assume commands run from `examples/demo3` and will lint, test, build, and publish to GitHub Pages.

## Additional Documentation
Detailed facilitation instructions and the original template README live in `docs/`. Start with `docs/slide-instruction.md` for the workshop run book.
