import { NextResponse } from "next/server";
import { AIService, GeminiProvider, OpenAIProvider } from "@/lib/ai";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Text is required and must be a non-empty string" },
        { status: 400 },
      );
    }

    // Initialize providers in order of preference
    const providers = [];
    const defaultAIProviderTimeout = 3000;

    // OpenAI provider (first priority)
    if (process.env.OPENAI_API_KEY) {
      providers.push(
        new OpenAIProvider({
          apiKey: process.env.OPENAI_API_KEY,
          model: process.env.OPENAI_MODEL || "gpt-4.1-nano",
          timeout: defaultAIProviderTimeout,
        }),
      );
    }

    // Gemini provider (second priority)
    if (process.env.GEMINI_API_KEY) {
      providers.push(
        new GeminiProvider({
          apiKey: process.env.GEMINI_API_KEY,
          model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
          timeout: defaultAIProviderTimeout,
        }),
      );
    }

    if (providers.length === 0) {
      return NextResponse.json(
        { error: "No AI providers configured" },
        { status: 500 },
      );
    }

    const aiService = new AIService(providers);
    const result = await aiService.paraphrase(text);

    console.log(`✅ Paraphrase successful using: ${result.provider}`);

    return NextResponse.json({
      paraphrasedText: result.text,
      provider: result.provider,
    });
  } catch (error) {
    console.error("Paraphrase API error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
