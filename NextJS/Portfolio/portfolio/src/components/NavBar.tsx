"use client";

import Image from "next/image";
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from "../../public/navBarLogo.svg";

const NavBar = () => {
    const [homeHover, setHomeHover] = React.useState(false);
    const [aboutHover, setAboutHover] = React.useState(false);
    const [contactHover, setContactHover] = React.useState(false);
 
    const navStyle: React.CSSProperties = {
        backgroundColor: "#0C1618",
        padding: '0',
        margin: '0',
        lineHeight: '0',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        // Breakpoint 
        listStyleType: "none",
        overflow: "hidden",
        borderBottom: "2px solid #D2FDFF",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1,
    }

    const ulStyle: React.CSSProperties = {
        listStyleType: "none",
        padding: 0,
        overflow: "hidden",
        marginLeft: 'auto',
    }

    const aboutStyle: React.CSSProperties = {
        float: "right",
        marginRight: '1.0vw',
        textDecoration: aboutHover ? 'underline' : 'none',
        marginTop: '1vh'
    }

    const homeStyle: React.CSSProperties = {
        float: "right",
        marginRight: '1.0vw',
        textDecoration: homeHover ? 'underline' : 'none',
        marginTop: '1vh'
    }

    const contactStyle: React.CSSProperties = {
        float: "right",
        marginRight: '12.5vw',
        textDecoration: contactHover ? 'underline' : 'none',
        marginTop: '1vh'
    }

    const aStyle: React.CSSProperties = {
        display: "block",
        color: 'white',
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none"
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
        <nav style={navStyle}>
            <a 
                href="/">   
                <Image src={Logo} alt="Logo" style={imageStyle} /> 
            </a>
            <ul style={ulStyle}>
                <li 
                style={contactStyle} 
                onMouseEnter={() => setContactHover(true)} 
                onMouseLeave={() => setContactHover(false)}>
                    <a href="contact" style={aStyle}>Contact</a>
                </li>
                <li 
                style={aboutStyle} 
                onMouseEnter={() => setAboutHover(true)} 
                onMouseLeave={() => setAboutHover(false)}>
                    <a href="about" style={aStyle}>About</a>
                </li>
                <li 
                style={homeStyle} 
                onMouseEnter={() => setHomeHover(true)} 
                onMouseLeave={() => setHomeHover(false)}>
                    <Link href="/" style={aStyle}>Home</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;