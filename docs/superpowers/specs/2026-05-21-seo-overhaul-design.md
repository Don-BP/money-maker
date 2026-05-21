# SEO Overhaul Design — DokiDokiTools
Date: 2026-05-21

## Goal
Maximize organic search traffic to DokiDokiTools (dokidokitools.vercel.app) to generate passive AdSense RPM income. Strategy: rank for low-competition evergreen queries by fixing technical SEO issues and adding strong on-page signals to every page.

## Scope
All pages: Next.js homepage + layout, and all 6 static HTML tool pages in `/public/tools/`.

---

## Section 1: Technical Fixes

### 1.1 Garbled Title Characters
- **Problem:** All 6 tool page `<title>` tags contain `窶・` (UTF-8 corruption of `—`).
- **Fix:** Replace with clean ASCII ` - ` or `—` (HTML entity).
- **Files:** `public/tools/*/index.html` (all 6).

### 1.2 Missing OG Image
- **Problem:** `layout.tsx` and tool pages reference `/og-image.png` but the file doesn't exist in `/public`, causing 404s for crawlers and broken social previews.
- **Fix:** Create `public/og-image.png` (1200×630px) using a one-time Node.js generation script (`scripts/generate-og.mjs`) that uses the `canvas` npm package to render the branded purple background with the DokiDokiTools wordmark. Script is run once, output committed to `/public`. No runtime dependency.

### 1.3 Homepage H1
- **Problem:** The hero heading "DokiDokiTools" is a `<div>`, not an `<h1>`. Crawlers don't see it as the page's primary heading.
- **Fix:** Change the hero heading `<div>` to `<h1>` in `src/app/page.tsx`.

### 1.4 Sitemap lastModified Hardcoded
- **Problem:** `src/app/sitemap.ts` has `const lastMod = new Date("2026-04-28")` — signals stale content to Google.
- **Fix:** Change to `new Date()` so it reflects the current date on each build.

### 1.5 Google Search Console Verification
- **Problem:** `layout.tsx` has `google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE"` as a placeholder.
- **Fix:** Two HTML verification files already exist in `/public` (`google90c442924ed7ae94.html`, `googlef87c2449fcdca6fc.html`). Remove the broken placeholder from `layout.tsx` metadata and rely on the file-based verification method instead.

### 1.6 OG Title Spacing
- **Problem:** OG/Twitter titles in `layout.tsx` have `—Free` with no space (missing space after em-dash).
- **Fix:** Correct to `— Free`.

---

## Section 2: On-Page SEO — All 6 Tool Pages

Applied to: `username-generator`, `word-finder`, `recipe-scaler`, `romaji-to-kana`, `ip-checker`, `word-search`.

### 2.1 Keyword-Targeted Title Tags
Format: `[Primary Keyword] — Free Online Tool | DokiDokiTools`

| Tool | Target Title |
|------|-------------|
| Username Generator | `Free Username Generator — Create Unique Usernames Online \| DokiDokiTools` |
| Word Finder | `Free Word Finder — Synonyms, Antonyms & Rhymes Online \| DokiDokiTools` |
| Recipe Scaler | `Free Recipe Scaler — Scale Any Recipe Up or Down \| DokiDokiTools` |
| Romaji to Kana | `Romaji to Hiragana & Katakana Converter — Free Online \| DokiDokiTools` |
| IP Checker | `What Is My IP Address — Free Network Inspector Online \| DokiDokiTools` |
| Word Search Maker | `Free Word Search Maker — Create & Print Puzzles Online \| DokiDokiTools` |

### 2.2 Meta Descriptions
150–160 chars, keyword-rich, with a CTA. Example for Username Generator:
> Generate unique, creative usernames instantly for gaming, Discord, Reddit, and social media. Choose gaming, fantasy, or minimal style. Free, no login required.

### 2.3 H1 Tags
Each tool page gets exactly one `<h1>` matching the primary keyword. The existing tool name headings will be audited and the most prominent one promoted to `<h1>` if not already set correctly.

### 2.4 Content Section
Each tool page gets a 200–300 word content block appended before `</body>`. Structure:
- `<h2>` About [Tool Name]
- 2–3 paragraphs covering: what it does, who it's for, why it's useful
- Natural keyword integration (primary + 3–4 related terms)
- `<h2>` How to Use [Tool Name] (brief steps)
- `<h2>` Frequently Asked Questions (2–3 FAQs)

### 2.5 FAQPage Schema (JSON-LD)
Each tool page gets or has its FAQPage schema updated to match the new FAQ content. This enables rich result FAQ dropdowns in Google Search, improving CTR.

### 2.6 BreadcrumbList Schema
Add to every tool page:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dokidokitools.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "[Tool Name]", "item": "[Tool URL]" }
  ]
}
```

### 2.7 Internal Links
Each tool page footer adds text links to the homepage and 2 other tools, e.g.:
> "More free tools: [Recipe Scaler] · [Word Finder] · [Back to DokiDokiTools]"

---

## Section 3: Homepage SEO Improvements

### 3.1 H1 Fix
Change hero `<div>` to `<h1>` (covered in Section 1.3).

### 3.2 WebSite Schema with SearchAction
Add to homepage JSON-LD:
```json
{
  "@type": "WebSite",
  "name": "DokiDokiTools",
  "url": "https://dokidokitools.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://dokidokitools.vercel.app/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 3.3 Expanded Keywords in layout.tsx
Add missing high-value terms:
- `word search maker`, `word search generator`, `romaji converter`, `romaji to hiragana`, `ip address lookup`, `what is my ip`, `recipe converter`, `recipe multiplier`

### 3.4 Canonical Consistency
Audit that every canonical tag in tool pages matches exactly what's in `sitemap.ts` (including the `/index.html` suffix) to prevent duplicate content signals.

---

## What's Out of Scope
- Custom domain setup (not yet purchased)
- Converting tool pages to Next.js routes (future work)
- Blog or content hub
- Backlink strategy

---

## Success Criteria
- Zero broken OG image references
- Zero garbled characters in any title tag
- Every page has exactly one `<h1>`
- Every tool page has FAQPage + BreadcrumbList schema
- Every tool page has 200+ words of keyword-targeted content
- Sitemap reflects current build date
- GSC verification relies on file method, no placeholder in code
