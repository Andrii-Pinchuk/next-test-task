"use client";

import { Typography, type TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BodyText = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: theme.customTokens.typography.fontSize.base,
  lineHeight: theme.customTokens.typography.lineHeight.base,
  fontWeight: theme.customTokens.typography.fontWeight.regular,
  color: theme.palette.text.secondary,
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.customTokens.typography.fontSize.lg,
    lineHeight: theme.customTokens.typography.lineHeight.lg,
  },
}));
