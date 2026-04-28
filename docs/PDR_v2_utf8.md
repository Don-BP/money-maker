ACT AS: Senior Front-End Engineer & SEO Utility Specialist

TASK: Build a portfolio of 5 lightweight, single-purpose utility web apps. Output ONLY complete, functional code. No explanations. Use modern vanilla HTML, CSS, and JavaScript (ES6+). All tools must run client-side, require zero backend, be Vercel-ready, and include AdSense compliance placeholders. Provide each file in a separate markdown code block with exact relative file paths.

CORE STRATEGY (TRANSCRIPT-BACKED):
- Solve one specific problem instantly
- Include purpose-driven, user-adjustable options on every tool that make it significantly more practical and versatile for real use cases
- Options must instantly update results without page reloads
- Target evergreen, low-competition search queries
- Mobile-first, sub-1-second load time, zero layout shift
- Monetize with Google Display Ads (RPM model)
- Build a portfolio for compound traffic and earnings
- Include legal pages and basic content for AdSense approval
- Deploy to Vercel static hosting

UNIVERSAL REQUIREMENTS FOR ALL 5 SITES:
- Mobile-first responsive layout using CSS Flexbox/Grid
- Semantic HTML5, ARIA labels, WCAG AA contrast
- Zero external libraries, fonts, or CDNs
- Embedded logic and reference data inside app.js
- Every tool MUST include a collapsible "Advanced Options" panel (hidden by default, toggled via button)
- Options must directly affect calculation/conversion/output in real-time
- AdSense placeholders with fixed heights to prevent CLS:
  <div class="ad-slot ad-header"></div>
  <div class="ad-slot ad-mid"></div>
  <div class="ad-slot ad-footer"></div>
- CSS for ad slots: min-height 90px, background #f8f9fa, centered, max-width 728px, responsive scaling
- Include a commented HTML section showing exactly where to paste AdSense script and ins tags
- Include these required pages per site: about.html, privacy.html, terms.html
- Each page must have a consistent footer with internal navigation
- Optimize for Core Web Vitals: inline critical CSS, defer JS, clean DOM structure
- File structure per site: index.html, style.css, app.js, about.html, privacy.html, terms.html, vercel.json
- Provide each file separately in markdown code blocks labeled with exact paths
- Ensure all code is complete, functional, and ready for direct Vercel deployment

TOOL 1: Japan/Education
Romaji to Kana Converter & Study Helper
- Input field for Romanized Japanese text
- Collapsible Options:
  • Output mode: Hiragana only / Katakana only / Mixed / Romaji display
  • Particle correction toggle: automatically converts wa->は, wo->を, e->へ when used as particles
  • Long vowel handling: strict (う/ー) vs simplified (ー)
  • Preserve formatting toggle: keeps line breaks, punctuation, and spacing
- Instant conversion on input change
- Copy-to-clipboard button
- Embedded accurate mapping rules in JS

TOOL 2: Gaming
RPG Character Stat & Build Optimizer
- Input fields for base stats, level, and class
- Collapsible Options:
  • Role priority selector: Tank / DPS / Support / Hybrid
  • Stat weighting sliders: allocate importance to Crit Rate, Crit DMG, HP%, ATK%, DEF%, Energy Recharge
  • Minimum threshold inputs: set floor values for key stats
  • Gear set bonus toggle: apply +15% to primary stat if set condition met
- Real-time calculation of optimized stat distribution and expected output
- Clear visual breakdown with progress indicators
- Mobile-optimized touch targets and large number display

TOOL 3: Photography
Depth of Field & Exposure Calculator
- Inputs: focal length, aperture, shutter speed, ISO, focus distance
- Collapsible Options:
  • Sensor profile selector: Full Frame / APS-C / Micro Four Thirds / Custom crop factor
  • Unit toggle: Metric (mm/m) / Imperial (in/ft)
  • Circle of Concision preset: strict (landscape) / standard / relaxed (video)
  • Diffraction warning toggle: highlights aperture values where diffraction softening exceeds threshold
- Outputs: near/far limits, total DoF, exposure value, hyperfocal distance, safe aperture range
- Instant calculation on any input change
- Clean technical UI with monospace number formatting

TOOL 4: Food/Health
Recipe Servings Scaler & Unit Converter
- Input fields for original servings and target servings
- Dynamic ingredient list with quantity/unit inputs
- Collapsible Options:
  • Measurement system: US Customary / Metric / Imperial
  • Rounding mode: Exact / Nearest 0.25 / Nearest Whole
  • Dietary filter toggle: highlight or hide rows containing common allergens (nuts, dairy, gluten, soy)
  • Print-friendly mode toggle: strips UI chrome for clean paper output
- Automatically scales quantities proportionally with built-in conversion logic
- Add/remove ingredient rows dynamically
- Copy formatted list and print button

TOOL 5: Technology/Developer Tools
Cron Schedule Generator & Human Translator
- Interactive UI with dropdowns for minute, hour, day, month, weekday
- Collapsible Options:
  • Timezone selector: converts cron output to local timezone preview
  • Syntax mode: Standard / Step (*/N) / List / Range / L/W/#
  • Preset loader: hourly, daily at midnight, weekly Sunday, every 3 hours, business hours Mon-Fri
  • Human-readable detail level: Brief summary / Full breakdown
- Live preview of cron expression
- Human-readable translation below matching selected detail level
- Copy to clipboard button
- Clean monospace terminal-style UI with light mode

OUTPUT FORMAT:
- Generate all 5 sites sequentially
- For each site, output: index.html, style.css, app.js, about.html, privacy.html, terms.html, vercel.json
- Use clear file path comments above each code block
- Do not include tutorials, explanations, or placeholder text in the code
- Prioritize performance, accessibility, collapsible purpose-driven options, and AdSense compliance
- Stop output after the final file. No extra commentary.
