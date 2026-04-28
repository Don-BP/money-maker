/**
 * Seeded Username & Password Generator Logic
 * PDR Spec: Client-side, DataMuse API integration, secure local passwords.
 */

const DOM = {
    seed: document.getElementById('seedInput'),
    generateBtn: document.getElementById('generateBtn'),
    grid: document.getElementById('resultsGrid'),
    loader: document.getElementById('loader'),
    toast: document.getElementById('copyNotice'),
    toggle: document.getElementById('toggleOptions'),
    panel: document.getElementById('optionsPanel'),
    style: document.getElementById('styleSelect'),
    numbers: document.getElementById('numberSelect')
};

const ADJECTIVES = {
    gaming: ['Toxic', 'Lethal', 'Ghost', 'Shadow', 'Void', 'Dark', 'Neon', 'Cyber', 'Apex'],
    minimal: ['The', 'True', 'Real', 'Just', 'Pure', 'Only', 'Its'],
    fantasy: ['Lord', 'Darth', 'Sir', 'Saint', 'King', 'Queen', 'Mystic', 'Elder', 'Iron']
};

const SUFFIXES = {
    gaming: ['Slayer', 'Sniper', 'Main', 'God', 'FPS', 'TTV'],
    minimal: ['_', 'x', 'V2', 'HQ'],
    fantasy: ['born', 'heart', 'weaver', 'forge', 'bane']
};

const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    const length = 12 + Math.floor(Math.random() * 4); // 12-15 chars
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};

const showToast = (message) => {
    DOM.toast.textContent = message;
    DOM.toast.classList.remove('hidden');
    setTimeout(() => DOM.toast.classList.add('hidden'), 2000);
};

const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied ${type} to clipboard! ✓`);
    });
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const forgeIdentities = async () => {
    const seed = DOM.seed.value.trim();
    if (!seed) return;

    DOM.loader.style.display = 'block';
    DOM.grid.innerHTML = '';
    
    const style = DOM.style.value;
    const useNums = DOM.numbers.value === 'yes';

    try {
        // Fetch words related to the seed
        const response = await fetch(`https://api.datamuse.com/words?ml=${encodeURIComponent(seed)}&max=15`);
        const words = await response.json();
        
        // Add the seed itself as the first option
        const baseWords = [seed.toLowerCase()];
        words.forEach(w => baseWords.push(w.word));

        const results = [];
        
        for (let i = 0; i < 9; i++) { // Generate 9 cards
            const baseWord = capitalize(baseWords[Math.floor(Math.random() * baseWords.length)]);
            const adj = ADJECTIVES[style][Math.floor(Math.random() * ADJECTIVES[style].length)];
            const suf = SUFFIXES[style][Math.floor(Math.random() * SUFFIXES[style].length)];
            
            let username = "";
            const pattern = Math.random();
            
            if (style === 'minimal') {
                username = pattern > 0.5 ? `${adj}${baseWord}` : `${baseWord}${suf}`;
            } else if (style === 'fantasy') {
                username = pattern > 0.5 ? `${adj}${baseWord}` : `${baseWord}${suf.toLowerCase()}`;
            } else {
                // gaming
                username = pattern > 0.5 ? `${adj}${baseWord}` : `${baseWord}${suf}`;
            }

            if (useNums) {
                const num = Math.floor(Math.random() * 99) + 1;
                username += num;
            }

            const password = generatePassword();
            results.push({ username, password });
        }

        DOM.loader.style.display = 'none';
        
        results.forEach((res, i) => {
            const card = document.createElement('div');
            card.className = 'bg-white border-4 border-gray-200 rounded-3xl p-6 chunky-shadow-panel hover:-translate-y-1 transition-transform';
            card.innerHTML = `
                <div class="flex items-center justify-between mb-4">
                    <span class="text-primary text-2xl font-black truncate max-w-[70%]">${res.username}</span>
                    <button class="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-xl text-xs font-black uppercase transition-colors" onclick="copyToClipboard('${res.username}', 'Username')">Copy</button>
                </div>
                <div class="bg-gray-50 border-2 border-gray-100 p-4 rounded-2xl flex justify-between items-center group/pass">
                    <span class="font-mono font-bold text-gray-500 blur-[3px] group-hover/pass:blur-0 transition-all text-sm">${res.password}</span>
                    <button class="text-secondary font-black uppercase text-xs hover:text-primary transition-colors" onclick="copyToClipboard('${res.password}', 'Password')">Copy</button>
                </div>
            `;
            DOM.grid.appendChild(card);
        });

    } catch (err) {
        console.error("DataMuse API Error:", err);
        DOM.loader.style.display = 'none';
        DOM.grid.innerHTML = '<p style="color:var(--destructive)">Error communicating with dictionary API. Please try again.</p>';
    }
};

DOM.generateBtn.addEventListener('click', forgeIdentities);
DOM.seed.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') forgeIdentities();
});

DOM.toggle.addEventListener('click', () => {
    DOM.panel.classList.toggle('hidden');
    DOM.toggle.innerText = DOM.panel.classList.contains('hidden') 
        ? 'Generator Options ▾' 
        : 'Generator Options ▴';
});

// Expose copy fn globally for inline handlers
window.copyToClipboard = copyToClipboard;
