import { Card } from "@mui/material";
import React from "react";
import "../cards_style.css";
//import {ReactComponent as PropertiesIcon} from "../../../assets/icons/PropertiesIcon.svg";
//import {ReactComponent as PaymentsIcon} from "../../../assets/icons/PaymentsIcon.svg";
import ProgressBar from "../../progressBar";

export default function PropertiesInvested(){
return (
    <div className="properties-invested-card">
    <div>
    <table>
  <tr>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  
  <tr>
    <td className="property-type-label">House</td>
    <td><ProgressBar color="#D0B5E9" value="30" height="15px" width="250px" label="120 properties" number="120"/></td>
  </tr>
  
  <tr>
    <td className="property-type-label">Land</td>
    <td><ProgressBar color="#82D482" value="70" height="15px" width="250px" label="120 properties" number="120" /></td>
  </tr>
  
  <tr>
    <td className="property-type-label">Villa</td>
    <td><ProgressBar color="#F08F91" value="40"height="15px" width="250px" label="120 properties" number="120" /></td>
  </tr>
</table>
    </div>
        
    </div>
);
}