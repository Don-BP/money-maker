/**
 * Network Inspector Logic (Neon Jelly Settings Theme)
 */

const DOM = {
    ip: document.getElementById('ipv4Display'),
    isp: document.getElementById('ispDisplay'),
    loc: document.getElementById('locDisplay'),
    ua: document.getElementById('uaDisplay'),
    btn: document.getElementById('refreshBtn')
};

const fetchIPData = async () => {
    DOM.ip.textContent = 'Scanning_Network...';
    DOM.ip.classList.add('animate-pulse');
    DOM.isp.textContent = 'Searching_ISP...';
    DOM.loc.textContent = '...';
    DOM.ua.textContent = navigator.userAgent;

    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Terminal_Offline');
        const data = await response.json();
        
        if (data.error) throw new Error(data.reason || 'Node_Busy');

        DOM.ip.classList.remove('animate-pulse');
        DOM.ip.textContent = data.ip;
        DOM.isp.textContent = data.org || data.asn || 'Identity_Hidden';
        DOM.loc.textContent = `${data.city}, ${data.country_name}`;
    } catch (error) {
        console.error("Node_Link_Failure:", error);
        DOM.ip.classList.remove('animate-pulse');
        DOM.ip.textContent = 'Link_Error';
        DOM.ip.classList.add('text-red-500');
        DOM.isp.textContent = 'Telemetry_Blocked';
        DOM.loc.textContent = 'Check_Node_Protocols';
    }
};

DOM.btn.addEventListener('click', fetchIPData);

// Init
fetchIPData();
