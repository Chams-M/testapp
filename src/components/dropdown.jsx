import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";


const Dropdown = (props) => {
  
  return (
    <TextField
      select
      defaultValue="default"
      variant="standard"
      sx={{
        width:props.width,
        fontSize: "10px",
      }}
      
    >
    <MenuItem value="" disabled>
        Select an option
      </MenuItem>
      {props.data.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Dropdown;
