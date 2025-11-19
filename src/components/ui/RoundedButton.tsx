"use client";

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RoundedButton = styled(Button)(({ theme }) => ({
  minWidth: theme.customTokens.button.width.small,
  height: theme.customTokens.button.height.small,
  borderRadius: 24,
  textTransform: "none",
  fontSize: theme.customTokens.typography.fontSize.sm,
  lineHeight: theme.customTokens.typography.lineHeight.sm,
  fontWeight: theme.customTokens.typography.fontWeight.medium,
  [theme.breakpoints.up("sm")]: {
    minWidth: theme.customTokens.button.width.medium,
    height: theme.customTokens.button.height.medium,
    fontSize: theme.customTokens.typography.fontSize.base,
    lineHeight: theme.customTokens.typography.lineHeight.base,
  },
})) as typeof Button;
