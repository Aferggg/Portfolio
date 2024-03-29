import React, { useState, useEffect } from 'react';
import './intro.scss';
import introbg from '../../images/introbg.png';
import introbg2 from '../../images/introbg2.png';
import introbg3 from '../../images/introbg3.png';
import introbg4 from '../../images/introbg4.png';
import introbg5 from '../../images/introbg5.png';
import introbg6 from '../../images/introbg6.png';

export default function Intro() {
    const images = [introbg, introbg2, introbg3, introbg4, introbg5, introbg6];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const imagePromises = images.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => reject();
                img.src = src;
            });
        });

        Promise.all(imagePromises)
            .then(() => setLoaded(true))
            .catch(() => console.error('Failed to preload images'));
    }, [images]);

    const handleClick = () => {
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        const img = new Image();
        img.src = images[nextImageIndex];
    
        setCurrentImageIndex(nextImageIndex);
    };

    return (
        <div
            className={`intro ${loaded ? 'loaded' : ''}`}
            id="intro"
            onClick={handleClick}
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
            <div className="imgContainer"></div>
        </div>
    );
}


// import React, { useState, useEffect } from 'react'
// import "./intro.scss"
// import introbg from "../../images/introbg.png"
// import introbg2 from "../../images/introbg2.png"
// import introbg3 from "../../images/introbg3.png"
// import introbg4 from "../../images/introbg4.png"
// import introbg5 from "../../images/introbg5.png"
// import introbg6 from "../../images/introbg6.png"

// export default function Intro() {
//     const images = [introbg, introbg2, introbg3, introbg4, introbg5, introbg6];
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         images.forEach(src => {
//             const img = new Image();
//             img.src = src;
//         });
//     }, []);

//     const handleClick = () => {
//         setCurrentImageIndex((currentImageIndex + 1) % images.length);
//     };

//     return (
//         <div className="intro" id="intro" onClick={handleClick} style={{backgroundImage: `url(${images[currentImageIndex]})`}}>
//             <div className="imgContainer">
//             </div>
//         </div>
//     )
// }