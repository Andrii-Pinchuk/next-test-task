"use client";

import { Typography, type TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: theme.customTokens.typography.fontSize["2xl"],
  lineHeight: theme.customTokens.typography.lineHeight["2xl"],
  fontWeight: theme.customTokens.typography.fontWeight.bold,
  color: theme.palette.text.primary,
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.customTokens.typography.fontSize["3xl"],
    lineHeight: theme.customTokens.typography.lineHeight["3xl"],
  },
}));
