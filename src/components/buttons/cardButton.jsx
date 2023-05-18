import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from "@mui/material";
export default function CardButton (props){
return (
<Button 
    id="list-btn"
    variant='contained'
    sx={{
      backgroundColor:'#EEF6FE',
      color:'#29333C',
      fontSize:'12px',
      width:'100px',
      height:'40px',
      fontFamily:'sans-serif'
    }}
    endIcon={<KeyboardArrowDownIcon/>}>
     {props.title}
  </Button>
);
}