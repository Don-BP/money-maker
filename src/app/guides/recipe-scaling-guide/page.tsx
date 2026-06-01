import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Scale Any Recipe Without Ruining It — Kitchen Math Guide",
  description: "Learn why doubling a recipe sometimes fails, which ingredients don't scale linearly, and how to adjust cooking times. A practical kitchen math guide.",
  alternates: { canonical: "https://dokidokitools.vercel.app/guides/recipe-scaling-guide" },
  openGraph: {
    title: "How to Scale Any Recipe Without Ruining It",
    description: "Practical tips on recipe math, what doesn't scale linearly, and how to cook for any crowd.",
    url: "https://dokidokitools.vercel.app/guides/recipe-scaling-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Scale Any Recipe Without Ruining It",
  "description": "A practical guide to recipe scaling math, common mistakes, and tips for cooking for any group size.",
  "author": { "@type": "Organization", "name": "DokiDokiTools" },
  "publisher": { "@type": "Organization", "name": "DokiDokiTools", "url": "https://dokidokitools.vercel.app" },
  "mainEntityOfPage": "https://dokidokitools.vercel.app/guides/recipe-scaling-guide",
};

export default function RecipeScalingGuidePage() {
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
            <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4" style={{ color: "#fff" }}>How to Scale Any Recipe Without Ruining It</h1>
            <p style={{ color: "#DDD6FE" }} className="text-lg">The kitchen math behind doubling, halving, and tripling recipes — and what not to multiply blindly.</p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-12">

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Why Scaling Goes Wrong</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              You've doubled a recipe and it came out wrong. The texture was off, the seasoning was overwhelming, or the baking time was completely wrong. The problem wasn't your maths — it was assuming that <em>everything</em> in a recipe scales proportionally. It doesn't.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Most ingredients — flour, butter, eggs, vegetables — scale in a straight line. Double the recipe, double those. But a handful of critical ingredients follow different rules, and getting them wrong ruins the whole dish.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#6B21A8" }}>Ingredients That Do Not Scale Linearly</h2>

            <h3 className="text-xl font-black mb-2" style={{ color: "#1C1C1C" }}>Salt and Seasonings</h3>
            <p className="mb-5" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Salt is the most important one to adjust by taste, not formula. When you double a recipe, start by adding only <strong>1.5× the salt</strong>, then taste and adjust from there. The same applies to spices, chilli, and strong aromatics like garlic. Quadrupling a spice that's already assertive doesn't give four times the flavour — it gives an inedible dish.
            </p>

            <h3 className="text-xl font-black mb-2" style={{ color: "#1C1C1C" }}>Baking Powder and Baking Soda</h3>
            <p className="mb-5" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Leavening agents are critical in baking. As a general rule, <strong>do not scale them at the same rate as everything else</strong>. For recipes tripling or more, use about 75% of the mathematically scaled amount. Too much baking soda causes a metallic taste and overly rapid rise that collapses in the oven. When in doubt, err on the side of less.
            </p>

            <h3 className="text-xl font-black mb-2" style={{ color: "#1C1C1C" }}>Eggs</h3>
            <p className="mb-5" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Eggs are tricky because they come in whole units. Scaling a recipe from 2 servings to 3 might mean needing 1.5 eggs. The practical solution: use the nearest whole number, or beat an extra egg and use half of it. For baking, adding slightly too few eggs tends to produce denser results; slightly too many adds moisture and lift.
            </p>

            <h3 className="text-xl font-black mb-2" style={{ color: "#1C1C1C" }}>Alcohol and Acids</h3>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Wine, vinegar, citrus juice, and similar ingredients should be scaled conservatively — start at 75% of the linear amount and adjust to taste. Acid is a flavour amplifier; too much makes a dish sharp and one-dimensional.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Cooking Time and Temperature</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Scaling a recipe does <strong>not</strong> mean scaling the cooking time. A doubled cake doesn't take twice as long — the oven temperature stays the same, and the time increase depends on the depth and density of what you're cooking, not the quantity.
            </p>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <strong>For baked goods:</strong> If you're baking in the same size pan and just making more batches, the time stays the same. If you're using a larger pan, the time may increase by 10–20% — check for doneness early and use a toothpick test.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              <strong>For stovetop cooking:</strong> More volume means more time to come to temperature and more time to reduce sauces. Add 20–30% extra time when cooking large batches, and don't rush the browning step — overcrowding the pan causes steaming instead of searing.
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>The Quick Scaling Formula</h2>
            <p className="mb-4" style={{ color: "#4B5563", lineHeight: 1.8 }}>
              To scale any recipe: <strong>Conversion Factor = Desired Servings ÷ Original Servings</strong>. Multiply each ingredient quantity by this factor. Then apply the adjustments above for salt, leavening, and cooking time.
            </p>
            <div className="rounded-2xl p-6" style={{ background: "#F5F0FF", border: "1.5px solid #DDD6FE" }}>
              <p className="font-black mb-2" style={{ color: "#6B21A8" }}>Example:</p>
              <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
                Recipe serves 4. You want to serve 10.<br />
                Factor = 10 ÷ 4 = 2.5<br />
                Multiply all ingredients by 2.5 — then scale salt back to ~2× and check leavening carefully.
              </p>
            </div>
          </div>

          <div className="rounded-3xl p-8 mb-8" style={{ background: "#fff", border: "1.5px solid #DDD6FE" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#6B21A8" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Can I halve a baking recipe?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Yes, but baking is the most sensitive to scaling. The main challenge is eggs — you may need to beat one egg and use only half. Also check that your pan size is proportional; a half recipe in a full-size tin will spread too thin and bake dry.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>How do I convert US cups to metric?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>1 US cup = 240ml. 1 tablespoon = 15ml. 1 teaspoon = 5ml. For baking, weighing ingredients in grams is more accurate than volume measures — a cup of flour can vary by 20–30g depending on how it's packed.</p>
              </div>
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1C1C1C" }}>Can I cook a double batch in the same pot?</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.8 }}>Only if the pot is large enough that the food isn't overcrowded. For soups and stews, a pot that's two-thirds full is ideal. For anything that needs browning (meat, onions), overcrowding is the enemy — cook in batches if needed.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, #6B21A8, #A855F7)" }}>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>Scale Your Recipe Now</h2>
            <p className="mb-6" style={{ color: "#DDD6FE" }}>Enter your ingredients and target servings — get scaled quantities instantly with unit conversions included.</p>
            <a href="/tools/recipe-scaler/index.html" style={{ background: "#FF9800", color: "#fff", fontWeight: 900, padding: "14px 36px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem", display: "inline-block", boxShadow: "0 4px 0 0 #c47600" }}>Open Recipe Scaler →</a>
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
