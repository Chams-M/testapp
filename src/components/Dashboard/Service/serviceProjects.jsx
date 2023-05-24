import React from "react";
import "../cards_style.css";
import { HorizontalBarChart } from "../../charts/horizontalbarChart";


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