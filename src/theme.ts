import { createTheme, type Theme } from "@mui/material/styles";

// Extend the Theme interface to include custom tokens
declare module "@mui/material/styles" {
  // Extends the Theme type that createTheme() returns
  interface Theme {
    customTokens: {
      button: {
        width: {
          small: number;
          medium: number;
          large: number;
        };
        height: {
          small: number;
          medium: number;
          large: number;
        };
      };
      typography: {
        fontSize: {
          xs: string;
          sm: string;
          base: string;
          lg: string;
          xl: string;
          "2xl": string;
          "3xl": string;
        };
        lineHeight: {
          xs: number;
          sm: number;
          base: number;
          lg: number;
          xl: number;
          "2xl": number;
          "3xl": number;
        };
        fontWeight: {
          light: number;
          regular: number;
          medium: number;
          semibold: number;
          bold: number;
        };
      };
    };
  }

  // Extends the ThemeOptions type that createTheme() accepts as parameter
  interface ThemeOptions {
    customTokens?: {
      button?: {
        width?: {
          small?: number;
          medium?: number;
          large?: number;
        };
        height?: {
          small?: number;
          medium?: number;
          large?: number;
        };
      };
      typography?: {
        fontSize?: {
          xs?: string;
          sm?: string;
          base?: string;
          lg?: string;
          xl?: string;
          "2xl"?: string;
          "3xl"?: string;
        };
        lineHeight?: {
          xs?: number;
          sm?: number;
          base?: number;
          lg?: number;
          xl?: number;
          "2xl"?: number;
          "3xl"?: number;
        };
        fontWeight?: {
          light?: number;
          regular?: number;
          medium?: number;
          semibold?: number;
          bold?: number;
        };
      };
    };
  }
}

// createTheme() automatically uses ThemeOptions interface (accepts customTokens)
// and returns Theme interface (with customTokens available)
const theme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: [
      "var(--font-roboto)",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 768,
      sm: 1024,
      md: 1280,
      lg: 1440,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 4,
  },
  customTokens: {
    button: {
      width: {
        small: 120,
        medium: 158,
        large: 200,
      },
      height: {
        small: 36,
        medium: 48,
        large: 56,
      },
    },
    typography: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      lineHeight: {
        xs: 1.5,
        sm: 1.5,
        base: 1.5,
        lg: 1.8,
        xl: 1.6,
        "2xl": 1.4,
        "3xl": 1.3,
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
});

export default theme;
