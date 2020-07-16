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
        case true: {
          return (
            <p className="valueResult">Cancer: 7.6%</p>

          );
        }
        case false: {
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
