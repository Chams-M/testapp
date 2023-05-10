import { Card } from "@mui/material";
import React from "react";
import "../cards_style.css";
import  PaymentsIcon  from "../../../assets/svg/PaymentsIcon";
import ProposalsIcon from "../../../assets/svg/ProposalsIcon";
import PropertiesIcon from "../../../assets/svg/PropertiesIcon";
//import {ReactComponent as PropertiesIcon} from "../../../assets/icons/PropertiesIcon.svg";
//import {ReactComponent as PaymentsIcon} from "../../../assets/icons/PaymentsIcon.svg";

export default function SellInvestments(){
return (
    
    <div className="actions-card">
        <Card className="actions-item" style={{backgroundColor:"rgba(255, 191, 193, 0.3)"}}>
        <div className="actions-icon">
        <PropertiesIcon/>
        </div>
            <p className="actions-data">18</p>
            <p className="actions-item-title">Properties</p>
        </Card>
        <Card className="actions-item" style={{backgroundColor:"rgba(130, 212, 130, 0.3)"}} >
        <div className="actions-icon">
        <ProposalsIcon/>
        </div>
        <p className="actions-data">56</p>
        <p className="actions-item-title">Proposals</p>
        </Card>
        <Card className="actions-item" style={{backgroundColor:"rgba(209, 182, 234, 0.3)"}} >
        <div className="actions-icon">
        <PaymentsIcon/>
        </div>
            <p className="actions-data">$1000.0</p>
            <p className="actions-item-title">Payments</p>
        </Card>
    </div>
);

}