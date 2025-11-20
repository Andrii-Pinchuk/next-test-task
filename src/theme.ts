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
          md: string;
          lg: string;
          xl: string;
          "2xl": string;
          "3xl": string;
          "4xl": string;
        };
        lineHeight: {
          xs: number;
          sm: number;
          md: number;
          lg: number;
          xl: number;
          "2xl": number;
          "3xl": number;
          "4xl": number;
        };
        fontWeight: {
          light: number;
          regular: number;
          medium: number;
          semibold: number;
          bold: number;
        };
      };
      colors: {
        primary40: string;
        neutral30: string;
        neutral40: string;
        neutral60: string;
        neutral80: string;
        error: string;
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
          md?: string;
          lg?: string;
          xl?: string;
          "2xl"?: string;
          "3xl"?: string;
          "4xl"?: string;
        };
        lineHeight?: {
          xs?: number;
          sm?: number;
          md?: number;
          lg?: number;
          xl?: number;
          "2xl"?: number;
          "3xl"?: number;
          "4xl"?: number;
        };
        fontWeight?: {
          light?: number;
          regular?: number;
          medium?: number;
          semibold?: number;
          bold?: number;
        };
      };
      colors?: {
        primary40?: string;
        neutral30?: string;
        neutral40?: string;
        neutral60?: string;
        neutral80?: string;
        error?: string;
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
      "var(--font-inter)",
      "Inter",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  spacing: 4,
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
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "3rem",
      },
      lineHeight: {
        xs: 1.5,
        sm: 1.5,
        md: 1.5,
        lg: 1.8,
        xl: 1.6,
        "2xl": 1.4,
        "3xl": 1.3,
        "4xl": 1.2,
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    colors: {
      primary40: "#3B5AAE",
      neutral30: "#76777A",
      neutral40: "#BDBDBD",
      neutral60: "#DBDCDF",
      neutral80: "#EEF0F5",
      error: "#FF5252",
    },
  },
});

export default theme;
