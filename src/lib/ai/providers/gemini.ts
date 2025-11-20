import { AI_DEFAULTS, API_ENDPOINTS, PARAPHRASE_PROMPT } from "../constants";
import { BaseAIProvider } from "./base";

export class GeminiProvider extends BaseAIProvider {
  public readonly name = "Gemini";

  async paraphrase(text: string): Promise<string> {
    try {
      const response = await fetch(
        `${API_ENDPOINTS.GEMINI}/${this.model}:generateContent?key=${this.apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: PARAPHRASE_PROMPT.replace("{TEXT}", text),
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: AI_DEFAULTS.TEMPERATURE,
            },
          }),
        },
      );

      if (!response.ok) {
        const errorMessage = await this.parseErrorResponse(response);
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const paraphrasedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      this.validateContent(paraphrasedText);

      return paraphrasedText.trim();
    } catch (error) {
      throw this.handleError(error);
    }
  }
}
