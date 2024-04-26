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

const goldColor = '#F7D002'; 
const mintGreenColor = '#D2FDFF';
const purpleColor = '#4B244A';
const lightPurpleColor = '#7B4E78';

interface ProjectsShowcaseProps {
    image: StaticImageData;
    name: string;
    description: string;
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
    
}

const nameStyle: React.CSSProperties = {
    fontSize: '4.5em'
}





const images = [
    "/Assets/placeholder.png",
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
]

const navigationDivStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({image, name, description}) => {
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
        marginBottom: '1em',
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
        <div style={showcaseStyle}>
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            style={leftColumnStyle}>
                <div style={imageStyle}>
                    <CarouselImages
                        images={images}
                        currentIndex={currentIndex}
                    />
                </div>

                <Image
                style={secondImageStyle} 
                src={image} 
                alt={name} 
                onMouseEnter={() => setIsSecondImageHovered(true)}
                onMouseLeave={() => setIsSecondImageHovered(false)}
                />
            </motion.div>
            <div style={informationStyle}>
                <h2>{name}</h2>
                <p>{description}</p>
                <div style={navigationDivStyle}>
                    <CarouselIndicators
                        images={images}
                        currentIndex={currentIndex}
                        handlesDotClick={handlesDotClick}
                    />
                    <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={buttonStyle} 
                    onHoverStart={() => setButtonIsHovered(true)}
                    onHoverEnd={() => setButtonIsHovered(false)}
                    >
                        Source Code
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default ProjectsShowcase;