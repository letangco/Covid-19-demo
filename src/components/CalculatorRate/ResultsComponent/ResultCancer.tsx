import React, { Component } from "react";
interface IProps {
  sendCancer: any;
}
interface IState { }
class ResultCancer extends Component<IProps, IState> {
  render() {
    var Cancer: any = this.props.sendCancer;
    function RenderCardiovascular() {
      switch (Cancer) {
        case "Yes": {
          return (
            <p className="valueResult">Cancer: 7.6%</p>

          );
        }
        case "No": {
          return (
            <></>
          );
        }
      }
    }

    return <div>{RenderCardiovascular()}</div>;
  }
}

export default ResultCancer;
