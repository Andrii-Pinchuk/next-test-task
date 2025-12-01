import { AI_DEFAULTS } from "./constants";
import type { AIProvider } from "./types";
import { AIProviderError } from "./types";

/**
 * Result of a paraphrase operation
 */
export interface ParaphraseResult {
  text: string;
  provider: string;
}

/**
 * Parameters for calling an AI provider
 */
interface ProviderCallParams {
  provider: AIProvider;
  text: string;
  noTimeout?: boolean;
}

/**
 * Service for managing AI providers with race-based fallback strategy
 */
export class AIService {
  private readonly providers: AIProvider[];

  constructor(providers: AIProvider[]) {
    this.validateProviders(providers);
    this.providers = providers;
  }

  /**
   * Validate that at least one provider is configured
   */
  private validateProviders(providers: AIProvider[]): void {
    if (providers.length === 0) {
      throw new Error("At least one AI provider is required");
    }
  }

  /**
   * Extract error message from any error type
   */
  private getErrorMessage(error: unknown): string {
    if (error instanceof AIProviderError) {
      return error.message;
    }
    if (error instanceof Error) {
      return error.message;
    }
    return "Unknown error";
  }

  /**
   * Call a provider with optional timeout protection
   */
  private async callProvider({
    provider,
    text,
    noTimeout,
  }: ProviderCallParams): Promise<ParaphraseResult> {
    if (noTimeout) {
      const result = await provider.paraphrase(text);
      return { text: result, provider: provider.name };
    }

    const timeoutMs = provider.timeout ?? AI_DEFAULTS.TIMEOUT_MS;

    const result = await Promise.race([
      provider.paraphrase(text),
      this.createTimeoutPromise(timeoutMs, provider.name),
    ]);

    return { text: result, provider: provider.name };
  }

  /**
   * Create a timeout promise that rejects after specified milliseconds
   */
  private createTimeoutPromise(
    timeoutMs: number,
    providerName: string,
  ): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(
          new AIProviderError(
            `Request timeout after ${timeoutMs}ms`,
            providerName,
          ),
        );
      }, timeoutMs);
    });
  }

  /**
   * Handle single provider scenario
   */
  private async handleSingleProvider(text: string): Promise<ParaphraseResult> {
    const provider = this.providers[0];

    try {
      return await this.callProvider({ provider, text });
    } catch (error) {
      const errorMessage = this.getErrorMessage(error);
      throw new Error(`${provider.name} failed: ${errorMessage}`);
    }
  }

  /**
   * Try primary provider first
   */
  private async tryPrimaryProvider(
    provider: AIProvider,
    text: string,
  ): Promise<ParaphraseResult> {
    return await this.callProvider({ provider, text });
  }

  /**
   * Race all backup providers and return the first successful result
   * Note: Backup providers race WITHOUT timeout - they wait indefinitely
   * until one succeeds or all fail
   */
  private async raceBackupProviders(
    backupProviders: AIProvider[],
    text: string,
  ): Promise<ParaphraseResult> {
    const backupPromises = backupProviders.map((provider) =>
      this.callProvider({ provider, text, noTimeout: true }).catch((error) => {
        // Re-throw to be caught by Promise.race
        throw error;
      }),
    );

    return await Promise.race(backupPromises);
  }

  /**
   * Build error message for when all providers fail
   */
  private buildAllFailedErrorMessage(
    primaryProvider: AIProvider,
    primaryErrorMessage: string,
    backupProviders: AIProvider[],
  ): string {
    const allErrors = [
      `${primaryProvider.name}: ${primaryErrorMessage}`,
      ...backupProviders.map((p) => `${p.name}: failed`),
    ].join("; ");

    return `All AI providers failed. Details: ${allErrors}`;
  }

  /**
   * Handle multiple providers scenario with race-based fallback
   */
  private async handleMultipleProviders(
    text: string,
  ): Promise<ParaphraseResult> {
    const [primaryProvider, ...backupProviders] = this.providers;

    try {
      return await this.tryPrimaryProvider(primaryProvider, text);
    } catch (primaryError) {
      const primaryErrorMessage = this.getErrorMessage(primaryError);

      try {
        return await this.raceBackupProviders(backupProviders, text);
      } catch (_backupError) {
        const errorMessage = this.buildAllFailedErrorMessage(
          primaryProvider,
          primaryErrorMessage,
          backupProviders,
        );
        throw new Error(errorMessage);
      }
    }
  }

  /**
   * Paraphrase text using available AI providers
   * Tries primary provider first, falls back to racing all backups if it fails
   *
   * @param text - The text to paraphrase
   * @returns Promise resolving to paraphrased text and provider name
   * @throws {Error} If all providers fail
   */
  async paraphrase(text: string): Promise<ParaphraseResult> {
    if (this.providers.length === 1) {
      return this.handleSingleProvider(text);
    }

    return this.handleMultipleProviders(text);
  }
}
