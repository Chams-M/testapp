import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import "../../pages/Dashboard/Profile/profile.css";
export default function CancelButton(props) {
  return (
    <Button
      variant="contained"
      id="profile-btn-cancel"
      sx={{
        backgroundColor: "transparent",
        color: "#9e7889",
        fontSize: "10px",
        width: props.width,
        height: props.height,
        fontFamily: "sans-serif",
      }}
    >
      {props.text}
    </Button>
  );
}
