import React, { Component } from 'react';
import Chart from 'react-apexcharts';
class RiskAge extends Component <any,any> {
  render() {
      var data = {
        series: [{
          name: 'ITALY',
          data: [0.2, 0.0, 0.1, 0.4, 0.8, 2.5, 9.7, 24.4, 30.3,25.1]
        }, {
          name: 'UK',
          data: [0, 0, 0.2, 0.6, 1.7, 5.4,11.2, 26.6, 38.6, 15.6]
        },
         {
            name: 'SOUTH KOREA',
            data: [0, 0, 0, 0.1, 0.08, 0.6, 1.7, 6.9, 17.4,15.6]
          }
        ],
        options: {
          chart: {
            type: 'bar',
          },
          plotOptions: {
            bar: {
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val:any) {
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: '9px',
              colors: ["#304758"]
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['0-9', '10-19','20-29','30-39','40-49','50-59','60-69','70-79','80-89','90+'],
          },
          yaxis: {
            title: {
              text: '% (percent of deceased)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val:any) {
                return  val +"% of deceased"
              }
            }
          },
          title: {
            text: 'Covid-19 mortality rate by age ',
            
            floating: false,
            offsetY: 0,
            offsetX: 0,
            align: 'left',
            style: {
              color: '#444'
            }
          }
        },
      };
    return (
      <div>
         <Chart 
            options={data.options} series={data.series} type="bar"
         />
      </div>
    );
  }
}
export default RiskAge;
