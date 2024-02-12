import React, {useEffect, useRef} from 'react'
import "./landing.scss"
import { init } from 'ityped'
import profile from "../../../src/images/profile.jpeg"
import resume from "../../../src/images/resume.pdf"

export default function Landing() {
    const textRef = useRef()
    
    useEffect (()=>{
        init(textRef.current, {
            showCursor: true,
            startDelay: 2000,
            typeSpeed: 50,
            backDelay: 1500,
            backSpeed:60,
            loop: false,
            disableBackTyping: false,
            strings: ["design", "develop", "create."],
          });
    }, [])


    return (
        <div className="landing" id="landing">
                    <div className="imgContainer">
                <img src={profile} alt="Profile" />
            </div>
        <div className="content">
            <div className="text">
                <div className="wrapper">
                    <h1>I'm Amanda Ferguson</h1>
                    <h3>And I <span ref={textRef}></span></h3>
                    <p>After more than a decade in the creative industry, I transitioned to software development in 2021. My background in strategic marketing allows me to combine my skills into a unique combination which sets me apart as a bridge of communciation between design and development teams.</p>
                    <a href={resume} className='resume-button' download>Download my resume</a>
                </div>
            </div>
        </div>
    </div>
    )
}