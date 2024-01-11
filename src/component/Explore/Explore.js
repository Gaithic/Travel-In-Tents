import React from "react";
import image from './svg/Scope.svg'
import Services from "../middleCompnent/Services";
import RecomendedSites from "../middleCompnent/RecomendedSites";

const Explore = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex justify-center explore">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div className="explore-title">
                        <h1>Let's Explore Traveller</h1>
                    </div>
                </div>
            </div>
            <Services />
            <RecomendedSites />
        </>
    )
}

export default Explore;