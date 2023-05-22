import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
export default function SaveButton(props) {
  return (
    <Button
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
