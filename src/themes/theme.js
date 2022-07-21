import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    Red: {
      main: "#B9090B",
      contrastText: "#fff",
    },
    Black: {
      main: "#141414",
      contrastText: "#fff",
    },
    Gray: {
      main: "#808080",
      contrastText: "#000",
    },
    MidGray: {
      main: "#6D6D6E",
      contrastText: "#fff",
    },
    SmokeWhite: {
      main: "#E5E5E5",
      contrastText: "#000",
    },
    White30: {
      main: "rgba(255, 255, 255, 0.3)",
    },
    White: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
