import React from "react";
import "./Footer.css";
import {
    FaFacebook,
    FaLinkedin,
    FaMailBulk,
    FaPhone,
    FaSearchLocation,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation className="icon" />
                        <div>
                            <p>123 Acme st</p>
                            <h4>Houston, TX</h4>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone className="icon" />
                            1-222-333-888
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk className="icon" />
                            galaxy_travel@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Numquam, odit? Modi numquam nihil ea? Optio nam
                        numquam recusandae error ipsa omnis ab natus totam
                        facilis maiores quos, rerum suscipit minima?
                    </p>
                    <div className="social">
                        <FaFacebook className="icon" />
                        <FaTwitter className="icon" />
                        <FaLinkedin className="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
