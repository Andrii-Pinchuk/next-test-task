"use client";

import { Typography, type TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ParaphrasePlaceholderText = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    position: "absolute",
    top: theme.spacing(4),
    left: theme.spacing(4),
    fontSize: theme.customTokens.typography.fontSize.md,
    fontWeight: theme.customTokens.typography.fontWeight.semibold,
    lineHeight: theme.customTokens.typography.lineHeight.md,
    color: theme.customTokens.colors.neutral30,
    pointerEvents: "none",
  }),
);
