import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "Just a motion background";

const Education = () => {
    return (
        <section id="education" className="padding">
        <img className="background" src={image} alt="" />
        <div style={{ textAlign: "center" }}>
            <h2>Education</h2>
        </div>
        <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem", textAlign: "center" }}>
            <div className="row">
            <div className="large">
                <h3>University of Nigeria</h3>
                <h4>Bachelor of Science in Computer Science</h4>
                <h5>2019 - 2024</h5>
            </div>
            </div>
        </div>
        </section>
    );
}

export default Education;