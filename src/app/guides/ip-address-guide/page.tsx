import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is a Public IP Address? A Plain-English Guide",
  description: "Learn what a public IP address is, how it differs from a private IP, why it matters for privacy, and how to check yours instantly.",
  alternates: { canonical: "https://dokidokitools.vercel.app/guides/ip-address-guide" },
  openGraph: {
    title: "What is a Public IP Address? A Plain-English Guide",
    description: "Understand public vs private IPs, what your ISP can see, and when to use a VPN.",
    url: "https://dokidokitools.vercel.app/guides/ip-address-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is a Public IP Address? A Plain-English Guide",
  "description": "A beginner-friendly explanation of public IP addresses, private IPs, IPv4 vs IPv6, and why your IP matters for privacy and networking.",
  "author": { "@type": "Organization", "name": "DokiDokiTools" },
  "publisher": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" },
  "mainEntityOfPage": "https://dokidokitools.vercel.app/guides/ip-address-guide",
};

export default function IpAddressGuidePage() {
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
            <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4" style={{ color: "#fff" }}>What is a Public IP Address?</h1>
            <p style={{ color: "#DDD6FE" }} className="text-lg">A plain-English explanation of IPs, what yours reveals, and when it actually matters.</p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-12">

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>The Simple Explanation</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              An <strong>IP address</strong> (Internet Protocol address) is a unique number assigned to every device that connects to the internet. Think of it like a postal address: just as mail needs your home address to reach you, data packets need an IP address to know where to deliver information.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              When you visit a website, your device sends a request from your IP address to the website's server. The server sends the page back to your IP. Without it, the internet simply wouldn't know where to send anything.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#6B21A8" }}>Public IP vs Private IP: What's the Difference?</h2>

            <h3 className="text-xl font-black mb-2" style={{ color: "#1C1C1C" }}>Your Public IP Address</h3>
            <p className="mb-5" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Your <strong>public IP</strong> is the address assigned to your internet connection by your Internet Service Provider (ISP). It's the address the wider internet sees when you browse, stream, or download. Everyone in your home — every device connected to the same router — shares a single public IP address. It can change over time (called a <em>dynamic IP</em>), though some providers offer static IPs that never change.
            </p>

            <h3 className="text-xl font-black mb-2" style={{ color: "#1C1C1C" }}>Your Private IP Address</h3>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Your <strong>private IP</strong> is assigned by your router to identify each device within your local network. Your laptop, phone, and smart TV all have different private IPs, but they all share the same public IP when communicating with the outside world. Private IPs are not visible to the internet — they exist only inside your home or office network.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>IPv4 vs IPv6: Why Are There Two Formats?</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              The original IP format, <strong>IPv4</strong>, looks like four numbers separated by dots: <code style={{ background: "#F3F4F6", padding: "2px 6px", borderRadius: "4px" }}>192.168.1.1</code>. IPv4 can theoretically support about 4.3 billion unique addresses — which seemed like plenty in the 1980s, but the internet long ago ran out of available IPv4 addresses.
            </p>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <strong>IPv6</strong> was created to solve this. It uses a much longer format: <code style={{ background: "#F3F4F6", padding: "2px 6px", borderRadius: "4px" }}>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>. IPv6 supports an astronomically large number of addresses — enough for every grain of sand on Earth to have trillions of IPs. Most modern devices and networks support both formats, and you may see either one when you check your IP.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>What Does Your IP Reveal About You?</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Your public IP reveals your <strong>approximate location</strong> (typically the city or region your ISP operates in), your <strong>ISP name</strong>, and whether you're using a VPN, proxy, or data centre connection. It does <em>not</em> reveal your exact home address, your name, or your browsing history to websites — that information requires legal process or your ISP's cooperation.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              However, websites, advertisers, and services use your IP for geo-targeting (showing you region-specific content or prices), rate limiting (blocking too many requests from one address), and fraud detection. It's also used to enforce streaming geo-restrictions — why Netflix shows different libraries in different countries.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>When to Use a VPN</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              A VPN (Virtual Private Network) routes your traffic through a server in another location, replacing your public IP with the VPN server's IP. This is useful for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <li>Accessing streaming content available only in certain countries</li>
              <li>Protecting your traffic on public Wi-Fi networks (cafés, airports, hotels)</li>
              <li>Preventing your ISP from logging your browsing activity</li>
              <li>Bypassing geo-restrictions on websites or services</li>
            </ul>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              To check whether your VPN is actually working, use an IP checker tool before and after connecting. If the IP address and location change to the VPN server's region, it's working correctly.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Can someone hack me if they know my IP address?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Knowing your IP alone is not enough to hack you. Your router's firewall blocks most unsolicited incoming connections. However, a determined attacker could attempt DDoS attacks (flooding your connection) or look for unpatched vulnerabilities on your network. Keeping your router firmware updated and not opening unnecessary ports significantly reduces this risk.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Why does my IP location show the wrong city?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>IP geolocation databases are not perfectly accurate. Your public IP is registered to your ISP's infrastructure, which may be located in a different city from where you actually are. The accuracy is typically within 50–100km for consumer IPs.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>How often does my public IP change?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Most residential ISPs assign dynamic IPs that may change when your router restarts, after a certain lease period, or periodically without warning. Some ISPs assign static IPs (never change) as a paid add-on, which is useful for hosting servers or remote access.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, #6B21A8, #A855F7)" }}>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>Check Your IP Address Now</h2>
            <p className="mb-6" style={{ color: "#DDD6FE" }}>See your public IP, ISP, and location instantly — no login, no tracking.</p>
            <a href="/tools/ip-checker/index.html" style={{ background: "#FF9800", color: "#fff", fontWeight: 900, padding: "14px 36px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem", display: "inline-block", boxShadow: "0 4px 0 0 #c47600" }}>Open Network Inspector →</a>
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
