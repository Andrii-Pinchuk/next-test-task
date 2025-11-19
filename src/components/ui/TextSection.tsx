"use client";

import { Stack, type StackProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextSection = styled(Stack)<StackProps>(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
    alignItems: "flex-start",
  },
}));
