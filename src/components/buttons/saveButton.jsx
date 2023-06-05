import React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    cancel: "#9E7889",
  },
});

export default function SaveButton(props) {
  return (
    <Button
      onClick={props.action}
      variant="contained"
      id="profile-btn-save"
      sx={{
        backgroundColor: "#9E7889",
        color: "white",
        fontSize: "10px",
        width: props.width,
        height: props.height,
        fontFamily: "sans-serif",
      }}
      endIcon={props.endIcon}
    >
      {props.text}
    </Button>
  );
}
