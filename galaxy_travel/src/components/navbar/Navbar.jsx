import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleChange = () => {
        setShowMenu(!showMenu);
    };

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "navbar navbar-bg" : "navbar"}>
            <Link to="/">
                <h1>GALAXY TRAVEL</h1>
            </Link>
            <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/training">Training</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <div className="hamburger" onClick={handleChange}>
                {showMenu ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    );
};

export default Navbar;
