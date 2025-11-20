import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI Paraphrasing Tool - Transform Your Text Instantly",
    short_name: "AI Paraphraser",
    description:
      "Transform your writing from good to great with our AI-powered paraphraser tool. Free online text paraphrasing with instant results.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6750A4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
