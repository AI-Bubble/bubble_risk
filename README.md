# AI Risk Dashboard

This repository contains a small Next.js + Tailwind UI dashboard. You can host it in one of two easy ways:

1) Recommended — Vercel (free for personal/open-source projects)

   - Connect this GitHub repo to Vercel (https://vercel.com) and Vercel will automatically build and deploy on every push to `main`.
   - Advantages: full Next.js support (server features, fast builds), no extra CI config.

2) GitHub Pages (static) — configured in this repo

   - This repo includes a GitHub Actions workflow that runs `npm run export` (Next static export) and deploys the contents of `out/` to GitHub Pages when you push to `main`.
   - Notes: Next static export has limitations (no server-side rendering/API routes). Use this only if your app is static.

Quick setup (local -> GitHub):

1. Create a new GitHub repository (do not initialize with README).
2. On your machine run:

```powershell
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

3. For GitHub Pages automatic deploy: the included workflow will run on pushes to `main` and publish the `out/` folder.

4. For Vercel: go to https://vercel.com/new and import this repository for full Next.js support.

If you'd like, I can initialize the local git history and create the first commit (I already did), and I can help you with the next step: creating the remote repo and pushing. If you want Vercel set up, I can give the exact steps to connect the repo.
