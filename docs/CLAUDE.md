# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a LaTeX Beamer presentation template designed for the Conesa Group. It provides a professional academic presentation theme with custom styling, colors, and layouts optimized for 16:9 aspect ratio displays.

## Build Commands

### Compiling the Main Presentation

The primary presentation file is `main.tex`. To compile it:

```bash
pdflatex main.tex
biber main
pdflatex main.tex
pdflatex main.tex
```

**Note**: Three runs of `pdflatex` are required: one for initial compilation, one after bibliography processing, and one final run to resolve all references.

### Alternative Template Files

The repository includes several template variants for different use cases:

- `main.tex` - Full-featured template with comprehensive structure (20+ slides)
- `main_minimal.tex` - Simplified template using standard Madrid theme
- `main_fixed.tex` - Alternative template variant
- `main_natbib.tex` - Template using natbib citation package instead of biblatex
- `main_verbatim.tex` - Template with verbatim code examples

Each can be compiled using the same pdflatex workflow.

## Architecture & Key Components

### Custom Beamer Theme (`beamerthemeConesaGroup.sty`)

The custom theme file defines:

**Color Palette**:
- `conesaTeal` (RGB: 0, 153, 136) - Primary theme color
- `conesaOrange` (RGB: 255, 153, 102) - Accent/alert color
- `conesaYellow` (RGB: 255, 204, 102) - Secondary accent
- `conesaGray` (RGB: 80, 80, 80) - Text color
- `conesaLightGray` (RGB: 240, 240, 235) - Background/block color

**Custom Elements**:
- **Title page**: Full-page light gray background with teal/orange accent bars, Conesa logo in bottom-right
- **Header**: Logo positioned in top-right corner (1cm height)
- **Footer**: Modern progress bar with slide counter (current/total)
  - Light gray background strip (0.2cm height)
  - Orange progress indicator grows proportionally with slide number
- **Frame titles**: Left-aligned, positioned via TikZ at (1.22cm, -0.75cm) from top-left
- **Section pages**: Diagonal teal/white design with logo

### Bibliography System

The main template uses **biblatex with biber backend**:
- Backend: biber
- Style: numeric
- Sorting: none (appearance order)
- Autocite: superscript
- Bibliography file: `references.bib`

Alternative: `main_natbib.tex` uses the natbib package with BibTeX (compile with `bibtex` instead of `biber`).

### Document Structure

Standard academic presentation flow:
1. Title page (plain frame)
2. Outline/Table of contents
3. Sections: Introduction → Methods → Results → Discussion → Conclusion
4. References (allowframebreaks frame)
5. Appendix with backup slides (code examples, additional data)

### Code Listings Configuration

The template includes pre-configured listings package settings:
- Keywords: Teal, bold
- Comments: Gray
- Strings: Orange
- Line numbers: Left-aligned, tiny, gray
- Frame: Single border
- Auto line breaking at whitespace

## Development Workflow

### Adding Custom Colors

Define new colors in `beamerthemeConesaGroup.sty` using:
```latex
\definecolor{colorName}{RGB}{R, G, B}
```

### Modifying Layout Elements

Key layout elements use TikZ overlays with `remember picture` anchoring:
- Header logo: `(current page.north east)` with xshift/yshift
- Frame titles: `(current page.north west)` offset by 1.22cm horizontal
- Footer progress bar: `(current page.south west)` to `(current page.south east)`

### Bibliography Workflow

When adding citations:
1. Add entries to `references.bib` in BibTeX format
2. Use `\cite{key}` for standard citations
3. Use `\citationexample{text}` command for footnote-sized citation notes
4. Run biber to process bibliography before final pdflatex runs

### Working with Figures

**File Management:**
- Store figures in `figures/` directory
- Supported formats: PDF (vector), PNG, JPG (raster)
- Reference with: `\includegraphics[options]{figures/filename.pdf}`
- Caption format: `{\small \textbf{Figure N} \textbar{} Caption text.}`

**Optimal Figure Sizing (to avoid header/footer overlap):**

Given the theme's dimensions:
- Page height: 9cm (16:9 aspect ratio)
- Header space (title + logo): ~1.0-1.6cm from top
- Footer space (progress bar): ~0.5-0.7cm from bottom

Recommended figure heights for frames **with title only**:
- **Conservative (safest)**: `height=0.5\textheight` → ~4.0-4.5cm
- **Moderate (balanced)**: `height=0.55\textheight` → ~4.4-4.8cm
- **Maximum (tight fit)**: `height=0.6\textheight` → ~4.8-5.2cm
- **Absolute maximum**: 6.0cm (leaves ~1cm for caption + margins)

For frames **with title AND subtitle**, reduce by 0.4-0.5cm:
- **Safe range**: `height=0.45\textheight` → ~3.6-4.0cm
- **Maximum**: 5.5cm

Recommended figure widths:
- **Standard**: `width=0.7\textwidth` to `width=0.8\textwidth`
- **Full width**: `width=\textwidth` → ~13.5cm

**Example usage:**
```latex
\begin{figure}
  \centering
  \includegraphics[height=0.5\textheight]{figures/results.pdf}
  {\small \textbf{Figure 1} \textbar{} Your caption here.}
\end{figure}
```

**Note**: The template uses `0.5\textheight` by default, which is conservative and ensures no overlap even with captions. Adjust based on your content needs.

## Required LaTeX Packages

Core dependencies:
- beamer (presentation class)
- tikz (graphics for theme elements)
- xcolor (color definitions)
- biblatex (bibliography management)
- listings (code syntax highlighting)
- graphicx (figure inclusion)
- amsmath, amssymb (mathematics)
- lmodern, microtype (typography)
- colortbl (table coloring)

Ensure a modern LaTeX distribution (TeX Live, MiKTeX) with biber installed.
