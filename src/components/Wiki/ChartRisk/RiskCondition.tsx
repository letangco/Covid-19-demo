import React, { Component } from 'react';
import Chart from 'react-apexcharts';
class RiskSex extends Component<any, any> {
    render() {
        var options = {
            series: [{
            data: [10.5, 7.3, 6.3, 6, 5.6, 0.9]
          }],
            chart: {
            type: 'bar',
            height: 430
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val:any) {
                return val + "%";
              },
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: ['cardiovascular disease', 'diabetes', 'chronic respiratory disease', 'hypertension', 'cancer', 'no existing condition'],
          },
          

          };
        
        return (
            <div>
                <Chart
                    options={options} series={options.series} type="bar"
                />
            </div>
        );
    }
}
export default RiskSex;
