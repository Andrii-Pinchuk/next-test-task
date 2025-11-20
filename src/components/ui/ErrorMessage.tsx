"use client";

import { Typography, type TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ErrorMessage = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontSize: theme.customTokens.typography.fontSize.sm,
    lineHeight: theme.customTokens.typography.lineHeight.sm,
    color: theme.customTokens.colors.error,
    marginTop: theme.spacing(2),
    paddingLeft: "16px",
  }),
);
