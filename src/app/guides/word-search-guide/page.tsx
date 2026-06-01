import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Make a Word Search Puzzle — Complete Guide for Teachers & Anyone",
  description: "Learn how to create a great word search puzzle — choosing words, setting difficulty, grid sizes, and uses for classrooms, parties, and learning.",
  alternates: { canonical: "https://dokidokitools.vercel.app/guides/word-search-guide" },
  openGraph: {
    title: "How to Make a Word Search Puzzle — Complete Guide",
    description: "Tips for creating word search puzzles for classrooms, events, and fun — with a free online maker.",
    url: "https://dokidokitools.vercel.app/guides/word-search-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Make a Word Search Puzzle",
  "description": "A complete guide to creating word search puzzles for classrooms, parties, and personal use.",
  "author": { "@type": "Organization", "name": "DokiDokiTools" },
  "publisher": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" },
  "mainEntityOfPage": "https://dokidokitools.vercel.app/guides/word-search-guide",
};

export default function WordSearchGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: "#F5F0FF", minHeight: "100vh", fontFamily: "var(--font-nunito), sans-serif" }}>

        <nav style={{ background: "#6B21A8", boxShadow: "0 4px 0 0 #4C1272" }} className="w-full h-16 flex items-center px-6">
          <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
            <a href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/Dokidoki tools wide logo.png" alt="DokiDokiTools" style={{ height: "40px", width: "auto" }} />
            </a>
            <a href="/guides" style={{ color: "#C4B5FD", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>← All Guides</a>
          </div>
        </nav>

        <header style={{ background: "linear-gradient(160deg, #6B21A8 0%, #7C3AED 60%, #A855F7 100%)" }} className="w-full py-14 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span style={{ background: "#FF9800", color: "#fff", fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", padding: "4px 14px", borderRadius: "999px" }}>Guide</span>
            <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4" style={{ color: "#fff" }}>How to Make a Word Search Puzzle</h1>
            <p style={{ color: "#DDD6FE" }} className="text-lg">Everything you need to create great puzzles — for classrooms, parties, game nights, or just for fun.</p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-12">

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Why Word Searches Are Still Great</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Word search puzzles have been around since the 1960s and remain one of the most popular puzzle formats worldwide — and for good reason. They're easy to understand, work for all ages, require no prior knowledge to attempt, and can be themed to any subject.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              For teachers, they're a low-preparation activity that reinforces vocabulary in an engaging way. For parties, they're a crowd-pleaser that doesn't require teams or rules. For personal use, they're a calm, screen-free activity that keeps the mind active. Creating one yourself — with your own words — makes them far more useful than generic downloadable versions.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Step 1: Choose Your Words</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              The word list is the most important decision. A few principles that make great word searches:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <li><strong>Aim for 10–20 words.</strong> Fewer than 10 makes the puzzle feel thin. More than 25 on a standard grid gets crowded and frustrating.</li>
              <li><strong>Use a consistent theme.</strong> "Animals," "Space," "Cities in France," "Harry Potter spells" — themed words make the puzzle feel purposeful, not random.</li>
              <li><strong>Mix word lengths.</strong> A good puzzle includes short words (4–5 letters) and longer ones (8–12 letters). Short words are easier to find; long words give solvers a satisfying challenge.</li>
              <li><strong>Avoid words that are subsets of other words.</strong> If you include "CAT" and "CATCH," solvers may circle the wrong one. Either use only one, or make sure the grid placement separates them clearly.</li>
              <li><strong>For children, use familiar words.</strong> Vocabulary that's above the solver's level turns the puzzle into a vocabulary test, not a fun game.</li>
            </ul>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Step 2: Choose Your Grid Size</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              The grid needs to be large enough to fit all your words, with enough filler letters to make the puzzle non-trivial. General guidelines:
            </p>
            <div className="space-y-3" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <div className="rounded-2xl p-4" style={{ background: "#F5F0FF", border: "1px solid #DDD6FE" }}>
                <strong style={{ color: "#6B21A8" }}>Small (10×10):</strong> Best for young children or very short word lists (under 10 words). Feels approachable and quick to solve.
              </div>
              <div className="rounded-2xl p-4" style={{ background: "#F5F0FF", border: "1px solid #DDD6FE" }}>
                <strong style={{ color: "#6B21A8" }}>Medium (15×15):</strong> The most popular size. Accommodates 12–20 words comfortably. Works for most school activities and casual use.
              </div>
              <div className="rounded-2xl p-4" style={{ background: "#F5F0FF", border: "1px solid #DDD6FE" }}>
                <strong style={{ color: "#6B21A8" }}>Large (20×20):</strong> Good for 20–30 words or longer words. Best printed on A4/letter paper at full scale. Suitable for adult puzzles or themed events.
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Step 3: Set the Difficulty</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Difficulty in word searches comes from two main sources: <strong>direction</strong> and <strong>filler letter quality</strong>.
            </p>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <strong>Easy:</strong> Words hidden only horizontally and vertically (left-to-right and top-to-bottom). No diagonals, no backwards words. Good for ages 5–8.
            </p>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <strong>Medium:</strong> Add diagonal placements. Words still run forward only. Good for most ages and general use.
            </p>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <strong>Hard:</strong> All eight directions, including backwards and reverse diagonal. Experienced puzzlers appreciate this challenge. The filler letters should also be chosen to create many plausible-looking false starts (high frequency of the same letters that appear in your word list).
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>10 Great Uses for Custom Word Searches</h2>
            <ol className="space-y-2 list-decimal list-inside" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <li>Vocabulary revision for any school subject</li>
              <li>A printable activity for birthday parties</li>
              <li>Reinforcing spelling lists for younger students</li>
              <li>Christmas, Halloween, or holiday-themed puzzles</li>
              <li>Team-building icebreaker activities with colleague names</li>
              <li>Wedding or baby shower party favours</li>
              <li>Learning vocabulary in a foreign language (e.g., Spanish food words)</li>
              <li>Keeping kids occupied on long trips (print before you leave)</li>
              <li>End-of-term review activities for teachers</li>
              <li>A personalised gift — use someone's favourite films, books, or memories</li>
            </ol>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>How long does it take to make a word search?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>With an online generator, it takes about 2–3 minutes to enter your words and generate the puzzle. The word list is the part that takes the most thought — the generator handles placement automatically.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Can I print a word search in black and white?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Yes. Well-designed word searches export as clean black-and-white PDFs that print clearly on any standard printer. Colour is a nice extra, but not necessary for a functional puzzle.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>What if a word is too long for the grid?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Words longer than the grid's width or height can't be placed horizontally or vertically, only diagonally — and very long words may not fit at all. Either shorten the word, use a larger grid size, or remove it from the list.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, #6B21A8, #A855F7)" }}>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>Build Your Word Search Now</h2>
            <p className="mb-6" style={{ color: "#DDD6FE" }}>Enter your words, choose a grid size, and export a print-ready PDF in seconds. Free, no account needed.</p>
            <a href="/tools/word-search/index.html" style={{ background: "#FF9800", color: "#fff", fontWeight: 900, padding: "14px 36px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem", display: "inline-block", boxShadow: "0 4px 0 0 #c47600" }}>Open Word Search Maker →</a>
          </div>
        </main>

        <footer className="w-full py-10 flex flex-col items-center gap-3" style={{ background: "#1E0A3C" }}>
          <p className="text-xs font-medium" style={{ color: "#A78BFA" }}>© 2026 DokiDokiTools — Free online utilities</p>
          <div className="flex gap-6 text-xs font-bold">
            <a href="/" style={{ color: "#C4B5FD" }}>Home</a>
            <a href="/guides" style={{ color: "#C4B5FD" }}>Guides</a>
            <a href="/legal/privacy" style={{ color: "#C4B5FD" }}>Privacy</a>
            <a href="/legal/terms" style={{ color: "#C4B5FD" }}>Terms</a>
          </div>
        </footer>
      </div>
    </>
  );
}
