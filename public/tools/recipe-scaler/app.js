/**
 * Recipe Scaler Pro Logic (Glossy Blue Menu Theme)
 * Bulk-paste parser with unit detection and metric conversion.
 */

const DOM = {
    input: document.getElementById('ingredientsInput'),
    scale: document.getElementById('scaleFactor'),
    results: document.getElementById('resultsArea'),
    scaleBtn: document.getElementById('scaleBtn'),
    clearBtn: document.getElementById('clearBtn'),
    copyBtn: document.getElementById('copyBtn')
};

const CONVERSIONS = {
    'cup': { factor: 236.588, unit: 'ml' },
    'cups': { factor: 236.588, unit: 'ml' },
    'tbsp': { factor: 14.7868, unit: 'ml' },
    'tablespoon': { factor: 14.7868, unit: 'ml' },
    'tsp': { factor: 4.92892, unit: 'ml' },
    'teaspoon': { factor: 4.92892, unit: 'ml' },
    'oz': { factor: 28.3495, unit: 'g' },
    'ounce': { factor: 28.3495, unit: 'g' },
    'lb': { factor: 453.592, unit: 'g' },
    'lbs': { factor: 453.592, unit: 'g' },
    'g': { factor: 1, unit: 'g' },
    'kg': { factor: 1000, unit: 'g' },
    'ml': { factor: 1, unit: 'ml' },
    'l': { factor: 1000, unit: 'ml' }
};

const parseLine = (line) => {
    // Regex to match quantity (including fractions), unit, and ingredient name
    // Examples: "2 1/4 cups flour", "500g chicken", "1.5 tsp salt"
    const regex = /^([\d\/\.\s\-]+)?\s*([a-zA-Z]+)?\s*(.*)$/;
    const match = line.trim().match(regex);
    
    if (!match) return { raw: line };

    let qtyStr = match[1] || "";
    let unit = match[2] || "";
    let name = match[3] || "";

    // Convert fractions to decimal
    let qty = evalFraction(qtyStr);
    
    return { qty, unit, name, raw: line };
};

const evalFraction = (str) => {
    if (!str) return null;
    str = str.trim().replace('-', ' '); // Handle "1-1/2"
    
    try {
        if (str.includes('/')) {
            const parts = str.split(/\s+/);
            let total = 0;
            parts.forEach(p => {
                if (p.includes('/')) {
                    const [num, den] = p.split('/');
                    total += parseFloat(num) / parseFloat(den);
                } else {
                    total += parseFloat(p);
                }
            });
            return total;
        }
        return parseFloat(str);
    } catch (e) {
        return null;
    }
};

const formatQty = (num) => {
    if (num === null) return "";
    return Number.isInteger(num) ? num : parseFloat(num.toFixed(2));
};

const getMetric = (qty, unit) => {
    if (qty === null || !unit) return null;
    const u = unit.toLowerCase();
    if (CONVERSIONS[u]) {
        const val = qty * CONVERSIONS[u].factor;
        const targetUnit = CONVERSIONS[u].unit;
        return targetUnit === 'L' || targetUnit === 'ml' ? `${Math.round(val)} ${targetUnit}` : `${Math.round(val)} ${targetUnit}`;
    }
    return null;
};

const processRecipe = () => {
    const text = DOM.input.value;
    const factor = parseFloat(DOM.scale.value) || 1;
    const lines = text.split('\n').filter(l => l.trim() !== "");

    if (lines.length === 0) {
        DOM.results.innerHTML = `
            <div class="text-center py-20 text-white/20">
                <span class="material-icons text-6xl mb-4">analytics</span>
                <p class="font-black uppercase tracking-widest text-sm">Waiting for input...</p>
            </div>
        `;
        return;
    }

    DOM.results.innerHTML = lines.map(line => {
        const parsed = parseLine(line);
        if (parsed.qty === null) {
            return `
                <div class="bg-white/5 border border-white/10 p-4 rounded-xl text-white/40 italic">
                    ${line}
                </div>
            `;
        }

        const scaledQty = parsed.qty * factor;
        const metric = getMetric(scaledQty, parsed.unit);

        return `
            <div class="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between group">
                <div class="flex flex-col">
                    <span class="text-white font-bold text-lg">
                        <span class="text-glossy-blue">${formatQty(scaledQty)}</span> ${parsed.unit} ${parsed.name}
                    </span>
                    ${metric ? `<span class="text-[10px] text-white/30 uppercase font-black tracking-widest">≈ ${metric}</span>` : ''}
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="material-icons text-white/20 text-sm">drag_handle</span>
                </div>
            </div>
        `;
    }).join('');
};

// Events
DOM.scaleBtn.addEventListener('click', processRecipe);
DOM.clearBtn.addEventListener('click', () => {
    DOM.input.value = '';
    processRecipe();
});
DOM.copyBtn.addEventListener('click', () => {
    const text = Array.from(DOM.results.querySelectorAll('.text-white.font-bold'))
        .map(el => el.innerText)
        .join('\n');
    if (text) {
        navigator.clipboard.writeText(text);
        const icon = DOM.copyBtn.querySelector('.material-icons');
        icon.innerText = 'done';
        setTimeout(() => icon.innerText = 'content_copy', 2000);
    }
});

// Real-time scaling
DOM.scale.addEventListener('input', () => {
    if (DOM.input.value.trim()) processRecipe();
});

// Init with example if empty
if (!DOM.input.value.trim()) {
    DOM.input.value = "2 cups flour\n1.5 tsp salt\n500g chicken breast\n1/2 cup water";
}
processRecipe();
