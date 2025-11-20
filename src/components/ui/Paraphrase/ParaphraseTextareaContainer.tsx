"use client";

import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ParaphraseTextareaContainer = styled(Box)<BoxProps>(
  ({ theme }) => ({
    width: "100%",
    minHeight: "350px",
    backgroundColor: "#E8EAF6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderBottom: `1px solid ${theme.customTokens.colors.neutral60}`,
  }),
);
