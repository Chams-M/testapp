import { Card } from "@mui/material";
import React from "react";
import "./cards_style.css";
import ProposalsIcon from "../../assets/svg/ProposalsIcon";
import ApexCharts from "apexcharts";
import { DonutChart } from "../charts/donutChart";
import {GroupBarChart} from "../charts/groupbarChart";
export default function ProposalsSummary(){
    const colors=["#87B4E0","#D2B7EB","#F2999B"];
    const labels=["Accepted","Pending","Refused"];
return (
    <div className="summary-card">
        <div className="donutchart-label">
            <p className="donutchart-total">56</p>
            <p className="donutchart-title">Proposals</p>
        </div>
        <DonutChart className="donutchart" donutColors={colors} donutLabels={labels} />
        <GroupBarChart barLabels={labels} barColors={colors} cardLabel={"Proposals"}/>
    </div>
);
}