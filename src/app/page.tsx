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
      <style>{`
        .tool-card { transition: transform 0.15s, box-shadow 0.15s; }
        .tool-card:hover { transform: translateY(-3px); box-shadow: 0 8px 0 0 #C4B5FD !important; }

        @keyframes logo-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes logo-glow {
          0%   { filter: drop-shadow(0 0 18px #EF4444cc) drop-shadow(0 4px 36px #EF444440); }
          25%  { filter: drop-shadow(0 0 18px #FF9800cc) drop-shadow(0 4px 36px #FF980040); }
          50%  { filter: drop-shadow(0 0 18px #22C55Ecc) drop-shadow(0 4px 36px #22C55E40); }
          75%  { filter: drop-shadow(0 0 18px #3B82F6cc) drop-shadow(0 4px 36px #3B82F640); }
          100% { filter: drop-shadow(0 0 18px #EF4444cc) drop-shadow(0 4px 36px #EF444440); }
        }
        @keyframes logo-shimmer {
          0%        { transform: translateX(-160%); }
          55%, 100% { transform: translateX(260%); }
        }
        @keyframes logo-wobble {
          0%,100% { transform: rotate(0deg) scale(1); }
          15%     { transform: rotate(-6deg) scale(1.05); }
          30%     { transform: rotate(6deg)  scale(1.07); }
          45%     { transform: rotate(-4deg) scale(1.06); }
          60%     { transform: rotate(3deg)  scale(1.05); }
          75%     { transform: rotate(-2deg) scale(1.04); }
        }
        @keyframes logo-glow-burst {
          0%   { filter: drop-shadow(0 0 44px #FF9800ff) drop-shadow(0 0 88px #A855F7cc); }
          50%  { filter: drop-shadow(0 0 60px #FF9800ff) drop-shadow(0 0 120px #A855F7ee); }
          100% { filter: drop-shadow(0 0 22px #FF9800bb) drop-shadow(0 0 55px #A855F7bb); }
        }

        /* outer: carries float + color glow; no clipping so drop-shadow bleeds out */
        .logo-hero-wrap {
          display: inline-block;
          animation: logo-float 3s ease-in-out infinite, logo-glow 5s linear infinite;
          cursor: pointer;
        }
        /* inner: clip-path clips shimmer reliably even with filter on ancestor */
        .logo-shimmer-clip {
          display: inline-block;
          position: relative;
          clip-path: inset(0);
        }
        .logo-shimmer-clip::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%);
          animation: logo-shimmer 4s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }
        .logo-hero-img {
          display: block;
        }
        .logo-hero-wrap:hover {
          animation: logo-wobble 0.6s ease-out forwards, logo-glow-burst 0.6s ease-out forwards;
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col" style={{ background: "#F5F0FF", fontFamily: "var(--font-nunito), var(--font-fredoka), sans-serif" }}>

        {/* Nav */}
        <nav style={{ background: "#6B21A8", boxShadow: "0 4px 0 0 #4C1272" }} className="w-full h-16 flex items-center px-6 z-20">
          <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
            <span className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/Dokidoki tools wide logo.png" alt="DokiDokiTools" style={{ height: "40px", width: "auto" }} />
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

          <div className="relative z-10 flex flex-col items-center text-center px-4 pb-8 sm:pb-16">
            <h1 className="mb-5">
              <span className="logo-hero-wrap">
                <span className="logo-shimmer-clip">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="logo-hero-img" src="/assets/Dokidoki tools wide logo.png" alt="DokiDokiTools" style={{ height: "clamp(60px, 18vw, 110px)", width: "auto", maxWidth: "90vw", display: "block" }} />
                </span>
              </span>
            </h1>
            <p className="text-lg font-bold mb-2" style={{ color: "#E9D5FF" }}>
              Free, instant online utilities
            </p>
            <p className="text-sm font-medium" style={{ color: "#C4B5FD" }}>
              No login. Works in your browser.
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
        <main className="w-full max-w-5xl mx-auto px-4 pt-4 sm:pt-10 pb-12 sm:pb-24 flex-grow">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {tools.map((tool) => (
              <a
                key={tool.id}
                href={tool.path}
                className="tool-card flex flex-col rounded-3xl overflow-hidden no-underline"
                style={{
                  background: "#fff",
                  border: "1.5px solid #DDD6FE",
                  boxShadow: "0 4px 0 0 #DDD6FE",
                }}
              >
                {/* Card top — purple gradient with icon */}
                <div
                  className="flex items-center justify-center py-4 sm:py-8 relative"
                  style={{ background: "linear-gradient(135deg, #6B21A8 0%, #A855F7 100%)" }}
                >
                  <span className="text-3xl sm:text-5xl">{tool.icon}</span>
                  <span
                    className="absolute top-2 right-2 text-xs font-black px-2 py-0.5 rounded-full"
                    style={{ background: "#FF9800", color: "#fff" }}
                  >
                    {tool.badge}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-grow px-3 py-3 sm:px-6 sm:py-5">
                  <h2 className="font-black text-sm sm:text-lg mb-1" style={{ color: "#1C1C1C" }}>
                    {tool.name}
                  </h2>
                  <p className="hidden sm:block text-sm font-medium mb-5 flex-grow" style={{ color: "#6B7280" }}>
                    {tool.description}
                  </p>
                  <div
                    className="w-full text-center text-xs sm:text-sm font-black uppercase tracking-widest py-2 sm:py-3 rounded-2xl mt-2 sm:mt-0"
                    style={{ background: "#6B21A8", color: "#fff", boxShadow: "0 4px 0 0 #4C1272" }}
                  >
                    Open →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>

        {/* About / Content Section */}
        <section className="w-full max-w-5xl mx-auto px-4 pb-20">
          <div className="rounded-3xl p-8 md:p-12" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="font-black text-2xl mb-4" style={{ color: "#6B21A8" }}>What is DokiDokiTools?</h2>
            <p className="text-base mb-4" style={{ color: "#4B5563" }}>
              DokiDokiTools is a collection of free, browser-based utility tools designed to help with everyday tasks — no account, no download, no cost. Every tool runs entirely in your browser, meaning your data never leaves your device.
            </p>
            <p className="text-base mb-8" style={{ color: "#4B5563" }}>
              Whether you are a student, writer, gamer, cook, or developer, DokiDokiTools has something for you. Our tools are fast, mobile-friendly, and built to work without any technical knowledge required.
            </p>

            <h2 className="font-black text-2xl mb-4" style={{ color: "#6B21A8" }}>Our Free Tools</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>Username Generator</h3>
                <p style={{ color: "#4B5563" }}>Generate unique, creative usernames for gaming, social media, or any online platform. Choose from gaming, fantasy, or minimal styles. Perfect for Steam, Discord, Reddit, and more.</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>Word Finder (Synonym &amp; Antonym Finder)</h3>
                <p style={{ color: "#4B5563" }}>Find synonyms, antonyms, and rhyming words instantly. Great for writers, students, poets, crossword solvers, and anyone who wants to expand their vocabulary or avoid repetition in writing.</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>Recipe Scaler</h3>
                <p style={{ color: "#4B5563" }}>Scale any recipe up or down to feed any number of people. Double a recipe for a party, halve it for a single serving, or triple it for a crowd. Supports US Imperial and Metric unit conversions.</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>Romaji to Kana Converter</h3>
                <p style={{ color: "#4B5563" }}>Convert English Romaji text to Japanese Hiragana and Katakana instantly. Ideal for Japanese learners, anime fans, or anyone who needs to write Japanese phonetics without a Japanese keyboard.</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>Network Inspector (IP Address Checker)</h3>
                <p style={{ color: "#4B5563" }}>Instantly look up your public IP address, Internet Service Provider (ISP), and approximate location. Useful for troubleshooting network issues, checking if your VPN is working, or verifying your online identity.</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>Word Search Maker</h3>
                <p style={{ color: "#4B5563" }}>Build custom word search puzzles with your own words and export them to PDF for printing. Perfect for teachers, parents, classrooms, birthday parties, and family game nights.</p>
              </div>
            </div>

            <h2 className="font-black text-2xl mb-4" style={{ color: "#6B21A8" }}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>Are all the tools really free?</h3>
                <p style={{ color: "#4B5563" }}>Yes. Every tool on DokiDokiTools is 100% free to use with no hidden fees, subscriptions, or premium tiers. No account or login is ever required.</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>Do the tools work on mobile?</h3>
                <p style={{ color: "#4B5563" }}>Yes, all tools are fully responsive and work on smartphones and tablets. They are designed to work smoothly on any screen size without needing an app.</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>Is my data private?</h3>
                <p style={{ color: "#4B5563" }}>All tools run entirely in your browser. Text you type, recipes you enter, and words you search are never sent to or stored on any server. Your data stays on your device.</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#1C1C1C" }}>Do I need to install anything?</h3>
                <p style={{ color: "#4B5563" }}>No installation required. Open any tool in your browser and start using it immediately. Works on Chrome, Firefox, Safari, and Edge.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-10 flex flex-col items-center gap-3" style={{ background: "#1E0A3C" }}>
          <span className="flex items-center gap-2 text-base font-black" style={{ color: "#fff" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/dokidokitools_logo.png" alt="" style={{ height: "28px", width: "auto" }} />
            DokiDoki<span style={{ color: "#FF9800" }}>Tools</span>
          </span>
          <p className="text-xs font-medium" style={{ color: "#A78BFA" }}>
            © 2026 DokiDokiTools — Free online utilities
          </p>
          <div className="flex gap-6 text-xs font-bold">
            <a href="/legal/privacy" style={{ color: "#C4B5FD" }}>Privacy</a>
            <a href="/legal/terms" style={{ color: "#C4B5FD" }}>Terms</a>
            <a href="/legal/cookies" style={{ color: "#C4B5FD" }}>Cookies</a>
          </div>
        </footer>
      </div>
    </>
  );
}
