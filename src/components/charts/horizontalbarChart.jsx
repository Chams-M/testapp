import { colors } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { YAxis } from 'recharts';
export const HorizontalBarChart= () => {
    const chartOptions = {
            colors:["#F08F91","#87B4E0","#82D482","#D0B5E9","#E9D7B5","#FFFFFF"],
            series: [
            {
            name:'Appartement',
            data: [400]
          },
          {
            name:'House',
            data: [250]
          },
          {
            name:'Villa',
            data: [100]
          },
          {
            name:'Office Space',
            data: [300]
          },
          {
            name:'Commercial',
            data: [400]
          },
          {
            name:'Land',
            data: [0]
          },
        ],
            chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius:8,
              horizontal: true,
              barHeight: '100%',
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['Appartement', 'House', 'Villa', 'Office Space', 'Commercial', 'Land'
            ],
            enabled:false,
            labels: {
              show: false // Hide x-axis labels
            }
          }
    
}
return (
    <div className='service-line-chart'>
    <ReactApexChart
     options={chartOptions}
     series={chartOptions.series} 
     type="bar" 
     height={240} 
     width={410}
     />
     </div>
);
};
