"use client";

import { styled } from "@mui/material/styles";

export const InlineLink = styled("a")(({ theme }) => ({
  fontWeight: theme.customTokens.typography.fontWeight.medium,
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));
