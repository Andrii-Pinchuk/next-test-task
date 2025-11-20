"use client";

import { Button, type ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface ParaphraseButtonProps extends ButtonProps {
  disabled?: boolean;
}

export const SubmitButton = styled(Button)<ParaphraseButtonProps>(
  ({ theme, disabled }) => ({
    borderRadius: "31px",
    height: "48px",
    textTransform: "none",
    padding: theme.spacing(3, 4),
    fontWeight: theme.customTokens.typography.fontWeight.semibold,
    fontSize: theme.customTokens.typography.fontSize.sm,
    color: theme.palette.common.white,
    backgroundColor: disabled
      ? theme.customTokens.colors.neutral40
      : theme.customTokens.colors.primary40,
    "&:hover": {
      backgroundColor: disabled
        ? theme.customTokens.colors.neutral40
        : theme.customTokens.colors.primary40,
      opacity: disabled ? 1 : 0.9,
    },
    "&.Mui-disabled": {
      backgroundColor: theme.customTokens.colors.neutral40,
      color: theme.palette.common.white,
    },
  }),
);
