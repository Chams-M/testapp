import { colors } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const DonutChart = (props) => {
  const chartOptions = {
    chart: {
      type:'donut',
    },
    series: [44],
    labels:props.donutLabels,
    colors:props.donutColors,
    dataLabels: {
        enabled:false,
    },
}
  return (
    <ReactApexChart
      options={chartOptions}
      series={chartOptions.series}
      type="donut"
      height={"250px"}
      width={"240px"}
    />
  );
};
