# Connect GitHub to Vercel - Quick Guide

## 🎯 What This Does
After completing this, **every time you push to GitHub, Vercel automatically deploys your changes** (within 2-3 minutes). No manual steps needed!

---

## 📋 Step-by-Step Instructions

### Step 1: Go to Your Vercel Project
1. Open https://vercel.com/numans-projects-fa7da6b8/crownfit-men
2. Look for the **Settings** tab at the top
3. Click on **Settings**

### Step 2: Find Git Integration
1. In Settings, look for the left sidebar
2. Find **"Git Integration"** or **"Connected Services"**
3. Click it

### Step 3: Connect GitHub Repository
1. Click **"Connect Git Repository"** or **"Connect"**
2. A popup will appear asking you to authorize Vercel with GitHub
3. Click **"Authorize Vercel"**
4. Log in with your GitHub account if prompted
5. Vercel will ask for permission to access your repositories
6. Click **"Authorize"**

### Step 4: Select Your Repository
1. After authorization, you'll see a repository list
2. Search for or scroll to find: **`numankhan4/crownfit-men`**
3. Click **"Select"** next to it

### Step 5: Configure Settings
1. **Root Directory:** Leave as `.` (default)
2. **Framework Preset:** Should auto-detect as "Next.js"
3. **Build Command:** `npm run build` (should be pre-filled)
4. **Output Directory:** `.next` (should be pre-filled)
5. **Install Command:** `npm install` (should be pre-filled)

### Step 6: Set Environment Variables
1. Scroll down to **"Environment Variables"**
2. Add these 3 variables:

```
NEXT_PUBLIC_WHATSAPP_PHONE = +92 348 6105960
NEXT_PUBLIC_EMAIL = trick.9man@gmail.com
NEXT_PUBLIC_GOOGLE_FORM_URL = https://forms.gle/t7LFhGcfW94F3fkb9
```

3. For each variable:
   - Enter the name
   - Enter the value
   - Select environments: **Production, Preview, Development**
   - Click **"Add"**

### Step 7: Choose Production Branch
1. Look for **"Production Branch"** setting
2. Select: **`main`**

### Step 8: Enable Automatic Deployments
1. Find the setting: **"Automatically deploy commits pushed to"**
2. Make sure **`main`** is selected
3. Make sure it's **enabled** (toggle switch ON)

### Step 9: Save Configuration
1. Scroll to the bottom
2. Click **"Save"** or **"Deploy"** (if shown)

---

## ✅ Verification

### Check It Worked:
1. Go to your repository: https://github.com/numankhan4/crownfit-men
2. Make a small test change (e.g., edit README.md)
3. Commit and push:
```bash
git add README.md
git commit -m "test: verify github integration"
git push origin main
```

4. Watch Vercel automatically deploy:
   - Go to https://vercel.com/numans-projects-fa7da6b8/crownfit-men
   - Click **"Deployments"** tab
   - You should see a new deployment starting within 10 seconds
   - Wait for it to show **"✓ Ready"** (takes 2-3 minutes)

5. Visit your live site:
   - Click the deployment URL
   - Verify your changes are live!

---

## 🔄 From Now On

Every time you:
```bash
git push origin main
```

Vercel automatically:
1. Detects the push
2. Pulls latest code
3. Runs build (`npm run build`)
4. Runs tests
5. Deploys to production
6. Updates https://crownfit-men.vercel.app (or your custom domain)

**No manual steps needed!** ✨

---

## 🆘 Troubleshooting

### Issue: Deployment not triggering after push
**Solution:**
- Wait 30 seconds (GitHub needs time to register the push)
- Refresh Vercel dashboard (F5)
- Check GitHub Actions tab - is it running?

### Issue: Deployment fails with errors
**Solution:**
- Click the failed deployment
- Read the build logs
- Common fixes:
  - Missing environment variables → Add them in Vercel settings
  - TypeScript errors → Fix in code, push again
  - Missing dependencies → Add to package.json

### Issue: Environment variables not loading
**Solution:**
- Verify they're added in Vercel Settings → Environment Variables
- Check the variable names match exactly
- Make sure `NEXT_PUBLIC_` prefix is there
- Redeploy after adding variables

### Issue: Still shows old version after deployment
**Solution:**
- Hard refresh browser: `Ctrl + Shift + R`
- Clear browser cache
- Wait 30 seconds for CDN to update
- Check deployment shows "✓ Ready" status

---

## 📊 Deployment Status

Once connected, you can always check:

| Where | What You See |
|-------|-------------|
| Vercel Dashboard | Live deployment status |
| GitHub Actions | Build logs and test results |
| Vercel Deployments | History of all deploys |
| Browser Console | Real-time errors (if any) |

---

## 🎉 Success!

Your GitHub → Vercel pipeline is now connected!

**From now on:**
- Write code locally
- `git commit` and `git push`
- ✅ Site automatically deploys
- ✅ Changes live in 2-3 minutes
- ✅ No manual deployment needed

---

**Time Estimate:** 5-10 minutes  
**Difficulty:** Very Easy  
**Result:** Fully automated deployments! 🚀
