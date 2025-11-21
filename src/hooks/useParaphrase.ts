"use client";

import { useState } from "react";
import { SAMPLE_TEXT } from "@/constants/sampleText";
import { paraphraseText } from "@/lib/services/paraphrase";

interface UseParaphraseResult {
  text: string;
  setText: (text: string) => void;
  error: string;
  setError: (error: string) => void;
  isLoading: boolean;
  paraphrasedText: string;
  handlePasteText: () => Promise<void>;
  handleSampleText: () => void;
  handleClearInput: () => void;
  handleParaphrase: () => Promise<void>;
  isTextEmpty: boolean;
  isSuccess: boolean;
}

export function useParaphrase(): UseParaphraseResult {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paraphrasedText, setParaphrasedText] = useState("");

  const handlePasteText = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
      setError("");
    } catch (_err) {
      setError("Failed to read clipboard. Please paste manually.");
    }
  };

  const handleSampleText = () => {
    setText(SAMPLE_TEXT);
    setError("");
  };

  const handleClearInput = () => {
    setText("");
    setError("");
    setParaphrasedText("");
  };

  const handleParaphrase = async () => {
    setIsLoading(true);
    setError("");
    setParaphrasedText("");

    try {
      const result = await paraphraseText(text);
      setParaphrasedText(result.paraphrasedText);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isTextEmpty = text.trim().length === 0;
  const isSuccess = !!paraphrasedText;

  return {
    text,
    setText,
    error,
    setError,
    isLoading,
    paraphrasedText,
    handlePasteText,
    handleSampleText,
    handleClearInput,
    handleParaphrase,
    isTextEmpty,
    isSuccess,
  };
}
