    import React, { Component } from "react";
    import './Navbar.css';
    import MenuItems from "./MenuItems";
    import NearMe from "./svg/NearMe.svg";
    import StartHosting from "./svg/StartHosting.svg";
    import AboutUs from "./svg/AboutUs.svg";
    import HoverClass from "./HoverClass";
    import { NavLink } from "react-router-dom";
    import HandleBack from "./HandleBack";


    class Navbar extends Component {
            constructor(props){
                super(props);
                this.state = {
                    scrolling : false,
                    currentUrl : window.location.href,
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
            const { scrolling, currentUrl } = this.state;
            let navbarBackground = scrolling ? '#003C40' : 'transparent';
            const appProtocol = window.location.protocol;
            const hostName = window.location.hostname;
            const portNumber = window.location.port;
            const appUrl =  appProtocol+'//'+hostName+':'+portNumber+'/';
            
            if(appUrl !== currentUrl){
                navbarBackground = 'transparent';
            }

            console.log(appUrl, currentUrl, 'there is a url');
            return (
                <>
                    <nav style={{ backgroundColor:  navbarBackground , zIndex: 100 }} className="w-full px-4 py-4 text-sm fixed top-0 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="container mx-auto">
                            <div className="flex items-center justify-between">
                                <div className="text-white cursor-pointer logo-headig flex items-center">
                                {appUrl !== currentUrl && (
                                    <HandleBack/>
                                )}
                                    <span className="whitespace-nowrap font-semibold text-xl">travelintents</span>
                                </div>

                                {appUrl === currentUrl && (
                                    <ul className="flex space-x-4 text-2xl items-center">
                                        <HoverClass HoverClassName="hoverColorChange">
                                            {MenuItems.map((item, index) => (
                                                <li key={index} className={`flex ${item.liClass}`} >
                                                        {this.renderSvg(item.IconName) && (
                                                            <img src={this.renderSvg(item.IconName)} alt={item.Title} />
                                                        )}                                            
                                                        <NavLink to={item.Url}   className={`title-font-size ${item.TitleColor}`}>{item.Title}</NavLink>                                          
                                                    </li>
                                            ))} 
                                        </HoverClass>
                                    </ul>
                                )} 

                            </div>
                        </div>
                    </nav>
                </>
            )
        }
    }

    export default Navbar;
