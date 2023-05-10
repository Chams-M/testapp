import { Card, colors } from "@mui/material";
import React from "react";

import { BarChart, Bar, XAxis,Tooltip, Legend } from 'recharts';

export const GroupBarChart= ({barLabels,barColors,cardLabel}) => {
    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return<text x={x + width / 2} 
        y={y}
        fill="#3D5D7E"
        fontWeight={500}
        textAnchor="middle"
        dy={-6}>{`${value}\n${cardLabel}`}
        </text>
        ;
      };
  
    const chartData = [
        { name:barLabels[0], 
            sales: 70 ,
            fill:barColors[0],
        },
            
        { name:barLabels[1],
          sales: 50 ,
          fill:barColors[1]},
        { name:barLabels[2],
          sales: 40 ,
        fill:barColors[2]},

      ];
return (
<div className="views-chart">
<BarChart width={300} height={200} data={chartData}>
  <XAxis dataKey="name"/>
  <Tooltip />
  <Bar dataKey="sales"
     label={renderCustomBarLabel}
  />
</BarChart>
</div>
);

}