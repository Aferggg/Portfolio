import React, {useEffect, useRef} from 'react'
import "./landing.scss"
import { init } from 'ityped'
import profilepic from "../../images/profilepic2.png"
import resume from "../../images/resume.pdf"

export default function Landing() {
    const textRef = useRef();
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
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
            }
        }, { threshold: 0.1 });

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="landing" id="landing" ref={sectionRef}>
            <div className="imgContainer">
                <div className="imgWrapper">
                <img src={profilepic} alt="Profile picture of Amanda Ferguson" />
                </div>
            </div>
            <div className="content">
                <div className="text">
                    <div className="wrapper">
                        <h1>I'm Amanda Ferguson</h1>
                        <h3>And I <span className='cursor-text' ref={textRef}></span></h3>
                        <p>After more than a decade in the creative industry, I transitioned to software development in 2021. My background in strategic marketing allows me to combine my skills into a unique combination which sets me apart as a bridge of communciation between design and development teams.</p>
                        <p>This portfolio was created using React</p>
                        <a href="https://github.com/Aferggg/Portfolio" 
                        target="_blank" rel="noopener noreferrer" 
                        className="resume-button">View on GitHub
                        </a>
                        <a href={resume} className='resume-button' download>Download my resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}