import { colors } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
export const LineChart = (props) => {
    const chartOptions = {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              width: [5, 7, 5],
              curve: 'straight',
              dashArray: [0, 8, 5]
            },
            legend: {
              tooltipHoverFormatter: function(val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
              }
            },
            markers: {
              size: 0,
              hover: {
                sizeOffset: 6
              }
            },
            xaxis: {
              categories: ['05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan','20 Jan'],
            },
            tooltip: {
              y: [
                {
                  title: {
                    formatter: function (val) {
                      return val + " (mins)"
                    }
                  }
                },
                {
                  title: {
                    formatter: function (val) {
                      return val + " per session"
                    }
                  }
                },
                {
                  title: {
                    formatter: function (val) {
                      return val;
                    }
                  }
                }
              ]
            },
            grid: {
              borderColor: '#f1f1f1',
            },
        series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33,27]
      },
    ],
      colors:["rgba(135, 180, 224, 1)"],
      dataLabels: {
          enabled:false,
      },
  }
    return (
        <div className='service-line-chart'>
        <ReactApexChart
         options={chartOptions}
         series={chartOptions.series} 
         type="line" 
         height={200} 
         />
         </div>
    );
  };
  