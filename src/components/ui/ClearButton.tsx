"use client";

import { Button, type ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ClearButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: "31px",
  height: "48px",
  padding: theme.spacing(3, 4),
  fontSize: theme.customTokens.typography.fontSize.md,
  fontWeight: theme.customTokens.typography.fontWeight.medium,
  textTransform: "none",
  backgroundColor: theme.customTokens.colors.neutral80,
  color: "#254699",
  "&:hover": {
    backgroundColor: theme.customTokens.colors.neutral80,
    opacity: 0.9,
  },
  "& .MuiButton-startIcon": {
    color: theme.customTokens.colors.primary40,
  },
}));
