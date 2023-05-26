import { Card } from "@mui/material";
import React from "react";
import "./cards_style.css";
import ProposalsIcon from "../../assets/svg/ProposalsIcon";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default function ProfileViewers(){
    
    const chartData = [
        { name: 'Mon', sales: 50 },
        { name: 'Tue', sales: 100 },
        { name: 'Wed', sales: 80 },
        { name: 'Thu', sales: 70 },
        { name: 'Fri', sales: 90 },
        { name: 'Sat', sales: 120 },
        { name: 'Sun', sales: 150 },
      ];
      
return (
<div className="views-chart">
<BarChart width={500} height={230} data={chartData} >
  <CartesianGrid opacity={0}   
    />
  <XAxis dataKey="name" />
  <YAxis/>
  <Tooltip />
  <Legend />
  <Bar dataKey="sales" fill="#87B4E0" />
</BarChart>
</div>
);

}