import React, { Component, useEffect, useState } from "react";
import './Navbar.css';
import MenuItems from "./MenuItems";
import NearMe from "./svg/NearMe.svg";
import StartHosting from "./svg/StartHosting.svg";
import AboutUs from "./svg/AboutUs.svg";
import Scope from './svg/Scope.svg'

class Navbar extends Component {
        constructor(props){
            super(props);
            this.state = {
                scrolling : false,
            };
        }

        componentDidMount(){
            window.addEventListener('scroll', this.handleScroll);
        }

        componentWillUnmount(){
            window.addEventListener('scroll', this.handleScroll);
        }

        handleScroll  = () => {
            if(window.scrollY > 0){
                this.setState({scrolling : true})
            }else{
                this.setState({scrolling: false})
            }
        }
    

    renderSvg(iconName) {
        if (iconName === 'NearMe') {
            return NearMe;
        } else if (iconName === 'StartHosting') {
            return StartHosting;
        } else if (iconName === 'AboutUs') {
            return AboutUs;
        } else {
            return null;
        }
    }

    render() {
        const { scrolling } = this.state;
        const navbarBackground = scrolling ? '#003C40' : 'transparent';
        return (
            <>
                <div className="header"></div>
                <nav style={{ backgroundColor: navbarBackground , zIndex: 100 }} className="w-full px-4 py-4 text-sm fixed top-0 left-1/2 transform -translate-x-1/2 text-white">
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between">
                            <h1 href="#" className="text-gray-600 text-3xl font-bold cursor-pointer"></h1>
                            <ul className="flex space-x-4 text-2xl items-center">
                                {MenuItems.map((item, index) => (
                                    <li key={index} className={`flex ${item.liClass}`} >
                                        {this.renderSvg(item.IconName) && (
                                            <img src={this.renderSvg(item.IconName)} alt={item.Title} />
                                        )}
                                        <a className={`title-font-size ${item.TitleColor}`}>{item.Title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="flex justify-center">
                    <div className="flex justify-center explore">
                        <div>
                            <img src={Scope} alt="" />
                        </div>
                        <div className="explore-title">
                            <h1>Let's Explore Traveller</h1>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Navbar;
