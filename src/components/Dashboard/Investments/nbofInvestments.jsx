import { Card } from "@mui/material";
import React from "react";
import "../cards_style.css";
import  PaymentsIcon  from "../../../assets/svg/PaymentsIcon";
import ProposalsIcon from "../../../assets/svg/ProposalsIcon";
import PropertiesIcon from "../../../assets/svg/PropertiesIcon";
import { DonutChart } from "../../../pages/Dashboard/Investments/components/donutChart";
export default function NbofInvestments(){
return (
    <div className="nbofinvestments-card">
    <div className="nbofinvestments-donutchart">
     <div className="donutchart-label-investments">
            <p className="donutchart-total">18</p>
            <p className="donutchart-title">Properties</p>
        </div>
      <DonutChart donutColors="#87B4E0" donutLabels="properties"/>
    </div>
    <div 
    style={{
        marginLeft:'45px',
        fontWeight:'300',
        paddingBottom:'10px'
    }}
    >Out of 1,2345 properties</div>
    </div>
);
}