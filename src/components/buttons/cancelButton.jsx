import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import "../../pages/Dashboard/Profile/profile.css";
import { createTheme , ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  status: {
    cancel: '#9E7889',
  },
  }
);


export default function CancelButton(props) {
  return (
<ThemeProvider theme={theme}>
    <Button
     onClick={props.action}
      variant="outlined"
      id="profile-btn-cancel"
      sx={{
        backgroundColor: "transparent",
        color: "#9E7889",
        border: "1px solid #9E7889",
        fontSize: "10px",
        width: props.width,
        height: props.height,
        fontFamily: "sans-serif",
      }}
    >
      {props.text}
    </Button>
    </ThemeProvider>
  );
}
