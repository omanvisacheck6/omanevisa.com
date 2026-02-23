# Deployment Guide - Oman e-Visa Portal

This project is ready to deploy to multiple hosting platforms. Choose the option that works best for you.

## Quick Deployment Options

### 1. **Netlify** (Recommended for Static Sites)
- **Cost**: Free tier available
- **Setup Time**: 5 minutes
- **Features**: Automatic deployments from GitHub, custom domains, SSL included
- **Guide**: See [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md)

### 2. **Vercel** (Optimized for React/Next.js)
- **Cost**: Free tier available
- **Setup Time**: 5 minutes
- **Features**: Automatic deployments, serverless functions, analytics
- **Steps**:
  1. Push code to GitHub
  2. Go to [vercel.com](https://vercel.com)
  3. Click "New Project" and import your GitHub repository
  4. Vercel will auto-detect the build settings
  5. Click "Deploy"

### 3. **GitHub Pages** (Free)
- **Cost**: Free
- **Setup Time**: 10 minutes
- **Features**: Built-in GitHub integration, free domain
- **Steps**:
  1. Update `vite.config.ts` to set `base: '/oman-evisa-clone/'`
  2. Run `pnpm build`
  3. Push the `dist` folder to GitHub Pages branch
  4. Enable GitHub Pages in repository settings

### 4. **Railway** (Full Stack)
- **Cost**: Free tier + pay-as-you-go
- **Setup Time**: 10 minutes
- **Features**: Easy deployment, environment variables, custom domains
- **Steps**:
  1. Go to [railway.app](https://railway.app)
  2. Create new project from GitHub
  3. Select your repository
  4. Railway will auto-detect and deploy

### 5. **Render** (Free Tier)
- **Cost**: Free tier available
- **Setup Time**: 10 minutes
- **Features**: Auto-deploy from GitHub, SSL included
- **Steps**:
  1. Go to [render.com](https://render.com)
  2. Click "New +" and select "Web Service"
  3. Connect your GitHub repository
  4. Set build command: `pnpm install && pnpm build`
  5. Set start command: `pnpm start`

## Before Deploying

1. **Ensure all files are committed to Git**
   ```bash
   cd /home/ubuntu/oman-evisa-clone
   git add .
   git commit -m "Ready for deployment"
   ```

2. **Test the build locally**
   ```bash
   pnpm build
   pnpm preview
   ```

3. **Export to GitHub** (if not already done)
   - Use the Manus Management UI: Settings → GitHub → Export to GitHub
   - Or push manually to your GitHub repository

## Environment Variables

For Netlify/Vercel/Railway deployments, you may need to set:

- `VITE_APP_TITLE` - Application title
- `VITE_ANALYTICS_ENDPOINT` - Analytics service endpoint (optional)
- `VITE_OAUTH_PORTAL_URL` - OAuth portal URL (optional)

These are already configured in the Manus environment and will work automatically.

## Custom Domain

All platforms support custom domains:
- **Netlify**: Site settings → Domain management
- **Vercel**: Project settings → Domains
- **GitHub Pages**: Repository settings → Pages
- **Railway**: Environment → Custom Domain
- **Render**: Environment → Custom Domain

## Recommended: Netlify

For this static React site, **Netlify is recommended** because:
- ✅ Optimized for static sites
- ✅ Zero configuration needed (uses `netlify.toml`)
- ✅ Excellent free tier
- ✅ Fast global CDN
- ✅ Easy custom domain setup
- ✅ Automatic HTTPS

See [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md) for detailed instructions.

## Support

- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **Render Docs**: https://render.com/docs
