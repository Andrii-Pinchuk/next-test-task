"use client";

import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface ParaphraseTextareaContainerProps extends BoxProps {
  isEmpty?: boolean;
}

export const ParaphraseTextareaContainer = styled(
  Box,
)<ParaphraseTextareaContainerProps>(({ theme, isEmpty }) => ({
  width: "100%",
  minHeight: "336px",
  backgroundColor: isEmpty ? "#E8EAF6" : "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  borderBottom: `1px solid ${theme.customTokens.colors.neutral60}`,
}));
