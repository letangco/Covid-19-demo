import React, { Component } from "react";
interface IProps {
  sendSex: any;
}
interface IState {}
class ResultSex extends Component<IProps, IState> {
  // componentDidMount()
  // {
  //   this.props.sendSex==="Male" ?this.props.receiverSex(0.618) :this.props.receiverSex(0.382);
  // }
  // componentWillReceiveProps()
  // {
  //   this.props.sendSex==="Male" ?this.props.receiverSex(0.618) :this.props.receiverSex(0.382);
  // }
  render() {
    var sex: any = this.props.sendSex;
    function RenderSex() {
      switch (sex) {
        case "Male": {
          return (
                  <p className="valueResult">Male: 61.8%</p>
          );
        }
        case "Female": {
          return (
                <p className="valueResult">Female: 38.2%</p>
          );
        }
      }
    }

    return <div>{RenderSex()}</div>;
  }
}

export default ResultSex;
