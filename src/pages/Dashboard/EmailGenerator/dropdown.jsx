import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Dropdown = (props) => {
  return (
    <TextField
      select
      defaultValue=""
      variant="standard"
      sx={{
        width: "80%",
        fontSize: "10px",
      }}
    >
      {props.data.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Dropdown;
