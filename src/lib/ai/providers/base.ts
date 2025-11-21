import { AI_DEFAULTS } from "@/lib/ai";
import type { AIProvider, AIProviderConfig } from "../types";
import { AIProviderError } from "../types";

/**
 * Abstract base class for AI providers
 * Implements common functionality to reduce code duplication
 */
export abstract class BaseAIProvider implements AIProvider {
  public abstract readonly name: string;
  public readonly timeout: number;
  protected readonly apiKey: string;
  protected readonly model: string;

  constructor(config: AIProviderConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model;
    this.timeout = config.timeout ?? AI_DEFAULTS.TIMEOUT_MS;
  }

  /**
   * Paraphrase text using the provider's API
   * @param text - Text to paraphrase
   * @returns Promise resolving to paraphrased text
   */
  abstract paraphrase(text: string): Promise<string>;

  /**
   * Handle errors consistently across all providers
   * @param error - The error that occurred
   * @returns AIProviderError with context
   */
  protected handleError(error: unknown): AIProviderError {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new AIProviderError(message, this.name, error);
  }

  /**
   * Validate response has content
   * @param content - Content to validate
   * @param contentType - Type of content for error message
   * @throws {Error} If content is empty
   */
  protected validateContent(content: unknown, contentType = "content"): void {
    if (!content) {
      throw new Error(`No ${contentType} in response`);
    }
  }
}
