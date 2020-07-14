import React, { Component } from "react";
interface IProps {
  sendDiabetes: any;
}
interface IState { }
class ResultDiabetes extends Component<IProps, IState> {
  render() {
    var Cardiovascular: any = this.props.sendDiabetes;
    function RenderDiabetes() {
      switch (Cardiovascular) {
        case "Yes": {
          return (
            <p className="valueResult">Diabetes: 7.3%</p>
          );
        }
        case "No": {
          return (
            <></>
          );
        }
      }
    }

    return <div>{RenderDiabetes()}</div>;
  }
}

export default ResultDiabetes;
