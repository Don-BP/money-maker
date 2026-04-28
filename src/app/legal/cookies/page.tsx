import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "DokiDokiTools Cookie Policy 窶・how we use essential, analytics, and advertising cookies including Google AdSense DoubleClick.",
  alternates: { canonical: "https://dokidokitools.vercel.app/legal/cookies" },
};

const cookieTable = [
  { name: "zt_consent",    type: "Essential",   purpose: "Stores your cookie consent preference",                        duration: "1 year"    },
  { name: "_ga, _gid",    type: "Analytics",   purpose: "Google Analytics 窶・aggregated traffic (no personal data)",     duration: "2yr / 1day"},
  { name: "__gads, IDE",  type: "Advertising", purpose: "Google AdSense / DoubleClick 窶・relevant ad serving",           duration: "13 months" },
  { name: "_gac_*",       type: "Advertising", purpose: "Google Ads conversion tracking",                               duration: "90 days"   },
  { name: "DSID, FLC",    type: "Advertising", purpose: "Google DoubleClick cross-site ad targeting",                   duration: "2 weeks"   },
];

const tagColors: Record<string, string> = {
  Essential:   "#22C55E",
  Analytics:   "#3B82F6",
  Advertising: "#FF8A00",
};

const NAV_STYLE = { backgroundColor: "#6B21A8" } as const;
const PAGE_BG   = { backgroundColor: "#F8F5FF" } as const;
const CARD      = { border: "1.5px solid #EDE9FE" } as const;
const BADGE     = { background: "linear-gradient(135deg,#FF8A00,#FFB347)" } as const;

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ ...PAGE_BG, fontFamily: "'Outfit','Inter',sans-serif" }}>

      <nav style={NAV_STYLE} className="shadow-lg">
        <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: "4.5rem" }}>
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md" style={BADGE}>Z</div>
            <span className="text-white font-black text-xl tracking-wide">Zenith<span style={{ color: "#FFB347" }}>Tools</span></span>
          </Link>
          <div className="flex gap-8 text-sm font-semibold text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </nav>

      <div style={NAV_STYLE} className="relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle,#FF8A00 0%,#FF6B00 45%,transparent 70%)", opacity: 0.6 }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-2">Legal</p>
          <h1 className="text-white font-black text-4xl md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
            Cookie <span style={{ color: "#FFB347" }}>Policy</span>
          </h1>
          <p className="text-white/40 text-sm font-medium mt-2">Last Updated: April 22, 2026</p>
        </div>
        <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="w-full block" style={{ height: 32, fill: "#F8F5FF" }}>
          <path d="M0,32 L0,0 Q360,32 720,16 Q1080,0 1440,24 L1440,32 Z" />
        </svg>
      </div>

      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12 flex flex-col gap-4">

        {/* What are cookies */}
        <div className="bg-white rounded-3xl p-7 shadow-sm" style={CARD}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xs shadow flex-shrink-0" style={BADGE}>01</div>
            <h2 className="font-black text-lg" style={{ color: "#3B0764" }}>What Are Cookies?</h2>
          </div>
          <p className="leading-relaxed font-medium text-sm" style={{ color: "#9B80C0" }}>
            Cookies are small text files placed on your device by websites you visit. DokiDokiTools uses cookies to keep our free tools running and to serve the advertisements that support them.
          </p>
        </div>

        {/* Cookie table */}
        <div className="bg-white rounded-3xl p-7 shadow-sm overflow-x-auto" style={CARD}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xs shadow flex-shrink-0" style={BADGE}>02</div>
            <h2 className="font-black text-lg" style={{ color: "#3B0764" }}>Cookies We Use</h2>
          </div>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: "#6B21A8" }} className="text-white">
                <th className="p-3 text-left font-black rounded-tl-xl">Cookie</th>
                <th className="p-3 text-left font-black">Type</th>
                <th className="p-3 text-left font-black">Purpose</th>
                <th className="p-3 text-left font-black rounded-tr-xl">Duration</th>
              </tr>
            </thead>
            <tbody>
              {cookieTable.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #EDE9FE" }}>
                  <td className="p-3"><code className="font-mono text-xs px-2 py-0.5 rounded-lg" style={{ backgroundColor: "#F5F0FF", color: "#6B21A8" }}>{row.name}</code></td>
                  <td className="p-3">
                    <span className="text-white text-xs px-3 py-1 rounded-full font-bold" style={{ backgroundColor: tagColors[row.type] }}>{row.type}</span>
                  </td>
                  <td className="p-3 font-medium" style={{ color: "#9B80C0" }}>{row.purpose}</td>
                  <td className="p-3 font-medium whitespace-nowrap" style={{ color: "#9B80C0" }}>{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AdSense */}
        <div className="bg-white rounded-3xl p-7 shadow-sm" style={CARD}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xs shadow flex-shrink-0" style={BADGE}>03</div>
            <h2 className="font-black text-lg" style={{ color: "#3B0764" }}>Google AdSense & DoubleClick</h2>
          </div>
          <p className="leading-relaxed font-medium text-sm mb-3" style={{ color: "#9B80C0" }}>
            DokiDokiTools uses Google AdSense. Google uses DoubleClick cookies to serve ads based on your visits to our site and other sites (interest-based advertising).
          </p>
          <ul className="space-y-1.5 text-sm font-medium" style={{ color: "#9B80C0" }}>
            {[
              { text: "Opt out of personalized ads:", link: "https://www.google.com/settings/ads", label: "Google Ad Settings" },
              { text: "Opt out via:", link: "https://www.aboutads.info/choices/", label: "AboutAds.info" },
              { text: "EU users:", link: "https://www.youronlinechoices.com/", label: "Your Online Choices" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF8A00" }} />
                {item.text}{" "}
                <a href={item.link} target="_blank" rel="noopener" className="underline font-bold" style={{ color: "#6B21A8" }}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Managing */}
        <div className="bg-white rounded-3xl p-7 shadow-sm" style={CARD}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xs shadow flex-shrink-0" style={BADGE}>04</div>
            <h2 className="font-black text-lg" style={{ color: "#3B0764" }}>Managing Your Preferences</h2>
          </div>
          <ul className="space-y-2 text-sm font-medium" style={{ color: "#9B80C0" }}>
            {[
              { label: "Cookie Banner:", body: 'Choose "Accept All" or "Essential Only" when you first visit. Clear browser cookies and revisit to reset your choice.' },
              { label: "Browser Settings:", body: "Most browsers let you refuse or delete cookies. Note: blocking all cookies may affect site functionality." },
              { label: "Google Analytics Opt-Out:", body: null, link: "https://tools.google.com/dlpage/gaoptout", linkLabel: "GA Opt-out Browser Add-on" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF8A00" }} />
                <span><strong style={{ color: "#3B0764" }}>{item.label}</strong>{" "}{item.body}{item.link && <a href={item.link} target="_blank" rel="noopener" className="underline font-bold" style={{ color: "#6B21A8" }}>{item.linkLabel}</a>}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-3xl p-7 shadow-sm" style={CARD}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xs shadow flex-shrink-0" style={BADGE}>05</div>
            <h2 className="font-black text-lg" style={{ color: "#3B0764" }}>Contact</h2>
          </div>
          <p className="text-sm font-medium" style={{ color: "#9B80C0" }}>
            Questions about our cookie practices? Email{" "}
            <a href="mailto:privacy@DokiDokiTools.com" className="underline font-bold" style={{ color: "#6B21A8" }}>privacy@DokiDokiTools.com</a>.
          </p>
        </div>

      </main>

      <footer style={NAV_STYLE} className="mt-8">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/30 font-semibold text-sm">&copy; 2026 DokiDokiTools. All rights reserved.</span>
          <div className="flex gap-8 text-sm font-semibold text-white/30">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
