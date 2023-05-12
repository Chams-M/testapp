import { Card } from "@mui/material";
import React from "react";
import "../cards_style.css";
import  PaymentsIcon  from "../../../assets/svg/PaymentsIcon";
import ProposalsIcon from "../../../assets/svg/ProposalsIcon";
import PropertiesIcon from "../../../assets/svg/PropertiesIcon";
import { HorizontalBarChart } from "../../charts/horizontalbarChart";
//import {ReactComponent as PropertiesIcon} from "../../../assets/icons/PropertiesIcon.svg";
//import {ReactComponent as PaymentsIcon} from "../../../assets/icons/PaymentsIcon.svg";

export default function ServiceProjects(){
return (
    
    <div className="service-projects-card">
       <HorizontalBarChart/>
       <div className="service-numbers">
        <p>400 properties</p>
        <p>250 properties</p>
        <p>100 properties</p>
        <p>300 properties</p>
        <p>400 properties</p>
        <p>0 properties</p>
       </div>
    </div>
);

}