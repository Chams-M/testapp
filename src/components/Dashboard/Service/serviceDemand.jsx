import { Card } from "@mui/material";
import React from "react";
import "../cards_style.css";
import  PaymentsIcon  from "../../../assets/svg/PaymentsIcon";
import ProposalsIcon from "../../../assets/svg/ProposalsIcon";
import PropertiesIcon from "../../../assets/svg/PropertiesIcon";
import { LineChart } from "../../charts/lineChart";
import CardButton from '../../buttons/cardButton'
//import {ReactComponent as PropertiesIcon} from "../../../assets/icons/PropertiesIcon.svg";
//import {ReactComponent as PaymentsIcon} from "../../../assets/icons/PaymentsIcon.svg";

export default function ServiceInDemand(){
return (
    <div className="">
       <LineChart/>
    </div>
);
}