"use client";

import { Typography, type TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: theme.customTokens.typography.fontWeight.bold,
  fontSize: theme.customTokens.typography.fontSize["4xl"],
  lineHeight: theme.customTokens.typography.lineHeight["4xl"],
  letterSpacing: "-0.25px",
  textAlign: "center",
  color: theme.palette.text.primary,
  maxWidth: "1160px",
  margin: "0 auto",
}));
