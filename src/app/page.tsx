import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "ZenithTools",
      "url": "https://zenithtools.vercel.app",
      "description": "Free, fast, browser-based utility tools for gamers, writers, cooks, and developers.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://zenithtools.vercel.app/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "name": "ZenithTools",
      "url": "https://zenithtools.vercel.app",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "privacy@zenithtools.com",
        "contactType": "customer support"
      }
    },
    {
      "@type": "ItemList",
      "name": "ZenithTools Free Utility Tools",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Japan Converter — Romaji to Hiragana", "url": "https://zenithtools.vercel.app/tools/romaji-to-kana/index.html" },
        { "@type": "ListItem", "position": 2, "name": "Recipe Scaler Pro", "url": "https://zenithtools.vercel.app/tools/recipe-scaler/index.html" },
        { "@type": "ListItem", "position": 3, "name": "Lexicon Finder — Synonym & Antonym Tool", "url": "https://zenithtools.vercel.app/tools/word-finder/index.html" },
        { "@type": "ListItem", "position": 4, "name": "Identity Forge — Username Generator", "url": "https://zenithtools.vercel.app/tools/username-generator/index.html" },
        { "@type": "ListItem", "position": 5, "name": "Network Inspector — IP Address Checker", "url": "https://zenithtools.vercel.app/tools/ip-checker/index.html" }
      ]
    }
  ]
};

export default function Home() {
  const tools = [
    {
      id: "username",
      name: "Identity Forge",
      description: "Generate themed usernames and secure passwords instantly.",
      icon: "🛡️",
      path: "/tools/username-generator/index.html",
      badge: "01",
    },
    {
      id: "word-finder",
      name: "Lexicon Finder",
      description: "Find synonyms, antonyms, and rhyming words for any word.",
      icon: "✍️",
      path: "/tools/word-finder/index.html",
      badge: "02",
    },
    {
      id: "recipe-scaler",
      name: "Recipe Scaler Pro",
      description: "Scale any recipe up or down and convert units automatically.",
      icon: "🍳",
      path: "/tools/recipe-scaler/index.html",
      badge: "03",
    },
    {
      id: "romaji-kana",
      name: "Japan Converter",
      description: "Instant Romaji to Hiragana and Katakana conversion.",
      icon: "⛩️",
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
  ];

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ fontFamily: "'Outfit', 'Inter', sans-serif", backgroundColor: "#F8F5FF" }}
    >
      {/* Nav */}
      <nav style={{ backgroundColor: "#6B21A8" }} className="relative z-20 shadow-lg">
        <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: "4.5rem" }}>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md"
              style={{ background: "linear-gradient(135deg, #FF8A00, #FFB347)" }}
            >
              Z
            </div>
            <span className="text-white font-black text-xl tracking-wide">
              Zenith<span style={{ color: "#FFB347" }}>Tools</span>
            </span>
          </div>
          <Link
            href="/tools/shared/about.html"
            className="text-white/60 hover:text-white transition-colors text-sm font-semibold"
          >
            About
          </Link>
        </div>
      </nav>

      {/* Page header — compact, tools are the focus */}
      <div style={{ backgroundColor: "#6B21A8" }} className="relative overflow-hidden">
        {/* Orange blob */}
        <div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, #FF8A00 0%, #FF6B00 45%, transparent 70%)", opacity: 0.7 }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 text-center">
          <h1 className="text-white font-black text-4xl md:text-5xl mb-2" style={{ letterSpacing: "-0.02em" }}>
            Free Online <span style={{ color: "#FFB347" }}>Utility Tools</span>
          </h1>
          <p className="text-white/50 text-base font-medium">
            No login. No download. Works instantly in your browser.
          </p>
        </div>
        {/* Wave */}
        <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="w-full block" style={{ height: 32, fill: "#F8F5FF", display: "block" }}>
          <path d="M0,32 L0,0 Q360,32 720,16 Q1080,0 1440,24 L1440,32 Z" />
        </svg>
      </div>

      {/* Tools — the main event */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={tool.path}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-200 hover:-translate-y-1"
              style={{ border: "1.5px solid #EDE9FE" }}
            >
              {/* Card top — purple gradient with icon */}
              <div
                className="relative flex items-center justify-between px-7 py-6 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #6B21A8 0%, #7C3AED 100%)" }}
              >
                {/* Decorative orange blob */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full"
                  style={{ background: "radial-gradient(circle, #FF8A00 0%, transparent 70%)", opacity: 0.5 }}
                />
                {/* Icon */}
                <span className="text-5xl drop-shadow-lg relative z-10">{tool.icon}</span>
                {/* Badge */}
                <div
                  className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-lg flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #FF8A00, #FFB347)", color: "#fff" }}
                >
                  {tool.badge}
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-grow px-7 py-6">
                <h2 className="font-black text-xl mb-2" style={{ color: "#3B0764" }}>
                  {tool.name}
                </h2>
                <p className="text-sm font-medium leading-relaxed flex-grow" style={{ color: "#9B80C0" }}>
                  {tool.description}
                </p>

                {/* Launch button — full width, prominent */}
                <div
                  className="mt-6 w-full py-4 rounded-2xl font-black text-base text-center transition-all group-hover:brightness-110 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#6B21A8", color: "#ffffff" }}
                >
                  Open Tool
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}

          {/* Coming soon */}
          <div
            className="flex flex-col bg-white rounded-3xl overflow-hidden"
            style={{ border: "1.5px dashed #DDD6FE" }}
          >
            <div
              className="flex items-center justify-center py-6"
              style={{ background: "#F5F0FF" }}
            >
              <span className="text-5xl opacity-30">🚀</span>
            </div>
            <div className="flex flex-col flex-grow px-7 py-6">
              <h2 className="font-black text-xl mb-2" style={{ color: "#C4B5FD" }}>
                More Tools
              </h2>
              <p className="text-sm font-medium" style={{ color: "#DDD6FE" }}>
                New utilities coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <footer style={{ backgroundColor: "#6B21A8" }} className="mt-8">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/30 font-semibold text-sm">
            &copy; 2026 ZenithTools &bull; Free Utility Tools
          </span>
          <div className="flex gap-8 text-sm font-semibold text-white/30">
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/legal/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
