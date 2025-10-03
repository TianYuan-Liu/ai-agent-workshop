# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Run Tests

```bash
npm test
```

## Common Commands

```bash
# Development
npm run dev              # Start dev server with hot reload
npm run preview          # Preview production build

# Testing
npm test                 # Run tests in watch mode
npm run test:coverage    # Generate coverage report
npm run test:ui          # Open Vitest UI

# Build & Deploy
npm run build            # Build for production
npm run lint             # Check code quality
```

## What's Included?

✅ **9 React Components**: Header, Hero, About, Education, Research, Publications, Projects, Skills, Contact
✅ **40+ Unit Tests**: Comprehensive test coverage with Vitest
✅ **3 CI/CD Workflows**: Automated testing, building, and deployment
✅ **Responsive Design**: Mobile-first with Tailwind CSS
✅ **Production Ready**: Optimized builds with Vite

## Next Steps

1. **Customize CV Data**: Edit `src/data/cvData.js` with your information
2. **Update Colors**: Modify theme in `tailwind.config.js`
3. **Add New Sections**: Create components in `src/components/`
4. **Deploy**: Push to GitHub - automatic deployment to GitHub Pages!

## Deployment Setup

### GitHub Pages

1. Go to repository **Settings → Pages**
2. Set source to **GitHub Actions**
3. Push to `main` branch
4. Visit `https://username.github.io/repo-name`

### Vercel/Netlify

```bash
npm run build
# Upload dist/ folder
```

## Troubleshooting

**Port already in use?**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tests failing?**
```bash
# Clear test cache
npm run test -- --clearCache
```

## Support

- 📖 [Full Documentation](./README.md)
- 🐛 [Report Issues](https://github.com/username/repo/issues)
- 💬 [Discussions](https://github.com/username/repo/discussions)

---

**Happy coding!** 🚀
