# Demo 2: Context Engineering for LaTeX CV Generation

## Overview

This is the **second demonstration** of the AI Agent Workshop, designed to illustrate the concept of **context engineering**—the art and science of structuring information to create effective prompts for AI agents.

## What is Context Engineering?

**Context engineering** is the process of:

1. **Gathering** relevant information systematically
2. **Structuring** it in a clear, logical format
3. **Formatting** it into a prompt that AI agents can understand and act upon
4. **Optimizing** the prompt for the specific task and model

Unlike Demo 1 (which showed the ReAct pipeline), Demo 2 focuses on **how to prepare the input** that makes AI agents effective.

## Learning Objectives

By examining this demo, you will understand:

1. **Information Architecture**: How to organize complex user data into structured sections
2. **Prompt Design**: Best practices for creating prompts that lead to high-quality outputs
3. **User Experience**: Building interfaces that make context engineering accessible to non-technical users
4. **Reusability**: Creating templates that can be adapted for different use cases

## What's in This Demo

- **`index.html`**: Interactive web-based prompt generator for LaTeX CVs
  - Form-based data collection
  - Dynamic fields (add/remove items)
  - Real-time prompt generation
  - Copy-to-clipboard functionality
  - No external dependencies (works offline)

## How to Use

### Method 1: GitHub Pages (Recommended)

1. **Enable GitHub Pages** for this repository:
   - Go to repository Settings → Pages
   - Select source: `main` branch, `/examples/demo2` folder (or deploy from root)
   - Access at: `https://[your-username].github.io/[repo-name]/examples/demo2/`

2. **Fill in your information** on the web form

3. **Click "Generate Prompt"** to create the structured prompt

4. **Copy the prompt** and paste it into Claude Code or another AI agent

5. **Let the AI agent create your CV** following the ReAct pipeline from Demo 1

### Method 2: Local Testing

1. **Open the file directly** in your browser:
   ```bash
   open examples/demo2/index.html
   # or
   python3 -m http.server 8000
   # then visit http://localhost:8000/examples/demo2/
   ```

2. Follow steps 2-5 from Method 1

## The Context Engineering Process

This demo demonstrates a complete context engineering workflow:

```
┌─────────────────────────────────────────────────────────────┐
│  Step 1: USER INPUT                                         │
│  User fills form with academic information                  │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 2: STRUCTURE                                          │
│  JavaScript organizes data into logical sections            │
│  (Personal info → Education → Publications → etc.)          │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 3: PROMPT GENERATION                                  │
│  Data formatted into a clear, structured prompt with:       │
│  - Clear section headers                                    │
│  - Hierarchical organization                                │
│  - Explicit requirements                                    │
│  - Compilation instructions                                 │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 4: AI AGENT EXECUTION                                 │
│  Agent reads prompt → Creates LaTeX → Compiles → Debugs     │
│  (This is the ReAct pipeline from Demo 1)                   │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 5: OUTPUT                                             │
│  Professional PDF CV ready for use                          │
└─────────────────────────────────────────────────────────────┘
```

## Key Features of the Prompt Generator

### 1. **Structured Data Collection**

The form collects information in a hierarchical manner:
- Personal Information
- Education (dynamic list)
- Publications (dynamic list)
- Experience (dynamic list)
- Awards, Skills, etc.

### 2. **Dynamic Fields**

Users can add/remove entries for:
- Multiple degrees
- Multiple publications
- Multiple work experiences

This ensures the prompt can handle CVs of any length.

### 3. **Clear Section Markers**

The generated prompt uses:
```
================================================================================
SECTION NAME
================================================================================
```

This makes it easy for both humans and AI agents to parse the structure.

### 4. **Explicit Requirements**

The prompt includes:
- Template preferences
- Formatting requirements
- Compilation instructions
- Expected deliverables

### 5. **Professional Output**

The prompt is formatted to be:
- **Clear**: Easy to read and understand
- **Complete**: Contains all necessary information
- **Actionable**: Can be directly used by AI agents
- **Portable**: Works as a .txt file or clipboard content

## Comparison: Demo 1 vs Demo 2

| Aspect | Demo 1 (ReAct Pipeline) | Demo 2 (Context Engineering) |
|--------|------------------------|------------------------------|
| **Focus** | How AI agents *execute* tasks | How to *prepare input* for AI agents |
| **Demonstrates** | Tool use, iteration, debugging | Prompt design, information structure |
| **Input Type** | Pre-written prompt.txt | Interactive web form |
| **User Interaction** | Minimal (just provide prompt) | High (fill detailed form) |
| **Learning Goal** | Understand agent behavior | Understand prompt quality |
| **Output** | LaTeX presentation | Structured prompt (then CV) |

## Try It Yourself!

### Beginner Level

1. Fill in the form with your own academic information
2. Generate the prompt
3. Copy and paste it into Claude Code
4. Observe how the agent creates your CV

### Intermediate Level

1. Modify `index.html` to add new fields (e.g., Teaching Experience, Grants)
2. Update the prompt generation logic
3. Test with different LaTeX CV templates

### Advanced Level

1. Create a similar prompt generator for a different domain:
   - Research grant proposals
   - Conference poster content
   - Course syllabi
   - Lab protocols
2. Implement preset templates for different academic career stages
3. Add export to JSON/YAML for version control

## Design Principles

This demo follows these context engineering principles:

### 1. **Separation of Concerns**

- User focuses on *content* (their information)
- Tool handles *formatting* (prompt structure)
- AI agent handles *implementation* (LaTeX code)

### 2. **Progressive Disclosure**

- Start with essential fields (name, education)
- Optional fields can be left blank
- Dynamic fields expand as needed

### 3. **Clear Expectations**

- The prompt explicitly states what the AI should create
- Requirements are unambiguous
- Success criteria are defined

### 4. **Reusability**

- The same tool can be used repeatedly
- Prompts can be saved and modified
- Template can be adapted for other use cases

## Common Use Cases

This prompt generator approach can be adapted for:

1. **Academic Documents**
   - CVs and resumes
   - Research statements
   - Teaching philosophies
   - Grant proposals

2. **Technical Documentation**
   - API documentation
   - User manuals
   - Technical specifications

3. **Content Creation**
   - Blog posts
   - Reports
   - Presentations
   - Newsletters

## Technical Notes

### Why a Single HTML File?

- **Portability**: Works anywhere, no build process
- **Simplicity**: Easy to understand and modify
- **Offline-capable**: No internet required after loading
- **GitHub Pages compatible**: Deploy instantly

### Browser Compatibility

The tool uses standard web APIs:
- Modern JavaScript (ES6+)
- CSS Grid and Flexbox
- Clipboard API (for copy function)

Tested on: Chrome, Firefox, Safari, Edge (latest versions)

## Next Steps

After completing this demo:

1. **Reflect** on how prompt quality affects AI output
2. **Experiment** with different prompt structures
3. **Compare** your generated CV with one created manually
4. **Iterate** on your prompt based on results

## Key Takeaways

1. **Well-structured input = Better output**: The quality of AI-generated content depends heavily on prompt quality

2. **Automation enhances accessibility**: Tools like this make AI agents accessible to non-technical users

3. **Context is king**: The more relevant, organized information you provide, the better the results

4. **Separation of concerns works**: User → Tool → AI agent is an effective pipeline

5. **Templates are powerful**: Reusable structures save time and ensure consistency

## Questions to Consider

1. How does the structure of the prompt affect the AI's understanding?
2. What information is essential vs. optional for generating a good CV?
3. How could this approach be applied to other document types?
4. What are the tradeoffs between web forms and direct prompt writing?

---

**Demo Philosophy**: Context engineering is about making AI agents more effective by providing them with well-organized, complete information in a format they can easily parse and act upon. This demo shows how to build tools that enable users to create high-quality prompts without needing to understand prompt engineering themselves.
