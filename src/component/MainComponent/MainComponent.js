import React from "react";  
import Navbar from "../Navbar/Navbar";
import Explore from "../Explore/Explore";
import Footer from "../Footer.js/Footer";



const MainComponent = () => {
    return (
        <>
            <div className="header"></div>
            <Navbar/>
            <Explore/>
            <Footer/>
        </>
    );
}


export default MainComponent;