// CarouselIndicators.tsx
import React from 'react';

interface CarouselIndicatorsProps {
    images: string[];
    currentIndex: number;
    handlesDotClick: (index: number) => void;
}

const indicatorStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginRight: "1em",
    paddingRight: "1em",
    borderRight: "1px solid #1F2B2E",
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ images, currentIndex, handlesDotClick }) => {
    return (
        <div style={indicatorStyle}>
            {images.map((_, index) => (
                <div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handlesDotClick(index)}
                />
            ))}
        </div>
    );
};

export default CarouselIndicators;