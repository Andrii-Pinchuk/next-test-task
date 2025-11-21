import { AI_DEFAULTS, API_ENDPOINTS, PARAPHRASE_PROMPT } from "@/lib/ai";
import { BaseAIProvider } from "./base";

export class OpenAIProvider extends BaseAIProvider {
  public readonly name = "OpenAI";

  async paraphrase(text: string): Promise<string> {
    try {
      const response = await fetch(API_ENDPOINTS.OPENAI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            {
              role: "user",
              content: PARAPHRASE_PROMPT.replace("{TEXT}", text),
            },
          ],
          temperature: AI_DEFAULTS.TEMPERATURE,
        }),
      });

      const data = await response.json();
      const paraphrasedText = data.choices?.[0]?.message?.content;

      this.validateContent(paraphrasedText);

      return paraphrasedText.trim();
    } catch (error) {
      throw this.handleError(error);
    }
  }
}
