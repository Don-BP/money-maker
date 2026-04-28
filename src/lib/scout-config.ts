export const config = {
  // Scrape frequency in hours (adjust this to save credits)
  scrapeFrequency: 48,
  
  // Credit safety valve: Stop automated scraping if balance is low
  // (We check this before firing a Firecrawl command)
  minCreditThreshold: 50,
  
  // High-value niches for automated targeting
  niches: {
    japan: {
      seedUrl: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Japan",
      cities: ["Tokyo", "Osaka", "Kyoto", "Fukuoka"],
    },
    gaming: {
        seedUrl: "https://prosettings.net/lists/valorant/",
    }
  }
};
