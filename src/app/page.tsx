"use client";

import CloseIcon from "@mui/icons-material/Close";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useState } from "react";
import {
  ActionsContainer,
  ButtonsContainer,
  ClearButton,
  ErrorMessage,
  MainTitle,
  PageContainer,
  ParaphraseActionButton,
  ParaphrasePlaceholderText,
  ParaphraseTextarea,
  ParaphraseTextareaContainer,
  SectionContainer,
  SubmitButton,
  Subtitle,
} from "@/components/ui";
import { SAMPLE_TEXT } from "@/constants/sampleText";

export default function Home() {
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
      const response = await fetch("/api/paraphrase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to paraphrase text");
      }

      console.log(`✅ Paraphrased by: ${data.provider}`);
      setParaphrasedText(data.paraphrasedText);
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

  return (
    <PageContainer component="main">
      <MainTitle component="h1">AI Text Paraphraser by JustDone</MainTitle>
      <Subtitle>
        Transform your writing from good to great with our Paraphraser tool.
      </Subtitle>

      <SectionContainer>
        <ParaphraseTextareaContainer>
          {isTextEmpty && (
            <ParaphrasePlaceholderText>
              Enter text here or upload file to humanize it.
            </ParaphrasePlaceholderText>
          )}
          {isTextEmpty ? (
            <ButtonsContainer>
              <ParaphraseActionButton
                onClick={handlePasteText}
                aria-label="Paste text from clipboard"
              >
                <ContentPasteIcon
                  sx={(theme) => ({
                    fontSize: 20,
                    color: theme.customTokens.colors.neutral30,
                  })}
                />
                Paste text
              </ParaphraseActionButton>
              <ParaphraseActionButton
                onClick={handleSampleText}
                aria-label="Insert sample text"
              >
                <DescriptionOutlinedIcon
                  sx={(theme) => ({
                    fontSize: 20,
                    color: theme.customTokens.colors.neutral30,
                  })}
                />
                Sample text
              </ParaphraseActionButton>
            </ButtonsContainer>
          ) : (
            <ParaphraseTextarea
              multiline
              rows={isSuccess ? 16 : 14}
              value={paraphrasedText || text}
              onChange={(e) => setText(e.target.value)}
              variant="outlined"
              fullWidth
              disabled={isLoading || isSuccess}
              aria-label={
                isSuccess
                  ? "Paraphrased text result"
                  : "Enter text to paraphrase"
              }
              sx={(theme) => ({
                "& .MuiInputBase-input": {
                  color: isLoading
                    ? theme.customTokens.colors.neutral30
                    : theme.palette.text.primary,
                },
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: isLoading
                    ? theme.customTokens.colors.neutral30
                    : theme.palette.text.primary,
                },
              })}
            />
          )}
        </ParaphraseTextareaContainer>

        {!isSuccess && (
          <ActionsContainer>
            {!isTextEmpty && !isLoading && (
              <ClearButton onClick={handleClearInput} startIcon={<CloseIcon />}>
                Clear input
              </ClearButton>
            )}
            <SubmitButton
              disabled={isTextEmpty || isLoading}
              onClick={handleParaphrase}
            >
              {isLoading ? "Paraphrasing" : "Paraphrase"}
            </SubmitButton>
          </ActionsContainer>
        )}
      </SectionContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </PageContainer>
  );
}
