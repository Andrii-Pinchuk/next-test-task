"use client";

import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));
