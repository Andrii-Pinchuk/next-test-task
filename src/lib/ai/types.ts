export interface AIProvider {
  name: string;
  paraphrase: (text: string) => Promise<string>;
  timeout?: number;
}

export interface AIProviderConfig {
  apiKey: string;
  model: string;
  timeout?: number;
}

export class AIProviderError extends Error {
  constructor(
    message: string,
    public provider: string,
    public originalError?: unknown,
  ) {
    super(message);
    this.name = "AIProviderError";
  }
}
