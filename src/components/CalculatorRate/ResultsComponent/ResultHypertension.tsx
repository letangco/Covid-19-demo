import React, { Component } from "react";
interface IProps {
  sendHypertension: any;
}
interface IState { }
class ResultHypertension extends Component<IProps, IState> {
  render() {
    var Hypertension: any = this.props.sendHypertension;
    function RenderHypertension() {
      switch (Hypertension) {
        case true: {
          return (
            <p className="valueResult">Hypertension: 8.4%</p>
          );
        }
        case false: {
          return (
            <></>
          );
        }
      }
    }

    return <div>{RenderHypertension()}</div>;
  }
}

export default ResultHypertension;
