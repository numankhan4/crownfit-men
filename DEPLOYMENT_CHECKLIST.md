# CrownFit Men - Deployment Setup Checklist

Complete this checklist to fully enable auto-deployment on Vercel with CI/CD.

---

## ✅ Phase 1: Local Setup (5 minutes)

- [ ] Clone repository locally
- [ ] Run `npm install`
- [ ] Copy `.env.local.example` to `.env.local`
- [ ] Update `.env.local` with actual values
- [ ] Verify `npm run dev` works on http://localhost:3000
- [ ] Verify `npm run build` succeeds

---

## ✅ Phase 2: GitHub Setup (10 minutes)

### 2a: Verify Git Configuration
- [ ] Confirm remote: `git remote -v` → should show `numankhan4/crownfit-men`
- [ ] Confirm branch: `git branch -a` → should show `main` as current
- [ ] Confirm no uncommitted changes: `git status`

### 2b: Add GitHub Secrets
Go to: **GitHub → crownfit-men → Settings → Secrets and variables → Actions**

Add these new repository secrets:

| Secret Name | Value | How to get |
|-------------|-------|-----------|
| `VERCEL_TOKEN` | Your personal access token | https://vercel.com/account/tokens |
| `VERCEL_ORG_ID` | Your team/user ID | https://vercel.com/account/team (Team ID) |
| `VERCEL_PROJECT_ID` | Project ID from Vercel | See Step 3 below |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | +92 348 6105960 | Current value |
| `NEXT_PUBLIC_EMAIL` | trick.9man@gmail.com | Current value |
| `NEXT_PUBLIC_GOOGLE_FORM_URL` | https://forms.gle/t7LFhGcfW94F3fkb9 | Current value |

**Steps to add secrets:**
1. Click "New repository secret"
2. Enter "Name" (from table above)
3. Enter "Value"
4. Click "Add secret"
5. Repeat for all 6 secrets

---

## ✅ Phase 3: Vercel Setup (15 minutes)

### 3a: Create Vercel Account (if not already done)
- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub
- [ ] Authorize GitHub integration

### 3b: Get Vercel Credentials

**For VERCEL_TOKEN:**
1. Go to https://vercel.com/account/tokens
2. Click "Create" button
3. Enter token name: "GitHub Actions"
4. Select scope: "Full Account"
5. Copy the token
6. Paste into GitHub Secret `VERCEL_TOKEN`

**For VERCEL_ORG_ID:**
1. Go to https://vercel.com/account/team (or team settings if using teams)
2. Copy the "ID" value shown at the top
3. Paste into GitHub Secret `VERCEL_ORG_ID`

### 3c: Create/Link Vercel Project

**Option A: Automatic (Recommended)**
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select GitHub
4. Find and click on "crownfit-men" repository
5. Vercel automatically detects Next.js
6. Click "Deploy"
7. Copy Project ID from settings (see Step 3d)

**Option B: Via CLI**
```bash
npm i -g vercel
vercel login
cd d:\Startup\crownfit-men
vercel link
# Answer prompts to link to existing project
```

### 3d: Get VERCEL_PROJECT_ID
1. Go to https://vercel.com/dashboard
2. Click on "crownfit-men" project
3. Go to "Settings" tab
4. Look for "Project ID"
5. Copy and paste into GitHub Secret `VERCEL_PROJECT_ID`

### 3e: Set Environment Variables in Vercel
1. In Vercel project → Settings → Environment Variables
2. Add these variables (for all environments: Production, Preview, Development):

```
NEXT_PUBLIC_WHATSAPP_PHONE = +92 348 6105960
NEXT_PUBLIC_EMAIL = trick.9man@gmail.com
NEXT_PUBLIC_GOOGLE_FORM_URL = https://forms.gle/t7LFhGcfW94F3fkb9
```

---

## ✅ Phase 4: Test Deployment Pipeline (10 minutes)

### 4a: Test GitHub Actions Workflow
1. Go to GitHub → crownfit-men → Actions tab
2. You should see "Deploy to Vercel" workflow listed
3. Click on it to view recent runs

### 4b: Trigger Test Deployment
1. Make a small change (e.g., update `.env.local` comment)
2. Commit: `git add . && git commit -m "test: trigger deployment"`
3. Push: `git push origin main`
4. Watch GitHub Actions:
   - Go to Actions tab
   - Click latest "Deploy to Vercel" workflow
   - Watch the progress:
     - ✅ Build and Test job
     - ✅ Deploy Production job (since pushing to main)
5. Once complete, check Vercel deployment URL

### 4c: Test Production Deployment
1. Copy production URL from Vercel
2. Visit the site
3. Test critical functionality:
   - [ ] Navbar loads correctly
   - [ ] Hero section displays
   - [ ] Services section visible
   - [ ] Pricing cards load
   - [ ] WhatsApp links work: Click "Get Started" button
   - [ ] Booking page loads: Click "Book Now" in navbar
   - [ ] Booking links work: Try both WhatsApp and Google Form buttons

---

## ✅ Phase 5: Configure Custom Domain (Optional, 5 minutes)

### 5a: Add Domain to Vercel
1. Vercel dashboard → Project → Settings → Domains
2. Enter your domain: `crownfitmen.com`
3. Follow DNS setup instructions

### 5b: Update DNS Records
Contact your domain registrar (GoDaddy, Namecheap, etc.) and add:
- CNAME record pointing to Vercel
- Follow specific instructions provided by Vercel

---

## ✅ Phase 6: Verify Auto-Deployment (Ongoing)

Test that auto-deployment works on every push:

1. Make a code change
2. Commit and push to main: `git push origin main`
3. GitHub Actions should automatically:
   - Build the project
   - Run tests
   - Deploy to Vercel
4. Vercel should show green deployment status
5. Visit production URL and verify changes live

---

## 📊 Current Status

| Item | Status | Notes |
|------|--------|-------|
| `.github/workflows/deploy.yml` | ✅ Created | CI/CD pipeline ready |
| `vercel.json` | ✅ Created | Vercel configuration ready |
| `.env.local.example` | ✅ Created | Environment template ready |
| `ENV_SETUP_GUIDE.md` | ✅ Created | Setup documentation complete |
| Vercel Token | ⏳ Needed | Add to GitHub Secrets |
| Vercel Org ID | ⏳ Needed | Add to GitHub Secrets |
| Vercel Project ID | ⏳ Needed | Add to GitHub Secrets |
| GitHub Secrets | ⏳ Needed | Set in repo settings |
| Vercel Project | ⏳ Needed | Link GitHub repo |
| Production Deployment | ⏳ Pending | Will auto-deploy after setup |

---

## 🚨 Common Issues & Solutions

### Issue: "VERCEL_TOKEN not found" in GitHub Actions
**Solution:** Add `VERCEL_TOKEN` to GitHub Secrets (Settings → Secrets → New secret)

### Issue: Workflow runs but doesn't deploy
**Solution:** Check if `VERCEL_PROJECT_ID` and `VERCEL_ORG_ID` are correct

### Issue: Deployment succeeds but changes don't appear
**Solution:** Clear browser cache and hard refresh (Ctrl+Shift+R)

### Issue: WhatsApp links not working in production
**Solution:** Verify `NEXT_PUBLIC_WHATSAPP_PHONE` is correctly set in Vercel environment variables

---

## 📞 Support

For issues, check:
1. GitHub Actions logs: GitHub → Actions → Latest workflow
2. Vercel deployment logs: Vercel dashboard → Deployments
3. Browser console: F12 → Console tab for errors

---

## ✨ Next Steps After Deployment

Once everything is deployed:

1. **Monitor Analytics:**
   - Set up Google Analytics
   - Track conversions (WhatsApp clicks, form submissions)

2. **Optimize Performance:**
   - Run Lighthouse audit
   - Check Core Web Vitals

3. **Enable Additional Features:**
   - Email notifications for form submissions
   - WhatsApp webhook for automated responses
   - CMS integration (Sanity) - Phase 2

4. **Maintain & Update:**
   - Regular security updates
   - Monitor error logs
   - Update content as needed

---

**Setup Started:** February 3, 2026  
**Current Phase:** Implementation  
**Estimated Total Time:** 40 minutes

Good luck! 🚀
