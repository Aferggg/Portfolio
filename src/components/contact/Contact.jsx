import React, { useState } from "react"
import "./contact.scss"
import { LinkedIn, GitHub, Mail, Phone, Instagram, CloudCircle } from "@material-ui/icons"

export default function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
            <div className="itemContainer">
                <div className="item">
                    <Mail className="icon" />
                    <span>aferg.dev@gmail.com</span>
                </div>
                <div className="item">
                    <Phone className="icon" />
                    <span>316-518-8543</span>
                </div>
                <div className="item">
                    <LinkedIn className="icon" />
                        <a href="https://www.linkedin.com/in/amanda-ferguson-858861296/" 
                        target="_blank" rel="noopener noreferrer">
                        LinkedIn
                        </a>
                </div>
                <div className="item">
                    <GitHub className="icon" />
                        <a href="https://www.github.com/aferggg" 
                        target="_blank" rel="noopener noreferrer">
                        Github
                        </a>
                </div>
                <div className="item">
                    <Instagram className="icon" />
                        <a href="https://www.instagram.com/af.erg/" 
                        target="_blank" rel="noopener noreferrer">
                        Instagram
                        </a>
                </div>
                <div className="item">
                    <CloudCircle className="icon" />
                        <a href="https://www.behance.net/afergdesign" 
                        target="_blank" rel="noopener noreferrer">
                        Behance
                        </a>
                </div>
            </div>
          </div>
        </div>
        
    )
}
