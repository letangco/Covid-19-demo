import React, { Component } from "react";
import Chart from "react-apexcharts";
interface IProps {
    sendDataCondition: any;
}
interface IState {
    isLoading: any
}
class ResultConditionPie extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    render() {
        var dataCondition: any = this.props.sendDataCondition;
        console.log(dataCondition)
        var dataSeries: any = [];
        // Dieu kien Group Age
        switch (dataCondition[0]) {
            case "groupAge1": {
                dataSeries.push(0.06)
                break;
            }
            case "groupAge2": {
                dataSeries.push(3.9)
                break;
            }
            case "groupAge3": {
                dataSeries.push(22.4 / 2)
                break;
            }
            case "groupAge4": {
                dataSeries.push(24.9 / 2)
                break;
            }
            case "groupAge5": {
                dataSeries.push(48.7 / 2)
                break;
            }
            case "groupAge6": {
                dataSeries.push(75 / 2)
                break;
            }
        }
        // Dieu kien Sex
        switch (dataCondition[1]) {
            case "Male": {
                dataSeries.push(61.8 / 2)
                break;
            }
            case "Female": {
                dataSeries.push(38.2 / 2)
                break;
            }
        }
        //Dieu kien Cardiovascular Disease
        switch (dataCondition[2]) {
            case "Yes": {
                dataSeries.push(10.5)
                break;
            }
            case "No": {
                dataSeries.push(0)
                break;
            }
        }
        // Dieu kien Diabetes
        switch (dataCondition[3]) {
            case "Yes": {
                dataSeries.push(7.3)
                break;
            }
            case "No": {
                dataSeries.push(0)
                break;
            }
        }
        // Dieu kien Chronic Respiratory Disease
        switch (dataCondition[4]) {
            case "Yes": {
                dataSeries.push(6.3)
                break;
            }
            case "No": {
                dataSeries.push(0)
                break;
            }
        }
        // Dieu kien Hypertension
        switch (dataCondition[5]) {
            case "Yes": {
                dataSeries.push(6)
                break;
            }
            case "No": {
                dataSeries.push(0)
                break;
            }
        }
        // Dieu kien Cancer
        switch (dataCondition[6]) {
            case "Yes": {
                dataSeries.push(5.6)
                break;
            }
            case "No": {
                dataSeries.push(0)
                break;
            }
        }
        var options = {
            series: dataSeries,
            title: {
                text: 'Condition Pie Chart'
              },
            chart: {
              width: 380,
              fontFamily: 'Helvetica, Arial, sans-serif',
              toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                }
              },
              plotOptions: {
                pie:{
                  donut: {
                    size: 400,
                    expandOnClick: true
                  },
                  
                }
              },
              
            },
            
            labels: ['Group Age', 'Group Sex','Cardiovascular','Diabetes','Respiratory','Hypertension', 'Cancer'],
            
      
            fill: {
              colors: ['#e63900', '#33cc33', '#ff9900']
            },
            colors: ["#e63900", "#33cc33", "#ff9900"],
            legend: {
              show: true,
              showForSingleSeries: true,
              showForNullSeries: true,
              showForZeroSeries: true,
              position: 'right',
              horizontalAlign: 'left',
              floating: false,
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial',
              fontWeight: false,
              formatter: undefined,
              inverseOrder: true,
              width: undefined,
              height: undefined,
              tooltipHoverFormatter: true,
              offsetX: 0,
              offsetY: 0,
              labels: {
                useSeriesColors: false
              },
              markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: false,
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
              },
              
              onItemClick: {
                toggleDataSeries: true
              },
              onItemHover: {
                highlightDataSeries: true
              },
      
            }, theme: {
              mode: 'light',
             
            }
          };
        return (
            <>
                <Chart
                    width={'100%'}
                    height={'300px'}
                    type="pie"
                    options={options}
                    series={options.series}

                />
            </>
        );
    }
}

export default ResultConditionPie;
