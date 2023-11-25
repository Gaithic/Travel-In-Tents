import { Component } from "react";
import './Footer.css';

class Footer extends Component{
    render(){
        return(
        <div className="footer mt-20">
                <div className="important-link flex justify-evenly">
                        <div className="links">
                            <h1>Contact Information </h1>
                            <ul>
                                <li>Company Name</li>
                                <li>Physical Address</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                            </ul>
                        </div>
                        <div className="links">
                            <h1>Quick Links</h1>
                            <ul>
                                <li>Popular destinations</li>
                                <li>Travel guides</li>
                                <li>Special offers  </li>
                                <li>Blog or articles</li>
                            </ul>
                        </div>
                        <div className="links">
                            <h1>Terms and Conditions</h1>
                            <ul>
                                <li>Link to the terms of service</li>
                                <li>Privacy policy</li>
                                <li>Booking policies</li>
                                <li>Blog or articles</li>
                            </ul>
                        </div>
                </div>
        </div>
        )
    }
}

export default Footer;