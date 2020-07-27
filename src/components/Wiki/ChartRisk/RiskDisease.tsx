import React, { Component } from 'react';
import Chart from 'react-apexcharts';
class RiskDisease extends Component<any, any> {
    render() {
        var options = {
            series: [{
            data: [3014, 2842, 2430, 2216, 2110, 2002,1644,1233,1027,743,548,440,396,392,239,247,162,82,55,53,50,20,12,10,5.3,3.2,2.3]
          }],
            chart: {
            type: 'bar',
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
              colors: ['black']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff','black','red','yellow']
          },
          xaxis: {
            categories: ['Tuberculosis', 'COVID-19(#Coronavirus)', 'Hepatitis B', 'Pneumonia', 'HIV/AIDS', 'Malaria','Shigellosis','Rotavirus','Seasonal Flu','Swine Flu H1N1 2009','Norovirus','Whooping Cough'
        ,'Typhoid','Cholera','Meningitis','Measles','Rabies ','Yellow Fever','Leishmaniasis','Echinococcosis','Dengue Fever','Hepatitis A',
        'Chicken Pox','Sleeping Sickness','Ebola','SARS','MERS'],
          },
          title:{
              text: 'Especially Those with Existing Conditions'
          }
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
export default RiskDisease;
