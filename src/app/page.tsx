"use client";

import CloseIcon from "@mui/icons-material/Close";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
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
import { useParaphrase } from "@/hooks/useParaphrase";

export default function Home() {
  const {
    text,
    setText,
    error,
    isLoading,
    paraphrasedText,
    handlePasteText,
    handleSampleText,
    handleClearInput,
    handleParaphrase,
    isTextEmpty,
    isSuccess,
  } = useParaphrase();

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
