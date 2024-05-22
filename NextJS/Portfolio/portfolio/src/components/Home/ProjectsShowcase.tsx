"use client";

import React, { useState } from "react";
import placeholderImage from "../Assets/placeholder.png"; 
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Carousel from "../Carousel";
import CarouselImages from "../Carousel/CarouselImages";
import CarouselControls from "../Carousel/CarouselControls";
import CarouselIndicators from "../Carousel/CarouselIndicator";
import "./ProjectsShowcase.css";

const goldColor = '#F7D002'; 
const mintGreenColor = '#D2FDFF';
const purpleColor = '#4B244A';
const lightPurpleColor = '#7B4E78';

interface ProjectsShowcaseProps {
    images: string[];
    images2: string[];
    name: string;
    description: string;
    techUsed: string;
    linkToCode: string;
}


const showcaseStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(1, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '1em',
}

const leftColumnStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    margin: '2.5vh 2vw 10vh 30vw',
    flexDirection: 'column',
}

const rightColumnStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    margin: '2.5vh 2vw 10vh 30vw',
    flexDirection: 'column',
}

const informationStyle: React.CSSProperties = {
    alignItems: 'left',
    marginRight: '5vw',
}

const nameStyle: React.CSSProperties = {
    fontSize: '4.5em'
}





const images = [
    "/Assets/BistroCafeHome.png",
    "/Assets/BistroCafeSpecials.png",
    "/Assets/placeholder.png",
    "/Assets/placeholder.png",
    "/Assets/placeholder.png",
]

const images2 = [
    "/Assets/BistroCafeHistory.png",
    "/Assets/BistroCafeHome.png",
    "/Assets/placeholder.png",
    "/Assets/placeholder.png",
]

const navigationDivStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '10vh'
}

const descriptionStyle: React.CSSProperties = {
    marginBottom: '4em',
    lineHeight: '1.8em',
    marginRight: '1.25em',

}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({images, images2, name, description, techUsed, linkToCode}) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [buttonIsHovered, setButtonIsHovered] = React.useState(false);
    const [isSecondImageHovered, setIsSecondImageHovered] = React.useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const imageStyle: React.CSSProperties = {
        borderRadius: '2%',
        objectFit: 'contain',
        width: '300px',
        height: '150px',
        border: isHovered ? `2px solid ${goldColor}` : '2px solid #D2FDFF',
        marginBottom: '3em',
    }

    const secondImageStyle: React.CSSProperties = { // New style object
        borderRadius: '2%',
        objectFit: 'contain',
        width: '300px',
        height: '150px',
        border: isSecondImageHovered ? `2px solid ${goldColor}` : '2px solid #D2FDFF', // Using new state variable
        marginBottom: '1em',
    }

    const buttonStyle: React.CSSProperties = {
        backgroundColor: purpleColor,
        borderRadius: '5px',
        fontFamily: 'Poppins, ui-sans-serif',
        color: mintGreenColor,
        border: '1px solid transparent',
        padding: '0.5em 1em',
        fontSize: '0.7em',
        textDecoration: buttonIsHovered ? 'underline' : 'none',
    }

    /**
     * - Handle Next function, handles the next button click.
     * @prevIndex - the previously indexed image. 
     */
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1 // Checks if end of images array has been reached. If so returns to first image. 
        );
    }

    /**
     * - Handle Previous function, handles the previous button click.
     * @prevIndex - the previously indexed image. 
     */
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1  // Checks if beginning of images array has been reached. If so returns to last image.
        );
    };

    /**
     * - Handles the Dot Click function. Handles the routing of the carousel when a dot is clicked.
     * @param index - Number, the index of the image that was clicked.
     */
    const handlesDotClick = (index: number) => {
        setCurrentIndex(index);
    }


    return (
        <div className="showcase">
            <div
            className="imageColumn">
                <motion.div 
                style={imageStyle}
                whileHover={{ scale: 1.14 }}
                whileTap={{ scale: 0.9 }}>
                    <CarouselImages
                        images={images}
                        currentIndex={currentIndex}
                    />
                </motion.div>
                <motion.div 
                style={secondImageStyle}
                whileHover={{ scale: 1.14 }}
                whileTap={{ scale: 0.9 }}>
                    <CarouselImages
                        images={images2}
                        currentIndex={currentIndex}
                    />
                </motion.div>
            </div>
            <div style={informationStyle}>
                <h2>{name}</h2>
                <ul>
                    <li style={descriptionStyle}>{description}</li>
                    <li>{techUsed}</li>
                </ul>
                <div style={navigationDivStyle}>
                    <CarouselIndicators
                        images={images}
                        currentIndex={currentIndex}
                        handlesDotClick={handlesDotClick}
                    />
                    <a 
                    href={linkToCode}
                    target="_blank">
                    <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={buttonStyle} 
                    onHoverStart={() => setButtonIsHovered(true)}
                    onHoverEnd={() => setButtonIsHovered(false)}>
                        Source Code
                    </motion.button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectsShowcase;