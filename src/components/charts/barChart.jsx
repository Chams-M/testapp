import { Card } from "@mui/material";
import React from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export const myBarChart= () => {
    const chartData = [
        { name: 'Completed', sales: 50 },
        { name: 'Pending', sales: 100 },
        { name: 'Canceled', sales: 100 },

      ];      
return (
<div className="views-chart">
<BarChart width={500} height={250} data={chartData} >
  <CartesianGrid opacity={0}   
    />
  <XAxis dataKey="name" />
  <YAxis/>
  <Tooltip />
  <Legend />
  <Bar dataKey="sales" fill="#87B4E0" 
   />
</BarChart>
</div>
);

}