# ZenithTools Monetization — Full Launch Design

**Date:** 2026-04-28
**Status:** Approved
**Goal:** Deploy ZenithTools, add a Word Search Maker tool, and set up Google Display Ads monetization following the RPM-based utility site playbook.

---

## Overview

ZenithTools is a free browser-based utility site with 5 tools (username generator, synonym finder, recipe scaler, romaji converter, IP checker). A 6th tool — Word Search Maker — will be built and added before launch. The monetization model is Google Display Ads (AdSense) — paid per impression at an RPM of ~$3–$12 per 1,000 page views. Traffic source is organic SEO.

The site is fully built but not yet deployed. All SEO metadata, JSON-LD structured data, legal pages, sitemap, and robots.txt are already in place. Two gaps block monetization: no live URL and no AdSense.

---

## Step 0 — Build the Word Search Maker Tool

**File:** `public/tools/word-search/index.html` (static HTML, same pattern as all other tools)

### Features

**Word list input**
- Text input field + "+" button to add a word to the list
- Added words appear as removable tags/chips below the input
- Minimum 1 word required to generate

**Generation options** (styled as toggle switches or checkboxes matching the theme)
- Allow horizontal words (left→right)
- Allow vertical words (top→bottom)
- Allow diagonal words (4 diagonal directions)
- Allow words placed backward (reverses any of the above directions)
- Grid size: row count selector + column count selector (range: 5–20, default 10×10)

**Puzzle generation** (client-side JavaScript, no server)
- Place each word randomly in the grid using only the allowed directions
- If a word can't be placed after N attempts (conflicts), skip it and warn the user
- Fill all remaining empty cells with random uppercase letters

**Puzzle display**
- Rendered as an HTML `<table>` styled to match the theme (purple/lavender panels, rounded, game-UI aesthetic from `Themes/wordsearch.jpg`)
- Word list shown beside or below the grid (the words to find)
- "Generate" button re-randomizes the puzzle with the same word list

**PDF export**
- Uses jsPDF (loaded from CDN, no build step needed)
- "Export PDF" button renders the grid and word list into a clean printable A4 PDF and triggers a download
- PDF is plain black-and-white for printer friendliness (no colored backgrounds)

### Visual Theme
Match the cartoon game-UI style from `Themes/wordsearch.jpg`:
- Background: soft lavender/purple (`#C8B8E8` range)
- Panels: rounded rectangles with a slightly darker purple border and subtle drop shadow
- Buttons: chunky, pill-shaped, with a bright color (green for primary actions, orange/yellow for secondary)
- Typography: bold, rounded font (Fredoka or Nunito — already loaded in the project)
- Decorative stars/gems can be used as accents in the header

### Homepage card
- Add "Word Search Maker" as the 6th tool card on `src/app/page.tsx`, replacing the "Coming Soon" placeholder
- Icon: 🔤, badge: "06"
- Path: `/tools/word-search/index.html`

### SEO
- Full `<head>` meta tags, OG tags, and JSON-LD `WebApplication` + `FAQPage` schema (same pattern as other tools)
- Title: "Free Word Search Maker — Print or Export to PDF | ZenithTools"

---

## Step 1 — Deploy to Vercel

- Push repo to GitHub (if not already)
- Create new Vercel project linked to the GitHub repo
- Vercel auto-detects Next.js — no config changes needed
- Live URL: `https://zenithtools.vercel.app`
- The `SITE_URL` constant in `src/app/layout.tsx` and `src/app/sitemap.ts` already targets this URL — no code changes needed for deploy

---

## Step 2 — Fix the Sitemap

**File:** `src/app/sitemap.ts`

The sitemap currently lists only the homepage and 3 legal pages. All 6 tool pages must be added so Google indexes them. Tool URLs to add:

| Tool | URL |
|------|-----|
| Username Generator | `/tools/username-generator/index.html` |
| Word Finder | `/tools/word-finder/index.html` |
| Recipe Scaler | `/tools/recipe-scaler/index.html` |
| Romaji to Kana | `/tools/romaji-to-kana/index.html` |
| IP Checker | `/tools/ip-checker/index.html` |
| Word Search Maker | `/tools/word-search/index.html` |

Each tool entry: `changeFrequency: "monthly"`, `priority: 0.8`.

---

## Step 3 — Google Search Console

1. Go to Google Search Console → Add property → enter `https://zenithtools.vercel.app`
2. Choose "HTML tag" verification method → copy the `content` value
3. Replace `"REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE"` in `src/app/layout.tsx` line 89 with the real value
4. Deploy the change to Vercel
5. Click Verify in Search Console
6. Submit sitemap: `https://zenithtools.vercel.app/sitemap.xml`
7. Use "URL Inspection" to request indexing for the homepage and each tool URL

---

## Step 4 — Google Analytics 4

Add GA4 tracking to both the Next.js layout and each static tool HTML file.

**In `src/app/layout.tsx`:** Add Next.js `<Script>` tags for the GA4 gtag.js snippet using the `strategy="afterInteractive"` prop.

**In each of the 6 tool HTML files** (`public/tools/*/index.html`): Add the same GA4 gtag.js snippet directly in the `<head>`. This is necessary because the tools are static HTML files served directly — they don't go through the Next.js layout.

GA4 Measurement ID placeholder: `G-XXXXXXXXXX` (replaced with real ID once GA4 property is created).

---

## Step 5 — Apply for Google AdSense

- Go to Google AdSense → add site → enter `https://zenithtools.vercel.app`
- Google reviews the site (1–14 days)
- Approval requirements already met: real content, working tools, privacy/terms/cookies pages present

---

## Step 6 — Add AdSense Code

Once approved, Google provides:

**A. Site-level auto-ads script** — add to `src/app/layout.tsx` `<head>` and to each tool HTML `<head>`. Enables automatic ad placement on the Next.js homepage.

**B. Manual ad units** — placed in each of the 6 tool HTML files at two positions:
- **Above the tool** — visible immediately on page load (highest RPM position)
- **Below the results** — shown after the user gets value (high engagement position)

AdSense publisher ID placeholder: `ca-pub-XXXXXXXXXXXXXXXXX` (replaced with real ID after approval).

---

## Architecture Notes

- The homepage is a Next.js page — scripts go in `src/app/layout.tsx`
- The 6 tools are static HTML files in `public/tools/` — scripts must be added directly to each file's `<head>`
- No backend changes required — everything is client-side

---

## Success Criteria

- [ ] Site live at `https://zenithtools.vercel.app`
- [ ] Word Search Maker tool built and working at `/tools/word-search/index.html`
- [ ] All 6 tool URLs in sitemap and indexed by Google Search Console
- [ ] GA4 tracking firing on homepage and all 6 tool pages
- [ ] AdSense approved and ad units rendering on all tool pages
