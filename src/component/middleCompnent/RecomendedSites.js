import React, { Component } from "react";
import Machryana from './svg/Machrayana.png';
import Heart from './svg/Heart.svg';
import Arrow from './svg/arrow.svg';
import './main.css';
import Start from './svg/Star.svg';
import RightArrow from './svg/RightArrow.svg';
import Aboutus from './svg/Aboutus.png';
import ReviewImage from './svg/ReviewImage.png';
import EllipsArrow from './svg/EllipsArrow.svg';
import Ellipse from './svg/Ellipse.svg';
import SecondImage from './svg/Secondmage.png';
import ThirdImage from './svg/ThirdImage.png';

class RecomendedSites extends Component {
    render() {
        return (
            <div className="w-full camp-main mt-2">
                <div className="w-full flex justify-between">
                    <h1 className="camp-title">Recomended Camp Sites</h1>
                    <div className="filter">
                        <h1>Filter</h1>
                        <img src={Arrow} alt="arrow"/>
                    </div>
                </div>

                <div className="camp-container p-6">
                    <div className="card relative">
                        <div className="card-heart-div mt-2 absolute">
                            <img className="w-full camp-image" src={Heart} alt="Heart-Placeholder" />
                        </div>
                        <img className="w-full" src={Machryana} alt="Machryana-Placeholder" />
                        <div className="card-body mt-3">
                        <div className="flex justify-start mt-3">
                            <h1 className="dist-name">Shimla Himachal</h1>
                        </div>
                        <div className="flex justify-start mb-3">
                            <h2 className="place-name">Machrayana</h2>
                        </div>
                        <div className="flex justify-start mb-3">
                            <p className="card-text">Nestled amidst the serene landscapes of Shimla, forest houses offer a unique retreat for nature enthusiasts. These charming accommodations seamlessly blend with the surrounding pine-clad hills,</p>
                        </div>
                        </div>
                        <div className="card-footer">
                        <div className="flex justify-start mb-3 card-rating">
                            <img className="card-footer-rating" src={Start} alt="Star" />
                            <img className="card-footer-rating" src={Start} alt="Star" />
                            <img className="card-footer-rating" src={Start} alt="Star" />
                            <img className="card-footer-rating" src={Start} alt="Star" />
                            <img className="card-footer-rating" src={Start} alt="Star" />
                        </div>
                        <h2 className="card-footer-rate">59999/-</h2>
                        </div>
                    </div>  

                    <div className="card relative">
                        <div className="card-heart-div mt-2 absolute">
                            <img className="w-full camp-image" src={Heart} alt="Heart-Placeholder" />
                        </div>
                        <img className="w-full" src={SecondImage} alt="Machryana-Placeholder" />
                        <div className="card-body mt-3">
                        <div className="flex justify-start mt-3">
                            <h1 className="dist-name">Shimla Himachal</h1>
                        </div>
                        <div className="flex justify-start mb-3">
                            <h2 className="place-name">Kotkhai</h2>
                        </div>
                        <div className="flex justify-start mb-3">
                            <p className="card-text">Nestled amidst the serene landscapes of Shimla, forest houses offer a unique retreat for nature enthusiasts. These charming accommodations seamlessly blend with the surrounding pine-clad hills,</p>
                        </div>
                        </div>
                        <div className="card-footer">
                            <div className="flex justify-start mb-3 card-rating">
                                <img className="card-footer-rating" src={Start} alt="Star" />
                                <img className="card-footer-rating" src={Start} alt="Star" />
                                <img className="card-footer-rating" src={Start} alt="Star" />
                                <img className="card-footer-rating" src={Start} alt="Star" />
                                <img className="card-footer-rating" src={Start} alt="Star" />
                            </div>
                            <h2 className="card-footer-rate">89999/-</h2>
                        </div>
                    </div>
                    <div className="card relative">
                        <div className="card-heart-div mt-2 absolute">
                            <img className="w-full camp-image" src={Heart} alt="Heart-Placeholder" />
                        </div>
                        <img className="w-full" src={ThirdImage} alt="Machryana-Placeholder" />
                        <div className="card-body mt-3">
                        <div className="flex justify-start mt-3">
                            <h1 className="dist-name">Shimla Himachal</h1>
                        </div>
                        <div className="flex justify-start mb-3">
                            <h2 className="place-name">Chanaog</h2>
                        </div>
                        <div className="flex justify-start mb-3">
                            <p className="card-text">Nestled amidst the serene landscapes of Shimla, forest houses offer a unique retreat for nature enthusiasts. These charming accommodations seamlessly blend with the surrounding pine-clad hills,</p>
                        </div>
                        </div>
                        <div className="card-footer">
                        <div className="flex justify-start mb-3 card-rating">
                            <img className="card-footer-rating" src={Start} alt="Star" />
                            <img className="card-footer-rating" src={Start} alt="Star" />
                            <img className="card-footer-rating" src={Start} alt="Star" />
                            <img className="card-footer-rating" src={Start} alt="Star" />
                            <img className="card-footer-rating" src={Start} alt="Star" />
                        </div>
                        <h2 className="card-footer-rate">99999/-</h2>
                        </div>
                    </div>            
                </div>

                <div className="flex justify-center">
                    <button className="flex justify-center more-site">                            
                        <div className="more-site-title">
                            <h1>more camp sites</h1>
                        </div>
                        <div>
                            <img src={RightArrow} alt="right-arrow" />
                        </div>
                    </button>
                </div>
                
                <div className="camp-container p-6">
                    <div className="flex justify-between p-8 about-us">
                        <div className="about-text">
                            <h1>Your Gateway to Unforgettable Outdoor Escapes!</h1>
                            <p>TravelInTents is your one-stop destination for all things camping. Whether you're a seasoned outdoors enthusiast or a first-time camper, we provide a comprehensive platform to plan and book your perfect camping adventure.</p>
                            <button> About Us <span><img src={RightArrow}/></span></button>
                        </div>
                        <div className="">
                            <img src={Aboutus}/>
                        </div>
                    </div>    
                </div>
                
                <div className="w-full review">
                    <div className="review-image">
                        <img src={ReviewImage}/>
                    </div>
                    <div className="review">
                        <div className="review-text">
                            <h1>Unforgettable Adventure!</h1>
                            <h2>Suliman Sallehi</h2>
                            <p>My hiking trip organized through this website was an unforgettable adventure. The landscapes were stunning, and the itinerary was well-planned. The only reason I'm not giving it a perfect score is that some parts of the trail were a bit challenging for beginners. Nonetheless, the overall experience was fantastic.</p>
                            <div className="flex justify-start justify-between">
                                <div className="flex justify-start mb-3">
                                    <img className="review-footer-rate" src={Start} alt="Star" />
                                    <img className="review-footer-rate" src={Start} alt="Star" />
                                    <img className="review-footer-rate" src={Start} alt="Star" />
                                    <img className="review-footer-rate" src={Start} alt="Star" />
                                </div>
                                <h2 className="">15-6-2023</h2>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="p-6">
                    <div className="faq">
                        <h1 className="faq-title mt-20">Frequently Asked Questions?</h1>
                    </div>                  
                </div>
                
                <div className="flex justify-center">
                    <div className="flex justify-between">
                        <button className="faq-button mt-40">
                            <div>
                                <div className="flex justify-start p-2 pl-5">
                                    <h1>How do I book a campsite on the website?</h1>
                                </div>
                                <div className="flex justify-start pl-5 text-justify">
                                    <p>Provide a step-by-step guide on the booking process, including selecting dates, choosing a campsite, and completing the reservation.</p>
                                </div>
                            </div>
                            <div className="arrow-circle relative mt-12">
                                <div className="absolute elipse-arrow">
                                    <img src={EllipsArrow} alt="Ellipsis-Arrow"/>
                                </div>
                                <img src={Ellipse} alt="Ellipse" className="elipse w-full"/>
                            </div>
                            
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default RecomendedSites;
