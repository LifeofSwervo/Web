"use client";

import Image from "next/image";
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from "../../public/Logos/navBarLogo.svg";
import "./NavBar.css";


const goldColor = '#F7D002'; 
const violetColor = '#4B244A'

const NavBar = () => {
    const [homeHover, setHomeHover] = React.useState(false);
    const [aboutHover, setAboutHover] = React.useState(false);
    const [contactHover, setContactHover] = React.useState(false);

    const aboutStyle: React.CSSProperties = {
        float: "right",
        textDecoration: aboutHover ? 'underline' : 'none',
        color: aboutHover ? `${goldColor}` : 'white',
        margin: 'auto 2vw'
    }

    const homeStyle: React.CSSProperties = {
        float: "right",
        textDecoration: homeHover ? 'underline' : 'none',
        color: homeHover ? `${goldColor}` : 'white',
        margin: 'auto 2vw'
    }

    const contactStyle: React.CSSProperties = {
        float: "right",
        color: contactHover ? `${goldColor}` : 'white',
        textDecoration: contactHover ? 'underline' : 'none',
        margin: 'auto 2vw'
    }

    const linksStyle: React.CSSProperties = {
        textAlign: "center",
    }

    const imageStyle: React.CSSProperties = {
        margin: '10px 0 10px 6.5vw',
        width: '40%',
        height: '40%',
        padding: '0',
        objectFit: 'contain',
        float: 'left'
    }
    
    return (
        <nav className="navStyle">
            <a 
                href="/">   
                <Image src={Logo} alt="Logo" style={imageStyle} /> 
            </a>
            <ul className="ulStyle">
                <li 
                style={linksStyle} 
                onMouseEnter={() => setHomeHover(true)} 
                onMouseLeave={() => setHomeHover(false)}>
                    <Link href="/" style={homeStyle}>Home</Link>
                </li>
                <li 
                style={linksStyle} 
                onMouseEnter={() => setContactHover(true)} 
                onMouseLeave={() => setContactHover(false)}>
                    <a href="contact" style={contactStyle}>Contact</a>
                </li>
                <li 
                style={linksStyle} 
                onMouseEnter={() => setAboutHover(true)} 
                onMouseLeave={() => setAboutHover(false)}>
                    <a href="about" style={aboutStyle}>About</a>
                </li>
                
            </ul>
        </nav>
    );
}

export default NavBar;