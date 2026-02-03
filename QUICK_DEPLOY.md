# 🚀 Quick Start: Enable Auto-Deployment

Follow these steps to enable automatic deployment from GitHub to Vercel.

---

## Step 1: Get Vercel Credentials (5 min)

### 1a: Create Vercel Account
- Go to https://vercel.com
- Sign up with GitHub (or log in if you have account)

### 1b: Get Personal Access Token
1. Visit https://vercel.com/account/tokens
2. Click "Create" → Enter name "GitHub Actions"
3. Copy the token
4. Save it temporarily - you'll need it in Step 3

### 1c: Get Team/Org ID
1. Visit https://vercel.com/account/team (or dashboard)
2. Look for "Team ID" or "User ID" 
3. Copy it - you'll need it in Step 3

### 1d: Get Project ID
1. Visit https://vercel.com/dashboard
2. If crownfit-men project doesn't exist:
   - Click "Add New" → "Project"
   - Import the GitHub repository
   - Click "Deploy"
3. Once project exists, go to Settings tab
4. Look for "Project ID" and copy it

---

## Step 2: Add GitHub Secrets (5 min)

Go to: https://github.com/numankhan4/crownfit-men/settings/secrets/actions

Click "New repository secret" and add these 6 secrets:

| Name | Value |
|------|-------|
| `VERCEL_TOKEN` | Token from Step 1b |
| `VERCEL_ORG_ID` | ID from Step 1c |
| `VERCEL_PROJECT_ID` | ID from Step 1d |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | +92 348 6105960 |
| `NEXT_PUBLIC_EMAIL` | trick.9man@gmail.com |
| `NEXT_PUBLIC_GOOGLE_FORM_URL` | https://forms.gle/t7LFhGcfW94F3fkb9 |

---

## Step 3: Set Environment Variables in Vercel (5 min)

1. Go to https://vercel.com/dashboard
2. Click "crownfit-men" project
3. Go to "Settings" tab → "Environment Variables"
4. Add these 3 variables (for all environments):

```
NEXT_PUBLIC_WHATSAPP_PHONE = +92 348 6105960
NEXT_PUBLIC_EMAIL = trick.9man@gmail.com
NEXT_PUBLIC_GOOGLE_FORM_URL = https://forms.gle/t7LFhGcfW94F3fkb9
```

---

## Step 4: Test the Pipeline (5 min)

### Test: Push to GitHub
```bash
# Make a small change
echo "# Deployment test" >> README.md

# Commit and push
git add README.md
git commit -m "test: verify auto-deployment"
git push origin main
```

### Verify: Check GitHub Actions
1. Go to https://github.com/numankhan4/crownfit-men/actions
2. See workflow running
3. Wait for ✅ completion

### Verify: Check Vercel Deployment
1. Go to https://vercel.com/dashboard/crownfit-men
2. See new deployment in "Deployments" list
3. Click to verify it says "✓ Ready"

### Test: Visit Live Site
1. Click "Visit" button on deployment
2. Verify site loads correctly
3. Test WhatsApp link: Click any "Get Started" button
4. Should open WhatsApp with phone number

---

## ✅ Done! 

From now on, every time you:
1. `git push origin main`

Automatically:
1. ✅ GitHub runs build & tests
2. ✅ Vercel deploys to production
3. ✅ Your site is live within 2-3 minutes

---

## 📞 Need Help?

Check these guides in the repo:
- **[ENV_SETUP_GUIDE.md](ENV_SETUP_GUIDE.md)** - Detailed env var explanation
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Complete setup steps
- **[vercel.json](vercel.json)** - Vercel configuration
- **[.github/workflows/deploy.yml](.github/workflows/deploy.yml)** - CI/CD pipeline

---

**Estimated Time:** 20 minutes  
**Difficulty:** Easy  
**Status:** Ready to deploy! 🎉
