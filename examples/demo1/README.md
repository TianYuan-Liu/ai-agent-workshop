# Demo 1: Understanding LLM vs AI Agent with ReAct Pipeline

## Overview

This is the **first demonstration** of the AI Agent Workshop, designed to illustrate the fundamental difference between using a Large Language Model (LLM) as a simple text generator versus using it as an **AI agent** that follows the **ReAct (Reasoning + Acting) pipeline**.

## Learning Objectives

By examining this demo, you will understand:

1. **ReAct Pipeline**: How AI agents alternate between:
   - **Reasoning** (thinking and planning)
   - **Acting** (using tools to gather information and perform tasks)
   
2. **Tool Use**: How agents interact with the environment through tools:
   - Reading files (PDFs, LaTeX, images)
   - Writing and editing files
   - Running commands (compilation, testing)
   - Searching codebases
   
3. **Iterative Problem Solving**: How agents:
   - Break down complex tasks into steps
   - Gather information progressively
   - Verify their work
   - Fix errors autonomously

## What's in This Demo

- **`prompt.txt`**: The instruction given to the AI agent to create a journal club presentation from an academic paper
- **`epigenome.pdf`**: The source review paper
- **`figures/`**: Figures extracted from the paper
- **`slide/`**: The output directory containing the generated LaTeX Beamer presentation
- **`ConesaGroup_BeamerTemplate_Source_Tex/`**: The LaTeX template used for the presentation

## How This Demo Was Created

The AI agent followed these steps using the ReAct pipeline:

1. **Read** the prompt to understand the task
2. **Analyzed** the epigenome.pdf paper to extract key content
3. **Examined** available figures to understand what visuals to use
4. **Planned** the presentation structure (outline, themes, flow)
5. **Created** LaTeX slides following the Conesa Group template
6. **Compiled** the presentation to verify it works
7. **Debugged** any compilation errors iteratively
8. **Verified** the final output

## Try It Yourself!

### Your Task

Create your own presentation slides following your research group's template or a template of your choice. Choose one of the following approaches:

1. **Use a different template**: Adapt the prompt to use your own institution's Beamer theme
2. **Modify the structure**: Change the presentation style (e.g., thesis defense, conference talk, teaching slides)

### Getting Started

1. **Prepare your materials**:
   - A PDF paper or document
   - Your group's LaTeX template (or use a standard Beamer template)
   - Extract any figures you want to include

2. **Create a prompt** similar to `prompt.txt` that:
   - Describes the task clearly
   - Specifies the output format and structure
   - Includes any special requirements or constraints

3. **Let the AI agent work** through the ReAct cycle:
   - It will read your materials
   - Plan the presentation structure
   - Create the LaTeX source
   - Compile and debug iteratively

### Key Differences: LLM vs AI Agent

| Aspect | Simple LLM | AI Agent (ReAct) |
|--------|-----------|------------------|
| **Input** | Text only | Can read files, PDFs, images |
| **Process** | Single-pass generation | Iterative: plan → act → observe → adjust |
| **Verification** | No checking | Tests output (compilation, linting) |
| **Error Handling** | Cannot fix errors | Debugs and fixes autonomously |
| **Tool Use** | None | Uses file operations, commands, searches |
| **Reasoning** | Implicit | Explicit reasoning steps |

## Understanding the ReAct Pipeline

The agent's workflow demonstrates **ReAct** principles:

```
1. THINK (Reason)
   "What do I need to understand about this paper?"
   
2. ACT
   Tool: read_file("epigenome.pdf")
   
3. OBSERVE
   [Receives paper content]
   
4. THINK (Reason)
   "I see the main themes are X, Y, Z. I should structure slides around these."
   
5. ACT
   Tool: write("slide/main.tex", <content>)
   
6. OBSERVE
   [File created]
   
7. THINK (Reason)
   "Now I need to compile to check for errors."
   
8. ACT
   Tool: run_terminal_cmd("pdflatex main.tex")
   
9. OBSERVE
   [Compilation result, possible errors]
   
10. THINK (Reason)
    "There's a missing package error. I need to fix that."
    
... and so on iteratively until the task is complete.
```

## Questions to Consider

As you explore this demo, think about:

1. How would you accomplish this task with just an LLM (copy-paste workflow)?
2. What are the advantages of the agent's iterative approach?
3. Where did the agent need to gather information before proceeding?
4. How did the agent handle errors and uncertainties?
5. Could you modify the prompt to create different types of presentations?

## Next Steps

After understanding this demo, proceed to **Demo 2** to see more advanced agent capabilities based on context engineering.

---

**Note**: The central insight is that AI agents are not just text generators—they are autonomous problem-solvers that can interact with their environment, verify their work, and iterate toward a solution.

