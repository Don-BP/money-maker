# SEO Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all broken SEO signals and add keyword-targeted on-page content to every page of DokiDokiTools so it ranks for low-competition evergreen queries and generates AdSense RPM income.

**Architecture:** All changes are surgical edits to existing files — no new routes, no refactors. Next.js layer gets technical fixes (layout.tsx, sitemap.ts, page.tsx, new opengraph-image.tsx). All 6 static HTML tool pages in `/public/tools/` get fixed titles/schema, a new H1, and a keyword-rich content section before the footer.

**Tech Stack:** Next.js 16 App Router, `next/og` ImageResponse (built-in, no extra deps), vanilla HTML/CSS for tool pages.

---

## File Map

| File | Change Type |
|------|-------------|
| `src/app/layout.tsx` | Fix GSC placeholder, OG spacing, expand keywords, remove manual og-image ref |
| `src/app/sitemap.ts` | Dynamic lastModified |
| `src/app/page.tsx` | H1 fix + WebSite schema |
| `src/app/opengraph-image.tsx` | **Create** — branded OG image via ImageResponse |
| `public/tools/username-generator/index.html` | Fix title/schema, H1, footer, add content section |
| `public/tools/word-finder/index.html` | Fix title/schema, H1, footer, add content section |
| `public/tools/recipe-scaler/index.html` | Fix title/schema, H1, footer, add content section |
| `public/tools/romaji-to-kana/index.html` | Fix title/schema, H1, footer, add content section |
| `public/tools/ip-checker/index.html` | Fix title/schema, H1, footer, add content section |
| `public/tools/word-search/index.html` | Fix title/schema, H1, footer, add content section |

---

## Task 1: Fix layout.tsx

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Apply all fixes to layout.tsx**

Replace the entire `metadata` export with the fixed version:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DokiDokiTools — Free Online Utility Tools",
    template: "%s | DokiDokiTools",
  },
  description:
    "DokiDokiTools offers free, fast, browser-based utility tools for gamers, writers, cooks, and developers. No account needed. Works instantly.",
  keywords: [
    "free online tools",
    "utility tools",
    "romaji to hiragana",
    "romaji to katakana",
    "romaji converter",
    "recipe scaler",
    "recipe multiplier",
    "recipe converter",
    "synonym finder",
    "antonym finder",
    "word search maker",
    "word search generator",
    "printable word search",
    "ip address checker",
    "what is my ip",
    "ip address lookup",
    "username generator",
    "random username generator",
    "gaming username generator",
    "DokiDokiTools",
  ],
  authors: [{ name: "DokiDokiTools" }],
  creator: "DokiDokiTools",
  publisher: "DokiDokiTools",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "DokiDokiTools",
    title: "DokiDokiTools — Free Online Utility Tools",
    description:
      "Free, fast, browser-based utility tools for gamers, writers, cooks, and developers. No account needed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DokiDokiTools — Free Online Utility Tools",
    description:
      "Free, fast, browser-based utility tools for gamers, writers, cooks, and developers.",
  },
};
```

Changes made:
- Removed `verification.google` placeholder (file-based verification via `/public/google90c442924ed7ae94.html` handles this)
- Fixed `—Free` → `— Free` (space after em-dash) in OG and Twitter titles
- Removed manual `images` arrays from OG and Twitter (Next.js auto-discovers `opengraph-image.tsx`)
- Expanded keywords list

- [ ] **Step 2: Verify build passes**

```bash
cd d:/Auto_Money && npm run build
```

Expected: Build completes with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "fix: clean up layout.tsx metadata - remove GSC placeholder, fix OG title spacing, expand keywords"
```

---

## Task 2: Fix sitemap.ts

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Replace hardcoded lastModified with dynamic date**

Replace:
```ts
const lastMod = new Date("2026-04-28");
```

With:
```ts
const lastMod = new Date();
```

- [ ] **Step 2: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "fix: use dynamic lastModified in sitemap so Google sees active maintenance"
```

---

## Task 3: Create opengraph-image.tsx

**Files:**
- Create: `src/app/opengraph-image.tsx`

Next.js 16 auto-discovers this file and generates the `og:image` and `twitter:image` meta tags automatically. No extra packages needed — `ImageResponse` is built into `next/og`.

- [ ] **Step 1: Create the file**

```tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #6B21A8 0%, #7C3AED 60%, #A855F7 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-2px",
            display: "flex",
          }}
        >
          <span>DokiDoki</span>
          <span style={{ color: "#FF9800" }}>Tools</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#E9D5FF",
            marginTop: 20,
            fontWeight: 700,
          }}
        >
          Free Online Utility Tools
        </div>
        <div style={{ fontSize: 18, color: "#C4B5FD", marginTop: 12 }}>
          No login · Works in your browser
        </div>
      </div>
    )
  );
}
```

- [ ] **Step 2: Verify build passes**

```bash
cd d:/Auto_Money && npm run build
```

Expected: Build passes. Next.js outputs a generated OG image route.

- [ ] **Step 3: Commit**

```bash
git add src/app/opengraph-image.tsx
git commit -m "feat: add branded OG image via Next.js ImageResponse"
```

---

## Task 4: Fix homepage H1 and WebSite schema (page.tsx)

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Fix the hero H1**

In `src/app/page.tsx`, find the hero heading div (around line 129) and change the element type from `div` to `h1`:

Replace:
```tsx
<div
  className="inline-block text-white text-4xl md:text-5xl font-black py-3 px-8 rounded-2xl mb-5 tracking-tight"
  style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}
>
  DokiDokiTools
</div>
```

With:
```tsx
<h1
  className="inline-block text-white text-4xl md:text-5xl font-black py-3 px-8 rounded-2xl mb-5 tracking-tight"
  style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}
>
  DokiDokiTools
</h1>
```

- [ ] **Step 2: Update jsonLd to use @graph with WebSite + SearchAction**

Replace the `jsonLd` const at the top of `src/app/page.tsx` with:

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "DokiDokiTools",
      "url": "https://dokidokitools.vercel.app",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://dokidokitools.vercel.app/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      "name": "DokiDokiTools — Free Online Utilities",
      "url": "https://dokidokitools.vercel.app",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Username Generator", "url": "https://dokidokitools.vercel.app/tools/username-generator/index.html" },
        { "@type": "ListItem", "position": 2, "name": "Word Finder", "url": "https://dokidokitools.vercel.app/tools/word-finder/index.html" },
        { "@type": "ListItem", "position": 3, "name": "Recipe Scaler", "url": "https://dokidokitools.vercel.app/tools/recipe-scaler/index.html" },
        { "@type": "ListItem", "position": 4, "name": "Romaji to Kana", "url": "https://dokidokitools.vercel.app/tools/romaji-to-kana/index.html" },
        { "@type": "ListItem", "position": 5, "name": "Network Inspector", "url": "https://dokidokitools.vercel.app/tools/ip-checker/index.html" },
        { "@type": "ListItem", "position": 6, "name": "Word Search Maker", "url": "https://dokidokitools.vercel.app/tools/word-search/index.html" },
      ],
    },
  ],
};
```

- [ ] **Step 3: Verify build passes**

```bash
cd d:/Auto_Money && npm run build
```

Expected: Build passes with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "fix: change hero div to h1 and add WebSite schema with SearchAction"
```

---

## Task 5: Fix username-generator/index.html

**Files:**
- Modify: `public/tools/username-generator/index.html`

- [ ] **Step 1: Replace the entire `<head>` metadata block**

Replace everything from `<title>` through the closing `</script>` of the JSON-LD block (lines 6–42) with:

```html
    <title>Free Username Generator — Create Unique Usernames Online | DokiDokiTools</title>
    <meta name="description" content="Generate unique, creative usernames instantly for gaming, Discord, Reddit, and social media. Choose gaming, fantasy, or minimal style. Free online username generator — no login required.">
    <link rel="canonical" href="https://dokidokitools.vercel.app/tools/username-generator/index.html">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://dokidokitools.vercel.app/tools/username-generator/index.html">
    <meta property="og:title" content="Free Username Generator — Create Unique Usernames Online | DokiDokiTools">
    <meta property="og:description" content="Generate cool, unique usernames instantly for gaming, social media, or any online platform. Free, no login.">
    <meta property="og:site_name" content="DokiDokiTools">
    <meta property="og:image" content="https://dokidokitools.vercel.app/opengraph-image">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Free Username Generator Online | DokiDokiTools">
    <meta name="twitter:description" content="Generate cool, unique usernames and strong passwords instantly. Free, no login, instant results.">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          "name": "Username Generator — Identity Forge",
          "url": "https://dokidokitools.vercel.app/tools/username-generator/index.html",
          "description": "Generate themed usernames and secure passwords instantly. Free browser-based tool.",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "creator": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dokidokitools.vercel.app" },
            { "@type": "ListItem", "position": 2, "name": "Username Generator", "item": "https://dokidokitools.vercel.app/tools/username-generator/index.html" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How do I generate a username?", "acceptedAnswer": { "@type": "Answer", "text": "Enter a theme word (e.g. 'Ninja', 'Dragon') and click 'Forge!'. The generator will create multiple unique username combinations instantly." } },
            { "@type": "Question", "name": "Can I use these usernames on Steam and Discord?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Generated usernames work on Steam, Discord, Reddit, Twitter, Instagram, and any platform that accepts standard characters. Always verify availability on the target platform." } },
            { "@type": "Question", "name": "Are the generated passwords secure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, generated passwords use a mix of letters, numbers, and symbols for strong security. Always use a password manager to store them." } },
            { "@type": "Question", "name": "Is the username generator free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free. No account or login required. Generates instantly in your browser." } }
          ]
        }
      ]
    }
    </script>
```

- [ ] **Step 2: Fix the main heading from div to h1**

Find (around line 125):
```html
            <div class="inline-block bg-primary text-white text-3xl md:text-5xl font-black py-4 px-10 rounded-2xl chunky-shadow-orange transform rotate-[-1deg] border-4 border-white uppercase tracking-wider mb-6">
                Identity Forge
            </div>
```

Replace with:
```html
            <h1 class="inline-block bg-primary text-white text-3xl md:text-5xl font-black py-4 px-10 rounded-2xl chunky-shadow-orange transform rotate-[-1deg] border-4 border-white uppercase tracking-wider mb-6">
                Free Username Generator
            </h1>
```

- [ ] **Step 3: Fix footer copyright garbled character**

Find:
```html
        <div class="text-xs font-black uppercase tracking-[0.3em]">&copy; 2026 Identity Forge 窶｢ DokiDokiTools</div>
```

Replace with:
```html
        <div class="text-xs font-black uppercase tracking-[0.3em]">&copy; 2026 DokiDokiTools</div>
```

- [ ] **Step 4: Add content section before the footer**

Insert the following block immediately before the `<footer ...>` tag:

```html
    <!-- SEO Content Section -->
    <section style="max-width:800px;margin:0 auto 3rem;padding:0 1.5rem;font-family:inherit;">
      <h2 style="font-size:1.5rem;font-weight:900;color:#1C1C1C;margin-bottom:1rem;">About the Free Username Generator</h2>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        The DokiDokiTools Username Generator is a free online tool that creates unique, creative usernames instantly — no account, no download, no cost. Whether you need a cool gaming name for Steam, an anonymous handle for Reddit, a fresh identity for Discord, or a professional username for any social media platform, this random username generator delivers dozens of ideas in one click.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        Choose from three distinct styles: <strong>Gaming / Edgy</strong> for powerful gamer-style names that stand out in lobbies, <strong>Fantasy</strong> for names inspired by myths and legends, and <strong>Minimal</strong> for clean, modern handles that work on any platform. Every generated username is paired with a secure password suggestion, saving you time when creating new accounts.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1.5rem;">
        This free username generator runs entirely in your browser. Nothing you type is sent to a server, and no data is stored anywhere. It works on mobile, tablet, and desktop without any installation required.
      </p>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">How to Generate a Username</h2>
      <ol style="color:#4B5563;line-height:1.9;padding-left:1.5rem;margin-bottom:1.5rem;">
        <li>Enter a theme word (e.g. "Shadow", "Dragon", "Star")</li>
        <li>Select your preferred style from the options panel</li>
        <li>Click <strong>Generate</strong> to get a list of username ideas</li>
        <li>Copy your favourite username with one click</li>
      </ol>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">Frequently Asked Questions</h2>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">Are these usernames unique?</h3>
        <p style="color:#4B5563;line-height:1.7;">Usernames are randomly generated and highly varied. Availability on specific platforms is not checked — always verify on the platform you're signing up for.</p>
      </div>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">Can I use this for a gaming username?</h3>
        <p style="color:#4B5563;line-height:1.7;">Yes. Select the Gaming / Edgy style and enter your theme word for gamer-style usernames that work on Steam, Xbox, PlayStation, and more.</p>
      </div>
      <p style="margin-top:1.5rem;color:#6B7280;font-size:0.875rem;">
        More free tools: <a href="/" style="color:#6B21A8;font-weight:700;">DokiDokiTools Home</a> &middot;
        <a href="/tools/word-finder/index.html" style="color:#6B21A8;font-weight:700;">Word Finder</a> &middot;
        <a href="/tools/recipe-scaler/index.html" style="color:#6B21A8;font-weight:700;">Recipe Scaler</a>
      </p>
    </section>
```

- [ ] **Step 5: Commit**

```bash
git add public/tools/username-generator/index.html
git commit -m "seo: fix username-generator - clean title, h1, schema, add content section"
```

---

## Task 6: Fix word-finder/index.html

**Files:**
- Modify: `public/tools/word-finder/index.html`

- [ ] **Step 1: Replace head metadata block**

Replace everything from `<title>` through the closing `</script>` of the JSON-LD block with:

```html
    <title>Free Word Finder — Synonyms, Antonyms &amp; Rhymes Online | DokiDokiTools</title>
    <meta name="description" content="Find synonyms, antonyms, and rhyming words instantly for any word. Free online thesaurus and word finder — no login, no friction. Perfect for writers, students, and crossword solvers.">
    <link rel="canonical" href="https://dokidokitools.vercel.app/tools/word-finder/index.html">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://dokidokitools.vercel.app/tools/word-finder/index.html">
    <meta property="og:title" content="Free Word Finder — Synonyms, Antonyms &amp; Rhymes Online | DokiDokiTools">
    <meta property="og:description" content="Find synonyms, antonyms, and rhyming words instantly. Free browser-based thesaurus tool.">
    <meta property="og:site_name" content="DokiDokiTools">
    <meta property="og:image" content="https://dokidokitools.vercel.app/opengraph-image">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Free Synonym &amp; Antonym Finder Online | DokiDokiTools">
    <meta name="twitter:description" content="Find synonyms, antonyms, and rhymes for any word instantly. Free and no login required.">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          "name": "Word Finder — Synonym &amp; Antonym Tool",
          "url": "https://dokidokitools.vercel.app/tools/word-finder/index.html",
          "description": "Find synonyms, antonyms, and rhyming words instantly. Free browser-based thesaurus.",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "creator": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dokidokitools.vercel.app" },
            { "@type": "ListItem", "position": 2, "name": "Word Finder", "item": "https://dokidokitools.vercel.app/tools/word-finder/index.html" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How do I find synonyms for a word?", "acceptedAnswer": { "@type": "Answer", "text": "Type your word into the input box and click 'Search'. Select the 'Synonyms' tab to see a list of alternative words with similar meanings." } },
            { "@type": "Question", "name": "Can I find rhyming words?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Switch to the 'Rhymes' tab after searching to see words that rhyme with your input. Great for poetry, song lyrics, and creative writing." } },
            { "@type": "Question", "name": "What is the difference between a synonym and an antonym?", "acceptedAnswer": { "@type": "Answer", "text": "A synonym is a word with a similar meaning (e.g. 'happy' and 'joyful'). An antonym is a word with the opposite meaning (e.g. 'happy' and 'sad')." } },
            { "@type": "Question", "name": "Is the word finder free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free. No account or login is needed. It works instantly in your browser." } }
          ]
        }
      ]
    }
    </script>
```

- [ ] **Step 2: Fix the main heading from div/span to h1**

Find the tool's main heading element in the `<header>` or `<main>` and change it to an `<h1>`. Look for the large styled heading that says "Lexicon Finder" or the tool title, and change:

```html
<div class="... text-3xl md:text-5xl ...">
    Lexicon Finder
</div>
```

To:
```html
<h1 class="... text-3xl md:text-5xl ...">
    Free Word Finder
</h1>
```

- [ ] **Step 3: Fix footer copyright**

Find and replace the footer copyright line containing `窶｢`:
```html
&copy; 2026 Lexicon Finder 窶｢ DokiDokiTools
```

Replace with:
```html
&copy; 2026 DokiDokiTools
```

- [ ] **Step 4: Add content section before footer**

Insert immediately before the `<footer ...>` tag:

```html
    <!-- SEO Content Section -->
    <section style="max-width:800px;margin:0 auto 3rem;padding:0 1.5rem;font-family:inherit;">
      <h2 style="font-size:1.5rem;font-weight:900;color:#1C1C1C;margin-bottom:1rem;">About the Free Word Finder</h2>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        The DokiDokiTools Word Finder is a free online synonym and antonym finder that helps you discover alternative words instantly. Whether you are a writer trying to avoid repetition, a student expanding your vocabulary, a crossword solver looking for the right fit, or a poet hunting for the perfect rhyme, this free thesaurus tool has you covered.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        Enter any word and instantly see its <strong>synonyms</strong> (words with similar meanings), <strong>antonyms</strong> (words with opposite meanings), and <strong>rhymes</strong>. All results load in your browser without any server call — fast, private, and always free.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1.5rem;">
        This word finder is ideal for creative writing, academic essays, Scrabble and crossword puzzles, song lyrics, and anyone who wants to express themselves more precisely. No account or login is ever required.
      </p>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">How to Find Synonyms and Antonyms</h2>
      <ol style="color:#4B5563;line-height:1.9;padding-left:1.5rem;margin-bottom:1.5rem;">
        <li>Type a word into the search box</li>
        <li>Click <strong>Search</strong> or press Enter</li>
        <li>Switch between <strong>Synonyms</strong>, <strong>Antonyms</strong>, and <strong>Rhymes</strong> tabs</li>
        <li>Click any result word to copy it or search for it</li>
      </ol>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">Frequently Asked Questions</h2>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">What is a synonym finder?</h3>
        <p style="color:#4B5563;line-height:1.7;">A synonym finder (also called a thesaurus) is a tool that shows you words with the same or similar meaning to a word you search. It helps writers vary their language and avoid repetition.</p>
      </div>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">Can I use this for crosswords and word games?</h3>
        <p style="color:#4B5563;line-height:1.7;">Yes. The word finder works great for crossword puzzles, Scrabble, Wordle, and other word games where you need to find words that match a specific meaning or rhyme.</p>
      </div>
      <p style="margin-top:1.5rem;color:#6B7280;font-size:0.875rem;">
        More free tools: <a href="/" style="color:#6B21A8;font-weight:700;">DokiDokiTools Home</a> &middot;
        <a href="/tools/username-generator/index.html" style="color:#6B21A8;font-weight:700;">Username Generator</a> &middot;
        <a href="/tools/word-search/index.html" style="color:#6B21A8;font-weight:700;">Word Search Maker</a>
      </p>
    </section>
```

- [ ] **Step 5: Commit**

```bash
git add public/tools/word-finder/index.html
git commit -m "seo: fix word-finder - clean title, h1, schema, add content section"
```

---

## Task 7: Fix recipe-scaler/index.html

**Files:**
- Modify: `public/tools/recipe-scaler/index.html`

- [ ] **Step 1: Replace head metadata block**

Replace everything from `<title>` through the closing `</script>` of the JSON-LD block with:

```html
    <title>Free Recipe Scaler — Scale Any Recipe Up or Down | DokiDokiTools</title>
    <meta name="description" content="Scale any recipe to any serving size instantly. Double, triple, or halve recipes with automatic US and Metric unit conversion. Free online recipe multiplier — no login required.">
    <link rel="canonical" href="https://dokidokitools.vercel.app/tools/recipe-scaler/index.html">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://dokidokitools.vercel.app/tools/recipe-scaler/index.html">
    <meta property="og:title" content="Free Recipe Scaler — Scale Any Recipe Up or Down | DokiDokiTools">
    <meta property="og:description" content="Scale recipes and convert cooking units instantly. Free online tool, no login needed.">
    <meta property="og:site_name" content="DokiDokiTools">
    <meta property="og:image" content="https://dokidokitools.vercel.app/opengraph-image">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Free Recipe Scaler Online | DokiDokiTools">
    <meta name="twitter:description" content="Scale any recipe to any serving size and convert between US and Metric units instantly.">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          "name": "Recipe Scaler — Scale &amp; Convert Recipes",
          "url": "https://dokidokitools.vercel.app/tools/recipe-scaler/index.html",
          "description": "Scale recipes and convert cooking units between US and Metric instantly. Free browser-based tool.",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "creator": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dokidokitools.vercel.app" },
            { "@type": "ListItem", "position": 2, "name": "Recipe Scaler", "item": "https://dokidokitools.vercel.app/tools/recipe-scaler/index.html" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How do I scale a recipe?", "acceptedAnswer": { "@type": "Answer", "text": "Enter your original number of servings and your target servings. Add your ingredients with quantities and units. The scaler automatically calculates the correct amounts." } },
            { "@type": "Question", "name": "Can I convert cups to grams?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The recipe scaler supports conversion between US Customary and Metric units including cups, tablespoons, teaspoons, ounces, grams, and milliliters." } },
            { "@type": "Question", "name": "Can I scale a recipe down to fewer servings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Set your target servings to a number smaller than the original (e.g. from 8 servings to 2) and all ingredient quantities are automatically reduced." } },
            { "@type": "Question", "name": "Is the recipe scaler free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free. No account or login required. Works instantly in your browser." } }
          ]
        }
      ]
    }
    </script>
```

- [ ] **Step 2: Fix main heading to h1**

Find the tool's main heading element (styled div with the tool name) and change it to:
```html
<h1 class="[existing classes]">
    Free Recipe Scaler
</h1>
```

- [ ] **Step 3: Fix footer copyright**

Find and replace the footer copyright line containing `窶｢`:
```html
&copy; 2026 Recipe Scaler Pro 窶｢ DokiDokiTools
```
Replace with:
```html
&copy; 2026 DokiDokiTools
```

- [ ] **Step 4: Add content section before footer**

Insert immediately before the `<footer ...>` tag:

```html
    <!-- SEO Content Section -->
    <section style="max-width:800px;margin:0 auto 3rem;padding:0 1.5rem;font-family:inherit;">
      <h2 style="font-size:1.5rem;font-weight:900;color:#1C1C1C;margin-bottom:1rem;">About the Free Recipe Scaler</h2>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        The DokiDokiTools Recipe Scaler is a free online recipe multiplier that instantly scales any recipe up or down to any number of servings. Whether you are doubling a batch of cookies for a party, halving a soup recipe for one, or tripling a casserole for a crowd, this tool handles all the ingredient math automatically.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        The recipe converter also supports <strong>US Customary to Metric unit conversion</strong> — converting cups, tablespoons, teaspoons, and ounces to grams, milliliters, and litres. This makes it ideal for international recipes where measurements differ, or for bakers who prefer weighing ingredients for precision.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1.5rem;">
        Everything runs in your browser. Your ingredient list is never sent to a server. The recipe scaler works on any device — phone, tablet, or desktop — with no installation and no login required.
      </p>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">How to Scale a Recipe</h2>
      <ol style="color:#4B5563;line-height:1.9;padding-left:1.5rem;margin-bottom:1.5rem;">
        <li>Enter the original number of servings</li>
        <li>Enter your target number of servings</li>
        <li>Add your ingredients with quantities and units</li>
        <li>All quantities update automatically — copy or print the result</li>
      </ol>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">Frequently Asked Questions</h2>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">Can I scale a recipe by a custom amount?</h3>
        <p style="color:#4B5563;line-height:1.7;">Yes. Enter any target serving count — not just whole numbers. You can scale to 1.5x, 2.5x, or any other multiplier by setting the appropriate servings.</p>
      </div>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">Does it work for baking recipes?</h3>
        <p style="color:#4B5563;line-height:1.7;">Yes. The scaler works for any recipe including baked goods. Note that baking chemistry can be sensitive to large scale changes — results above 3x or below 0.5x may need minor manual adjustments.</p>
      </div>
      <p style="margin-top:1.5rem;color:#6B7280;font-size:0.875rem;">
        More free tools: <a href="/" style="color:#6B21A8;font-weight:700;">DokiDokiTools Home</a> &middot;
        <a href="/tools/word-finder/index.html" style="color:#6B21A8;font-weight:700;">Word Finder</a> &middot;
        <a href="/tools/word-search/index.html" style="color:#6B21A8;font-weight:700;">Word Search Maker</a>
      </p>
    </section>
```

- [ ] **Step 5: Commit**

```bash
git add public/tools/recipe-scaler/index.html
git commit -m "seo: fix recipe-scaler - clean title, h1, schema, add content section"
```

---

## Task 8: Fix romaji-to-kana/index.html

**Files:**
- Modify: `public/tools/romaji-to-kana/index.html`

- [ ] **Step 1: Replace head metadata block**

Replace everything from `<title>` through the closing `</script>` of the JSON-LD block with:

```html
    <title>Romaji to Hiragana &amp; Katakana Converter — Free Online | DokiDokiTools</title>
    <meta name="description" content="Convert English Romaji to Japanese Hiragana and Katakana instantly. Free online romaji converter — accurate, fast, no login required. Perfect for Japanese learners and anime fans.">
    <link rel="canonical" href="https://dokidokitools.vercel.app/tools/romaji-to-kana/index.html">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://dokidokitools.vercel.app/tools/romaji-to-kana/index.html">
    <meta property="og:title" content="Free Romaji to Hiragana &amp; Katakana Converter | DokiDokiTools">
    <meta property="og:description" content="Instantly convert English Romaji to Japanese Hiragana and Katakana. Free, no login, works in your browser.">
    <meta property="og:site_name" content="DokiDokiTools">
    <meta property="og:image" content="https://dokidokitools.vercel.app/opengraph-image">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Free Romaji to Hiragana Converter | DokiDokiTools">
    <meta name="twitter:description" content="Convert English Romaji to Japanese Hiragana and Katakana instantly. Free and no login required.">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          "name": "Romaji to Hiragana &amp; Katakana Converter",
          "url": "https://dokidokitools.vercel.app/tools/romaji-to-kana/index.html",
          "description": "Convert English Romaji to Japanese Hiragana and Katakana instantly. Free browser-based tool.",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "creator": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dokidokitools.vercel.app" },
            { "@type": "ListItem", "position": 2, "name": "Romaji to Kana Converter", "item": "https://dokidokitools.vercel.app/tools/romaji-to-kana/index.html" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is Romaji?", "acceptedAnswer": { "@type": "Answer", "text": "Romaji is the romanization of the Japanese language — writing Japanese phonetics using English letters, e.g. 'konnichiwa' for the greeting." } },
            { "@type": "Question", "name": "How do I convert Romaji to Hiragana?", "acceptedAnswer": { "@type": "Answer", "text": "Simply type your Romaji text into the input box and the converter will instantly show the Hiragana and Katakana equivalents as you type." } },
            { "@type": "Question", "name": "What is the difference between Hiragana and Katakana?", "acceptedAnswer": { "@type": "Answer", "text": "Hiragana is used for native Japanese words and grammatical elements. Katakana is used mainly for foreign loanwords, technical terms, and emphasis." } },
            { "@type": "Question", "name": "Is the Romaji converter free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% free. No account required. Runs entirely in your browser with no data sent to any server." } }
          ]
        }
      ]
    }
    </script>
```

- [ ] **Step 2: Fix main heading to h1**

Find the tool's main heading element and change it to:
```html
<h1 class="[existing classes]">
    Romaji to Hiragana &amp; Katakana Converter
</h1>
```

- [ ] **Step 3: Fix footer copyright**

Find and replace the footer copyright line containing `窶｢`:
```html
&copy; 2026 Japan Converter 窶｢ DokiDokiTools
```
Replace with:
```html
&copy; 2026 DokiDokiTools
```

- [ ] **Step 4: Add content section before footer**

Insert immediately before the `<footer ...>` tag:

```html
    <!-- SEO Content Section -->
    <section style="max-width:800px;margin:0 auto 3rem;padding:0 1.5rem;font-family:inherit;">
      <h2 style="font-size:1.5rem;font-weight:900;color:#1C1C1C;margin-bottom:1rem;">About the Romaji to Hiragana &amp; Katakana Converter</h2>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        This free online Romaji converter instantly translates English Romaji text into Japanese Hiragana and Katakana. It supports all standard romaji combinations including long vowels, double consonants, and particle forms. Whether you are a Japanese language learner, an anime fan writing in Japanese, or a developer working with Japanese text, this tool gives you accurate results instantly.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        <strong>Romaji</strong> is the system of writing Japanese using the Roman alphabet (English letters). This converter takes your romaji input and produces the correct <strong>Hiragana</strong> (used for native Japanese words and grammar) and <strong>Katakana</strong> (used for foreign loanwords and emphasis) output in real time.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1.5rem;">
        The converter runs entirely in your browser with no server calls, no data stored, and no login required. It works on any device including mobile phones and tablets.
      </p>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">How to Convert Romaji to Japanese</h2>
      <ol style="color:#4B5563;line-height:1.9;padding-left:1.5rem;margin-bottom:1.5rem;">
        <li>Type your Romaji text into the input field</li>
        <li>Hiragana and Katakana output appears instantly</li>
        <li>Use the options panel to select output mode (Hiragana only, Katakana only, or mixed)</li>
        <li>Click the copy button to copy the result to your clipboard</li>
      </ol>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">Frequently Asked Questions</h2>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">Does it support all romaji combinations?</h3>
        <p style="color:#4B5563;line-height:1.7;">Yes. The converter handles all standard Hepburn romanization combinations including digraphs (sh, ch, ts), long vowels, and double consonants (kk, tt, pp).</p>
      </div>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">Can I use this to learn Japanese?</h3>
        <p style="color:#4B5563;line-height:1.7;">Yes. Seeing the Hiragana equivalent as you type romaji is an excellent way to learn the Japanese syllabary. Try typing common words to see how they look in native Japanese script.</p>
      </div>
      <p style="margin-top:1.5rem;color:#6B7280;font-size:0.875rem;">
        More free tools: <a href="/" style="color:#6B21A8;font-weight:700;">DokiDokiTools Home</a> &middot;
        <a href="/tools/username-generator/index.html" style="color:#6B21A8;font-weight:700;">Username Generator</a> &middot;
        <a href="/tools/word-finder/index.html" style="color:#6B21A8;font-weight:700;">Word Finder</a>
      </p>
    </section>
```

- [ ] **Step 5: Commit**

```bash
git add public/tools/romaji-to-kana/index.html
git commit -m "seo: fix romaji-to-kana - clean title, h1, schema, add content section"
```

---

## Task 9: Fix ip-checker/index.html

**Files:**
- Modify: `public/tools/ip-checker/index.html`

- [ ] **Step 1: Replace head metadata block**

Replace everything from `<title>` through the closing `</script>` of the JSON-LD block with:

```html
    <title>What Is My IP Address — Free IP Checker &amp; Network Inspector | DokiDokiTools</title>
    <meta name="description" content="Find your public IP address, ISP, and approximate location instantly. Free online IP address checker and network inspector — real-time results, no login required.">
    <link rel="canonical" href="https://dokidokitools.vercel.app/tools/ip-checker/index.html">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://dokidokitools.vercel.app/tools/ip-checker/index.html">
    <meta property="og:title" content="What Is My IP Address? Free IP Checker | DokiDokiTools">
    <meta property="og:description" content="Check your public IP address, ISP, and location instantly. Free online IP lookup tool.">
    <meta property="og:site_name" content="DokiDokiTools">
    <meta property="og:image" content="https://dokidokitools.vercel.app/opengraph-image">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="What Is My IP? Free IP Checker | DokiDokiTools">
    <meta name="twitter:description" content="Find your public IP address and location instantly. Free online IP checker, no login required.">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          "name": "Network Inspector — IP Address &amp; Location Checker",
          "url": "https://dokidokitools.vercel.app/tools/ip-checker/index.html",
          "description": "Check your public IP address, ISP, and location instantly. Free browser-based network tool.",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "creator": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dokidokitools.vercel.app" },
            { "@type": "ListItem", "position": 2, "name": "IP Address Checker", "item": "https://dokidokitools.vercel.app/tools/ip-checker/index.html" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is my IP address?", "acceptedAnswer": { "@type": "Answer", "text": "Your public IP address is the unique identifier assigned to your internet connection by your ISP. Visit Network Inspector and your IP address is displayed instantly." } },
            { "@type": "Question", "name": "What is an ISP?", "acceptedAnswer": { "@type": "Answer", "text": "ISP stands for Internet Service Provider — the company that provides your internet connection, such as Comcast, AT&T, Verizon, or a local provider." } },
            { "@type": "Question", "name": "Can I check if my VPN is working with this tool?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If your VPN is active, your IP address will show as your VPN server's IP and the location will reflect the VPN server location rather than your real location." } },
            { "@type": "Question", "name": "Is the IP checker free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free. No account or login is required. Your IP address loads automatically when you open the page." } }
          ]
        }
      ]
    }
    </script>
```

- [ ] **Step 2: Fix main heading to h1**

Find the tool's main heading element and change it to:
```html
<h1 class="[existing classes]">
    What Is My IP Address?
</h1>
```

- [ ] **Step 3: Fix footer copyright**

Find and replace the footer copyright line containing `窶｢`:
```html
&copy; 2026 Network Inspector 窶｢ DokiDokiTools
```
Replace with:
```html
&copy; 2026 DokiDokiTools
```

- [ ] **Step 4: Add content section before footer**

Insert immediately before the `<footer ...>` tag:

```html
    <!-- SEO Content Section -->
    <section style="max-width:800px;margin:0 auto 3rem;padding:0 1.5rem;font-family:inherit;">
      <h2 style="font-size:1.5rem;font-weight:900;color:#1C1C1C;margin-bottom:1rem;">About the Free IP Address Checker</h2>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        The DokiDokiTools Network Inspector is a free online IP address checker that instantly shows your public IP address, Internet Service Provider (ISP), and approximate geographic location. There is nothing to install — open the page and your IP details load automatically.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        This tool is useful for <strong>troubleshooting network issues</strong>, <strong>verifying that your VPN is working</strong> (your IP should show as the VPN server's location when connected), or simply satisfying curiosity about your online identity. The location shown is approximate and based on publicly available IP geolocation data — it shows city and country, not your precise street address.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1.5rem;">
        No login, no account, and no personal data is stored. The IP address lookup is performed securely and the result is displayed only to you.
      </p>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">How to Check Your IP Address</h2>
      <ol style="color:#4B5563;line-height:1.9;padding-left:1.5rem;margin-bottom:1.5rem;">
        <li>Open the Network Inspector page</li>
        <li>Your public IP address loads automatically within seconds</li>
        <li>Your ISP name and approximate location are shown below</li>
        <li>Connect a VPN and refresh to verify the VPN is masking your real IP</li>
      </ol>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">Frequently Asked Questions</h2>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">What is the difference between a public and private IP address?</h3>
        <p style="color:#4B5563;line-height:1.7;">Your public IP is the address your router shows to the internet — visible to websites you visit. Your private IP is the internal address your router assigns to your device on your home network and is not visible externally.</p>
      </div>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">Does this tool show my exact location?</h3>
        <p style="color:#4B5563;line-height:1.7;">No. IP geolocation is approximate — typically accurate to city level but not to a street address. The location shown is the registered location of your ISP's network, which may differ from your physical location.</p>
      </div>
      <p style="margin-top:1.5rem;color:#6B7280;font-size:0.875rem;">
        More free tools: <a href="/" style="color:#6B21A8;font-weight:700;">DokiDokiTools Home</a> &middot;
        <a href="/tools/username-generator/index.html" style="color:#6B21A8;font-weight:700;">Username Generator</a> &middot;
        <a href="/tools/recipe-scaler/index.html" style="color:#6B21A8;font-weight:700;">Recipe Scaler</a>
      </p>
    </section>
```

- [ ] **Step 5: Commit**

```bash
git add public/tools/ip-checker/index.html
git commit -m "seo: fix ip-checker - clean title, h1, schema, add content section"
```

---

## Task 10: Fix word-search/index.html

**Files:**
- Modify: `public/tools/word-search/index.html`

- [ ] **Step 1: Replace head metadata block**

Replace everything from `<title>` through the closing `</script>` of the JSON-LD block with:

```html
  <title>Free Word Search Maker — Create &amp; Print Puzzles Online | DokiDokiTools</title>
  <meta name="description" content="Create custom word search puzzles with your own words and export to PDF for printing. Free online word search generator — perfect for teachers, classrooms, and parties. No login required.">
  <link rel="canonical" href="https://dokidokitools.vercel.app/tools/word-search/index.html">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://dokidokitools.vercel.app/tools/word-search/index.html">
  <meta property="og:title" content="Free Word Search Maker — Create &amp; Print Puzzles Online | DokiDokiTools">
  <meta property="og:description" content="Build printable word search puzzles with your own words. Choose grid size, directions, and export to PDF. Free, no login.">
  <meta property="og:site_name" content="DokiDokiTools">
  <meta property="og:image" content="https://dokidokitools.vercel.app/opengraph-image">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Free Word Search Maker | DokiDokiTools">
  <meta name="twitter:description" content="Create custom word search puzzles and export to PDF. Free, instant, no login.">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Word Search Maker — Create &amp; Print Puzzles",
        "url": "https://dokidokitools.vercel.app/tools/word-search/index.html",
        "description": "Create custom printable word search puzzles. Add your own words, configure grid size and directions, export to PDF.",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Any",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "creator": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dokidokitools.vercel.app" },
          { "@type": "ListItem", "position": 2, "name": "Word Search Maker", "item": "https://dokidokitools.vercel.app/tools/word-search/index.html" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I make a word search puzzle?", "acceptedAnswer": { "@type": "Answer", "text": "Type your words one at a time and click the + button (or press Enter) to add them to your word list. Then click Generate to create your puzzle instantly." } },
          { "@type": "Question", "name": "Can I print the word search?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Click Export PDF to download a print-ready PDF of your word search puzzle, complete with the word list at the bottom." } },
          { "@type": "Question", "name": "Can teachers use this for classrooms?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The word search maker is ideal for teachers, parents, and tutors. Add any vocabulary words, generate a puzzle, and export to PDF for printing — completely free." } },
          { "@type": "Question", "name": "Is the word search maker free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free. No account or login required. Create and print unlimited word search puzzles at no cost." } }
        ]
      }
    ]
  }
  </script>
```

- [ ] **Step 2: Fix main heading to h1**

Find the tool's main heading element and change it to:
```html
<h1 class="[existing classes]">
    Free Word Search Maker
</h1>
```

- [ ] **Step 3: Fix footer copyright**

Find and replace the footer copyright line containing `窶｢`:
```html
&copy; 2026 Word Search Maker 窶｢ DokiDokiTools
```
Replace with:
```html
&copy; 2026 DokiDokiTools
```

- [ ] **Step 4: Add content section before footer**

Insert immediately before the `<footer ...>` tag:

```html
    <!-- SEO Content Section -->
    <section style="max-width:800px;margin:0 auto 3rem;padding:0 1.5rem;font-family:inherit;">
      <h2 style="font-size:1.5rem;font-weight:900;color:#1C1C1C;margin-bottom:1rem;">About the Free Word Search Maker</h2>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        The DokiDokiTools Word Search Maker is a free online puzzle generator that lets you create custom word search puzzles with your own words in seconds. Add any words you want, choose your grid size and word directions, then export a print-ready PDF — no account, no software, no cost.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">
        This free word search creator is perfect for <strong>teachers</strong> who want to reinforce vocabulary, <strong>parents</strong> planning a road trip or rainy-day activity, <strong>event planners</strong> making party favors, and anyone who enjoys printable puzzles. The PDF export produces a clean, print-ready layout with the word list included at the bottom of the page.
      </p>
      <p style="color:#4B5563;line-height:1.7;margin-bottom:1.5rem;">
        Everything runs in your browser — your word list is never sent to a server. The word search generator works on any device and requires no installation or login.
      </p>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">How to Create a Word Search Puzzle</h2>
      <ol style="color:#4B5563;line-height:1.9;padding-left:1.5rem;margin-bottom:1.5rem;">
        <li>Type a word and click <strong>+</strong> or press Enter to add it to your list</li>
        <li>Repeat until you have added all your words</li>
        <li>Choose your grid size and word direction options</li>
        <li>Click <strong>Generate</strong> to create the puzzle</li>
        <li>Click <strong>Export PDF</strong> to download a print-ready version</li>
      </ol>

      <h2 style="font-size:1.25rem;font-weight:900;color:#1C1C1C;margin-bottom:0.75rem;">Frequently Asked Questions</h2>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">How many words can I add?</h3>
        <p style="color:#4B5563;line-height:1.7;">You can add as many words as fit in your chosen grid size. Words that cannot be placed due to grid size constraints will be reported after generation — simply increase the grid size or remove some words.</p>
      </div>
      <div style="margin-bottom:1rem;">
        <h3 style="font-weight:700;color:#1C1C1C;margin-bottom:0.25rem;">Can I make a word search for any subject?</h3>
        <p style="color:#4B5563;line-height:1.7;">Yes. You can enter any words in any language that uses standard Latin characters. Great for vocabulary lists, spelling words, themed puzzles (animals, countries, food), or holiday activities.</p>
      </div>
      <p style="margin-top:1.5rem;color:#6B7280;font-size:0.875rem;">
        More free tools: <a href="/" style="color:#6B21A8;font-weight:700;">DokiDokiTools Home</a> &middot;
        <a href="/tools/word-finder/index.html" style="color:#6B21A8;font-weight:700;">Word Finder</a> &middot;
        <a href="/tools/username-generator/index.html" style="color:#6B21A8;font-weight:700;">Username Generator</a>
      </p>
    </section>
```

- [ ] **Step 5: Commit**

```bash
git add public/tools/word-search/index.html
git commit -m "seo: fix word-search - clean title, h1, schema, add content section"
```

---

## Final Verification

- [ ] **Run a full build**

```bash
cd d:/Auto_Money && npm run build
```

Expected: Build completes with no errors or warnings.

- [ ] **Spot-check 3 pages in a browser**

```bash
npm run dev
```

Open:
1. `http://localhost:3000` — confirm H1 is "DokiDokiTools", OG image route exists at `/opengraph-image`
2. `http://localhost:3000/tools/username-generator/index.html` — confirm title is correct, content section is visible, no garbled characters
3. `http://localhost:3000/tools/word-search/index.html` — confirm same

- [ ] **Validate structured data**

Paste any tool page URL into [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results) and confirm FAQPage and BreadcrumbList are detected without errors.

- [ ] **Final commit**

```bash
git add -A
git commit -m "seo: complete SEO overhaul - all pages fixed and optimized"
```
