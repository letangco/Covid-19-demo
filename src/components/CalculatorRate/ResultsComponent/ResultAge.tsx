import React, { Component } from "react";
import './ResultItem.css';
interface IProps {
  sendAge: any;
}
interface IState { }
class ResultAge extends Component<IProps, IState> {
  render() {
    var valueAge: any = [0.06, 3.9, 22.4, 24.9, 48.7, 75];
    var groupAge: any = this.props.sendAge;
    function RenderGroupAgeUS() {
      switch (groupAge) {
        case "groupAge1": {

          return (
            <p className="valueResult">Group-Age 0 - 17: {valueAge[0]}%</p>
          );
        }
        case "groupAge2": {
          return (
            <p className="valueResult">Group-Age 18 - 44: {valueAge[1]}%</p>
          );
        }
        case "groupAge3": {
          return (
            <p className="valueResult">Group-Age 45 - 64: {valueAge[2]}%</p>
          )
        }
        case "groupAge4": {
          return (
            <p className="valueResult">Group-Age 65 - 74: {valueAge[3]}%</p>
          );
        }
        case "groupAge5": {
          return (
            <p className="valueResult">Group-Age 75 - 100: {valueAge[4]}%</p>
          );
        }
        case "groupAge6": {
          return (
            <p className="valueResult">Group-Age 100+: {valueAge[5]}%</p>
          );
        }
      }
      return 1;
    }
    return <div>{RenderGroupAgeUS()}</div>;
  }
}
export default ResultAge;
