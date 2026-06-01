/**
 * ZenithTools Cookie Consent Banner
 * GDPR-compliant. Loads ad/analytics scripts only after user consent.
 * Storage key: 'zt_consent' → 'all' | 'essential'
 */
(function () {
  'use strict';

  const CONSENT_KEY = 'zt_consent';
  const CONSENT_EXPIRY_DAYS = 365;

  function getConsent() {
    return localStorage.getItem(CONSENT_KEY);
  }

  function setConsent(value) {
    localStorage.setItem(CONSENT_KEY, value);
    // Set a cookie too for server-side awareness
    const expires = new Date(Date.now() + CONSENT_EXPIRY_DAYS * 86400 * 1000).toUTCString();
    document.cookie = CONSENT_KEY + '=' + value + '; expires=' + expires + '; path=/; SameSite=Lax';
  }

  function loadAdSense() {
    // Only call this AFTER consent is granted
    if (document.querySelector('script[data-adsense]')) return;
    // TODO: Replace ca-pub-XXXXXXXXXXXXXXXXX with your publisher ID
    var s = document.createElement('script');
    s.async = true;
    s.setAttribute('data-adsense', 'true');
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX';
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }

  function applyConsent(level) {
    if (level === 'all') {
      loadAdSense();
    }
  }

  function createBanner() {
    var style = document.createElement('style');
    style.textContent = `
      #zt-consent-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99999;
        background: #1a1a2e;
        border-top: 3px solid #FF9800;
        padding: 1rem 1.5rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        font-family: 'Nunito', sans-serif;
        box-shadow: 0 -4px 20px rgba(0,0,0,0.4);
        animation: zt-slide-up 0.4s ease-out;
      }
      @keyframes zt-slide-up {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      #zt-consent-banner p {
        color: #e2e8f0;
        font-size: 0.875rem;
        font-weight: 700;
        flex: 1;
        min-width: 200px;
        margin: 0;
      }
      #zt-consent-banner a {
        color: #FF9800;
        text-decoration: underline;
      }
      .zt-btn-accept {
        background: #85E61D;
        color: #1a2e00;
        border: none;
        padding: 0.6rem 1.4rem;
        border-radius: 30px;
        font-weight: 900;
        font-family: 'Nunito', sans-serif;
        font-size: 0.85rem;
        cursor: pointer;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        border-bottom: 3px solid #558B2F;
        transition: filter 0.15s;
        white-space: nowrap;
      }
      .zt-btn-accept:hover { filter: brightness(1.1); }
      .zt-btn-essential {
        background: transparent;
        color: #94a3b8;
        border: 2px solid #475569;
        padding: 0.6rem 1.2rem;
        border-radius: 30px;
        font-weight: 700;
        font-family: 'Nunito', sans-serif;
        font-size: 0.8rem;
        cursor: pointer;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        transition: all 0.15s;
        white-space: nowrap;
      }
      .zt-btn-essential:hover { border-color: #94a3b8; color: #e2e8f0; }
    `;
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.id = 'zt-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = `
      <p>
        🍪 DokiDoki.Tools uses cookies to display ads that keep our tools free, and for analytics.
        By clicking <strong>"Accept All"</strong>, you consent to our use of cookies.
        <a href="/tools/shared/cookie.html">Cookie Policy</a> &nbsp;|&nbsp;
        <a href="/tools/shared/privacy.html">Privacy Policy</a>
      </p>
      <button class="zt-btn-accept" id="zt-accept-all">✓ Accept All</button>
      <button class="zt-btn-essential" id="zt-accept-essential">Essential Only</button>
    `;
    document.body.appendChild(banner);

    document.getElementById('zt-accept-all').addEventListener('click', function () {
      setConsent('all');
      applyConsent('all');
      banner.style.animation = 'zt-slide-up 0.3s ease-in reverse';
      setTimeout(function () { banner.remove(); }, 300);
    });

    document.getElementById('zt-accept-essential').addEventListener('click', function () {
      setConsent('essential');
      banner.style.animation = 'zt-slide-up 0.3s ease-in reverse';
      setTimeout(function () { banner.remove(); }, 300);
    });
  }

  // Main entry point
  var existing = getConsent();
  if (existing) {
    // Consent already stored — apply immediately, no banner
    applyConsent(existing);
  } else {
    // Show banner on DOMContentLoaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createBanner);
    } else {
      createBanner();
    }
  }
})();
