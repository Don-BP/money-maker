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
      <div className="min-h-screen" style={{ background: "#F5F0FF" }}>
        {/* Header */}
        <header className="w-full py-10 flex flex-col items-center" style={{ background: "#F5F0FF" }}>
          <h1 className="font-black text-4xl tracking-tight mb-2" style={{ color: "#5B21B6" }}>
            ZenithTools
          </h1>
          <p className="text-base font-medium" style={{ color: "#7C3AED" }}>
            Free, instant online utilities — no login required.
          </p>
        </header>

        {/* Tool Grid */}
        <main className="max-w-5xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <a
                key={tool.id}
                href={tool.path}
                className="flex flex-col bg-white rounded-3xl overflow-hidden no-underline"
                style={{ border: "1.5px solid #EDE9FE" }}
              >
                <div
                  className="flex items-center justify-center py-6"
                  style={{ background: "#EDE9FE" }}
                >
                  <span className="text-5xl">{tool.icon}</span>
                </div>
                <div className="flex flex-col flex-grow px-7 py-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-black text-xl" style={{ color: "#1C1C1C" }}>
                      {tool.name}
                    </h2>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-full"
                      style={{ background: "#EDE9FE", color: "#7C3AED" }}
                    >
                      {tool.badge}
                    </span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: "#6B7280" }}>
                    {tool.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-8 flex flex-col items-center gap-2" style={{ background: "#F5F0FF" }}>
          <p className="text-sm" style={{ color: "#7C3AED" }}>
            © 2026 ZenithTools
          </p>
          <div className="flex gap-4 text-sm">
            <a href="/legal/privacy" style={{ color: "#7C3AED" }}>Privacy</a>
            <a href="/legal/terms" style={{ color: "#7C3AED" }}>Terms</a>
            <a href="/legal/cookies" style={{ color: "#7C3AED" }}>Cookies</a>
          </div>
        </footer>
      </div>
    </>
  );
}
