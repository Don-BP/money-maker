import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiragana vs Katakana: A Complete Beginner's Guide to Japanese Writing",
  description: "Learn the difference between hiragana and katakana, which to learn first, and how romaji conversion works. The essential guide for Japanese beginners.",
  alternates: { canonical: "https://dokidokitools.vercel.app/guides/japanese-writing-guide" },
  openGraph: {
    title: "Hiragana vs Katakana: A Complete Beginner's Guide",
    description: "Understand the two Japanese phonetic alphabets, when each is used, and how to start learning them today.",
    url: "https://dokidokitools.vercel.app/guides/japanese-writing-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hiragana vs Katakana: A Complete Beginner's Guide to Japanese Writing",
  "description": "Understand the difference between hiragana and katakana, which to study first, and how romaji helps beginners.",
  "author": { "@type": "Organization", "name": "DokiDokiTools" },
  "publisher": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" },
  "mainEntityOfPage": "https://dokidokitools.vercel.app/guides/japanese-writing-guide",
};

export default function JapaneseWritingGuidePage() {
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
            <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4" style={{ color: "#fff" }}>Hiragana vs Katakana: A Beginner's Guide</h1>
            <p style={{ color: "#DDD6FE" }} className="text-lg">Everything you need to know about Japan's two phonetic alphabets — and which one to learn first.</p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-12">

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>What is Romaji?</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Before diving into hiragana and katakana, it helps to understand <strong>romaji</strong> — the system of writing Japanese sounds using the Roman (Latin) alphabet. When you see "sushi," "ninja," or "Tokyo" written in English letters, that's romaji. It's the bridge between the Japanese sound system and the alphabet most Western learners already know.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Romaji is not a writing system used in Japan — you won't see it in newspapers or books. But it's enormously useful for beginners as a stepping stone. Once you know which Japanese sounds map to which romaji, you can start converting them into real Japanese script: hiragana and katakana.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>What is Hiragana?</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Hiragana (ひらがな) is the primary phonetic alphabet of the Japanese language. It consists of <strong>46 basic characters</strong>, each representing a syllable sound such as <em>ka</em> (か), <em>mi</em> (み), or <em>su</em> (す). Hiragana is used to write:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <li>Native Japanese words that don't have kanji (Chinese-derived characters)</li>
              <li>Grammatical particles — the small words like <em>wa</em> (は), <em>ga</em> (が), and <em>de</em> (で) that connect sentences</li>
              <li>Verb and adjective endings that change based on tense or politeness</li>
              <li>Children's books and beginner texts, often alongside kanji with pronunciation guides (called furigana)</li>
            </ul>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              If you can only learn one Japanese writing system, hiragana is the one. It appears in virtually every piece of written Japanese and is the foundation everything else is built on.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>What is Katakana?</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Katakana (カタカナ) represents the exact same 46 sounds as hiragana, but uses a different, more angular set of characters. While hiragana has rounded, flowing strokes, katakana is sharper and more geometric. The key difference isn't the sounds — it's <strong>when</strong> each is used.
            </p>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>Katakana is used for:</p>
            <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <li><strong>Foreign loanwords</strong> — words borrowed from other languages. "Computer" becomes コンピューター (<em>konpyuutaa</em>). "Coffee" becomes コーヒー (<em>koohii</em>).</li>
              <li><strong>Foreign names</strong> — names of people and places outside Japan are written in katakana. "John" → ジョン. "London" → ロンドン.</li>
              <li><strong>Onomatopoeia and sound effects</strong> — especially in manga and anime, where sounds like <em>boom</em> or <em>whoosh</em> appear as katakana</li>
              <li><strong>Technical and scientific terms</strong> — biology, medicine, and technology often use katakana for specialist vocabulary</li>
            </ul>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              If you're a fan of anime, manga, or Japanese gaming, you'll encounter katakana constantly — character names, attack names, and foreign references are almost always written in katakana.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Which Should You Learn First?</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <strong>Learn hiragana first.</strong> Almost every Japanese learning resource — Tofugu, JapanesePod101, Genki textbooks — agrees on this. Hiragana appears in more contexts, is used more frequently in beginner texts, and gives you a stronger foundation for grammar.
            </p>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              With focused study, most people can learn all 46 hiragana characters in <strong>1–2 weeks</strong>. After that, katakana takes another week or two because you already know the sounds — you're just learning a new visual shape for each one.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              A good method: learn 5–10 characters per day using flashcards or a spaced repetition app like Anki. Write each character by hand repeatedly — the physical act of writing dramatically improves retention.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>How a Romaji Converter Helps You Learn</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              When you're learning kana (the collective term for hiragana and katakana), a romaji converter lets you type familiar English sounds and instantly see the Japanese characters they correspond to. This is far faster than looking up each character in a table.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              For example, type "watashi wa gakusei desu" and see わたしはがくせいです appear instantly. You can practise writing your name, translate anime titles, or just explore how Japanese syllables work. It's a hands-on way to build familiarity with the script before you've fully memorised every character.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Is hiragana or katakana harder to learn?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Most learners find katakana slightly harder because the characters look more similar to each other. However, since the sounds are identical to hiragana, once you know hiragana the sounds are already familiar — you're only learning new shapes.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Do I need to learn kanji too?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Kanji (Chinese-origin characters) is the third writing system and is essential for reading adult Japanese text. However, you can hold a basic conversation and read beginner content using only hiragana and katakana. Start with kana, then tackle kanji gradually — there are over 2,000 common-use kanji, so it's a long-term project.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Why does Japanese use three writing systems?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Japanese developed over centuries absorbing Chinese characters (kanji), then created hiragana and katakana to represent sounds that couldn't be expressed with kanji alone. Modern written Japanese uses all three — often in the same sentence — because each system serves a distinct purpose.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Can I type Japanese on my phone?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Yes. On both iOS and Android, you can add a Japanese keyboard in settings. It uses romaji or a kana flick input method to produce hiragana and katakana characters. Most phones also auto-suggest kanji once you've typed the kana.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, #6B21A8, #A855F7)" }}>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>Try the Romaji to Kana Converter</h2>
            <p className="mb-6" style={{ color: "#DDD6FE" }}>Type romaji and instantly see hiragana or katakana. Free, instant, no login required.</p>
            <a href="/tools/romaji-to-kana/index.html" style={{ background: "#FF9800", color: "#fff", fontWeight: 900, padding: "14px 36px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem", display: "inline-block", boxShadow: "0 4px 0 0 #c47600" }}>Open Romaji Converter →</a>
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
