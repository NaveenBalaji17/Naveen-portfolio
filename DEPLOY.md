# Deployment options

This project is a static Vite React site. Here are a few simple deployment options.

- Netlify (recommended):
  - In the Netlify dashboard, create a new site and connect your GitHub repo, or drag-and-drop the `dist` folder.
  - Build command: `npm run build`
  - Publish directory: `dist`
  - A `netlify.toml` file is included.

- Vercel (easy, automatic):
  - Install Vercel CLI or connect your GitHub repo in the Vercel dashboard.
  - Default build command: `npm run build` and output directory `dist` (Vercel detects this automatically for Vite projects).

- GitHub Pages (CI deploy):
  - The repo contains a GitHub Actions workflow `.github/workflows/deploy.yml` that builds and deploys the `dist` folder to GitHub Pages when you push to `main`.

- Manual (local to remote):
  - Build locally: `npm ci && npm run build`
  - Upload the `dist` folder to any static host (S3, Netlify drag-and-drop, Surge, etc.).

Local preview:

```powershell
Push-Location 'D:\PORTFOLIO\naveen-s-portfolio-main (1)\naveen-s-portfolio-main'
npm run preview
```

If you'd like, I can:

- Connect & set up a Netlify site for you (you'll need to provide access token or authorize Netlify),
- Or set up deployment to Vercel/GitHub Pages and push changes (requires repo remote and permissions).
