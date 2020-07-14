import React, { Component } from "react";
interface IProps {
  sendRespiratory: any;
}
interface IState { }
class ResultRespiratory extends Component<IProps, IState> {
  render() {
    var Respiratory: any = this.props.sendRespiratory;
    function RenderRespiratory() {
      switch (Respiratory) {
        case "Yes": {
          return (
            <p className="valueResult">Chronic Respiratory Disease: 6.3%</p>
          );
        }
        case "No": {
          return (
            <></>
          );
        }
      }
    }

    return <div>{RenderRespiratory()}</div>;
  }
}

export default ResultRespiratory;
