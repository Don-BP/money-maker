/**
 * Lexicon Finder Logic (Game Resource Shop Theme)
 */

const DOM = {
    input: document.getElementById('wordInput'),
    results: document.getElementById('resultsContent'),
    loader: document.getElementById('loader'),
    searchBtn: document.getElementById('searchBtn')
};

let currentMode = 'ml'; // ml = synonyms, rel_ant = antonyms, rel_rhy = rhymes
let timer;

const MODE_MAP = {
    synonyms: 'ml',
    antonyms: 'rel_ant',
    rhymes: 'rel_rhy'
};

const fetchWords = async () => {
    const word = DOM.input.value.trim();
    if (word.length < 2) {
        DOM.results.innerHTML = `
            <div class="text-center py-20 col-span-full opacity-30">
                <span class="material-icons text-8xl mb-4">auto_stories</span>
                <p class="font-black uppercase tracking-widest">Enter a word to start discovery</p>
            </div>
        `;
        return;
    }

    DOM.loader.classList.remove('hidden');
    DOM.results.classList.add('opacity-50');

    try {
        const url = `https://api.datamuse.com/words?${currentMode}=${word}&max=40`;
        const response = await fetch(url);
        let data = await response.json();
        
        // Fallback for Antonyms
        if (data.length === 0 && currentMode === 'rel_ant') {
            try {
                const dictRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                const dictData = await dictRes.json();
                if (Array.isArray(dictData)) {
                    const antonymSet = new Set();
                    dictData.forEach(entry => {
                        if (entry.meanings) {
                            entry.meanings.forEach(m => {
                                if (m.antonyms) m.antonyms.forEach(a => antonymSet.add(a));
                                if (m.definitions) {
                                    m.definitions.forEach(d => {
                                        if (d.antonyms) d.antonyms.forEach(a => antonymSet.add(a));
                                    });
                                }
                            });
                        }
                    });
                    data = Array.from(antonymSet).map(w => ({ word: w }));
                }
            } catch (e) { console.error("Fallback failed", e); }
        }
        
        // Expansion for Antonyms
        if (currentMode === 'rel_ant' && data.length > 0 && data.length < 15) {
            try {
                const antonymSet = new Set(data.map(d => d.word));
                const topAntonyms = data.slice(0, 3).map(d => d.word);
                const expandPromises = topAntonyms.map(ant => 
                    fetch(`https://api.datamuse.com/words?ml=${ant}&max=15`).then(r => r.json())
                );
                const expandResults = await Promise.all(expandPromises);
                expandResults.forEach(res => {
                    if (Array.isArray(res)) res.forEach(item => antonymSet.add(item.word));
                });
                data = Array.from(antonymSet).map(w => ({ word: w }));
            } catch(e) { console.error("Expansion failed", e); }
        }

        render(data);
    } catch (err) {
        DOM.results.innerHTML = '<p class="text-red-500 font-black col-span-full text-center">SHOP CONNECTION ERROR. CHECK YOUR INTERNET.</p>';
    } finally {
        DOM.loader.classList.add('hidden');
        DOM.results.classList.remove('opacity-50');
    }
};

const render = (data) => {
    if (data.length === 0) {
        DOM.results.innerHTML = `
            <div class="text-center py-20 col-span-full opacity-30">
                <span class="material-icons text-8xl mb-4">search_off</span>
                <p class="font-black uppercase tracking-widest">No loot found for this word</p>
            </div>
        `;
        return;
    }

    DOM.results.innerHTML = data.map(item => `
        <button 
            class="bg-white border-4 border-amber-200 rounded-2xl p-4 font-black text-amber-900 shadow-[0_4px_0_#d1d5db] hover:translate-y-1 hover:shadow-none hover:border-gold-accent transition-all active:bg-gold-accent active:text-white truncate"
            onclick="copyWord('${item.word}')"
        >
            ${item.word.toUpperCase()}
        </button>
    `).join('');
};

window.setActiveMode = (mode) => {
    currentMode = MODE_MAP[mode] || 'ml';
    fetchWords();
};

window.copyWord = (word) => {
    navigator.clipboard.writeText(word);
    // Simple feedback could be added here
};

// Listeners
DOM.searchBtn.addEventListener('click', fetchWords);
DOM.input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(fetchWords, 500);
});
DOM.input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') fetchWords();
});
