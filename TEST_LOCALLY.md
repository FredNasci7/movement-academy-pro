# Test Build Locally - Quick Guide

## Step 1: Install npm (if not already installed)

You need npm to build and test the project. Install it with:

```bash
sudo apt install npm
```

## Step 2: Install Dependencies

Navigate to the project directory and install dependencies:

```bash
cd /home/pmandrade/Desktop/ma_site/movement-academy-pro
npm install
```

## Step 3: Build the Project

Build the production version:

```bash
npm run build
```

This creates a `dist` folder with all the production files.

## Step 4: Preview the Build Locally

Test the production build locally using Vite's preview server:

```bash
npm run preview
```

This will start a local server (usually at `http://localhost:4173`) where you can test your production build.

## Step 5: Test All Routes

Once the preview server is running, test all your routes:
- http://localhost:4173/
- http://localhost:4173/home
- http://localhost:4173/sobre
- http://localhost:4173/servicos
- http://localhost:4173/galeria
- http://localhost:4173/precos
- http://localhost:4173/contacto
- http://localhost:4173/aula-experimental

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview

# Development server (for development)
npm run dev
```

## Troubleshooting

If you get errors:
- Make sure npm is installed: `npm --version`
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version: `node --version` (should be 18+)

