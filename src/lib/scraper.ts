import { config } from "./scout-config";

export interface JapanData {
  currency: {
    rate: number;
    lastUpdated: string;
  };
  costs: {
    ramen: number;
    hotel: number;
    transport: number;
    lastScraped: string;
  };
}

// Mock data for development to save credits
const mockJapanData: JapanData = {
  currency: {
    rate: 154.2,
    lastUpdated: new Date().toISOString(),
  },
  costs: {
    ramen: 1000,
    hotel: 12000,
    transport: 800,
    lastScraped: new Date().toISOString(),
  },
};

export async function getJapanData(): Promise<JapanData> {
  // Use real exchange rate API (Free & High Quota)
  let rate = mockJapanData.currency.rate;
  try {
    const apiKey = process.env.EXCHANGE_RATE_API_KEY;
    if (apiKey && apiKey !== "your_key_here") {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
      const json = await response.json();
      if (json.conversion_rates && json.conversion_rates.JPY) {
        rate = json.conversion_rates.JPY;
      }
    }
  } catch (e) {
    console.error("Exchange Rate API failed, using fallback.", e);
  }

  // FIRECRAWL LOGIC (Placeholder for real scrape)
  // To reach $10k/mo, we only trigger Firecrawl if the cache is older than config.scrapeFrequency
  // For now, we return mock/cache to protect user credits.
  
  return {
    ...mockJapanData,
    currency: {
      rate: rate,
      lastUpdated: new Date().toISOString(),
    }
  };
}
