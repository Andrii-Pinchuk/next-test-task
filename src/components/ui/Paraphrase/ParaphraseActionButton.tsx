"use client";

import { Button, type ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ParaphraseActionButton = styled(Button)<ButtonProps>(
  ({ theme }) => ({
    width: "200px",
    height: "80px",
    borderRadius: "16px",
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.divider}`,
    textTransform: "none",
    fontSize: theme.customTokens.typography.fontSize.sm,
    fontWeight: theme.customTokens.typography.fontWeight.medium,
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#f9f9f9",
    },
  }),
);
