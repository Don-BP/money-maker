import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Guides & How-To Articles — DokiDokiTools",
  description: "Practical guides on gaming usernames, Japanese writing, recipe scaling, IP addresses, word search puzzles, and better vocabulary. Free articles from DokiDokiTools.",
  alternates: { canonical: "https://dokidokitools.vercel.app/guides" },
  openGraph: {
    title: "Free Guides & How-To Articles — DokiDokiTools",
    description: "Practical how-to guides covering gaming, cooking, language learning, writing, networking, and more.",
    url: "https://dokidokitools.vercel.app/guides",
  },
};

const guides = [
  {
    slug: "username-guide",
    icon: "✏️",
    title: "How to Create the Perfect Gaming Username",
    description: "Tips on style, length, and uniqueness — plus what to avoid when picking a handle for Steam, Discord, or any platform.",
    tool: "Username Generator",
    toolPath: "/tools/username-generator/index.html",
  },
  {
    slug: "japanese-writing-guide",
    icon: "🈳",
    title: "Hiragana vs Katakana: A Beginner's Guide",
    description: "Understand Japan's two phonetic alphabets, when each is used, and which to learn first as a Japanese beginner.",
    tool: "Romaji Converter",
    toolPath: "/tools/romaji-to-kana/index.html",
  },
  {
    slug: "recipe-scaling-guide",
    icon: "🍳",
    title: "How to Scale Any Recipe Without Ruining It",
    description: "Kitchen math explained — which ingredients don't scale linearly, how to adjust cooking times, and common mistakes to avoid.",
    tool: "Recipe Scaler",
    toolPath: "/tools/recipe-scaler/index.html",
  },
  {
    slug: "ip-address-guide",
    icon: "🌐",
    title: "What is a Public IP Address?",
    description: "A plain-English explanation of IPs, the difference between public and private addresses, IPv4 vs IPv6, and when a VPN actually helps.",
    tool: "Network Inspector",
    toolPath: "/tools/ip-checker/index.html",
  },
  {
    slug: "word-search-guide",
    icon: "🔤",
    title: "How to Make a Word Search Puzzle",
    description: "Everything you need to create great word searches — word selection, grid sizing, difficulty levels, and 10 great use cases.",
    tool: "Word Search Maker",
    toolPath: "/tools/word-search/index.html",
  },
  {
    slug: "synonym-guide",
    icon: "🔍",
    title: "How to Find Better Words",
    description: "A writer's guide to synonyms and antonyms — when to use them, when not to, and the most overused words with better alternatives.",
    tool: "Word Finder",
    toolPath: "/tools/word-finder/index.html",
  },
];

export default function GuidesPage() {
  return (
    <div style={{ background: "#F5F0FF", minHeight: "100vh", fontFamily: "var(--font-nunito), sans-serif" }}>

      <nav style={{ background: "#6B21A8", boxShadow: "0 4px 0 0 #4C1272" }} className="w-full h-16 flex items-center px-6">
        <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
          <a href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/Dokidoki tools wide logo.png" alt="DokiDokiTools" style={{ height: "40px", width: "auto" }} />
          </a>
          <span style={{ color: "#C4B5FD", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Free Guides</span>
        </div>
      </nav>

      <header style={{ background: "linear-gradient(160deg, #6B21A8 0%, #7C3AED 60%, #A855F7 100%)" }} className="w-full py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black mt-2 mb-4" style={{ color: "#fff" }}>Free Guides & How-To Articles</h1>
          <p style={{ color: "#DDD6FE" }} className="text-lg">Practical articles on topics covered by our tools — written to actually be useful, not just fill space.</p>
        </div>
      </header>

      <main className="w-full max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <a
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-3xl overflow-hidden no-underline flex flex-col"
              style={{ background: "#fff", border: "1.5px solid #DDD6FE", boxShadow: "0 4px 0 0 #DDD6FE", transition: "transform 0.15s", textDecoration: "none" }}
            >
              <div className="flex items-center justify-center py-8" style={{ background: "linear-gradient(135deg, #6B21A8, #A855F7)" }}>
                <span style={{ fontSize: "3rem" }}>{guide.icon}</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg font-black mb-2" style={{ color: "#1C1C1C" }}>{guide.title}</h2>
                <p className="text-sm mb-4 flex-grow" style={{ color: "#6B7280", lineHeight: 1.7 }}>{guide.description}</p>
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full self-start" style={{ background: "#EDE9FE", color: "#6B21A8" }}>
                  Related: {guide.tool}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-3xl p-8 text-center" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
          <h2 className="text-2xl font-black mb-3" style={{ color: "#6B21A8" }}>Ready to use the tools?</h2>
          <p className="mb-6" style={{ color: "#4B5563" }}>All tools are free, instant, and run entirely in your browser. No account needed.</p>
          <a href="/" style={{ background: "#6B21A8", color: "#fff", fontWeight: 900, padding: "14px 36px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem", display: "inline-block", boxShadow: "0 4px 0 0 #4C1272" }}>← Back to All Tools</a>
        </div>
      </main>

      <footer className="w-full py-10 flex flex-col items-center gap-3" style={{ background: "#1E0A3C" }}>
        <p className="text-xs font-medium" style={{ color: "#A78BFA" }}>© 2026 DokiDokiTools — Free online utilities</p>
        <div className="flex gap-6 text-xs font-bold">
          <a href="/" style={{ color: "#C4B5FD" }}>Home</a>
          <a href="/legal/privacy" style={{ color: "#C4B5FD" }}>Privacy</a>
          <a href="/legal/terms" style={{ color: "#C4B5FD" }}>Terms</a>
        </div>
      </footer>
    </div>
  );
}
