# Complete 2-Hour Workshop Plan: Vibe Coding and AI-Assisted Development for Researchers

## Executive Summary

This comprehensive workshop introduces researchers to AI-assisted development, covering vibe coding concepts, context engineering, and three hands-on demos tailored for academic workflows. Target audience: researchers who code occasionally but aren't professional developers.

---

## WORKSHOP OVERVIEW

**Duration**: 120 minutes
**Format**: Live coding demos with hands-on practice
**Prerequisites**: Basic command-line familiarity, laptop with admin access
**Pedagogical Approach**: Software Carpentry methodology (live coding, formative assessment every 10-15 min, sticky notes for pacing)

### Time Allocation

| Time | Module | Activity |
|------|--------|----------|
| 0:00-0:15 | Introduction | Setup check, introductions, learning objectives |
| 0:15-0:35 | Module 1 | Vibe coding concepts and responsible use |
| 0:35-0:55 | Module 2 | Context engineering principles |
| 0:55-1:05 | Break | Essential for attention span |
| 1:05-1:30 | Demo 1 | Academic website with gemini-cli |
| 1:30-1:50 | Demo 2 | Markdown to Beamer slides |
| 1:50-2:00 | Demo 3 | GitHub Actions + wrap-up |

---

## PRE-WORKSHOP PREPARATION

### Email to Participants (1 Week Before)

**Subject**: Action Required: Install Software for AI Coding Workshop

**Installation Instructions:**

```bash
# 1. Node.js (v18+) - Required for gemini-cli
# macOS/Linux:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc  # or ~/.zshrc
nvm install 22
node --version  # Verify installation

# Windows: Download from nodejs.org

# 2. Gemini CLI
npm install -g @google/genai-cli
gemini --version  # Verify

# 3. Pandoc (for document conversion)
# macOS: 
brew install pandoc

# Ubuntu/Debian:
sudo apt-get update
sudo apt-get install pandoc pandoc-citeproc

# Windows: 
# Download installer from https://pandoc.org/installing.html

# 4. LaTeX (for PDF generation)
# macOS:
brew install --cask mactex

# Ubuntu:
sudo apt-get install texlive-full texlive-latex-extra texlive-fonts-extra

# Windows:
# Download MiKTeX from miktex.org
```

**Authentication Setup:**
1. Visit https://aistudio.google.com/apikey
2. Sign in with Google account
3. Click "Create API Key"
4. Save key securely (you'll need it during workshop)

**Download Workshop Files:**
- Link to workshop-files.zip containing sample CV, BibTeX, templates

**Verification Checklist:**
- [ ] `node --version` returns 18 or higher
- [ ] `gemini --version` works
- [ ] `pandoc --version` works
- [ ] You have Google AI API key

**Troubleshooting Help:**
Join 30-minute pre-workshop setup session: [Date/Time/Zoom]

---

## MODULE 1: VIBE CODING CONCEPTS (20 minutes)

### Learning Objectives
- Define vibe coding and distinguish from responsible AI-assisted development
- Identify appropriate vs inappropriate research use cases
- Understand risks: security, reproducibility, scientific validity

### Slide 1: Title Slide

```
"VIBE CODING" AND AI-ASSISTED DEVELOPMENT FOR RESEARCHERS
A Practical Workshop on Modern Coding Tools

[Your Name]
[Institution]
October 2025
```

### Slide 2: What Is Vibe Coding?

**Content:**

**Definition** (Andrej Karpathy, February 2025):
> "A new kind of coding where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."

**Key Characteristic**: 
You DON'T review the AI-generated code—just run it and iterate based on results.

**Visual Description**: Side-by-side comparison diagram
- **Left side (Vibe Coding)**: Prompt → Generate → Run → Iterate (no review step)
- **Right side (Responsible AI-Assisted)**: Prompt → Generate → **REVIEW** → Test → Document → Deploy

**Speaker Notes:**
"Vibe coding represents the extreme end of AI-assisted development. Karpathy himself called it 'not too bad for throwaway weekend projects,' acknowledging it's for low-stakes experimentation. For researchers, we need reproducibility, validity, and defensible methods. Today we'll learn when vibe coding is appropriate and when it absolutely isn't."

**Formative Assessment (minute 5):**
"Quick show of hands: How many have used ChatGPT or similar AI to write code? Keep hands up if you ran that code without reviewing it line-by-line."

### Slide 3: The Research Integrity Framework

**Content:**

Three categories of code in research with different standards:

**1. EXPLORATION CODE** (Vibe coding acceptable)
- ✅ Quick data visualizations
- ✅ File format conversions  
- ✅ Learning new libraries
- ✅ Prototype analyses
- ✅ LaTeX table generation

Example: "Convert 50 CSV files to JSON with specific schema"
→ Low stakes, verifiable output, time-saving

**2. PRODUCTION CODE** (AI-assisted WITH review)
- 🟡 Data analysis pipelines
- 🟡 Figure generation for papers
- 🟡 Research software tools
- 🟡 Statistical visualizations

Example: "Generate violin plots for paper Figure 3"
→ Must understand logic, verify accuracy, document methods

**3. CRITICAL CODE** (Traditional development required)
- ❌ Statistical tests for publications
- ❌ Computational models for peer review
- ❌ Clinical decision support
- ❌ Patient data processing (HIPAA/IRB)
- ❌ Long-term research infrastructure

Example: "Implement mixed-effects model for main analysis"
→ Career/funding/validity depends on correctness

**Visual**: Three-column table with color coding (green/yellow/red)

**Speaker Notes:**
"Think of this as a hierarchy of rigor. As stakes increase, so must your review level. You can move fast in exploration, but must slow down for production code, and be extremely careful with critical code that underpins published research."

### Slide 4: Real Risks for Researchers

**Content:**

**Security Vulnerabilities: 40% of AI code has flaws**
- SQL injection vulnerabilities
- Hardcoded API keys and credentials
- Insecure file permissions
- Example: 2025 study of 1,645 AI apps found >10% exposed personal data

**Reproducibility Crisis**
- Non-deterministic: AI gives different code each time
- Peer reviewers can't verify exact methods
- Some journals now require disclosure of AI use

**Scientific Validity Risks**
- Wrong statistical tests applied
- Inappropriate data transformations
- Silent failures with plausible results
- Hidden bugs in edge cases

**"Hallucinated" Dependencies**
- AI invents packages that don't exist (slopsquatting)
- Can be exploited by attackers
- Example: AI suggests "pandas-extended" (fake package)

**Surprising Finding**: 2025 METR study found experienced developers were **19% SLOWER** with AI tools on complex, real-world tasks.

**Speaker Notes:**
"These aren't hypothetical. In one test, an AI assistant deleted an entire production database despite explicit instructions not to. For researchers, the reproducibility issue is critical—if reviewers can't reproduce your analysis, your paper is at risk."

### Slide 5: Best Practices Decision Tree

**Content:**

**Ask These Questions:**

1. **Will results be published?** 
   - Yes → Don't vibe code it
   - No → Continue to Q2

2. **Does it handle sensitive data?**
   - Yes → Don't vibe code it  
   - No → Continue to Q3

3. **Will others depend on it?**
   - Yes → Don't vibe code it
   - No → Continue to Q4

4. **Can you easily verify output?**
   - No → Don't vibe code it
   - Yes → Vibe coding acceptable

**The Golden Rule for Research:**
> "If your research reputation or validity depends on the code working correctly, don't vibe code it. Generate with AI, but review, understand, test, and take full responsibility for every line."

**Visual**: Flowchart diagram

**Speaker Notes:**
"This decision tree helps you quickly assess risk. Notice how most research code falls into 'don't vibe code' category. That's intentional—research demands rigor. But for genuine utilities and exploration, AI can dramatically accelerate your work."

---

## MODULE 2: CONTEXT ENGINEERING (20 minutes)

### Learning Objectives
- Understand context engineering and why it matters
- Structure GEMINI.md files for research projects
- Apply hierarchical context loading

### Slide 6: What Is Context Engineering?

**Content:**

**Definition:**
Context engineering is the practice of systematically providing AI models with the right information, tools, and constraints to generate appropriate code.

**Key Insight** (Tobi Lütke, Shopify):
> "Most agent failures are not model failures anymore, they are context failures."

**Components of Context:**
1. **Instructions** - System prompt with behavioral guidelines
2. **User Prompt** - Your immediate request
3. **Project Context** - File structure, dependencies, conventions
4. **Domain Knowledge** - Field-specific terminology and methods
5. **Examples** - Reference code demonstrating patterns
6. **Tools** - Available functions (file ops, search, shell)
7. **Constraints** - Privacy rules, security requirements, data handling

**Analogy**: 
Context engineering is like briefing a research assistant. You wouldn't just say "analyze this data"—you'd explain your research question, methodology standards, what outputs you need, and any ethical constraints.

**Visual**: Circular diagram with AI model in center, surrounded by 7 context components

**Speaker Notes:**
"Good context engineering is the difference between AI generating generic code and AI generating code that fits your research workflow, respects your institutional policies, and follows field conventions. We'll focus on practical implementation for research projects."

### Slide 7: Hierarchical Context in gemini-cli

**Content:**

Gemini CLI loads context from multiple locations in order:

**1. Global Context**: `~/.gemini/GEMINI.md`
```markdown
# Global Coding Standards
- Language: Python 3.10+
- Style: PEP 8 compliance
- Testing: pytest for all functions
- Documentation: NumPy-style docstrings
```

**2. Project Context**: `./GEMINI.md`
```markdown
# Neuroimaging Study: Memory Encoding
## IRB Protocol: #2024-456
- De-identified data only
- No logging of subject IDs
- All paths relative to project root
```

**3. Component Context**: `./analysis/GEMINI.md`
```markdown
# Statistical Analysis Module
- Use statsmodels for regression
- FDR correction for multiple comparisons
- Report effect sizes (Cohen's d)
```

**How It Works:**
- More specific contexts override general ones
- AI sees combined context from all levels
- Use `/memory show` to see what AI received

**Visual**: Three-tiered pyramid showing hierarchy

**Speaker Notes:**
"This hierarchical approach lets you set general standards once, then add project-specific requirements without repeating yourself. The project-level context is perfect for IRB protocols, data privacy rules, and field-specific methods."

### Slide 8: Anatomy of a Research GEMINI.md

**Content:**

**Complete Example:**

```markdown
# Computational Biology Project: Protein Structure Prediction

## Project Purpose
Predicting protein folding patterns using transformer models.
Research group: Chen Lab, computational structural biology.

## Data Handling (CRITICAL)
- **Privacy**: Dataset contains proprietary sequences from pharma partner
- **Location**: All data in ./data/ directory (git-ignored)
- **Format**: FASTA for sequences, PDB for structures
- **Never**: Log sequences, commit data files, or expose in error messages

## Technical Stack
- Python 3.11
- PyTorch 2.0+ with CUDA support
- BioPython for sequence handling
- Custom modules in ./src/

## Code Standards
- Type hints required for all functions
- Docstrings: Google style with example usage
- Tests: pytest with >80% coverage
- Max line length: 100 characters (not 79)

## Domain Context
### Terminology
- **MSA**: Multiple Sequence Alignment
- **RMSD**: Root Mean Square Deviation (Å)
- **Contact map**: 2D representation of spatial proximity

### Methods
- Use AlphaFold2 as baseline for comparison
- Distance threshold for contacts: 8 Å
- Secondary structure: DSSP classification

## Statistical Standards
- Report confidence intervals, not just point estimates
- Multiple testing: Benjamini-Hochberg FDR correction
- Effect sizes required for all comparisons
- Random seed: 42 for reproducibility

## File Structure
```
project/
├── data/           # Raw data (never commit)
├── processed/      # Processed data (never commit)
├── src/            # Source code
├── tests/          # Unit tests
├── notebooks/      # Exploratory analysis
└── results/        # Outputs (commit summary only)
```

## Example Code Patterns
See ./examples/:
- data_loading.py - Standard data import with validation
- model_training.py - PyTorch training loop structure
- evaluation.py - Metrics calculation and visualization

## Common Pitfalls to Avoid
- DON'T use pickle for long-term storage (use HDF5)
- DON'T hard-code file paths (use pathlib)
- DON'T ignore warnings (treat as errors in production)
- DON'T use mutable default arguments

## External APIs/Tools
- AlphaFold2 API: Use official endpoint, respect rate limits
- PDB database: Query via BioPython (cached locally)
- BLAST: Local installation preferred over web API
```

**Speaker Notes:**
"This example shows comprehensive context covering privacy, technical standards, domain knowledge, and common pitfalls. Notice how specific it is—'8 Å for contacts,' 'Benjamini-Hochberg correction.' This specificity helps AI generate code that follows your field's conventions."

**Formative Assessment (minute 15):**
"Pair up with your neighbor. Take 2 minutes: What would you include in a GEMINI.md file for YOUR research project? Share one critical constraint."

### Slide 9: Practical Context Engineering Techniques

**Content:**

**Technique 1: Modular Context with Imports**
```markdown
# Main GEMINI.md
@./docs/data-privacy-policy.md
@./docs/statistical-methods.md
@./examples/analysis-template.py
```

**Technique 2: Tool-Specific Instructions**
```markdown
## Using File Operations
- Always use relative paths from project root
- Verify file exists before reading: `if path.exists()`
- Use context managers for file I/O: `with open(...) as f:`

## Using Shell Commands
- Avoid shell=True (security risk)
- Capture both stdout and stderr
- Check return codes: `if result.returncode != 0:`
```

**Technique 3: Examples Over Explanations**
```markdown
## Correct Pattern:
```python
# Load and validate data
data = pd.read_csv('input.csv')
assert data.shape[0] > 0, "Empty dataset"
assert 'subject_id' in data.columns, "Missing subject_id"
```

## Avoid:
```python
data = pd.read_csv('input.csv')  # No validation!
```
```

**Technique 4: Constraint Specification**
```markdown
## Performance Constraints
- Functions must handle N=10,000 samples in <5 seconds
- Memory usage <4GB for typical datasets
- Vectorize operations (avoid Python loops)

## Security Constraints  
- Use parameterized SQL queries (never string concatenation)
- Environment variables for credentials (never hardcode)
- Input validation on all user-provided values
```

**Speaker Notes:**
"These techniques make your context actionable. Examples are especially powerful—AI learns patterns better from code than descriptions. The constraint specifications help AI optimize for your actual use case, not generic scenarios."

### Slide 10: Context Engineering Anti-Patterns

**Content:**

**❌ DON'T: Vague Instructions**
```markdown
# Bad Example
Write good code.
Follow best practices.
Make it fast.
```

**✅ DO: Specific, Measurable**
```markdown
# Good Example
- Functions <50 lines
- Cyclomatic complexity <10  
- Type hints on all parameters
- Docstrings with Args, Returns, Raises sections
- Runtime: O(n) or better for main pipeline
```

**❌ DON'T: Context Overload**
```markdown
# Too Much (12 pages of documentation)
[Entire thesis chapter pasted here]
```

**✅ DO: Focused, Hierarchical**
```markdown
# Core concepts here
# Detailed specs in subdirectories
# Use @imports for full documentation
```

**❌ DON'T: Outdated Context**
```markdown
# Written in 2023, never updated
Use Python 2.7
Use deprecated package 'sklearn'
```

**✅ DO: Living Document**
```markdown
# Updated: 2025-10-01
Python 3.11+ required
Dependencies in requirements.txt (pinned versions)
```

**Key Principles:**
1. **Specificity over generality**
2. **Examples over explanations**
3. **Constraints over preferences**
4. **Maintenance over "set and forget"**

**Speaker Notes:**
"Context engineering is iterative. Start simple, observe what AI generates, refine context based on gaps or errors. Treat your GEMINI.md like documentation—update it as your project evolves."

---

## DEMO 1: ACADEMIC WEBSITE WITH GEMINI-CLI (25 minutes)

### Learning Objectives
- Install and authenticate gemini-cli
- Create project-specific context
- Use AI to parse CV and build website

### Setup Check (2 minutes)

**Instructor Action:**
"Let's verify everyone is ready. Green sticky note if you have:
1. gemini command working
2. Successfully authenticated
3. Workshop files downloaded

Red sticky note if you need help."

**Helpers**: Circulate to red stickies, assist with:
- Node.js version: `node -v` (need 18+)
- Install: `npm install -g @google/genai-cli`
- Auth: `gemini` then follow browser flow

### Part 1: Project Setup (7 minutes)

**Instructor Live Coding (projector font size 18+):**

```bash
# Navigate to workshop directory
cd ~/workshop-files

# Create new project
mkdir academic-website
cd academic-website

# Initialize git (provides context to AI)
git init

# Create basic structure
mkdir content images css
touch README.md

# Initialize gemini context
gemini /init
```

**Output shown:**
```
✓ Created .gemini/ directory
✓ Generated GEMINI.md template
✓ Ready to customize for your project
```

**Instructor Action:** Open GEMINI.md in text editor (visible on screen)

**Customize the template:**

```markdown
# Academic Website for Dr. Jane Researcher

## Project Purpose
Personal academic website showcasing:
- Professional bio and CV
- Publications list
- Research interests
- Contact information
- Teaching portfolio

## Target Audience
- Prospective collaborators
- Students interested in research positions
- Funding agencies
- Academic community

## Technical Requirements
- **Technology**: Pure HTML5 + CSS3 (no frameworks)
- **Hosting**: GitHub Pages compatible
- **Design**: Professional, clean, academic aesthetic
- **Performance**: Fast loading, minimal dependencies
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile**: Responsive design (mobile-first)

## Content Sources
- CV data: content/cv.md (structured markdown)
- Publications: content/publications.bib (BibTeX format)
- Profile photo: images/profile.jpg
- Research images: images/research/*.jpg

## Design Preferences
- **Color scheme**: Professional blues and grays (#2c3e50, #3498db, #ecf0f1)
- **Typography**: Clean sans-serif (system fonts for performance)
- **Layout**: Single-page scrollable OR multi-page (your choice)
- **Style reference**: Google Scholar profiles, academic department pages

## Specific Requirements
- Header with name, title, photo
- Navigation menu (sticky on scroll)
- Sections clearly separated
- Email obfuscation (anti-spam)
- Publication list grouped by year, reverse chronological
- External links open in new tab
- Print-friendly CSS

## DO NOT
- Use JavaScript frameworks (React, Vue, etc.)
- Include tracking/analytics
- Add social media widgets
- Use custom fonts (performance)
- Implement complex animations

## File Structure
```
academic-website/
├── index.html          # Main page
├── publications.html   # Publications page
├── css/
│   ├── style.css      # Main styles
│   └── print.css      # Print stylesheet
├── content/
│   ├── cv.md          # Source CV data
│   └── publications.bib
└── images/
    ├── profile.jpg
    └── research/
```
```

**Save and show:**

**Instructor:** "Notice how specific this is. We're telling AI exactly what we want—technology stack, design preferences, accessibility requirements. This context guides every response from here forward."

**Troubleshooting Checkpoint:**

| Issue | Quick Fix |
|-------|-----------|
| "gemini command not found" | `npm install -g @google/genai-cli` |
| "Permission denied" | Use `sudo` or fix npm permissions |
| "Can't open GEMINI.md" | `nano GEMINI.md` or use any text editor |

### Part 2: Parsing CV Content (8 minutes)

**Instructor:** Copy sample-cv.md to project:

```bash
cp ../sample-files/sample-cv.md content/cv.md
cat content/cv.md
```

**Show content:**
```markdown
# Dr. Jane Researcher

## Current Position
Assistant Professor of Computational Biology
Department of Biomedical Informatics
University of Example, 2020-present

## Education
- **PhD**, Computational Biology, Stanford University, 2020
  - Dissertation: "Machine Learning Approaches to Protein Structure Prediction"
  - Advisor: Prof. John Smith
- **MS**, Computer Science, MIT, 2017
- **BS**, Biology (Honors), UC Berkeley, 2015

## Research Interests
- Machine learning applications in genomics
- Computational drug discovery
- Protein structure prediction
- Bioinformatics tool development

## Selected Publications
See publications.bib for complete list

## Grants
- NIH R01, "AI for Drug Discovery", 2023-2028 ($1.2M, PI)
- NSF CAREER, "Computational Biology Methods", 2022-2027 ($500K, PI)

## Teaching
- BINF 501: Introduction to Bioinformatics (Fall)
- BINF 601: Machine Learning in Biology (Spring)
- CS 234: Data Science for Life Sciences (Spring)

## Service
- Editorial Board, *Journal of Computational Biology*
- Program Committee, RECOMB 2024, 2025
- Reviewer: Nature Methods, Bioinformatics, PLOS Computational Biology

## Contact
- Email: jane.researcher@university.edu
- Office: Science Building 305
- Phone: (555) 123-4567
- Office Hours: Tuesdays 2-4pm, Thursdays 10am-12pm
```

**Now use gemini CLI:**

```bash
# Start gemini interactive session
gemini

# In gemini prompt:
> Read content/cv.md and create index.html displaying this information
> in a professional, academic style. Use semantic HTML5 tags, include
> a header with photo placeholder, navigation menu, and clearly separated
> sections for each CV component. Make it mobile-responsive and accessible.
```

**What Happens (narrate while AI works):**

1. AI reads GEMINI.md (loads context)
2. AI reads content/cv.md (parses structure)
3. AI generates HTML incorporating:
   - Semantic tags (<header>, <nav>, <main>, <section>)
   - Professional styling
   - Mobile responsiveness
   - Accessibility attributes

**Output shown** (abbreviated):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Dr. Jane Researcher - Computational Biology">
    <title>Dr. Jane Researcher | Computational Biologist</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="header-content">
            <img src="images/profile.jpg" alt="Dr. Jane Researcher" class="profile-photo">
            <h1>Dr. Jane Researcher</h1>
            <p class="title">Assistant Professor of Computational Biology</p>
        </div>
    </header>
    
    <nav aria-label="Main navigation">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#teaching">Teaching</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    
    <main>
        <section id="about">
            <h2>About</h2>
            <p>Assistant Professor in the Department of Biomedical Informatics
            at University of Example, specializing in machine learning applications
            for drug discovery and protein structure prediction.</p>
        </section>
        
        <section id="education">
            <h2>Education</h2>
            <ul class="education-list">
                <li>
                    <strong>PhD</strong>, Computational Biology
                    <br>Stanford University, 2020
                </li>
                <!-- More education items -->
            </ul>
        </section>
        
        <!-- More sections -->
    </main>
    
    <footer>
        <p>&copy; 2025 Dr. Jane Researcher</p>
    </footer>
</body>
</html>
```

**Instructor Action:** 
- Open in browser: `open index.html`
- Show result on projector
- Resize browser to demonstrate mobile responsiveness

**Common Issues and Live Fixes:**

**Issue**: Generic styling, doesn't look professional
**Fix**: 
```
> That's a good start, but make it more polished. Add a color scheme
> using #2c3e50 for headers and #3498db for links. Increase line
> spacing to 1.6 for better readability. Add subtle borders between sections.
```

**Issue**: Missing CSS file
**Fix**:
```
> Create css/style.css with styles matching the HTML you just created.
> Include mobile-first responsive design with breakpoints at 768px and 1024px.
```

**Issue**: Accessibility problems
**Fix**:
```
> Add ARIA labels to navigation, ensure color contrast meets WCAG AA,
> add skip-to-content link, make sure all images have alt text.
```

**Speaker Notes:**
"Notice how we iterate. AI rarely gets it perfect first try. But with good context and specific feedback, you can quickly refine the output. This is much faster than writing HTML from scratch."

### Part 3: Publications Page from BibTeX (8 minutes)

**Copy BibTeX file:**

```bash
cp ../sample-files/publications.bib content/
cat content/publications.bib
```

**BibTeX content:**

```bibtex
@article{researcher2024nature,
  title={Deep learning for protein structure prediction at atomic resolution},
  author={Researcher, Jane and Collaborator, John and Smith, Mary},
  journal={Nature},
  volume={615},
  pages={123--130},
  year={2024},
  doi={10.1038/s41586-024-12345-6}
}

@article{researcher2023plos,
  title={Machine learning approaches to drug-target interaction prediction},
  author={Researcher, Jane and Lee, Sarah},
  journal={PLOS Computational Biology},
  volume={19},
  number={5},
  pages={e1011234},
  year={2023},
  doi={10.1371/journal.pcbi.1011234}
}

@article{researcher2022bioinf,
  title={BioinfoKit: An open-source toolkit for computational biology},
  author={Researcher, Jane},
  journal={Bioinformatics},
  volume={38},
  number={12},
  pages={3456--3465},
  year={2022},
  doi={10.1093/bioinformatics/btac234}
}

@inproceedings{researcher2023recomb,
  title={Transformer models for molecular property prediction},
  author={Researcher, Jane and Chen, Wei},
  booktitle={Research in Computational Molecular Biology (RECOMB)},
  pages={45--59},
  year={2023},
  publisher={Springer}
}

@article{researcher2021jmb,
  title={Computational methods for protein-ligand docking},
  author={Researcher, Jane and Brown, Alex and Davis, Chris},
  journal={Journal of Molecular Biology},
  volume={433},
  number={10},
  pages={166901},
  year={2021},
  doi={10.1016/j.jmb.2021.166901}
}
```

**Gemini command:**

```bash
> Parse content/publications.bib and create publications.html that:
> 1. Groups publications by year (newest first)
> 2. Formats each citation in APA style
> 3. Makes DOIs clickable links
> 4. Uses the same styling as index.html
> 5. Numbers publications within each year
> 6. Highlights my name (Jane Researcher) in bold
> 7. Includes a "back to main page" link
```

**AI generates publications.html**

**Key features to point out:**

```html
<section class="year-group">
    <h2>2024</h2>
    <ol>
        <li class="publication">
            <strong>Researcher, J.</strong>, Collaborator, J., & Smith, M. (2024).
            Deep learning for protein structure prediction at atomic resolution.
            <em>Nature</em>, <em>615</em>, 123-130.
            <a href="https://doi.org/10.1038/s41586-024-12345-6" 
               target="_blank" rel="noopener noreferrer">
                DOI: 10.1038/s41586-024-12345-6
            </a>
        </li>
    </ol>
</section>
```

**Demonstrate:**
- Open in browser
- Show proper formatting
- Click DOI links
- Check responsive design
- Note name highlighting

**Advanced Challenge** (for fast learners):

```
> Add a search/filter feature allowing users to filter publications
> by keyword. Use vanilla JavaScript (no libraries). Add a search box
> at the top that filters publications in real-time as user types.
```

**Troubleshooting:**

| Problem | Solution |
|---------|----------|
| BibTeX parsing errors | Check for missing commas, unmatched braces |
| Wrong citation format | Specify exactly: "Use APA 7th edition format" |
| Styles don't match | "Use the existing css/style.css file" |
| Names not bold | "Wrap 'Researcher, J' in <strong> tags" |

**Speaker Notes:**
"This demonstrates AI's strength: parsing structured data and format conversion. For researchers, this pattern applies broadly—BibTeX to HTML, CSV to LaTeX tables, JSON to reports. The key is clear input/output specification."

---

## DEMO 2: MARKDOWN TO BEAMER SLIDES (20 minutes)

### Learning Objectives
- Convert markdown to professional presentations
- Handle academic citations with BibTeX
- Customize Beamer themes

### Introduction (3 minutes)

**Slide: Why Markdown for Academic Presentations?**

**Benefits:**
- ✅ Version control friendly (plain text, diff-able)
- ✅ Fast content creation (no GUI clicking)
- ✅ Integrated citation management
- ✅ Reproducible output
- ✅ Easy collaboration (merge conflicts rare)
- ✅ Reusable content (same source → multiple formats)

**The Workflow:**
```
Markdown (.md) + BibTeX (.bib) + YAML config
    ↓ Pandoc
LaTeX Beamer (.tex)
    ↓ pdflatex
Professional Slides (.pdf)
```

**Speaker Notes:**
"Markdown is increasingly popular in academia for exactly these reasons. You can focus on content, version control your presentations like code, and automate formatting. For journal clubs and lab meetings, this workflow is a game-changer."

### Part 1: Basic Conversion (6 minutes)

**Instructor creates journal-club.md:**

```markdown
---
title: "Journal Club: Machine Learning in Drug Discovery"
subtitle: "Smith et al. (2023) Nature Machine Intelligence"
author: "Jane Researcher"
institute: "University of Example | Computational Biology"
date: "October 15, 2025"
theme: "Madrid"
colortheme: "beaver"
aspectratio: 169
fontsize: 12pt
---

# Background

## Current State of Drug Discovery

**Traditional approaches:**

- High-throughput screening
- Structure-based design
- Fragment-based methods

**Major challenges:**

- Time-consuming: 10-15 years per drug
- Expensive: $2.6 billion average cost
- High failure rate: ~90% attrition

## Why Machine Learning?

Recent ML advances enable:

- Molecular property prediction
- De novo drug design
- Target identification
- ADMET prediction
- Lead optimization

# Study Overview

## Research Question

> Can transformer-based models predict drug-target binding affinity
> more accurately than traditional docking methods?

## Dataset

- **Source**: BindingDB
- **Size**: 1.2 million compound-protein pairs
- **Coverage**: 7,000+ protein targets
- **Diversity**: Multiple therapeutic areas

## Methods

::: columns
:::: column
**Model Architecture:**

- Transformer encoder
- Molecular fingerprints
- Protein sequence embeddings
- Multi-head attention
::::

:::: column
**Training:**

- 5-fold cross-validation
- 80/10/10 train/val/test split
- Early stopping (patience=10)
- Adam optimizer
::::
:::

# Results

## Main Findings

| Method | Accuracy | Speed | Cost |
|--------|----------|-------|------|
| AutoDock Vina | 65% | 2 hrs | High |
| Transformer Model | **87%** | 30 sec | Low |
| Improvement | +22% | 240x faster | 90% cheaper |

: Performance comparison {#tbl:results}

## Key Result 1

![Binding Affinity Predictions](figures/predictions.pdf){width=70%}

- Strong correlation with experimental values (R² = 0.85)
- Consistent across protein families
- Handles novel compounds well

## Key Result 2

![Error Analysis by Protein Family](figures/errors.pdf){width=70%}

- Lowest error: kinases (RMSE = 0.4)
- Highest error: GPCRs (RMSE = 0.9)
- Correlated with binding site complexity

# Critical Analysis

## Strengths

\u003e - Large, diverse dataset
\u003e - Rigorous validation methodology
\u003e - Significant performance improvement
\u003e - Computational efficiency gains
\u003e - Open-source code released

## Limitations

\u003e - No experimental validation of predictions
\u003e - Limited to binding prediction (not activity)
\u003e - Potential dataset bias toward well-studied targets
\u003e - Generalization to novel scaffolds unclear
\u003e - Requires large training dataset

## Questions for Discussion

1. How reliable are computational predictions without experimental validation?

2. What's the appropriate role for ML in drug discovery pipelines?

3. Should we trust AI predictions for novel chemical space?

4. How do we address dataset bias in ML models?

# Conclusions

## Key Takeaways

- **Performance**: ML significantly outperforms traditional docking
- **Speed**: Enables high-throughput screening at scale
- **Limitations**: Still requires experimental validation
- **Future**: Integration with other computational methods

## Impact on the Field

- Paradigm shift in drug discovery workflows
- Enables new screening strategies
- Reduces time and cost for lead identification
- Opens questions about validation standards

## References
```

**Convert to PDF:**

```bash
# Navigate to demo directory
cd examples/demo2

# Basic conversion
pandoc -t beamer journal-club.md -o journal-club.pdf

# Open result
open journal-club.pdf  # macOS
# or: evince journal-club.pdf  # Linux
# or: start journal-club.pdf  # Windows
```

**Show on projector:**
- Title slide formatting
- Section slides
- Content slides
- Table rendering
- Two-column layout
- Incremental bullets

**Point out automatic features:**
- Theme applied (Madrid)
- Colors (beaver colortheme)
- Aspect ratio (16:9)
- Font size (12pt)
- Table numbering and caption

**Speaker Notes:**
"Notice we got professional slides with just a markdown file. No clicking through PowerPoint menus. This is reproducible—run the same command, get identical output. Perfect for version control."

### Part 2: Adding Citations (5 minutes)

**Create references.bib:**

```bibtex
@article{smith2023ml,
  title={Transformer models for drug-target binding prediction},
  author={Smith, John A and Jones, Mary B and Lee, Sarah C},
  journal={Nature Machine Intelligence},
  volume={5},
  pages={234--245},
  year={2023},
  doi={10.1038/s42256-023-00234-5}
}

@article{trott2020autodock,
  title={AutoDock Vina: improved docking with better accuracy},
  author={Trott, Oleg and Olson, Arthur J},
  journal={Journal of Computational Chemistry},
  volume={31},
  pages={455--461},
  year={2020},
  doi={10.1002/jcc.21334}
}

@article{chen2021transformers,
  title={Transformer models in drug discovery: a review},
  author={Chen, Wei and Wang, Li},
  journal={Briefings in Bioinformatics},
  volume={22},
  number={6},
  pages={bbab344},
  year={2021},
  doi={10.1093/bib/bbab344}
}

@article{gilson2016bindingdb,
  title={BindingDB in 2015: a public database for medicinal chemistry},
  author={Gilson, Michael K and Liu, Tiqing and Baitaluk, Michael},
  journal={Nucleic Acids Research},
  volume={44},
  pages={D1045--D1053},
  year={2016},
  doi={10.1093/nar/gkv1072}
}
```

**Add citations to markdown:**

Update "Background" section:
```markdown
## Why Machine Learning?

Traditional docking methods [@trott2020autodock] have been the gold standard.

Recent transformer applications [@chen2021transformers] show promise for:
- Molecular property prediction  
- De novo design

Multiple studies [@smith2023ml; @chen2021transformers] demonstrate improvements.
```

Update "Dataset" section:
```markdown
## Dataset

- **Source**: BindingDB [@gilson2016bindingdb]
- **Size**: 1.2 million compound-protein pairs
```

**Add bibliography section at end:**
```markdown
## References {.allowframebreaks}

::: {#refs}
:::
```

**Recompile with citations:**

```bash
pandoc --citeproc --bibliography=references.bib \
  -t beamer journal-club.md -o journal-club.pdf
```

**Show updated PDF:**
- Citations appear in text
- References slide at end
- Proper formatting
- Clickable in PDF (if links enabled)

**Common Citation Styles:**

```bash
# Nature style
pandoc --citeproc --bibliography=refs.bib --csl=nature.csl \
  -t beamer input.md -o output.pdf

# APA style
pandoc --citeproc --bibliography=refs.bib --csl=apa.csl \
  -t beamer input.md -o output.pdf

# Download CSL files from:
# https://www.zotero.org/styles
```

**Speaker Notes:**
"Citations are seamless. Maintain one BibTeX file for all your presentations. Change citation style with a single flag. Much better than manually formatting references in PowerPoint."

### Part 3: Advanced Customization (6 minutes)

**Update YAML header for customization:**

```yaml
---
title: "Journal Club: Machine Learning in Drug Discovery"
subtitle: "Smith et al. (2023) Nature Machine Intelligence"
author: "Jane Researcher"
institute: "University of Example | Computational Biology"
date: "October 15, 2025"
theme: "Madrid"
colortheme: "beaver"
aspectratio: 169
fontsize: 12pt
bibliography: references.bib
csl: nature.csl
link-citations: true
toc: true
toc-title: "Outline"
section-titles: true
header-includes: |
  \usepackage{booktabs}
  \usepackage{graphicx}
  \setbeamertemplate{caption}[numbered]
  \setbeamercolor{block title}{bg=blue!20}
  \setbeamercolor{block body}{bg=blue!5}
  \setbeamertemplate{footline}[frame number]
---
```

**Recompile to show changes:**
- Table of contents slide added
- Frame numbers on footer
- Custom block colors
- Figure numbering

**Show other theme options:**

```bash
# Try different themes
pandoc -V theme:Copenhagen -t beamer input.md -o output.pdf
pandoc -V theme:Warsaw -t beamer input.md -o output.pdf
pandoc -V theme:Frankfurt -t beamer input.md -o output.pdf

# Different color themes
pandoc -V colortheme:dolphin -t beamer input.md -o output.pdf
pandoc -V colortheme:crane -t beamer input.md -o output.pdf
```

**Show Beamer theme matrix:** https://hartwork.org/beamer-theme-matrix/

**Advanced Markdown Features:**

```markdown
## Math Equations

Inline: $E = mc^2$

Display:
$$\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$

## Code Blocks

```python
def calculate_binding(protein, ligand):
    """Calculate binding affinity."""
    return model.predict(protein, ligand)
```
```

## Notes (speaker notes only)

::: notes
Remember to mention the experimental validation gap.
Highlight the 240x speedup.
:::

## Alerts and Blocks

::: block
### Important Note
Always validate computational predictions experimentally.
:::

::: alertblock
### Warning
Model may not generalize to novel scaffolds.
:::
```

**Speaker Notes:**
"These advanced features give you professional presentation capabilities while keeping the source simple and maintainable. For researchers presenting complex methods, the equation and code support is invaluable."

---

## DEMO 3: GITHUB ACTIONS AI CODE REVIEW (10 minutes)

### Quick Setup Overview (Due to Time)

**Slide: Productive Coding Workflow**

**The Complete Cycle:**

1. **Plan** → Use AI to design approach
2. **Implement** → Generate or assist with code
3. **Review** → Human verification (critical!)
4. **Test** → Automated testing
5. **Commit** → Version control
6. **Automated Review** → GitHub Actions catches issues
7. **Iterate** → Refine based on feedback

**Visual:** Circular workflow diagram

**Why Automated Review?**
- Catches security vulnerabilities
- Enforces coding standards
- Provides second opinion
- Saves time in code review
- Educational (learn from feedback)

### Quick Demo: Setting Up AI Code Review

**Step 1: Create Workflow File**

```bash
# In your git repository
mkdir -p .github/workflows
cd .github/workflows
```

**Create ai-code-review.yml:**

```yaml
name: AI Code Review

on:
  pull_request:
    types: [opened, synchronize, reopened]
    
permissions:
  contents: read
  pull-requests: write

jobs:
  ai-review:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: AI Code Review
        uses: freeedcom/ai-codereviewer@v2.1.0
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          OPENAI_API_MODEL: "gpt-4"
          exclude: "**/*.md, **/*.txt, **/*.json"
          
      - name: Comment PR
        if: always()
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '✅ AI code review completed. Check comments above.'
            })
```

**Step 2: Add OpenAI API Key to GitHub**

1. Get API key from https://platform.openai.com
2. Go to GitHub repo → Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `OPENAI_API_KEY`
5. Value: paste your API key
6. Click "Add secret"

**Step 3: Commit and Test**

```bash
git add .github/workflows/ai-code-review.yml
git commit -m "Add AI code review workflow"
git push origin main

# Create test branch
git checkout -b test-ai-review

# Add some code with intentional issues
cat > test.py << 'EOF'
import os

def process_data(filename):
    # Read file (no error handling!)
    f = open(filename)
    data = f.read()
    
    # SQL injection vulnerability
    query = "SELECT * FROM users WHERE name = '" + data + "'"
    
    # Hardcoded credential
    api_key = "sk-1234567890abcdef"
    
    return query

print(process_data("input.txt"))
EOF

git add test.py
git commit -m "Add data processing function"
git push origin test-ai-review

# Create pull request
gh pr create --title "Test AI Review" --body "Testing automated review"
```

**What the AI Review Catches:**

```
🤖 AI Code Review Comments:

1. **Security Issue**: File opened without error handling (line 5)
   - Missing try/except block
   - File never closed (resource leak)
   - Suggestion: Use context manager `with open(...) as f:`

2. **Critical Security Vulnerability**: SQL injection risk (line 9)
   - User input directly concatenated into SQL query
   - Severity: HIGH
   - Fix: Use parameterized queries

3. **Security Issue**: Hardcoded API key (line 12)
   - Credentials should never be in code
   - Use environment variables
   - Fix: `api_key = os.environ.get('API_KEY')`

4. **Code Quality**: Missing docstring (line 4)
   - Function lacks documentation
   - Add docstring with Args, Returns

5. **Best Practice**: No input validation (line 4)
   - Function doesn't validate filename parameter
   - Add check: `if not os.path.exists(filename):`
```

**Benefits for Research Code:**

- Catches common data science mistakes
- Identifies security issues with data handling
- Enforces documentation standards
- Provides learning opportunities
- Maintains code quality across team

**Customization for Research:**

```yaml
# Custom prompt for research code
env:
  REVIEW_PROMPT: |
    You are reviewing research code. Focus on:
    - Statistical correctness
    - Data privacy and security
    - Reproducibility (random seeds, versions)
    - Documentation quality
    - Common research computing mistakes
```

**Speaker Notes:**
"This completes the responsible workflow. You use AI to accelerate development, but automated review adds a safety net. For research, you might customize this to check for statistical errors, data privacy issues, or reproducibility concerns."

---

## WRAP-UP & RESOURCES (10 minutes)

### Slide: Key Takeaways

**Three-Tiered Approach:**

| Code Type | AI Approach | Review Level |
|-----------|-------------|--------------|
| **Exploration** | Vibe coding OK | Visual verification |
| **Production** | AI-assisted | Line-by-line review |
| **Critical** | Traditional + AI | Multiple reviewers |

**The Golden Rules:**

1. **If publishable** → Review every line
2. **If sensitive data** → Check privacy policies
3. **If others depend on it** → Traditional development
4. **If easily verifiable** → AI can accelerate

**Context Engineering Wins:**
- 🎯 Specificity beats vagueness
- 📝 Examples beat explanations
- 🔒 Constraints beat preferences
- 🔄 Iteration beats perfection

### Slide: Tool Recommendations for Researchers

**Best Free Option: Gemini CLI**
- 1,000 requests/day (highest free tier)
- 1M token context window
- Open source, terminal-first
- Perfect for: Budget-constrained researchers

**Best for Students: GitHub Copilot**
- Free with student verification
- Most mature platform
- Works in any IDE
- Perfect for: Learning and general coding

**Best for Power Users: Cursor**
- $20/month (1 year free for students)
- Advanced agent capabilities
- Best codebase understanding
- Perfect for: Building research software

**Best for Learning: ChatGPT Plus**
- $20/month
- Best explanations
- Low learning curve
- Perfect for: Understanding concepts

**Decision Matrix:**

```
Budget = $0/month → Gemini CLI + Copilot (student)
Budget = $20/month → Cursor (student) OR ChatGPT Plus
Need terminal tools → Gemini CLI or Claude Code
Need IDE integration → Copilot or Cursor
Need best explanations → ChatGPT
```

### Slide: Best Practices Checklist

**Before Using AI Tools:**
- [ ] Read institutional AI use policy
- [ ] Check journal requirements for AI disclosure
- [ ] Understand data privacy implications
- [ ] Set up proper authentication
- [ ] Create GEMINI.md with research context

**During Development:**
- [ ] Provide clear context in prompts
- [ ] Review ALL generated code
- [ ] Test with known datasets
- [ ] Document AI assistance
- [ ] Version control everything

**After Development:**
- [ ] Colleague review for critical code
- [ ] Run security scanning
- [ ] Verify reproducibility
- [ ] Cite AI tools in methods
- [ ] Archive prompts and versions

### Slide: Common Pitfalls to Avoid

| Pitfall | Why It's Bad | Solution |
|---------|--------------|----------|
| Blindly trusting AI | 40% has vulnerabilities | Always review |
| Skipping review for "simple" scripts | Hidden bugs | Review everything |
| Using for sensitive data without checks | Privacy violations | Check policies first |
| Not documenting AI use | Transparency issues | Log all AI assistance |
| Forgetting reproducibility | Can't replicate | Save versions, prompts |
| Ignoring security warnings | Data breaches | Run vulnerability scans |
| Over-relying on AI for learning | Skill atrophy | Understand, don't just use |

### Slide: Troubleshooting Quick Reference

**Common Issues:**

```bash
# "gemini command not found"
npm install -g @google/genai-cli
export PATH="$PATH:$(npm root -g)/bin"

# "Authentication failed"
export GEMINI_API_KEY="your-key"
# OR: gemini /auth

# "Pandoc not found"  
brew install pandoc  # macOS
sudo apt install pandoc  # Linux

# "LaTeX errors"
sudo apt install texlive-full  # Linux
brew install --cask mactex  # macOS

# "Permission denied"
sudo chown -R $USER /usr/local/lib/node_modules
```

**Getting Help:**
- Workshop Slack: [link]
- Office hours: Tuesdays 2-3pm
- Email: [instructor email]
- GitHub issues: [repo link]

### Slide: Resources for Continued Learning

**Official Documentation:**
- Gemini CLI: https://github.com/google-gemini/gemini-cli
- Pandoc: https://pandoc.org/MANUAL.html
- GitHub Actions: https://docs.github.com/actions
- Software Carpentry: https://software-carpentry.org/

**AI Tools Comparison:**
- Full comparison matrix: [workshop materials]
- Free tier guide: [link]
- Student programs: [link]
- Privacy policies: [link]

**Research-Specific:**
- Alan Turing Institute: "Using AI to Write Code: A Guide for Researchers"
- Your institution's research computing resources
- Domain-specific communities (bioinformatics, digital humanities, etc.)

**This Workshop:**
- Slides and materials: [GitHub repo]
- Video recording: [link if available]
- Sample files: [download link]
- Follow-up survey: [link]

### Slide: Next Steps

**This Week:**
1. ✅ Install one AI tool (try gemini-cli)
2. ✅ Create GEMINI.md for existing project
3. ✅ Convert one document with Pandoc

**This Month:**
1. Integrate AI into one regular workflow
2. Set up GitHub Actions for a repository
3. Share learnings with lab members

**This Semester:**
1. Build intuition about when AI helps vs hinders
2. Develop your own context engineering patterns
3. Contribute to research computing community

**Long-term:**
1. Stay updated on AI tool developments
2. Participate in institutional policy discussions
3. Mentor others in responsible AI use

### Slide: Workshop Evaluation

**Please Complete:**
- Post-workshop survey: [QR code on slide]
- Takes 2 minutes
- Helps improve future workshops
- Your feedback is invaluable

**Questions:**
- What worked well?
- What was confusing?
- Pacing (too fast/slow)?
- Most valuable component?
- What would you change?

**Follow-Up Support:**

**Office Hours:**
- Tuesdays 2-3pm, Room 123
- Or by appointment: [booking link]
- Bring your own projects!

**Community:**
- Monthly research computing meetup
- Slack workspace: [invite link]
- Email list: [subscribe link]

**Q&A Time:** Open floor for questions

---

## INSTRUCTOR MATERIALS

### Complete Materials Checklist

**4 Weeks Before:**
- [ ] Book room with projector, outlets, WiFi
- [ ] Recruit helpers (1 per 8-10 participants)
- [ ] Create registration form
- [ ] Prepare all sample files
- [ ] Test demos on fresh machine

**2 Weeks Before:**
- [ ] Email installation instructions
- [ ] Create Slack/Discord workspace
- [ ] Prepare handouts
- [ ] Brief helpers on roles
- [ ] Set up backup cloud instances

**1 Week Before:**
- [ ] Send reminder email with checklist
- [ ] Finalize slide deck
- [ ] Test all links
- [ ] Print materials (2x attendance)
- [ ] Prepare USB drives with installers

**1 Day Before:**
- [ ] Send day-before reminder
- [ ] Charge laptop fully
- [ ] Load all software
- [ ] Verify projector compatibility
- [ ] Test internet connection

**Day Of (30 min early):**
- [ ] Set up laptop and projector
- [ ] Test display (large fonts!)
- [ ] Open all applications
- [ ] Distribute sticky notes (2 colors/person)
- [ ] Place handouts
- [ ] Brief helpers
- [ ] Test microphone

### Helper Instructions

**Your Role:**
1. **Monitor**: Watch for red stickies, confused faces
2. **Assist**: Help individuals quietly
3. **Report**: Signal instructor if many have same issue
4. **Encourage**: Keep learners motivated

**Best Practices:**
- Guide, don't do (avoid taking over keyboard)
- Have solutions pre-typed on your laptop
- Know when to escalate to instructor
- Balance helping vs. productive struggle
- Note common issues for future

**Common Quick Fixes:**

| Issue | Command |
|-------|---------|
| Node not found | `nvm install 22` |
| Gemini not found | `npm install -g @google/genai-cli` |
| Auth failed | Open https://aistudio.google.com/apikey |
| Pandoc missing | `brew install pandoc` or apt |
| LaTeX errors | Install texlive-full or mactex |

### Sample Files Provided

**1. sample-cv.md** - Complete academic CV in markdown
**2. sample-publications.bib** - 10 example publications
**3. GEMINI-template.md** - Starter context file
**4. journal-club-template.md** - Presentation template
**5. ai-review.yml** - GitHub Actions workflow
**6. references.bib** - Citation examples
**7. troubleshooting-guide.pdf** - Quick reference

### Post-Workshop Follow-Up

**Within 24 Hours:**
```
Subject: Workshop Materials: AI-Assisted Development

Dear Participants,

Thank you for attending today's workshop! Here are your resources:

📚 Materials:
- Slides: [link]
- Code examples: [GitHub repo]
- Video: [link if recorded]
- Sample files: [download]

🔧 Tools:
- Gemini CLI guide: [link]
- Pandoc cheat sheet: [link]  
- Tool comparison: [link]

💬 Support:
- Office hours: Tuesdays 2-3pm
- Slack: [invite link]
- Email: [your email]

📊 Feedback:
Please complete 2-min survey: [link]

Next workshops:
- Advanced AI Coding: [date]
- Reproducible Workflows: [date]

Best regards,
[Your name]
```

**1 Week Later:**
- Check survey responses
- Address common questions in blog post
- Schedule follow-up session if needed

**1 Month Later:**
- Send success stories email
- Announce advanced workshop
- Share new resources discovered

---

## ASSESSMENT RUBRIC

### Workshop Success Metrics

**Participant Outcomes (Post-Survey):**
- [ ] 80%+ understand vibe coding vs responsible use
- [ ] 70%+ can create GEMINI.md for their project
- [ ] 60%+ successfully installed tools
- [ ] 80%+ would recommend workshop
- [ ] 70%+ plan to use tools in research

**Instructor Self-Assessment:**
- [ ] Stayed on time (within 5 minutes)
- [ ] All demos worked without major issues
- [ ] Addressed most participant questions
- [ ] Used sticky notes for pacing
- [ ] Provided clear next steps

**Areas for Improvement:**
- What technical issues occurred?
- Which demos need refinement?
- What questions were most common?
- Where did pacing lag?
- What resources were missing?

### Post-Workshop Survey

**Required Questions:**

1. Prior coding experience (1-5 scale)
2. Understanding of vibe coding concepts (1-5)
3. Understanding of context engineering (1-5)
4. Confidence using gemini-cli (1-5)
5. Confidence using Pandoc (1-5)
6. Will you use these tools? (Yes/No/Maybe)
7. Most valuable part (free text)
8. Suggested improvements (free text)
9. Pacing (too fast/just right/too slow)
10. Would recommend? (Yes/No)

---

This comprehensive workshop plan provides everything needed to deliver an effective, practical 2-hour workshop on AI-assisted development for researchers. The emphasis throughout is on responsible use, research integrity, and immediately applicable skills with extensive troubleshooting support.
