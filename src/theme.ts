import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Oswald", "Roboto"].join(","),
  },
  palette: {
    primary: {
      500: "#3F83F8",
    },
    text: {
      primary: "#1F2937",
    },
  },
});
