import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "DokiDokiTools Privacy Policy 窶・how we handle your data, cookies, and Google AdSense advertising. GDPR and CCPA compliant.",
  alternates: { canonical: "https://dokidokitools.vercel.app/legal/privacy" },
  openGraph: {
    title: "Privacy Policy | DokiDokiTools",
    description: "DokiDokiTools is privacy-first. Read how we handle data, cookies, and advertising.",
    url: "https://dokidokitools.vercel.app/legal/privacy",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Who We Are",
    content: `DokiDokiTools ("we", "us", "our") operates dokidokitools.vercel.app 窶・a collection of free browser-based utility tools. Contact us at privacy@DokiDokiTools.com.`,
  },
  {
    title: "2. Information We Collect",
    bullets: [
      "Tool Inputs: All inputs are processed in your browser and never sent to our servers.",
      "IP Address: Our host (Vercel) logs IPs for security. We do not access or use these logs.",
      "Analytics: Anonymized, aggregate page-view data only. No personal identifiers.",
      "No Accounts: We collect no email addresses, names, or personal details.",
    ],
  },
  {
    title: "3. Cookies & Advertising",
    content: "We use essential cookies (consent preference), optional analytics cookies (aggregate traffic), and advertising cookies (Google AdSense/DoubleClick) only with your consent. See our Cookie Policy for full details.",
    bullets: [
      "AdSense cookies may personalize ads based on your browsing history.",
      "Opt out of personalized ads at google.com/settings/ads.",
      "Opt out via aboutads.info/choices.",
    ],
  },
  {
    title: "4. Google AdSense",
    content: "DokiDokiTools uses Google AdSense. Google, as a third-party vendor, uses cookies to serve ads based on prior visits to our and other sites. We comply with all Google AdSense Program Policies.",
  },
  {
    title: "5. Third-Party Services",
    bullets: [
      "Vercel 窶・Hosting (vercel.com/legal/privacy-policy)",
      "Google Fonts 窶・Typography, no personal data collected",
      "Google AdSense 窶・Advertising platform",
      "ipapi.co 窶・Used by Network Inspector to resolve IP data",
    ],
  },
  {
    title: "6. Your Rights (GDPR & CCPA)",
    bullets: [
      "Right to Access: Request any personal data we hold (we hold virtually none).",
      "Right to Erasure: Request deletion 窶・trivially satisfied given our data-minimal approach.",
      "Right to Object: Withdraw ad consent anytime via the cookie banner.",
      "CCPA: We do not sell personal information.",
    ],
  },
  {
    title: "7. Children's Privacy",
    content: "DokiDokiTools does not knowingly collect data from children under 13 (or 16 in the EU). Contact privacy@DokiDokiTools.com if you believe a child has submitted personal information.",
  },
  {
    title: "8. Changes to This Policy",
    content: 'We may update this policy from time to time. The "Last Updated" date at the top of this page will reflect any changes. Continued use constitutes acceptance.',
  },
  {
    title: "9. Contact",
    content: "Questions? Email privacy@DokiDokiTools.com. We aim to respond within 30 days.",
  },
];

const NAV_STYLE = { backgroundColor: "#6B21A8" } as const;
const PAGE_BG   = { backgroundColor: "#F8F5FF" } as const;
const CARD      = { border: "1.5px solid #EDE9FE" } as const;
const BADGE     = { background: "linear-gradient(135deg,#FF8A00,#FFB347)" } as const;

export default function PrivacyPage() {
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
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/legal/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </nav>

      <div style={NAV_STYLE} className="relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle,#FF8A00 0%,#FF6B00 45%,transparent 70%)", opacity: 0.6 }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-2">Legal</p>
          <h1 className="text-white font-black text-4xl md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
            Privacy <span style={{ color: "#FFB347" }}>Policy</span>
          </h1>
          <p className="text-white/40 text-sm font-medium mt-2">Last Updated: April 22, 2026</p>
        </div>
        <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="w-full block" style={{ height: 32, fill: "#F8F5FF" }}>
          <path d="M0,32 L0,0 Q360,32 720,16 Q1080,0 1440,24 L1440,32 Z" />
        </svg>
      </div>

      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12 flex flex-col gap-4">
        {sections.map((s, i) => (
          <div key={i} className="bg-white rounded-3xl p-7 shadow-sm" style={CARD}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xs shadow flex-shrink-0" style={BADGE}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="font-black text-lg" style={{ color: "#3B0764" }}>{s.title}</h2>
            </div>
            {s.content && <p className="leading-relaxed font-medium text-sm" style={{ color: "#9B80C0" }}>{s.content}</p>}
            {s.bullets && (
              <ul className="mt-2 space-y-1.5 text-sm font-medium" style={{ color: "#9B80C0" }}>
                {s.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF8A00" }} />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </main>

      <footer style={NAV_STYLE} className="mt-8">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/30 font-semibold text-sm">&copy; 2026 DokiDokiTools. All rights reserved.</span>
          <div className="flex gap-8 text-sm font-semibold text-white/30">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/legal/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
