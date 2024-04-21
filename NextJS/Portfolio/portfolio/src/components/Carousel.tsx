import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
    images: string[];
}

const carouselStyle: React.CSSProperties = {
}

const carouselImageStyle: React.CSSProperties = {
    width: '300px',
    height: '150px',
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);


// Helper functions
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



    return(
        <div style={carouselStyle}>
            <img
                key={currentIndex}
                src={images[currentIndex]}
                style={carouselImageStyle}
            />
            <div className="slideDirection">
                <div className="left" onClick={handlePrevious}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 96 960 960"
                        width="20"
                    >
                        <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                    </svg>
                </div>
                <div className="right" onClick={handleNext}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 96 960 960"
                        width="20"
                    >
                        <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                    </svg>
                </div>
            </div>
            <div className="indicator">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => handlesDotClick(index)}
                    />
                ))}
            </div>
        </div>
    )
};

export default Carousel;