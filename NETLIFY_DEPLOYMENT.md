# Deploying Oman e-Visa Portal to Netlify

This guide explains how to deploy the Oman e-Visa Portal to Netlify.

## Prerequisites

1. **GitHub Account** - You'll need to push your code to GitHub first
2. **Netlify Account** - Sign up at [netlify.com](https://netlify.com) (free tier available)
3. **Git installed locally** - To push code to GitHub

## Step 1: Export to GitHub

The code is already configured for GitHub export. You can export it directly from the Manus Management UI:

1. Go to **Settings** → **GitHub** in the Management UI
2. Click **Export to GitHub**
3. Select your GitHub account and repository name
4. The code will be pushed to your new GitHub repository

Alternatively, if you have the code locally:

```bash
cd /home/ubuntu/oman-evisa-clone
git remote add origin https://github.com/YOUR_USERNAME/oman-evisa-clone.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

### Option A: Using Netlify UI (Recommended)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Select **GitHub** as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your `oman-evisa-clone` repository
6. Netlify will auto-detect the build settings (from `netlify.toml`)
7. Click **Deploy site**

### Option B: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy the project
cd /home/ubuntu/oman-evisa-clone
netlify deploy --prod
```

## Step 3: Configure Environment Variables (Optional)

If you need environment variables on Netlify:

1. Go to your Netlify site dashboard
2. Click **Site settings** → **Build & deploy** → **Environment**
3. Add your environment variables:
   - `VITE_APP_TITLE` - Your app title
   - `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint (if using)
   - Any other API keys or configuration values

## Build Configuration

The `netlify.toml` file handles all build configuration:

- **Build command**: `pnpm install && pnpm build`
- **Publish directory**: `dist/public`
- **Node version**: Netlify will use the latest LTS by default

## Redirects

The `netlify.toml` includes a redirect rule for client-side routing:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This ensures that all routes are handled by React Router (Wouter).

## Troubleshooting

### Build Fails with "pnpm not found"

Netlify may not have `pnpm` installed by default. Add this to `netlify.toml`:

```toml
[build.environment]
  NPM_FLAGS = "--legacy-peer-deps"
```

Or use `npm` instead of `pnpm` in the build command.

### Images Not Loading

If images from CDN URLs aren't loading:
1. Check that the CDN URLs are publicly accessible
2. Verify CORS headers are set correctly on the CDN
3. Use relative paths for local assets in `client/public/`

### Deployment Timeout

If the build times out:
1. Increase the build timeout in Netlify site settings
2. Optimize dependencies (remove unused packages)
3. Check for large asset files that need to be optimized

## Custom Domain

To add a custom domain:

1. Go to your Netlify site dashboard
2. Click **Domain settings**
3. Click **Add custom domain**
4. Enter your domain name
5. Follow the DNS configuration instructions

## Continuous Deployment

Once connected to GitHub, Netlify will automatically deploy whenever you:
- Push to the `main` branch (production)
- Create a pull request (preview deployment)

## Support

For more information, visit:
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify CLI Documentation](https://cli.netlify.com)
- [React/Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)
