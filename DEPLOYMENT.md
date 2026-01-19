# Deployment Guide

This portfolio website is built with React, TypeScript, and Vite, making it perfect for static hosting on GitHub Pages or Cloudflare Pages.

## Prerequisites

- Node.js 18+ installed
- pnpm package manager
- Git

## Build Instructions

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Build for Production**
   ```bash
   pnpm run build
   ```
   
   This creates an optimized production build in the `dist/` directory.

3. **Preview Production Build Locally**
   ```bash
   pnpm run preview
   ```

## Deployment Options

### Option 1: GitHub Pages

1. **Create a GitHub repository** for your portfolio

2. **Install gh-pages package**
   ```bash
   pnpm add -D gh-pages
   ```

3. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "pnpm run build && gh-pages -d dist"
     }
   }
   ```

4. **Update vite.config.ts** (if deploying to a subdirectory)
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   });
   ```

5. **Deploy**
   ```bash
   pnpm run deploy
   ```

6. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root
   - Save

Your site will be available at: `https://yourusername.github.io/your-repo-name/`

### Option 2: Cloudflare Pages

1. **Push your code to GitHub**

2. **Log in to Cloudflare Dashboard**
   - Go to Pages
   - Click "Create a project"
   - Connect to Git

3. **Configure Build Settings**
   - Framework preset: Vite
   - Build command: `pnpm run build`
   - Build output directory: `dist`
   - Root directory: `/`
   - Environment variables: `NODE_VERSION = 18`

4. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site
   - Your site will be available at: `https://your-project.pages.dev`

5. **Custom Domain (Optional)**
   - Go to your project settings
   - Add a custom domain
   - Update DNS records as instructed

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   pnpm add -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project

Your site will be deployed automatically on every push to the main branch.

## Environment Variables

If you need to add environment variables:

1. Create a `.env` file in the root directory
2. Add variables prefixed with `VITE_`:
   ```
   VITE_API_URL=https://api.example.com
   ```
3. Access in code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

## Custom Domain

### GitHub Pages
1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS with your domain provider:
   - A record pointing to GitHub's IPs
   - Or CNAME record pointing to `yourusername.github.io`

### Cloudflare Pages
1. Go to project settings → Custom domains
2. Add your domain
3. Follow DNS configuration instructions

## Continuous Deployment

Both GitHub Pages and Cloudflare Pages support automatic deployments:

- **GitHub Pages**: Automatically deploys when you push to the gh-pages branch
- **Cloudflare Pages**: Automatically deploys on every push to your main branch

## Troubleshooting

### Build fails
- Ensure all dependencies are installed: `pnpm install`
- Check Node.js version: `node --version` (should be 18+)
- Clear cache: `rm -rf node_modules .vite && pnpm install`

### 404 on page refresh (SPA routing)
Add a `public/_redirects` file for Cloudflare Pages:
```
/* /index.html 200
```

Or for GitHub Pages, add a `404.html` that redirects to `index.html`.

### Images not loading
- Ensure images are in the `public/` directory
- Use absolute paths: `/image.jpg` instead of `./image.jpg`
- Check image URLs are correct in the code

## Performance Optimization

The build is already optimized, but you can further improve:

1. **Enable compression** on your hosting platform
2. **Add a CDN** for faster global delivery
3. **Optimize images** before adding them to the project
4. **Enable HTTP/2** on your hosting platform

## Security

- Keep dependencies updated: `pnpm update`
- Use HTTPS (enabled by default on GitHub Pages and Cloudflare Pages)
- Add security headers in hosting platform settings

## Support

For issues or questions:
- Check the [Vite documentation](https://vitejs.dev/)
- Review hosting platform docs (GitHub Pages, Cloudflare Pages, Vercel)
- Open an issue in your repository

---

**Note**: Remember to replace the placeholder resume PDF (`public/resume.pdf`) with your actual resume before deploying!