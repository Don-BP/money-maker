# ZenithTools Full Launch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Word Search Maker tool, add Google Analytics + Search Console + AdSense, and deploy ZenithTools to Vercel.

**Architecture:** The Word Search Maker is a single self-contained static HTML file matching all other tools. Puzzle generation is client-side vanilla JS. PDF export uses jsPDF from CDN. Analytics and ad scripts are injected into `src/app/layout.tsx` (Next.js homepage) and directly into each tool's `<head>` (static HTML files bypass the Next.js layout).

**Tech Stack:** Next.js 15, Vanilla JS, jsPDF 2.5.1 (CDN), Google Analytics 4, Google AdSense, Google Search Console.

---

## File Map

| Action | File |
|--------|------|
| Create | `public/tools/word-search/index.html` |
| Modify | `src/app/page.tsx` |
| Modify | `src/app/sitemap.ts` |
| Modify | `src/app/layout.tsx` |
| Modify | `public/tools/username-generator/index.html` |
| Modify | `public/tools/word-finder/index.html` |
| Modify | `public/tools/recipe-scaler/index.html` |
| Modify | `public/tools/romaji-to-kana/index.html` |
| Modify | `public/tools/ip-checker/index.html` |

---

## Task 1: Word Search Maker — HTML Shell + CSS

**Files:**
- Create: `public/tools/word-search/index.html`

- [ ] **Step 1: Create the file with full HTML structure and CSS**

Create `public/tools/word-search/index.html` with this exact content (no JS yet — that comes in Tasks 2–5):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Free Word Search Maker — Print or Export to PDF | ZenithTools</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Fredoka', sans-serif;
      background: #EDE0FF;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* ── Nav ── */
    .nav {
      background: #6B21A8;
      padding: 0 24px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    .nav-brand { color: white; font-size: 1.2rem; font-weight: 700; text-decoration: none; }
    .nav-brand span { color: #FFB347; }
    .nav-back { color: rgba(255,255,255,0.7); font-size: 0.9rem; font-weight: 600; text-decoration: none; }
    .nav-back:hover { color: white; }

    /* ── Hero ── */
    .hero {
      background: linear-gradient(135deg, #6B21A8 0%, #7C3AED 100%);
      padding: 28px 24px 44px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute;
      top: -40px; right: -40px;
      width: 180px; height: 180px;
      border-radius: 50%;
      background: radial-gradient(circle, #FF8A00 0%, transparent 70%);
      opacity: 0.5;
    }
    .hero::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 28px;
      background: #EDE0FF;
      clip-path: ellipse(55% 100% at 50% 100%);
    }
    .hero h1 {
      color: white;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 6px;
      position: relative;
      z-index: 1;
    }
    .hero h1 span { color: #FFB347; }
    .hero p { color: rgba(255,255,255,0.65); font-size: 0.95rem; position: relative; z-index: 1; }

    /* ── Main layout ── */
    main { flex: 1; padding: 24px 16px 48px; max-width: 1100px; margin: 0 auto; width: 100%; }

    .layout {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 20px;
      align-items: start;
    }
    @media (max-width: 768px) { .layout { grid-template-columns: 1fr; } }

    /* ── Panels ── */
    .panel {
      background: #DDD0FF;
      border: 2.5px solid #9C79D0;
      border-radius: 16px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .panel h2 {
      font-size: 1rem;
      font-weight: 700;
      color: #5B2D8A;
      margin-bottom: 12px;
    }

    /* ── Word input ── */
    .input-row { display: flex; gap: 8px; margin-bottom: 12px; }
    .input-row input {
      flex: 1;
      padding: 10px 14px;
      border: 2px solid #9C79D0;
      border-radius: 12px;
      background: white;
      font-family: 'Fredoka', sans-serif;
      font-size: 1rem;
      color: #3B0764;
      outline: none;
    }
    .input-row input:focus { border-color: #6B21A8; }

    .btn-add {
      width: 44px; height: 44px;
      border-radius: 12px;
      background: linear-gradient(to bottom, #8B5CF6, #7C3AED);
      border: 2px solid #5B21B6;
      box-shadow: 0 3px 0 #5B21B6;
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.1s, box-shadow 0.1s;
      flex-shrink: 0;
    }
    .btn-add:active { transform: translateY(2px); box-shadow: 0 1px 0 #5B21B6; }

    /* ── Chips ── */
    .chips { display: flex; flex-wrap: wrap; gap: 8px; min-height: 28px; }
    .chip {
      background: #7C3AED;
      color: white;
      border-radius: 20px;
      padding: 4px 10px 4px 12px;
      font-size: 0.85rem;
      font-weight: 600;
      display: flex; align-items: center; gap: 6px;
    }
    .chip-remove {
      background: rgba(255,255,255,0.25);
      border: none; color: white;
      border-radius: 50%;
      width: 18px; height: 18px;
      font-size: 0.9rem;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      padding: 0; line-height: 1;
    }
    .chip-remove:hover { background: rgba(255,255,255,0.4); }

    /* ── Options ── */
    .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px; }
    .toggle-label {
      display: flex; align-items: center; gap: 8px;
      font-size: 0.9rem; font-weight: 600; color: #5B2D8A; cursor: pointer;
    }
    .toggle-label input[type="checkbox"] { width: 18px; height: 18px; accent-color: #7C3AED; cursor: pointer; }

    .size-row { display: flex; gap: 16px; }
    .size-row label {
      font-size: 0.9rem; font-weight: 600; color: #5B2D8A;
      display: flex; align-items: center; gap: 8px;
    }
    .size-row input[type="number"] {
      width: 60px; padding: 6px 8px;
      border: 2px solid #9C79D0; border-radius: 8px;
      background: white;
      font-family: 'Fredoka', sans-serif; font-size: 1rem; color: #3B0764; text-align: center;
    }

    /* ── Action buttons ── */
    .actions { display: flex; flex-direction: column; gap: 10px; }
    .btn-primary {
      background: linear-gradient(to bottom, #5CB85C, #4CAF50);
      border: 3px solid #2E7D32;
      border-radius: 14px;
      box-shadow: 0 4px 0 #2E7D32;
      color: white;
      font-family: 'Fredoka', sans-serif; font-size: 1.2rem; font-weight: 700;
      padding: 14px; cursor: pointer; width: 100%; letter-spacing: 0.5px;
      transition: transform 0.1s, box-shadow 0.1s;
    }
    .btn-primary:hover { filter: brightness(1.05); }
    .btn-primary:active { transform: translateY(3px); box-shadow: 0 1px 0 #2E7D32; }

    .btn-secondary {
      background: linear-gradient(to bottom, #FFB347, #FF8A00);
      border: 3px solid #E65100;
      border-radius: 14px;
      box-shadow: 0 4px 0 #E65100;
      color: white;
      font-family: 'Fredoka', sans-serif; font-size: 1.1rem; font-weight: 700;
      padding: 12px; cursor: pointer; width: 100%;
      transition: transform 0.1s, box-shadow 0.1s;
    }
    .btn-secondary:hover:not(:disabled) { filter: brightness(1.05); }
    .btn-secondary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #E65100; }
    .btn-secondary:disabled { opacity: 0.4; cursor: not-allowed; }

    /* ── Puzzle panel ── */
    .puzzle-panel {
      background: #DDD0FF;
      border: 2.5px solid #9C79D0;
      border-radius: 16px;
      padding: 20px;
      min-height: 300px;
    }
    .empty-state {
      display: flex; align-items: center; justify-content: center;
      min-height: 220px;
      color: #9C79D0; font-size: 1rem; font-weight: 600; text-align: center;
    }

    /* ── Grid ── */
    .puzzle-grid { border-collapse: collapse; margin: 0 auto 20px; }
    .puzzle-grid td {
      width: 34px; height: 34px;
      text-align: center; vertical-align: middle;
      border: 1.5px solid #9C79D0;
      background: white;
      font-family: 'Fredoka', sans-serif; font-size: 1.05rem; font-weight: 700; color: #3B0764;
    }

    /* ── Word list ── */
    .words-header { font-size: 1rem; font-weight: 700; color: #5B2D8A; margin-bottom: 10px; }
    .words-grid { display: flex; flex-wrap: wrap; gap: 8px; }
    .word-tag {
      background: #6B21A8; color: white;
      padding: 4px 12px; border-radius: 20px;
      font-size: 0.9rem; font-weight: 700; letter-spacing: 0.5px;
    }

    /* ── Error ── */
    .error-msg {
      background: #FFE0E0; border: 2px solid #EF5350; border-radius: 10px;
      color: #C62828; padding: 10px 14px; font-size: 0.85rem; font-weight: 600;
      margin-top: 12px; display: none;
    }

    /* ── Footer ── */
    footer { background: #6B21A8; padding: 20px 24px; text-align: center; }
    footer span { color: rgba(255,255,255,0.35); font-size: 0.85rem; }
    footer a { color: rgba(255,255,255,0.35); text-decoration: none; margin: 0 10px; }
    footer a:hover { color: white; }
  </style>
</head>
<body>

  <nav class="nav">
    <a href="/" class="nav-brand">Zenith<span>Tools</span></a>
    <a href="/" class="nav-back">← All Tools</a>
  </nav>

  <div class="hero">
    <h1>🔤 Word Search <span>Maker</span></h1>
    <p>Create printable word searches in seconds. Export to PDF.</p>
  </div>

  <main>
    <div class="layout">

      <!-- Left: controls -->
      <div class="controls-col">

        <div class="panel">
          <h2>📝 Add Words</h2>
          <div class="input-row">
            <input type="text" id="word-input" placeholder="Type a word..." autocomplete="off">
            <button class="btn-add" id="add-btn" onclick="addWord()" aria-label="Add word">+</button>
          </div>
          <div class="chips" id="word-chips"></div>
        </div>

        <div class="panel">
          <h2>⚙️ Options</h2>
          <div class="options-grid">
            <label class="toggle-label">
              <input type="checkbox" id="opt-horizontal" checked>
              Horizontal →
            </label>
            <label class="toggle-label">
              <input type="checkbox" id="opt-vertical" checked>
              Vertical ↓
            </label>
            <label class="toggle-label">
              <input type="checkbox" id="opt-diagonal" checked>
              Diagonal ↘
            </label>
            <label class="toggle-label">
              <input type="checkbox" id="opt-backward" checked>
              Backward ←↑
            </label>
          </div>
          <div class="size-row">
            <label>Rows <input type="number" id="opt-rows" value="10" min="5" max="20"></label>
            <label>Cols <input type="number" id="opt-cols" value="10" min="5" max="20"></label>
          </div>
        </div>

        <div class="actions">
          <button class="btn-primary" onclick="generatePuzzle()">✨ Generate!</button>
          <button class="btn-secondary" onclick="exportPDF()" id="export-btn" disabled>📄 Export PDF</button>
        </div>

        <div class="error-msg" id="error-msg"></div>
      </div>

      <!-- Right: puzzle display -->
      <div class="puzzle-panel">
        <div id="puzzle-container">
          <div class="empty-state">Add words and click Generate! ✨</div>
        </div>
        <div id="words-to-find"></div>
      </div>

    </div>
  </main>

  <footer>
    <span>&copy; 2026 ZenithTools &bull;
      <a href="/legal/privacy">Privacy</a>
      <a href="/legal/terms">Terms</a>
    </span>
  </footer>

  <!-- jsPDF -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

  <script>
    // JS added in Tasks 2–5
    document.getElementById('word-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addWord();
    });
  </script>

</body>
</html>
```

- [ ] **Step 2: Open in browser and verify layout**

Open `public/tools/word-search/index.html` directly in a browser (drag to browser or use VS Code Live Server).

Expected: Purple/lavender layout with left panel (Add Words, Options, buttons) and right empty puzzle area. Buttons visible, "+" button present. No JS errors in console.

- [ ] **Step 3: Commit**

```bash
git add public/tools/word-search/index.html
git commit -m "feat: add word-search tool HTML shell and CSS theme"
```

---

## Task 2: Word Search Maker — Word List Management JS

**Files:**
- Modify: `public/tools/word-search/index.html`

- [ ] **Step 1: Replace the `<script>` block at the bottom of the file**

Find this section near the end of the file:
```html
  <script>
    // JS added in Tasks 2–5
    document.getElementById('word-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addWord();
    });
  </script>
```

Replace it with:
```html
  <script>
    // ── State ──
    let words = [];
    let currentGrid = null;
    let currentRows = 10;
    let currentCols = 10;

    // ── Word list management ──
    function addWord() {
      const input = document.getElementById('word-input');
      const word = input.value.trim().toUpperCase().replace(/[^A-Z]/g, '');
      input.value = '';
      if (!word) return;
      if (words.includes(word)) return;
      words.push(word);
      renderWordChips();
    }

    function removeWord(index) {
      words.splice(index, 1);
      renderWordChips();
    }

    function renderWordChips() {
      const container = document.getElementById('word-chips');
      container.innerHTML = words.map((w, i) =>
        `<span class="chip">${w}<button class="chip-remove" onclick="removeWord(${i})" aria-label="Remove ${w}">×</button></span>`
      ).join('');
    }

    // ── Helpers ──
    function showError(msg) {
      const el = document.getElementById('error-msg');
      el.textContent = msg;
      el.style.display = 'block';
    }

    function hideError() {
      document.getElementById('error-msg').style.display = 'none';
    }

    // ── Puzzle generation (Tasks 3–4) ──
    function generatePuzzle() { showError('Puzzle generation coming soon.'); }

    // ── PDF export (Task 5) ──
    function exportPDF() {}

    // ── Enter key support ──
    document.getElementById('word-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addWord();
    });
  </script>
```

- [ ] **Step 2: Test word list in browser**

Open the file in browser. Type "HELLO" in the input and press Enter or click "+".
Expected: "HELLO" chip appears below input with an × button.
Type "WORLD", press Enter. Expected: second chip appears.
Click × on "HELLO". Expected: HELLO chip removed, WORLD remains.
Type "WORLD" again, press Enter. Expected: nothing added (duplicate).

- [ ] **Step 3: Commit**

```bash
git add public/tools/word-search/index.html
git commit -m "feat: add word list management to word-search tool"
```

---

## Task 3: Word Search Maker — Puzzle Generation Algorithm

**Files:**
- Modify: `public/tools/word-search/index.html`

- [ ] **Step 1: Replace the `generatePuzzle` stub with the full implementation**

Find this line in the `<script>` block:
```javascript
    function generatePuzzle() { showError('Puzzle generation coming soon.'); }
```

Replace it with:

```javascript
    // ── Direction helpers ──
    function getEnabledDirections() {
      const horiz = document.getElementById('opt-horizontal').checked;
      const vert  = document.getElementById('opt-vertical').checked;
      const diag  = document.getElementById('opt-diagonal').checked;
      const back  = document.getElementById('opt-backward').checked;
      const dirs  = [];
      if (horiz)        dirs.push({ dr: 0,  dc:  1 });
      if (horiz && back) dirs.push({ dr: 0,  dc: -1 });
      if (vert)         dirs.push({ dr: 1,  dc:  0 });
      if (vert  && back) dirs.push({ dr: -1, dc:  0 });
      if (diag)         dirs.push({ dr: 1,  dc:  1 }, { dr: 1, dc: -1 });
      if (diag  && back) dirs.push({ dr: -1, dc:  1 }, { dr: -1, dc: -1 });
      return dirs;
    }

    function canPlace(grid, word, row, col, dr, dc) {
      for (let i = 0; i < word.length; i++) {
        const r = row + i * dr;
        const c = col + i * dc;
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return false;
        if (grid[r][c] !== null && grid[r][c] !== word[i]) return false;
      }
      return true;
    }

    function placeWord(grid, word, row, col, dr, dc) {
      for (let i = 0; i < word.length; i++) {
        grid[row + i * dr][col + i * dc] = word[i];
      }
    }

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function generatePuzzle() {
      if (words.length === 0) { showError('Add at least one word first!'); return; }
      const dirs = getEnabledDirections();
      if (dirs.length === 0) { showError('Enable at least one direction!'); return; }

      const rows = Math.max(5, Math.min(20, parseInt(document.getElementById('opt-rows').value) || 10));
      const cols = Math.max(5, Math.min(20, parseInt(document.getElementById('opt-cols').value) || 10));

      const grid = Array.from({ length: rows }, () => Array(cols).fill(null));
      const failed = [];

      // Longest words first — better chance of fitting
      const sorted = [...words].sort((a, b) => b.length - a.length);

      for (const word of sorted) {
        let placed = false;
        for (let attempt = 0; attempt < 200 && !placed; attempt++) {
          const dir = dirs[Math.floor(Math.random() * dirs.length)];
          const row = Math.floor(Math.random() * rows);
          const col = Math.floor(Math.random() * cols);
          if (canPlace(grid, word, row, col, dir.dr, dir.dc)) {
            placeWord(grid, word, row, col, dir.dr, dir.dc);
            placed = true;
          }
        }
        if (!placed) failed.push(word);
      }

      // Fill empty cells with random letters
      const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grid[r][c] === null) grid[r][c] = alpha[Math.floor(Math.random() * 26)];
        }
      }

      currentGrid = grid;
      currentRows = rows;
      currentCols = cols;

      renderGrid(grid, rows, cols);
      renderWordList(words.filter(w => !failed.includes(w)));
      document.getElementById('export-btn').disabled = false;

      if (failed.length > 0) {
        showError(`Could not place: ${failed.join(', ')}. Try a larger grid or fewer words.`);
      } else {
        hideError();
      }
    }

    // ── Rendering (stub — filled in Task 4) ──
    function renderGrid(grid, rows, cols) {}
    function renderWordList(placed) {}
```

- [ ] **Step 2: Verify algorithm in browser console**

Open the file in browser, add words "CAT", "DOG", "BIRD" and click "Generate!".
Expected: No error in console. `currentGrid` should be populated.
In the browser console run: `console.log(currentGrid)` — should show a 10×10 array of letters.

- [ ] **Step 3: Commit**

```bash
git add public/tools/word-search/index.html
git commit -m "feat: add puzzle generation algorithm to word-search tool"
```

---

## Task 4: Word Search Maker — Grid Rendering

**Files:**
- Modify: `public/tools/word-search/index.html`

- [ ] **Step 1: Replace the renderGrid and renderWordList stubs**

Find:
```javascript
    // ── Rendering (stub — filled in Task 4) ──
    function renderGrid(grid, rows, cols) {}
    function renderWordList(placed) {}
```

Replace with:
```javascript
    function renderGrid(grid, rows, cols) {
      let html = '<table class="puzzle-grid">';
      for (let r = 0; r < rows; r++) {
        html += '<tr>';
        for (let c = 0; c < cols; c++) {
          html += `<td>${grid[r][c]}</td>`;
        }
        html += '</tr>';
      }
      html += '</table>';
      document.getElementById('puzzle-container').innerHTML = html;
    }

    function renderWordList(placed) {
      const container = document.getElementById('words-to-find');
      if (!placed.length) { container.innerHTML = ''; return; }
      container.innerHTML =
        `<div class="words-header">Words to Find:</div>` +
        `<div class="words-grid">${placed.map(w => `<span class="word-tag">${w}</span>`).join('')}</div>`;
    }
```

- [ ] **Step 2: Full end-to-end test in browser**

1. Add words: "ZENITH", "TOOLS", "PUZZLE", "WORD"
2. Set Rows=12, Cols=12
3. Click "Generate!"

Expected: Grid of letters renders in the right panel. "Words to Find:" section shows the 4 words. Export PDF button is no longer grayed out. No console errors.

4. Uncheck "Horizontal" and "Vertical" and "Diagonal" then click Generate.
Expected: Error message "Enable at least one direction!"

5. Click Generate with no words (clear all chips first).
Expected: Error "Add at least one word first!"

- [ ] **Step 3: Commit**

```bash
git add public/tools/word-search/index.html
git commit -m "feat: add grid and word list rendering to word-search tool"
```

---

## Task 5: Word Search Maker — PDF Export

**Files:**
- Modify: `public/tools/word-search/index.html`

- [ ] **Step 1: Replace the exportPDF stub**

Find:
```javascript
    // ── PDF export (Task 5) ──
    function exportPDF() {}
```

Replace with:
```javascript
    function exportPDF() {
      if (!currentGrid) return;
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

      const pageW   = 210;
      const margin  = 15;
      const maxW    = pageW - margin * 2;
      const cellSize = Math.min(maxW / currentCols, 170 / currentRows, 10);
      const gridW   = cellSize * currentCols;
      const gridH   = cellSize * currentRows;
      const startX  = (pageW - gridW) / 2;
      const startY  = 25;

      // Title
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text('Word Search', pageW / 2, 18, { align: 'center' });

      // Grid cells
      doc.setLineWidth(0.3);
      doc.setFontSize(Math.min(cellSize * 0.58, 10));
      doc.setFont('helvetica', 'bold');
      for (let r = 0; r < currentRows; r++) {
        for (let c = 0; c < currentCols; c++) {
          const x = startX + c * cellSize;
          const y = startY + r * cellSize;
          doc.rect(x, y, cellSize, cellSize);
          doc.text(currentGrid[r][c], x + cellSize / 2, y + cellSize * 0.68, { align: 'center' });
        }
      }

      // Word list
      const listY = startY + gridH + 12;
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('Words to Find:', margin, listY);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      const perRow   = 4;
      const colWidth = maxW / perRow;
      words.forEach((word, i) => {
        const col = i % perRow;
        const row = Math.floor(i / perRow);
        doc.text(word, margin + col * colWidth, listY + 8 + row * 7);
      });

      doc.save('word-search.pdf');
    }
```

- [ ] **Step 2: Test PDF export**

1. Add words "HELLO", "WORLD", "PUZZLE"
2. Click "Generate!"
3. Click "Export PDF"

Expected: Browser downloads `word-search.pdf`. Open it — should show title "Word Search", a filled letter grid with borders, and "Words to Find:" list below.

- [ ] **Step 3: Commit**

```bash
git add public/tools/word-search/index.html
git commit -m "feat: add jsPDF export to word-search tool"
```

---

## Task 6: Word Search Maker — SEO Head Tags

**Files:**
- Modify: `public/tools/word-search/index.html`

- [ ] **Step 1: Replace the `<title>` line and add meta/OG/JSON-LD tags**

Find the current `<head>` opening section (just after `<head>`):
```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Free Word Search Maker — Print or Export to PDF | ZenithTools</title>
```

Replace with:
```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Free Word Search Maker — Print or Export to PDF | ZenithTools</title>
  <meta name="description" content="Create custom word search puzzles instantly. Add your own words, choose grid size and directions, then print or export to PDF for free. No login required.">
  <link rel="canonical" href="https://zenithtools.vercel.app/tools/word-search/index.html">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://zenithtools.vercel.app/tools/word-search/index.html">
  <meta property="og:title" content="Free Word Search Maker — Print or Export to PDF | ZenithTools">
  <meta property="og:description" content="Build printable word search puzzles with your own words. Choose grid size, directions, and export to PDF. Free, no login.">
  <meta property="og:site_name" content="ZenithTools">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Free Word Search Maker | ZenithTools">
  <meta name="twitter:description" content="Create custom word search puzzles and export to PDF. Free, instant, no login.">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Word Search Maker",
        "url": "https://zenithtools.vercel.app/tools/word-search/index.html",
        "description": "Create custom printable word search puzzles. Add your own words, configure grid size and directions, export to PDF.",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Any",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "creator": { "@type": "Organization", "name": "ZenithTools", "url": "https://zenithtools.vercel.app" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I make a word search?", "acceptedAnswer": { "@type": "Answer", "text": "Type your words one at a time and click the + button (or press Enter) to add them. Then click Generate! to create your puzzle." } },
          { "@type": "Question", "name": "Can I print the word search?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Click Export PDF to download a print-ready PDF of your word search puzzle." } },
          { "@type": "Question", "name": "How many words can I add?", "acceptedAnswer": { "@type": "Answer", "text": "You can add as many words as fit in your chosen grid size. Words that cannot be placed will be reported after generation." } },
          { "@type": "Question", "name": "Is the word search maker free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free. No account or login required." } }
        ]
      }
    ]
  }
  </script>
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

Expected: Build completes with no errors (this change is to a static HTML file, not a Next.js file, so the build should be unaffected).

- [ ] **Step 3: Commit**

```bash
git add public/tools/word-search/index.html
git commit -m "feat: add SEO meta tags and JSON-LD schema to word-search tool"
```

---

## Task 7: Homepage Card + Sitemap

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Add Word Search card to the tools array in page.tsx**

In [src/app/page.tsx](src/app/page.tsx), find the tools array. It ends with the ip-checker entry:
```tsx
    {
      id: "ip-checker",
      name: "Network Inspector",
      description: "Look up your public IP address, ISP, and location.",
      icon: "🌐",
      path: "/tools/ip-checker/index.html",
      badge: "05",
    },
```

Add the new tool immediately after that closing brace and comma:
```tsx
    {
      id: "word-search",
      name: "Word Search Maker",
      description: "Build custom word search puzzles and export to PDF instantly.",
      icon: "🔤",
      path: "/tools/word-search/index.html",
      badge: "06",
    },
```

- [ ] **Step 2: Remove the "Coming Soon" card**

In the same file, find and delete this entire JSX block:
```tsx
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
```

- [ ] **Step 3: Add Word Search to the JSON-LD ItemList in page.tsx**

Find the `jsonLd` object near the top of the file. In the `itemListElement` array, add this entry after position 5:
```tsx
        { "@type": "ListItem", "position": 6, "name": "Word Search Maker", "url": "https://zenithtools.vercel.app/tools/word-search/index.html" }
```

- [ ] **Step 4: Add all 6 tool URLs to sitemap.ts**

Replace the entire content of [src/app/sitemap.ts](src/app/sitemap.ts) with:
```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = "https://zenithtools.vercel.app";
  const lastMod = new Date("2026-04-28");

  return [
    { url: SITE_URL, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/tools/username-generator/index.html`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tools/word-finder/index.html`,        lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tools/recipe-scaler/index.html`,      lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tools/romaji-to-kana/index.html`,     lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tools/ip-checker/index.html`,         lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tools/word-search/index.html`,        lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/legal/privacy`,  lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/legal/terms`,    lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/legal/cookies`,  lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
  ];
}
```

- [ ] **Step 5: Build and verify**

```bash
npm run build
```

Expected: Build succeeds. No TypeScript errors.

- [ ] **Step 6: Preview homepage**

```bash
npm run dev
```

Open `http://localhost:3000`. Expected: 6 tool cards visible, Word Search Maker card shows as card 06 with 🔤 icon. No "Coming Soon" placeholder.

- [ ] **Step 7: Commit**

```bash
git add src/app/page.tsx src/app/sitemap.ts
git commit -m "feat: add word-search card to homepage and all 6 tools to sitemap"
```

---

## Task 8: Deploy to Vercel

This task is manual (no code changes).

- [ ] **Step 1: Push to GitHub**

```bash
git push origin master
```

If the repo isn't on GitHub yet, create a new GitHub repo at github.com/new, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/auto-money.git
git push -u origin master
```

- [ ] **Step 2: Create Vercel project**

1. Go to vercel.com and log in
2. Click "Add New → Project"
3. Import your GitHub repo
4. Vercel auto-detects Next.js — leave all settings as default
5. Click "Deploy"

- [ ] **Step 3: Confirm live URL**

Wait for deploy to complete (usually 1–2 minutes).
Expected: Site is live at `https://zenithtools.vercel.app` (or similar — Vercel may suggest a slightly different URL if the name is taken; update `SITE_URL` in `src/app/layout.tsx` and `src/app/sitemap.ts` if different).

- [ ] **Step 4: Smoke test 3 pages**

Visit:
- `https://zenithtools.vercel.app` — homepage with 6 cards
- `https://zenithtools.vercel.app/tools/word-search/index.html` — word search tool works
- `https://zenithtools.vercel.app/sitemap.xml` — XML lists all 10 URLs

---

## Task 9: Google Analytics 4

Do this after the site is live (Task 8 complete). You'll need a GA4 Measurement ID (`G-XXXXXXXXXX`).

**How to get your GA4 ID:**
1. Go to analytics.google.com → Admin → Create Property
2. Follow setup wizard → Web platform → enter `https://zenithtools.vercel.app`
3. Copy the Measurement ID (format: `G-XXXXXXXXXX`)

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: all 6 `public/tools/*/index.html` files

- [ ] **Step 1: Add GA4 to layout.tsx**

In [src/app/layout.tsx](src/app/layout.tsx), add `Script` to the import line:
```tsx
import Script from "next/script";
```

Then in the `RootLayout` return, add these two Script tags immediately after the opening `<body>` tag (before `{children}`):
```tsx
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
```

Replace both instances of `G-XXXXXXXXXX` with your real Measurement ID.

- [ ] **Step 2: Add GA4 snippet to each tool HTML file**

Add the following block immediately before `</head>` in each of these 6 files:
- `public/tools/username-generator/index.html`
- `public/tools/word-finder/index.html`
- `public/tools/recipe-scaler/index.html`
- `public/tools/romaji-to-kana/index.html`
- `public/tools/ip-checker/index.html`
- `public/tools/word-search/index.html`

Snippet to add (replace `G-XXXXXXXXXX` with your real ID in each file):
```html
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
```

- [ ] **Step 3: Build, commit, and deploy**

```bash
npm run build
git add src/app/layout.tsx public/tools/username-generator/index.html public/tools/word-finder/index.html public/tools/recipe-scaler/index.html public/tools/romaji-to-kana/index.html public/tools/ip-checker/index.html public/tools/word-search/index.html
git commit -m "feat: add GA4 tracking to homepage layout and all tool pages"
git push origin master
```

- [ ] **Step 4: Verify GA4 is firing**

Visit `https://zenithtools.vercel.app` and open a tool. In GA4 → Reports → Realtime — you should see 1 active user within 30 seconds.

---

## Task 10: Google Search Console

Do this after the site is live (Task 8 complete).

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Get verification code**

1. Go to search.google.com/search-console
2. Click "Add property" → URL prefix → enter `https://zenithtools.vercel.app`
3. Choose "HTML tag" verification
4. Copy the `content` value from the meta tag shown (looks like: `abc123XYZ_abc123`)

- [ ] **Step 2: Add verification code to layout.tsx**

In [src/app/layout.tsx](src/app/layout.tsx), find line 89:
```tsx
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
```

Replace with your real code:
```tsx
    google: "YOUR_ACTUAL_CODE_HERE",
```

- [ ] **Step 3: Build, commit, deploy**

```bash
npm run build
git add src/app/layout.tsx
git commit -m "feat: add Google Search Console verification"
git push origin master
```

- [ ] **Step 4: Verify and submit sitemap**

1. Back in Search Console — click "Verify"
2. Expected: "Ownership verified" confirmation
3. In the left sidebar go to "Sitemaps" → enter `sitemap.xml` → click Submit
4. Expected: Sitemap status shows "Success"
5. Use "URL Inspection" → enter `https://zenithtools.vercel.app` → click "Request Indexing"
6. Repeat URL Inspection for each of the 6 tool URLs

---

## Task 11: Google AdSense (after approval)

Apply at adsense.google.com immediately after the site is live. Approval takes 1–14 days. Only complete this task once Google emails you approval and gives you a publisher ID (`ca-pub-XXXXXXXXXXXXXXXXX`) and ad slot IDs.

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: all 6 `public/tools/*/index.html` files

- [ ] **Step 1: Add AdSense script to layout.tsx**

In [src/app/layout.tsx](src/app/layout.tsx), add this Script tag alongside the GA4 scripts (replace `ca-pub-XXXXXXXXXXXXXXXXX` with your real publisher ID):
```tsx
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
```

- [ ] **Step 2: Add AdSense to each tool HTML file**

For each of the 6 tool HTML files, add the site-level script immediately before `</head>`:
```html
  <!-- Google AdSense -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

- [ ] **Step 3: Add ad units to each tool HTML file**

For each tool, find the main content area. Add an ad unit **above the tool** (just after the `<main>` or hero section opening) and one **below the results/output area**. Replace `ca-pub-XXXXXXXXXXXXXXXXX` and `XXXXXXXXXX` (ad slot ID — unique per unit, from your AdSense dashboard):

```html
<!-- Ad unit -->
<div style="text-align:center; margin: 12px 0;">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
       data-ad-slot="XXXXXXXXXX"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

Create a **separate ad slot** in your AdSense dashboard for each placement (each tool's "above" and "below" positions = 12 total slots). Copy the correct `data-ad-slot` value into each.

- [ ] **Step 4: Build, commit, deploy**

```bash
npm run build
git add src/app/layout.tsx public/tools/username-generator/index.html public/tools/word-finder/index.html public/tools/recipe-scaler/index.html public/tools/romaji-to-kana/index.html public/tools/ip-checker/index.html public/tools/word-search/index.html
git commit -m "feat: add Google AdSense to homepage and all tool pages"
git push origin master
```

- [ ] **Step 5: Verify ads are showing**

Visit any tool page. Within a few minutes (sometimes up to 24 hours for new sites), ad units should render. In AdSense dashboard → Reports → you should see impressions start accumulating.

---

## Success Criteria

- [ ] Word Search Maker works end-to-end: add words, generate puzzle, export PDF
- [ ] Homepage shows 6 tool cards, no "Coming Soon" placeholder
- [ ] Site live at `https://zenithtools.vercel.app`
- [ ] `https://zenithtools.vercel.app/sitemap.xml` lists all 10 URLs
- [ ] GA4 shows live traffic in Realtime report
- [ ] Google Search Console verified and sitemap submitted
- [ ] AdSense approved and ad units rendering on all 6 tool pages
