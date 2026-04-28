const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "ZenithTools — Free Online Utilities",
  "url": "https://zenithtools.vercel.app",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Username Generator", "url": "https://zenithtools.vercel.app/tools/username-generator/index.html" },
    { "@type": "ListItem", "position": 2, "name": "Word Finder", "url": "https://zenithtools.vercel.app/tools/word-finder/index.html" },
    { "@type": "ListItem", "position": 3, "name": "Recipe Scaler", "url": "https://zenithtools.vercel.app/tools/recipe-scaler/index.html" },
    { "@type": "ListItem", "position": 4, "name": "Romaji to Kana", "url": "https://zenithtools.vercel.app/tools/romaji-to-kana/index.html" },
    { "@type": "ListItem", "position": 5, "name": "Network Inspector", "url": "https://zenithtools.vercel.app/tools/ip-checker/index.html" },
    { "@type": "ListItem", "position": 6, "name": "Word Search Maker", "url": "https://zenithtools.vercel.app/tools/word-search/index.html" }
  ]
};

const tools = [
  {
    id: "username-generator",
    name: "Username Generator",
    description: "Generate unique, creative usernames instantly.",
    icon: "✏️",
    path: "/tools/username-generator/index.html",
    badge: "01",
  },
  {
    id: "word-finder",
    name: "Word Finder",
    description: "Find words by pattern, length, or letters for puzzles and games.",
    icon: "🔍",
    path: "/tools/word-finder/index.html",
    badge: "02",
  },
  {
    id: "recipe-scaler",
    name: "Recipe Scaler",
    description: "Scale any recipe up or down to feed any number of people.",
    icon: "🍳",
    path: "/tools/recipe-scaler/index.html",
    badge: "03",
  },
  {
    id: "romaji-to-kana",
    name: "Romaji to Kana",
    description: "Convert romaji text to hiragana or katakana instantly.",
    icon: "🈳",
    path: "/tools/romaji-to-kana/index.html",
    badge: "04",
  },
  {
    id: "ip-checker",
    name: "Network Inspector",
    description: "Look up your public IP address, ISP, and location.",
    icon: "🌐",
    path: "/tools/ip-checker/index.html",
    badge: "05",
  },
  {
    id: "word-search",
    name: "Word Search Maker",
    description: "Build custom word search puzzles and export to PDF instantly.",
    icon: "🔤",
    path: "/tools/word-search/index.html",
    badge: "06",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col" style={{ background: "#F5F0FF", fontFamily: "var(--font-nunito), var(--font-fredoka), sans-serif" }}>

        {/* Nav */}
        <nav style={{ background: "#6B21A8", boxShadow: "0 4px 0 0 #4C1272" }} className="w-full h-16 flex items-center px-6 z-20">
          <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
            <span className="text-2xl font-black tracking-tight" style={{ color: "#fff" }}>
              Zenith<span style={{ color: "#FF9800" }}>Tools</span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C4B5FD" }}>
              Free Utilities
            </span>
          </div>
        </nav>

        {/* Hero */}
        <header className="relative w-full overflow-hidden flex flex-col items-center pt-14 pb-0" style={{ background: "linear-gradient(160deg, #6B21A8 0%, #7C3AED 60%, #A855F7 100%)" }}>
          {/* Orange decorative blob */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-60px",
              right: "-80px",
              width: "320px",
              height: "320px",
              background: "radial-gradient(circle, #FF9800 0%, #F97316 60%, transparent 75%)",
              opacity: 0.18,
              borderRadius: "50%",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "-60px",
              width: "220px",
              height: "220px",
              background: "radial-gradient(circle, #FF9800 0%, transparent 70%)",
              opacity: 0.12,
              borderRadius: "50%",
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center px-4 pb-16">
            <div
              className="inline-block text-white text-4xl md:text-5xl font-black py-3 px-8 rounded-2xl mb-5 tracking-tight"
              style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}
            >
              ZenithTools
            </div>
            <p className="text-lg font-bold mb-2" style={{ color: "#E9D5FF" }}>
              Free, instant online utilities
            </p>
            <p className="text-sm font-medium" style={{ color: "#C4B5FD" }}>
              No login. No ads. Works in your browser.
            </p>
            <div className="flex gap-3 mt-6">
              <span className="text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full" style={{ background: "#FF9800", color: "#fff" }}>
                6 Free Tools
              </span>
              <span className="text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.15)", color: "#E9D5FF", border: "1px solid rgba(255,255,255,0.2)" }}>
                100% Browser-Based
              </span>
            </div>
          </div>

          {/* Wave SVG */}
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            style={{ display: "block", marginBottom: "-2px" }}
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
              fill="#F5F0FF"
            />
          </svg>
        </header>

        {/* Tool Grid */}
        <main className="w-full max-w-5xl mx-auto px-4 pt-10 pb-24 flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <a
                key={tool.id}
                href={tool.path}
                className="flex flex-col rounded-3xl overflow-hidden no-underline group"
                style={{
                  background: "#fff",
                  border: "1.5px solid #DDD6FE",
                  boxShadow: "0 4px 0 0 #DDD6FE",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 0 0 #C4B5FD";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 0 0 #DDD6FE";
                }}
              >
                {/* Card top — purple gradient with icon */}
                <div
                  className="flex items-center justify-center py-8 relative"
                  style={{ background: "linear-gradient(135deg, #6B21A8 0%, #A855F7 100%)" }}
                >
                  <span className="text-5xl">{tool.icon}</span>
                  <span
                    className="absolute top-3 right-3 text-xs font-black px-2 py-1 rounded-full"
                    style={{ background: "#FF9800", color: "#fff" }}
                  >
                    {tool.badge}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-grow px-6 py-5">
                  <h2 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>
                    {tool.name}
                  </h2>
                  <p className="text-sm font-medium mb-5 flex-grow" style={{ color: "#6B7280" }}>
                    {tool.description}
                  </p>
                  <div
                    className="w-full text-center text-sm font-black uppercase tracking-widest py-3 rounded-2xl"
                    style={{ background: "#6B21A8", color: "#fff", boxShadow: "0 4px 0 0 #4C1272" }}
                  >
                    Open Tool →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-10 flex flex-col items-center gap-3" style={{ background: "#1E0A3C" }}>
          <span className="text-base font-black" style={{ color: "#fff" }}>
            Zenith<span style={{ color: "#FF9800" }}>Tools</span>
          </span>
          <p className="text-xs font-medium" style={{ color: "#A78BFA" }}>
            © 2026 ZenithTools — Free online utilities
          </p>
          <div className="flex gap-6 text-xs font-bold" style={{ color: "#C4B5FD" }}>
            <a href="/legal/privacy" style={{ color: "#C4B5FD" }}>Privacy</a>
            <a href="/legal/terms" style={{ color: "#C4B5FD" }}>Terms</a>
            <a href="/legal/cookies" style={{ color: "#C4B5FD" }}>Cookies</a>
          </div>
        </footer>
      </div>
    </>
  );
}
