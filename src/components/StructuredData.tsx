export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Paraphrasing Tool",
    description:
      "Transform your writing from good to great with our AI-powered paraphraser tool. Free online text paraphrasing with OpenAI and Gemini.",
    url: "https://ai-paraphraser.onrender.com",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
