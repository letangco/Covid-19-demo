import React, { Component } from "react";
import Chart from "react-apexcharts";
interface IProps {
    sendDataCondition: any;
}
interface IState {
  isLoading: any
}
class ResultConditionRadar extends Component<IProps, IState> {
  constructor(props:IProps)
  {
    super(props);
    this.state={
      isLoading:true
    }
  }
  render() {
    var dataCondition: any = this.props.sendDataCondition;
    var dataSeries :any = [];
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
        dataSeries.push(22.4/2)
        break;
      }
      case "groupAge4": {
        dataSeries.push(24.9/2)
        break;
      }
      case "groupAge5": {
        dataSeries.push(48.7/2)
        break;
      }
      case "groupAge6": {
        dataSeries.push(75/2)
        break;
      }
    }
    // Dieu kien Sex
    switch (dataCondition[1]) {
      case "Male": {
        dataSeries.push(61.8/2)
        break;
      }
      case "Female": {
        dataSeries.push(38.2/2)
        break;
      }
    }
    //Dieu kien Cardiovascular Disease
    switch (dataCondition[2]) {
      case true: {
        dataSeries.push(10.5)
        break;
      }
      case false: {
        dataSeries.push(0)
        break;
      }
    }
    // Dieu kien Diabetes
    switch (dataCondition[3]) {
      case true: {
        dataSeries.push(7.3)
        break;
      }
      case false: {
        dataSeries.push(0)
        break;
      }
    }
    // Dieu kien Chronic Respiratory Disease
    switch (dataCondition[4]) {
      case true: {
        dataSeries.push(6.3)
        break;
      }
      case false: {
        dataSeries.push(0)
        break;
      }
    }
    // Dieu kien Hypertension
    switch (dataCondition[5]) {
      case true: {
        dataSeries.push(6)
        break;
      }
      case false: {
        dataSeries.push(0)
        break;
      }
    }
    // Dieu kien Cancer
    switch (dataCondition[6]) {
      case true: {
        dataSeries.push(5.6)
        break;
      }
      case false: {
        dataSeries.push(0)
        break;
      }
    }
    const options:any = {
      width: 380,
      chart: {
        height: 400,
        type: 'radar',
      },
      series: [{
        data: dataSeries,
      }],
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColor: '#e8e8e8',
            fill: {
                colors: ['#f8f8f8', '#fff']
            }
          }
        }
      },
      fill: {
        opacity: 0.5,
        colors: ['red','green']
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['red'],
        dashArray: 0
      },
      markers: {
        size: 5,
        hover: {
          size: 10
        }
      },
      // title: {
      //   text: 'Basic Radar Chart'
      // },
      xaxis: {
        categories: ['Group Age', 'Group Sex','Cardiovascular','Diabetes','Respiratory','Hypertension', 'Cancer']
      },
      yaxis:{
        min: 0,
        max: 40
      },
      responsive: [{
        breakpoint: 1250,
        options: {
          chart:{
            height: 330
          },
          plotOptions: {
            radar: {
              size: 110,
              polygons: {
                strokeColor: '#e8e8e8',
                fill: {
                    colors: ['#f8f8f8', '#fff']
                }
              }
            }
          },
        }
      },
      
    ]
    }
    
    return (
      <>
        <Chart
          options={options}
          series={options.series}
          type="radar"
          height='330px'
        />
      </>
    );
  }
}

export default ResultConditionRadar;
