import React from 'react'
import "./topbar.scss"
import { Person, Mail, Phone, LinkedIn, GitHub } from "@material-ui/icons"


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
      <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              aferg
            </a>
            <div className="itemContainer">
              <LinkedIn className="icon" />
              <a href="https://www.linkedin.com/in/amanda-ferguson-858861296/" 
              target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            </div>
            <div className="itemContainer">
              <GitHub className="icon" />
              <a href="https://www.github.com/aferggg" 
              target="_blank" rel="noopener noreferrer">
              Github
            </a>
            </div>
            <div className="itemContainer">
              <Mail className="icon" />
              <span>aferg.dev@gmail.com</span>
            </div>
            <div className="itemContainer">
              <Phone className="icon" />
              <span>316-518-8543</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  