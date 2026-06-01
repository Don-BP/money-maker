import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create the Perfect Gaming Username — Tips & Ideas",
  description: "Learn how to create a memorable gaming username for Steam, Discord, Reddit, and more. Tips on style, length, uniqueness, and availability — plus a free username generator.",
  alternates: { canonical: "https://dokidokitools.vercel.app/guides/username-guide" },
  openGraph: {
    title: "How to Create the Perfect Gaming Username",
    description: "Tips on creating a memorable, unique gaming username for any platform.",
    url: "https://dokidokitools.vercel.app/guides/username-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Create the Perfect Gaming Username",
  "description": "A complete guide to choosing a memorable, unique username for gaming, social media, and online platforms.",
  "author": { "@type": "Organization", "name": "DokiDokiTools" },
  "publisher": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" },
  "mainEntityOfPage": "https://dokidokitools.vercel.app/guides/username-guide",
};

export default function UsernameGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: "#F5F0FF", minHeight: "100vh", fontFamily: "var(--font-nunito), sans-serif" }}>

        <nav style={{ background: "#6B21A8", boxShadow: "0 4px 0 0 #4C1272" }} className="w-full h-16 flex items-center px-6">
          <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
            <a href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/Dokidoki tools wide logo.png" alt="DokiDokiTools" style={{ height: "40px", width: "auto" }} />
            </a>
            <a href="/guides" style={{ color: "#C4B5FD", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>← All Guides</a>
          </div>
        </nav>

        <header style={{ background: "linear-gradient(160deg, #6B21A8 0%, #7C3AED 60%, #A855F7 100%)" }} className="w-full py-14 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span style={{ background: "#FF9800", color: "#fff", fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", padding: "4px 14px", borderRadius: "999px" }}>Guide</span>
            <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4" style={{ color: "#fff" }}>How to Create the Perfect Gaming Username</h1>
            <p style={{ color: "#DDD6FE" }} className="text-lg">Tips for picking a name that stands out on Steam, Discord, Reddit, and every platform you play on.</p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-12">

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Why Your Username Matters More Than You Think</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Your username is your identity online. It's the first thing another player sees when you join a lobby, leave a comment, or post in a community. A strong username is memorable, easy to type, and reflects something about who you are or what you play. A weak one — something like <em>xXGamer1999Xx</em> — dates you instantly and gets forgotten just as fast.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              The good news: creating a great username is a skill anyone can learn. This guide breaks down exactly what separates a forgettable handle from one that people remember.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#6B21A8" }}>The Three Username Styles</h2>

            <h3 className="text-xl font-black mb-2" style={{ color: "#1C1C1C" }}>1. Gaming / Edgy</h3>
            <p className="mb-5" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Works best for competitive multiplayer. Think short, punchy, and slightly intimidating. Words like <strong>Void, Blaze, Hex, Shadow, Cipher</strong> combine well with action words or numbers. Keep it under 12 characters so it fits neatly in leaderboards and kill-feed notifications. Avoid underscores in the middle — they break the visual flow on most platforms.
            </p>

            <h3 className="text-xl font-black mb-2" style={{ color: "#1C1C1C" }}>2. Fantasy / RPG</h3>
            <p className="mb-5" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Ideal for MMOs, tabletop-adjacent communities, and story-driven games. These usernames often draw from mythology, nature, or invented words. Combine two concepts: <strong>IronSage, MoonHarvest, StarWarden</strong>. Longer names work fine here — the audience expects something lore-flavored. Avoid numbers unless they're genuinely part of the name concept.
            </p>

            <h3 className="text-xl font-black mb-2" style={{ color: "#1C1C1C" }}>3. Minimal / Clean</h3>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Increasingly popular on platforms like Twitter, Reddit, and TikTok. One strong word, no numbers, no symbols. <strong>Arc, Nova, Wren, Kael, Lux</strong>. These names age well, are easy to remember, and work across every platform. The challenge is availability — the best minimal names are often taken, so you'll need variations or creative spellings.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#6B21A8" }}>7 Rules for a Great Username</h2>
            <ol className="space-y-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#1C1C1C" }}>1. Keep it under 15 characters.</strong> Short names display cleanly everywhere. Long names get truncated in game UIs and look cluttered in mentions.</li>
              <li><strong style={{ color: "#1C1C1C" }}>2. Make it pronounceable.</strong> If your friends can't say it out loud, they won't remember it. Random consonant strings ("xKzVqr") fail this test every time.</li>
              <li><strong style={{ color: "#1C1C1C" }}>3. Avoid trailing numbers as a fallback.</strong> "Shadow77" reads as "Shadow was taken and I gave up." If numbers are part of your identity, put them in the middle or use them meaningfully.</li>
              <li><strong style={{ color: "#1C1C1C" }}>4. Don't impersonate real people or brands.</strong> Usernames like "xXNinja_TwitchXx" or "NotElon" will get your account flagged or banned on most platforms.</li>
              <li><strong style={{ color: "#1C1C1C" }}>5. Think about cross-platform availability.</strong> Check whether the name is free on Steam, Discord, Reddit, and your other platforms before committing. Consistency builds recognition.</li>
              <li><strong style={{ color: "#1C1C1C" }}>6. Avoid dates and ages.</strong> "Jake2004" tells everyone your age and dates the name. It's fine now but will feel dated in five years.</li>
              <li><strong style={{ color: "#1C1C1C" }}>7. Test it in context.</strong> Say it out loud. Type it in a chat message. Imagine seeing it in a kill-feed or leaderboard. If it looks and sounds good there, it works.</li>
            </ol>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>How to Come Up With Ideas Fast</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Start with a theme word that means something to you — your favourite animal, a character from a game you love, a concept you're drawn to. Then layer in a modifier: a colour, a material, an action, or an adjective. <strong>SilverWolf. FrostEdge. NeonWarden.</strong>
            </p>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              You can also flip the structure: start with the modifier and put the concept after. <strong>WildFox. IronVeil. DawnStrike.</strong> This pattern consistently produces names that feel original without being random.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              If you're stuck, use a generator to spark ideas — not to copy a result directly, but to see combinations you wouldn't have thought of. You'll often find the perfect name is one small tweak away from something the generator suggested.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Can I use special characters in a username?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>It depends on the platform. Steam and Discord allow some symbols. Most platforms only allow letters, numbers, underscores, and hyphens. Stick to standard characters if you want maximum cross-platform compatibility.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>How do I check if a username is available?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Each platform has a registration or name-check step. For quick searches across multiple platforms, tools like Namecheckr let you search several at once. Always verify directly on the platform before committing.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Should my username be the same across all platforms?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>If you want a consistent online identity, yes. It makes it easier for friends to find you and builds a recognisable personal brand. If you prefer to keep communities separate, using slight variations (adding an underscore or abbreviating) is fine.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Is a username generator actually useful?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Yes — not for copying results directly, but for breaking creative blocks. Enter a theme word, browse what comes out, and use it as a springboard. Most people find the right name within the first two or three generations.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, #6B21A8, #A855F7)", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>Generate Your Username Now</h2>
            <p className="mb-6" style={{ color: "#DDD6FE" }}>Enter a theme word and get dozens of styled username ideas instantly — free, no login required.</p>
            <a href="/tools/username-generator/index.html" style={{ background: "#FF9800", color: "#fff", fontWeight: 900, padding: "14px 36px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem", display: "inline-block", boxShadow: "0 4px 0 0 #c47600" }}>Try the Username Generator →</a>
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
