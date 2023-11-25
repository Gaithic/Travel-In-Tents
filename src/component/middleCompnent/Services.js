import React, { Component } from "react";
import './main.css';    
import Campaign from "./svg/campaign.svg";
import Direction from "./svg/direction.svg";
import Group from "./svg/Group.svg";
import Pipe from './svg/pipe.svg';
import Tracking from "./svg/tracking.svg";

class Services extends Component {
    render() {
        return (
            <div className="service-head mb-20">                     
                   <div className="text-center">
                        <img src={Direction} alt="Direction"  className="direction"/>
                        <span className="pipe"></span>
                        <img src={Pipe} alt="Pipe" className="pipe"/>
                        <p className="service-title mt-2">Directions</p>
                    </div>

                    <div className="text-center">
                        <img src={Tracking} alt="Tracking" className="trekking"/>
                        <span className="pipe"></span>
                        <p className="service-title mt-10">Campaign</p>
                    </div>                    

                    <div className="text-center">
                        <img src={Group} alt="Group"  className="group-hills"/>
                        <span className="pipe"></span>
                        <p className="service-title mt-10">Destination</p>
                    </div>

                    <div className="text-center">
                        <img src={Campaign} alt="Campaign" className="campaign"/>
                        <span className="pipe"></span>
                        <p className="service-title mt-10">Trekking</p>
                    </div>

            </div>
        );
    }
}

export default Services;
