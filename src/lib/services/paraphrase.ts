interface ParaphraseResponse {
  paraphrasedText: string;
  provider: string;
}

interface ParaphraseError {
  error: string;
}

class ParaphraseAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
  ) {
    super(message);
    this.name = "ParaphraseAPIError";
  }
}

export async function paraphraseText(
  text: string,
): Promise<ParaphraseResponse> {
  try {
    const response = await fetch("/api/paraphrase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data: ParaphraseResponse | ParaphraseError = await response.json();

    if (!response.ok) {
      throw new ParaphraseAPIError(
        (data as ParaphraseError).error || "Failed to paraphrase text",
        response.status,
      );
    }

    return data as ParaphraseResponse;
  } catch (err) {
    if (err instanceof ParaphraseAPIError) {
      throw err;
    }

    // Network errors or JSON parsing errors
    throw new ParaphraseAPIError(
      err instanceof Error ? err.message : "An unexpected error occurred",
    );
  }
}
