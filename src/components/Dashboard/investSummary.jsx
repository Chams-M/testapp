import { Card } from "@mui/material";
import React from "react";
import ProposalsIcon from "../../assets/svg/ProposalsIcon";
import ApexCharts from "apexcharts";
import { DonutChart } from "../charts/donutChart";
import {GroupBarChart} from "../charts/groupbarChart";

export default function InvestSummary(){
    const colors=['#98DC98','#D2B7EB','#B5B8BB'];
    const labels=["Completed","Pending","Canceled"];
return (

    <div className="summary-card">
    <div className="donutchart-label">
            <p className="donutchart-total">18</p>
            <p className="donutchart-title">Properties</p>
        </div>
        <DonutChart donutColors={colors} donutLabels={labels} />
        <GroupBarChart barLabels={labels} barColors={colors} cardLabel={"Proporties"}/>
    </div>
);
}