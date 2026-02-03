# Environment Variables Setup Guide for CrownFit Men

## Overview
This guide explains all environment variables needed for CrownFit Men deployment and local development.

---

## 📋 Required Environment Variables

### Public Variables (Safe to commit)
These variables are prefixed with `NEXT_PUBLIC_` and are visible in the browser.

| Variable | Type | Value | Example |
|----------|------|-------|---------|
| `NEXT_PUBLIC_WHATSAPP_PHONE` | String | WhatsApp phone number for leads | `+92 348 6105960` |
| `NEXT_PUBLIC_EMAIL` | String | Support email address | `trick.9man@gmail.com` |
| `NEXT_PUBLIC_GOOGLE_FORM_URL` | String | Google Form URL for booking | `https://forms.gle/t7LFhGcfW94F3fkb9` |

### Secret Variables (Never commit)
These are stored securely in Vercel/GitHub and should never be pushed to Git.

| Variable | Type | Description |
|----------|------|-------------|
| `VERCEL_TOKEN` | String | Vercel API token for CI/CD |
| `VERCEL_ORG_ID` | String | Vercel Organization ID |
| `VERCEL_PROJECT_ID` | String | Vercel Project ID |

---

## 🚀 Setup Instructions

### Step 1: Local Development (.env.local)

Create `.env.local` in project root (never commit this file):

```bash
# .env.local
NEXT_PUBLIC_WHATSAPP_PHONE=+92 348 6105960
NEXT_PUBLIC_EMAIL=trick.9man@gmail.com
NEXT_PUBLIC_GOOGLE_FORM_URL=https://forms.gle/t7LFhGcfW94F3fkb9
```

Then run:
```bash
npm run dev
```

### Step 2: GitHub Secrets Configuration

Go to: **GitHub Repository → Settings → Secrets and variables → Actions**

Add these secrets:

#### 2a. Vercel Integration Secrets
```
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

#### 2b. Application Secrets
```
NEXT_PUBLIC_WHATSAPP_PHONE = +92 348 6105960
NEXT_PUBLIC_EMAIL = trick.9man@gmail.com
NEXT_PUBLIC_GOOGLE_FORM_URL = https://forms.gle/t7LFhGcfW94F3fkb9
```

### Step 3: Vercel Project Setup

#### 3a. Get Vercel Credentials

1. Go to https://vercel.com/account/tokens
2. Create "Personal Access Token"
3. Copy token → Add as `VERCEL_TOKEN` in GitHub Secrets

4. Go to https://vercel.com/account/team (or your team settings)
5. Copy "Team ID" → Add as `VERCEL_ORG_ID`

6. Go to your Vercel project settings (crownfit-men)
7. Copy "Project ID" → Add as `VERCEL_PROJECT_ID`

#### 3b. Connect GitHub to Vercel

**Option A: Via Vercel Dashboard (Recommended)**
1. Visit https://vercel.com/new
2. Import GitHub repo: `numankhan4/crownfit-men`
3. Vercel automatically detects Next.js
4. Click "Deploy"
5. Set environment variables in Vercel Project Settings

**Option B: Via CLI**
```bash
npm i -g vercel
vercel login
vercel link
vercel env pull
```

### Step 4: Environment Variables in Vercel Dashboard

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add these for each environment (Production, Preview, Development):

```
NEXT_PUBLIC_WHATSAPP_PHONE = +92 348 6105960
NEXT_PUBLIC_EMAIL = trick.9man@gmail.com
NEXT_PUBLIC_GOOGLE_FORM_URL = https://forms.gle/t7LFhGcfW94F3fkb9
```

---

## 🔐 Security Best Practices

✅ **DO:**
- Use GitHub Secrets for sensitive data
- Rotate tokens regularly
- Use environment-specific variables
- Never hardcode secrets in code

❌ **DON'T:**
- Commit `.env.local` (add to `.gitignore`)
- Share tokens in Slack/email
- Use same token for multiple projects
- Log environment variables

---

## 🧪 Testing Environment Variables

### Local Testing
```bash
# Verify environment variables are loaded
npm run dev

# Check that WhatsApp links work with correct phone
# Click CTA buttons on http://localhost:3000
```

### GitHub Actions Testing
```bash
# Check CI/CD logs
# GitHub → Actions tab → Latest workflow run
# Look for environment variable values in logs
```

### Vercel Testing
```bash
# Test production deployment
# Vercel Dashboard → Deployments → Production
# Verify WhatsApp links and form submissions work
```

---

## 🚨 Troubleshooting

### Issue: WhatsApp links not working
**Solution:**
- Verify `NEXT_PUBLIC_WHATSAPP_PHONE` is correct format: `+92 xxx xxxx xxx`
- Check that links use proper encoding: `https://wa.me/923486105960`
- Test: https://wa.me/923486105960

### Issue: Environment variables not loading
**Solution:**
- Restart dev server after updating `.env.local`
- Clear `.next` folder: `rm -rf .next`
- Verify prefix: `NEXT_PUBLIC_` for client-side variables

### Issue: Deployment fails with "VERCEL_TOKEN not found"
**Solution:**
1. Go to GitHub Secrets
2. Add/verify `VERCEL_TOKEN`
3. Re-run workflow from GitHub Actions

### Issue: Preview deployment not triggering
**Solution:**
1. Check `.github/workflows/deploy.yml` exists
2. Verify secrets are set in GitHub
3. Check branch protection rules don't block deployments

---

## 📞 Quick Reference

### WhatsApp Link Format
```
https://wa.me/{PHONE_NUMBER}?text={MESSAGE}
```

Example:
```
https://wa.me/923486105960?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation
```

### Current Contact Info
- **WhatsApp:** +92 348 6105960
- **Email:** trick.9man@gmail.com
- **Google Form:** https://forms.gle/t7LFhGcfW94F3fkb9

---

## 🔄 Deployment Flow

```
┌─────────────────────────────────────────┐
│ 1. Developer pushes to main branch       │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│ 2. GitHub Actions workflow triggers     │
│    - Install dependencies               │
│    - Run linter                         │
│    - Build project                      │
│    - Type check                         │
└────────────────┬────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
   ┌────▼──────┐    ┌────▼──────────┐
   │ PR made?  │    │ Main branch?   │
   └────┬──────┘    └────┬───────────┘
        │                │
   ┌────▼──────────┐ ┌──▼────────────────┐
   │ Deploy Preview│ │Deploy to Production│
   │ (Staging)    │ │  (crownfitmen.com) │
   └──────────────┘ └───────────────────┘
```

---

## 📚 Related Files

- [vercel.json](vercel.json) - Vercel configuration
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml) - CI/CD workflow
- [.env.local.example](.env.local.example) - Example environment file

---

**Last Updated:** February 3, 2026  
**Status:** Production Ready
