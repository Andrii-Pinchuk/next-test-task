"use client";

import { Stack, type StackProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContentStack = styled(Stack)<StackProps>(({ theme }) => ({
  padding: theme.spacing(4, 2),
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(8, 4),
    alignItems: "flex-start",
  },
}));
