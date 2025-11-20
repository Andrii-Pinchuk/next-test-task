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
  const [error, setError] = useState("Error message");

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
  };

  const handleParaphrase = () => {
    // Will be implemented in step 3
    console.log("Paraphrase clicked");
  };

  const isTextEmpty = text.trim().length === 0;

  return (
    <PageContainer>
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
              <ParaphraseActionButton onClick={handlePasteText}>
                <ContentPasteIcon sx={{ fontSize: 20, color: "#76777A" }} />
                Paste text
              </ParaphraseActionButton>
              <ParaphraseActionButton onClick={handleSampleText}>
                <DescriptionOutlinedIcon
                  sx={{ fontSize: 20, color: "#76777A" }}
                />
                Sample text
              </ParaphraseActionButton>
            </ButtonsContainer>
          ) : (
            <ParaphraseTextarea
              multiline
              rows={14}
              value={text}
              onChange={(e) => setText(e.target.value)}
              variant="outlined"
              fullWidth
            />
          )}
        </ParaphraseTextareaContainer>

        <ActionsContainer>
          {!isTextEmpty && (
            <ClearButton onClick={handleClearInput} startIcon={<CloseIcon />}>
              Clear input
            </ClearButton>
          )}
          <SubmitButton disabled={isTextEmpty} onClick={handleParaphrase}>
            Paraphrase
          </SubmitButton>
        </ActionsContainer>
      </SectionContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </PageContainer>
  );
}
