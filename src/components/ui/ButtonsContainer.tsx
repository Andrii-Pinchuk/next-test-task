"use client";

import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonsContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "row",
  },
}));
