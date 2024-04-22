// CarouselControls.tsx
import React from 'react';

interface CarouselControlsProps {
    handlePrevious: () => void;
    handleNext: () => void;
}

const slideDirectionStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
}

const rightStyle: React.CSSProperties = {
    right: "0",
}

const leftStyle: React.CSSProperties = {
    left: "0",
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ handlePrevious, handleNext }) => {
    return (
        <div style={slideDirectionStyle}>
            <div 
                style={leftStyle}
                className="left" 
                onClick={handlePrevious}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                >
                    <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                </svg>
            </div>
            <div
                style={rightStyle} 
                className="right" 
                onClick={handleNext}>
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
    );
};

export default CarouselControls;