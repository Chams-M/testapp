import { Card } from "@mui/material";
import React from "react";
import "../cards_style.css";
import  PaymentsIcon  from "../../../assets/svg/PaymentsIcon";
import ProposalsIcon from "../../../assets/svg/ProposalsIcon";
import PropertiesIcon from "../../../assets/svg/PropertiesIcon";
//import {ReactComponent as PropertiesIcon} from "../../../assets/icons/PropertiesIcon.svg";
//import {ReactComponent as PaymentsIcon} from "../../../assets/icons/PaymentsIcon.svg";
import { Button } from "@mui/material";
export default function SellInvestments(){
return (
    
    <div className="sellinvestments-content">
       <p>
       Lorem ipsum dolor sit amet consectetur
       </p>
       <div>
       <Button
       id="get-seller-dashboard-btn"
       variant="contained"
       sx={{
        marginTop:'10px',
        backgroundColor:'#87B4E0',
        color:'white',
        marginTop:'25%',
        fontSize:'12px',
         width:'300px',
         height:'50px',
         textAlign:'center',
        fontFamily:'sans-serif'
    }}
       >Get a seller dashboard</Button>
       </div>
       </div>
);

}