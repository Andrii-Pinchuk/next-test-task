"use client";

import { TextField, type TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ParaphraseTextarea = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    width: "100%",
    flex: 1,
    "& .MuiInputBase-root": {
      height: "100%",
      alignItems: "flex-start",
      paddingTop: "16px",
      paddingRight: "16px",
      paddingBottom: "0",
      paddingLeft: "16px",
    },
    "& .MuiInputBase-input": {
      fontSize: theme.customTokens.typography.fontSize.md,
      lineHeight: theme.customTokens.typography.lineHeight.md,
      color: theme.palette.text.primary,
      "&::placeholder": {
        color: theme.palette.text.secondary,
        opacity: 0.6,
      },
      // Hide scrollbar but keep scroll functionality
      scrollbarWidth: "none", // Firefox
      "&::-webkit-scrollbar": {
        display: "none", // Chrome, Safari, Edge
      },
      msOverflowStyle: "none", // IE and Edge
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  }),
);
