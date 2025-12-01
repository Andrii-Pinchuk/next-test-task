"use client";

import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  maxWidth: "1400px",
  margin: "0 auto",
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(8),
  },
  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(16),
  },
}));
