import React, { Component } from "react";
interface IProps {
  sendCardiovascular: any;
}
interface IState { }
class ResultCardiovascular extends Component<IProps, IState> {
  render() {
    var Cardiovascular: any = this.props.sendCardiovascular;
    function RenderCardiovascular() {
      switch (Cardiovascular) {
        case true: {
          return (
            <p className="valueResult">Cardiovascular Disease: 10.5%</p>
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

export default ResultCardiovascular;
