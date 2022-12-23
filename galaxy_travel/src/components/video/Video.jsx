import React from "react";
import "./Video.css";
import spaceVideo from "../../assets/space.mp4";
import { Link } from "react-router-dom";
const Video = () => {
    return (
        <div className="hero">
            <video
                id="video"
                autoPlay
                loop
                muted
                src={spaceVideo}
                type="video/mp4"
            ></video>
            <div className="content">
                <h1>Galaxy Travel</h1>
                <p>Enjoy a power of galaxy</p>

                <div>
                    <Link to="/training" className="btn">
                        Training
                    </Link>
                    <Link to="/contact" className="btn btn-light">
                        Launch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Video;
