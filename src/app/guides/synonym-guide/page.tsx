import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find Better Words: A Writer's Guide to Synonyms and Antonyms",
  description: "Learn when to use synonyms, how antonyms improve contrast in writing, common overused words to replace, and tips for choosing the right word every time.",
  alternates: { canonical: "https://dokidokitools.vercel.app/guides/synonym-guide" },
  openGraph: {
    title: "How to Find Better Words: A Writer's Guide to Synonyms & Antonyms",
    description: "Practical writing advice on using synonyms and antonyms effectively — for students, writers, and anyone who wants to express themselves better.",
    url: "https://dokidokitools.vercel.app/guides/synonym-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Find Better Words: A Writer's Guide to Synonyms and Antonyms",
  "description": "Practical guidance on using synonyms and antonyms in writing — when to use them, common mistakes, and how a word finder tool helps.",
  "author": { "@type": "Organization", "name": "DokiDokiTools" },
  "publisher": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" },
  "mainEntityOfPage": "https://dokidokitools.vercel.app/guides/synonym-guide",
};

export default function SynonymGuidePage() {
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
            <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4" style={{ color: "#fff" }}>How to Find Better Words</h1>
            <p style={{ color: "#DDD6FE" }} className="text-lg">A writer's guide to synonyms and antonyms — when to swap a word, when not to, and how to choose the right one.</p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-12">

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>What Are Synonyms and Antonyms?</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              A <strong>synonym</strong> is a word that has the same or very similar meaning to another word. <em>Happy, joyful, elated, content, pleased</em> — all synonyms for a positive emotional state, but each with a different shade of meaning and different appropriate contexts.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              An <strong>antonym</strong> is a word that means the opposite. <em>Happy → Sad. Strong → Weak. Arrive → Depart.</em> Antonyms are useful for creating contrast, expressing negation clearly, or adding tension to writing.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Why Word Variety Matters in Writing</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Repeating the same word too often weakens your writing. It signals a limited vocabulary, creates a monotonous rhythm, and makes text harder to read. Compare:
            </p>
            <div className="rounded-2xl p-5 mb-4" style={{ background: "#FEF3C7", border: "1.5px solid #FCD34D" }}>
              <p className="font-bold mb-1" style={{ color: "#92400E" }}>Weak:</p>
              <p style={{ color: "#4B5563", lineHeight: 1.8 }}>"The house was big. The rooms were big. The garden was big. Everything about the house was big."</p>
            </div>
            <div className="rounded-2xl p-5 mb-4" style={{ background: "#DCFCE7", border: "1.5px solid #86EFAC" }}>
              <p className="font-bold mb-1" style={{ color: "#166534" }}>Stronger:</p>
              <p style={{ color: "#4B5563", lineHeight: 1.8 }}>"The house was vast. The rooms were cavernous. The garden sprawled for acres. Everything about the estate felt enormous."</p>
            </div>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              The second version says the same thing with more precision and impact. Each synonym (<em>vast, cavernous, sprawled, enormous</em>) carries a slightly different connotation, making the description feel more vivid.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>The Most Overused Words (and Better Alternatives)</h2>
            <div className="space-y-4">
              {[
                { word: "Good", alts: "excellent, outstanding, admirable, worthy, solid, fine" },
                { word: "Bad", alts: "terrible, dreadful, awful, poor, substandard, dire" },
                { word: "Big", alts: "large, massive, enormous, vast, substantial, considerable" },
                { word: "Small", alts: "tiny, compact, modest, slight, minor, miniature" },
                { word: "Said", alts: "replied, stated, declared, noted, explained, remarked" },
                { word: "Happy", alts: "delighted, content, pleased, thrilled, overjoyed, cheerful" },
                { word: "Sad", alts: "melancholy, dejected, sorrowful, disheartened, glum, forlorn" },
                { word: "Interesting", alts: "fascinating, compelling, intriguing, captivating, engaging" },
              ].map(({ word, alts }) => (
                <div key={word} className="flex gap-4 items-start">
                  <span className="font-black text-sm px-3 py-1 rounded-full shrink-0" style={{ background: "#EDE9FE", color: "#6B21A8" }}>{word}</span>
                  <span style={{ color: "#4B5563", lineHeight: 1.8, fontSize: "0.9rem" }}>{alts}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>When NOT to Use a Synonym</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Not every word should be varied. Some contexts demand the exact same word — and swapping it for a synonym causes confusion:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <li><strong>Technical writing and instructions.</strong> If a manual says "press the button," changing it to "press the switch" or "push the control" creates ambiguity about what the reader should be touching.</li>
              <li><strong>Legal and formal documents.</strong> Specific terms have specific legal meanings. "Shall" and "must" are not interchangeable in contracts. Neither are "warranty" and "guarantee."</li>
              <li><strong>Brand or product names.</strong> Never substitute a brand name with a synonym. "Coca-Cola" and "a cola beverage" are not the same in context.</li>
              <li><strong>Reinforcing a key concept.</strong> In academic writing, repeating a core term (e.g., "photosynthesis") is correct — it signals that the same concept is being discussed. Varying it with synonyms risks suggesting you mean something different.</li>
            </ul>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>How Antonyms Improve Your Writing</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Antonyms are most powerful when used to create contrast. A sentence that juxtaposes opposites creates immediate tension and clarity:
            </p>
            <div className="rounded-2xl p-5 mb-4" style={{ background: "#F5F0FF", border: "1px solid #DDD6FE" }}>
              <p style={{ color: "#4B5563", lineHeight: 1.8, fontStyle: "italic" }}>"The room was simultaneously familiar and strange, warm and cold, welcoming and threatening."</p>
            </div>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Antonyms are also useful in argument writing — to define what something is by clearly stating what it is <em>not</em>. "This approach is not passive but active, not vague but precise."
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Are synonyms always interchangeable?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>No. Synonyms share a core meaning but often have different connotations, formality levels, and idiomatic uses. "Thin" and "slender" are synonyms, but calling someone slender is a compliment while calling them thin can sound like a criticism. Always consider connotation, not just definition.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>How do I know if a synonym fits the context?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Read the sentence aloud with the replacement word. If it sounds natural and means what you intend, it works. If it sounds stiff or slightly "off," trust that instinct — look for another option. Reading widely is the best long-term way to build contextual vocabulary intuition.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>What's the difference between a thesaurus and a dictionary?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>A dictionary defines words. A thesaurus groups words by meaning and lists synonyms and antonyms. For writing, both are useful together — the thesaurus gives you options, and the dictionary confirms the nuance of each option before you commit.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, #6B21A8, #A855F7)" }}>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>Find Better Words Instantly</h2>
            <p className="mb-6" style={{ color: "#DDD6FE" }}>Search any word to get synonyms, antonyms, and related terms — free, no login required.</p>
            <a href="/tools/word-finder/index.html" style={{ background: "#FF9800", color: "#fff", fontWeight: 900, padding: "14px 36px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem", display: "inline-block", boxShadow: "0 4px 0 0 #c47600" }}>Open Word Finder →</a>
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
