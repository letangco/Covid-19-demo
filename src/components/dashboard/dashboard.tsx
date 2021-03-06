import React, { Component } from 'react';
import './Dashboard.css';
import TableThongKe from './TableThongKe';
import QuickFact from './QuickFact';
import ChartStats from './ChartDashBoard/ChartStats';
import PieChartStats from './ChartDashBoard/PieChartStats';
import MapVietNam from '../mapDistribute/mapVietNam';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { CircularProgress } from '@material-ui/core';
interface IProps {

}
interface IState {
    data: {}
}

class Dashboard extends Component {
    constructor(props: IState) {
        super(props);
        this.state = {
            data: {}
        }
    }

    render() {
        return (
            <div className="container-fluid background-dashboard">
                <ScrollUpButton
                    className="btn-scroll-top"
                    StopPosition={0}
                    ShowAtPosition={150}
                    EasingType='easeOutCubic'
                    AnimationDuration={1500}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'
                    style={{
                        backgroundColor: "#ececec", width: '40px',
                        height: '40px', borderRadius: "50%", color: 'blue'
                    }}
                    ToggledStyle={{}}
                />
                <QuickFact />
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <TableThongKe />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                    <ChartStats />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <PieChartStats />
                </div>
                {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <MapVietNam />
                </div>  */}
                {/* <div className="container text-center">
                    <div className="panel panel-info text-center" style={{marginTop:"50px"}}>
                        <div className="panel-heading text-center"><h1>Notification</h1></div>
                        <div className="panel-body text-center">
                        <CircularProgress color="secondary"/><h3>The system is updating the data, please try again later.</h3></div>
                    </div>
                    
                </div> */}

            </div>
        );
    }
}
export default Dashboard;
