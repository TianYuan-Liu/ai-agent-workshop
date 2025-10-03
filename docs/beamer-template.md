# Conesa Group Beamer Template

A clean, professional academic presentation template designed for the Conesa Group.

**✅ Template Status: Tested and Working**
- Successfully compiles with pdfLaTeX
- Generates a 20-page sample presentation
- All syntax errors have been resolved

## Files Included

- `main.tex` - Main template file with comprehensive structure
- `main_minimal.tex` - Simplified template with basic structure
- `main_fixed.tex` - Alternative template variant
- `main_natbib.tex` - Template using natbib citation style
- `main_verbatim.tex` - Template with verbatim code examples
- `beamerthemeConesaGroup.sty` - Custom Beamer theme style file
- `references.bib` - Sample bibliography file
- `conesa_logo.png` - Logo file
- `figures/` - Directory for your presentation figures

## Quick Start

1. Choose your preferred template file (recommend starting with `main.tex`)
2. Update the title, author, and institution information
3. Replace placeholder content with your actual content
4. Add your figures to the `figures/` directory
5. Update `references.bib` with your actual references
6. Compile with LaTeX

## Customization

### Title Slide
Update the following in your chosen .tex file:
```latex
\title{Your Presentation Title}
\subtitle{Your Subtitle (Optional)}
\author[Your Name et al.]{Your Name\inst{1} \and Co-Author Name\inst{2}}
\institute[Institutions]{%
  \begin{flushleft}
    \inst{1}Your Institution, Department\\
    \inst{2}Co-Author Institution\\[1ex]
    \small\today
  \end{flushleft}%
}
```

### Adding Content
- Replace placeholder bullet points with your content
- Add figures by placing them in the `figures/` directory and referencing them
- Update table content and formulas as needed
- Add your references to `references.bib`

### Figures
Replace placeholder figures with your own:
```latex
\begin{figure}
  \centering
  \includegraphics[width=\textwidth]{figures/your_figure.pdf}
  {\small \textbf{Figure 1} \textbar{} Your figure caption.}
\end{figure}
```

## Template Features

- 16:9 aspect ratio optimized for modern displays
- Professional color scheme
- Consistent typography
- Support for code listings
- Bibliography integration
- Mathematical equations
- Tables with custom styling
- Appendix slides for additional content

## Compilation

Compile using your preferred LaTeX editor or command line:
```bash
pdflatex main.tex
biber main
pdflatex main.tex
pdflatex main.tex
```

Or use your LaTeX editor's built-in compilation tools.

## Requirements

- LaTeX distribution (TeX Live, MiKTeX, etc.)
- Required packages: beamer, biblatex, listings, graphicx, amsmath, amssymb
- Biber for bibliography processing

## Support

For issues with the template, please check that all required packages are installed and that you're using a recent LaTeX distribution. 