"use client"

import Image from "next/image";
import Logo from "../../public/Logos/bitmap.svg";
import Link from "next/link";
import React from "react";

const goldColor = '#F7D002'; 
const violetColor = '#4B244A'

const footerStyle: React.CSSProperties = {
    backgroundColor: "#5E666A",
    alignItems: 'center',
    padding: '1vh 5% 1vh 5%',
    margin: 'auto auto',
    color: 'white',
    borderTop: "2px solid #D2FDFF",
    zIndex: 4,
}

const footerContentStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyContent: 'space-between',
    borderBottom: "1px solid black",
}

const logoStyle: React.CSSProperties = {
    gridArea: '1 / 1 / 2 / 2',

    display: 'flex',
    justifyContent: 'left',  // add this line
    alignItems: 'end',

    whiteSpace: 'nowrap',
    fontFamily: 'Comic Sans MS, Comic sans, cursive',
    color: '#4B244A',
    height: '13vh',
}

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    padding: '0',
    margin: '0 0 2vh 0',
}

const ulStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // creates two columns
    gridTemplateRows: '1fr 1fr', // creates two rows
    gap: '1px', // adjust as needed for spacing between items
    listStyleType: "none",
    margin: 0,
    padding: 0,
}

const liStyle: React.CSSProperties = {
    padding: "1.5vh 10vw",
}

const copyRightStyle: React.CSSProperties = {
    margin: '1vh 0 0 0'
}

const Footer = () => {
    const [homeHover, setHomeHover] = React.useState(false);
    const [aboutHover, setAboutHover] = React.useState(false);
    const [contactHover, setContactHover] = React.useState(false);

    const homeStyle: React.CSSProperties = {
        textDecoration: homeHover ? 'underline' : 'none',
        color: homeHover ? `${violetColor}` : 'white',
    }

    const contactStyle: React.CSSProperties = {
        color: contactHover ? `${violetColor}` : 'white',
        textDecoration: contactHover ? 'underline' : 'none',
    }

    const aboutStyle: React.CSSProperties = {
        textDecoration: aboutHover ? 'underline' : 'none',
        color: aboutHover ? `${violetColor}` : 'white',
    }

    return (
        <footer style={footerStyle} >
            <div style={footerContentStyle}>
                <div style={logoStyle}>
                    <Image src={Logo} alt="Logo" style={imageStyle}/>
                </div>
                <div>
                    <ul style={ulStyle}>
                        <li 
                        style={liStyle}
                        onMouseEnter={() => setHomeHover(true)}
                        onMouseLeave={() => setHomeHover(false)}>
                            <Link href="/" style={homeStyle}>Home</Link>
                        </li>
                        <li 
                        style={liStyle}
                        >
                            Showcase
                        </li>
                        <li 
                        style={liStyle}
                        onMouseEnter={() => setAboutHover(true)} 
                        onMouseLeave={() => setAboutHover(false)}>
                            <Link href="about" style={aboutStyle}>About</Link>
                        </li>
                        <li 
                        style={liStyle}
                        onMouseEnter={() => setContactHover(true)} 
                        onMouseLeave={() => setContactHover(false)}>
                            <Link href="about" style={contactStyle}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p style={copyRightStyle}>© Clarence Thomas - 2024</p>
        </footer>
    )
}

export default Footer;