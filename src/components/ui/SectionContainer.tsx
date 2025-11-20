"use client";

import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SectionContainer = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.customTokens.colors.neutral60}`,
  borderRadius: "24px",
  backgroundColor: "#ffffff",
  marginTop: theme.spacing(8),
  overflow: "hidden",
}));
