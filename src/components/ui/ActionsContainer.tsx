"use client";

import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ActionsContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  width: "100%",
}));
