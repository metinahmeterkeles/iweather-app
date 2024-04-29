"use client";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {},
  fonts: {},
  fontWeights: {
    xs: 700,
    sm: 700,
    md: 700,
    lg: 700,
    xl: 800,
    hg: 900,
  },
  fontSizes: {
    hg: "6rem",
    xl: "3rem",
    lg: "2rem",
    md: "1.25rem",
    sm: "1rem",
    xs: "0.875rem",
  },
  colors: {
    white: "#fff",
    gray: {
      100: "#FAFAFA",
      200: "#BFBFD4",
      300: "#ABABC4",
      400: "#7F7F98",
      500: "#3B3B54",
      600: "#22222F",
      700: "#1C1C27",
      800: "#16161F",
      900: "#13131A",
    },
    product: "#8FB2F5",
  },
});

export default theme;
