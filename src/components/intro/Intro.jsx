import React, { useState } from 'react'
import "./intro.scss"
import introbg from "../../images/introbg.png"
import introbg2 from "../../images/introbg2.png"
import introbg3 from "../../images/introbg3.png"
import introbg4 from "../../images/introbg4.png"
import introbg5 from "../../images/introbg5.png"
import introbg6 from "../../images/introbg6.png"

export default function Intro() {
    const images = [introbg, introbg2, introbg3, introbg4, introbg5, introbg6];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    return (
        <div className="intro" id="intro" onClick={handleClick} style={{backgroundImage: `url(${images[currentImageIndex]})`}}>
            <div className="imgContainer">
                {/* ImgContainer content */}
            </div>
        </div>
    )
}