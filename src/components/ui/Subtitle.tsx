"use client";

import { Typography, type TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Subtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: theme.customTokens.typography.fontWeight.medium,
  fontSize: theme.customTokens.typography.fontSize.xl,
  lineHeight: theme.customTokens.typography.lineHeight.xl,
  textAlign: "center",
  color: theme.palette.text.primary,
  marginTop: theme.spacing(6),
}));
