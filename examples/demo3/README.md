# Tianyuan Liu - Portfolio Website

[![CI Pipeline](https://github.com/username/repo/actions/workflows/ci.yml/badge.svg)](https://github.com/username/repo/actions/workflows/ci.yml)
[![Deploy](https://github.com/username/repo/actions/workflows/deploy.yml/badge.svg)](https://github.com/username/repo/actions/workflows/deploy.yml)

A professional portfolio website for Tianyuan Liu, Computational Genomics Researcher at CSIC-UV, built with React, Vite, and deployed with CI/CD using GitHub Actions.

## 🚀 Features

- **Modern React Architecture**: Component-based design with React 18
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Comprehensive Testing**: Unit tests with Vitest and React Testing Library (>80% coverage)
- **CI/CD Pipeline**: Automated testing and deployment via GitHub Actions
- **Performance Optimized**: Fast build times with Vite
- **Accessibility**: WCAG compliant with semantic HTML
- **SEO Friendly**: Proper meta tags and semantic structure

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Project Structure](#project-structure)
- [Example Prompt](#example-prompt-for-creating-this-project)
- [Technologies](#technologies)

## 🏃 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm test` | Run unit tests in watch mode |
| `npm run test:ui` | Open Vitest UI for interactive testing |
| `npm run test:coverage` | Generate test coverage report |
| `npm run lint` | Run ESLint to check code quality |

### Development Workflow

```bash
# 1. Create a new feature branch
git checkout -b feature/your-feature-name

# 2. Make changes and test
npm run dev
npm test

# 3. Run linter before committing
npm run lint

# 4. Commit your changes
git add .
git commit -m "feat: add new feature"

# 5. Push and create PR
git push origin feature/your-feature-name
```

## 🧪 Testing

This project uses **Vitest** and **React Testing Library** for comprehensive testing.

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage report
npm run test:coverage

# Run tests in UI mode
npm run test:ui
```

### Test Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── __tests__/
│   │   └── Header.test.jsx
```

### Writing Tests

Example test using the AAA pattern (Arrange, Act, Assert):

```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('renders navigation links', () => {
    // Arrange & Act
    render(<Header />);

    // Assert
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
```

### Coverage Goals

- **Target**: 80%+ code coverage
- **Current coverage**: Run `npm run test:coverage` to check
- View detailed report: `open coverage/index.html`

## 🚀 Deployment

### GitHub Pages (Automated)

The site automatically deploys to GitHub Pages when code is pushed to the `main` branch.

**Setup Steps:**

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch - deployment happens automatically!

### Manual Deployment

```bash
# Build production bundle
npm run build

# Preview locally
npm run preview

# Deploy dist/ folder to your hosting provider
```

### Environment Variables

For custom deployments, you can set:

```bash
# .env
VITE_BASE_URL=/your-base-path/
```

Update `vite.config.js`:

```javascript
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  // ...
})
```

## 🔄 CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration and deployment.

### Workflows

#### 1. **CI Pipeline** (`.github/workflows/ci.yml`)

Runs on: Push to `main`/`develop`, Pull Requests

**Jobs:**
- **Lint**: ESLint code quality checks
- **Test**: Unit tests on Node 18 & 20
- **Build**: Production build verification
- **Coverage**: Upload coverage to Codecov

#### 2. **Deploy** (`.github/workflows/deploy.yml`)

Runs on: Push to `main`

**Jobs:**
- **Build**: Create production bundle
- **Deploy**: Publish to GitHub Pages

#### 3. **PR Preview** (`.github/workflows/pr-preview.yml`)

Runs on: Pull Request events

**Jobs:**
- **Preview**: Build and test PR changes
- **Comment**: Post build status to PR

### CI/CD Flow

```
┌─────────────────────────────────────────────────────────────┐
│  Developer pushes to feature branch                         │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  CI Pipeline runs:                                          │
│  ✓ ESLint checks                                            │
│  ✓ Unit tests (Node 18, 20)                                 │
│  ✓ Build verification                                       │
│  ✓ Coverage report                                          │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  Create Pull Request to main                                │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  PR Preview Build:                                          │
│  ✓ Lint + Test + Build                                      │
│  ✓ Comment status on PR                                     │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼ (After approval & CI passes)
┌─────────────────────────────────────────────────────────────┐
│  Merge to main                                              │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  Deploy Pipeline:                                           │
│  ✓ Run tests                                                │
│  ✓ Build production                                         │
│  ✓ Deploy to GitHub Pages                                   │
│  🎉 Live at https://username.github.io/repo                 │
└─────────────────────────────────────────────────────────────┘
```

### Branch Protection Rules

Recommended settings for `main` branch:

- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date
- ✅ Require CI workflow to pass
- ✅ Require pull request reviews (1+ reviewers)

## 📁 Project Structure

```
tianyuan-liu-portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml              # CI pipeline
│       ├── deploy.yml          # Deployment workflow
│       └── pr-preview.yml      # PR preview builds
├── src/
│   ├── components/             # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Research.jsx
│   │   ├── Publications.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── __tests__/          # Component tests
│   ├── data/
│   │   └── cvData.js           # Structured CV data
│   ├── test/
│   │   └── setup.js            # Test configuration
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── coverage/                   # Test coverage reports
├── dist/                       # Production build
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── .eslintrc.cjs               # ESLint rules
└── README.md                   # This file
```

## 📝 Example Prompt for Creating This Project

If you want to recreate this project or create a similar portfolio website with CI/CD and testing, here's the exact prompt you can use:

---

### **Example Prompt:**

```
Create a professional portfolio website based on my CV (cv.pdf) with the following requirements:

1. **Website Features:**
   - Modern, responsive design using React and Tailwind CSS
   - Sections for: About, Education, Research Experience, Publications, Projects, Skills, Contact
   - Professional academic theme with clean typography
   - Mobile-first responsive layout
   - Smooth scrolling navigation

2. **Testing Requirements:**
   - Comprehensive unit tests using Vitest and React Testing Library
   - Test coverage target: 80%+
   - Tests for all components verifying:
     - Correct rendering of content
     - Navigation links work properly
     - Contact information displays correctly
     - Accessibility features

3. **CI/CD Pipeline:**
   - GitHub Actions workflow for:
     - Running linter (ESLint) on every push/PR
     - Running all unit tests on multiple Node versions (18, 20)
     - Building production bundle
     - Uploading coverage reports to Codecov
   - Separate deployment workflow:
     - Automatically deploy to GitHub Pages on merge to main
     - Run tests before deployment
   - PR preview workflow that comments build status on PRs

4. **Project Setup:**
   - Use Vite as build tool for fast development
   - Configure Tailwind CSS for styling
   - Set up proper .gitignore
   - Include clear README with:
     - Installation instructions
     - Development workflow
     - Testing guide
     - Deployment steps
     - CI/CD pipeline documentation

5. **Code Quality:**
   - Follow React best practices
   - Use functional components with hooks
   - Extract CV data into structured JSON
   - Implement proper error handling
   - Ensure accessibility (semantic HTML, ARIA labels)

Please structure the project professionally, include all configuration files, and provide documentation on how to extend and maintain the website.
```

---

### What This Prompt Will Generate:

✅ **Complete React + Vite project** with modern tooling
✅ **9 tested React components** covering all CV sections
✅ **Comprehensive unit test suite** (9 test files, 40+ tests)
✅ **3 GitHub Actions workflows** (CI, Deploy, PR Preview)
✅ **Production-ready configuration** (ESLint, Tailwind, Vite)
✅ **Detailed documentation** (this README)

## 🛠️ Technologies

### Core

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework

### Testing

- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing utilities
- **@testing-library/jest-dom** - Custom matchers
- **jsdom** - DOM implementation for Node

### CI/CD

- **GitHub Actions** - Automation platform
- **ESLint** - Code linting
- **Codecov** - Coverage reporting (optional)

### Development Tools

- **lucide-react** - Icon library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🎨 Customization

### Updating CV Data

Edit `src/data/cvData.js`:

```javascript
export const cvData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@domain.com",
    // ...
  },
  // ... update other sections
};
```

### Styling

Colors are defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#14b8a6',  // Main theme color
        // ...
      }
    }
  }
}
```

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Tianyuan Liu**
- Email: tianyuan.liu@csic.es
- GitHub: [@tianyuan-liu](https://github.com/tianyuan-liu)
- Website: [tianyuan-liu.github.io](https://tianyuan-liu.github.io)

## 🙏 Acknowledgments

- Built following best practices from Demo3: Unit Testing & CI/CD
- Inspired by modern academic portfolio designs
- CI/CD pipeline based on GitHub Actions best practices

---

**Last Updated:** October 2025

For questions or issues, please open an issue on GitHub.
