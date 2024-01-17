import React, { useState, useEffect } from "react";
import './Navbar.css';
import MenuItems from "./MenuItems";
import NearMe from "./svg/NearMe.svg";
import StartHosting from "./svg/StartHosting.svg";
import AboutUs from "./svg/AboutUs.svg";
import HoverClass from "./HoverClass";
import { NavLink } from "react-router-dom";
import HandleBack from "./HandleBack";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [currentUrl] = useState(window.location.href);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const renderSvg = (iconName) => {
        switch (iconName) {
            case 'NearMe':
                return NearMe;
            case 'StartHosting':
                return StartHosting;
            case 'AboutUs':
                return AboutUs;
            default:
                return null;
        }
    };

    const navbarBackground = scrolling ? '#003C40' : 'transparent';
    const appProtocol = window.location.protocol;
    const hostName = window.location.hostname;
    const portNumber = window.location.port;
    const appUrl = `${appProtocol}//${hostName}:${portNumber}/`;

    useEffect(() => {
        if (appUrl !== currentUrl) {
            setScrolling(true);
        }
    }, [appUrl, currentUrl]);

    return (
        <>
            <nav style={{ backgroundColor: navbarBackground, zIndex: 100 }} className="w-full px-4 py-4 text-sm fixed top-0 left-1/2 transform -translate-x-1/2 text-white">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="text-white cursor-pointer logo-headig flex items-center">
                            {appUrl !== currentUrl && (
                                <HandleBack />
                            )}
                            <span className="whitespace-nowrap font-semibold text-xl">travelintents</span>
                        </div>

                        {appUrl === currentUrl && (
                            <ul className="flex space-x-4 text-2xl items-center">
                                <HoverClass HoverClassName="hoverColorChange">
                                    {MenuItems.map((item, index) => (
                                        <li key={index} className={`flex ${item.liClass}`} >
                                            {renderSvg(item.IconName) && (
                                                <img src={renderSvg(item.IconName)} alt={item.Title} />
                                            )}
                                            <NavLink to={item.Url} className={`title-font-size ${item.TitleColor}`}>{item.Title}</NavLink>
                                        </li>
                                    ))}
                                </HoverClass>
                            </ul>
                        )}

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;