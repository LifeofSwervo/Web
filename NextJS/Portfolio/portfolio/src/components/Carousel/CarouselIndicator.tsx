// CarouselIndicators.tsx
import React from 'react';

interface CarouselIndicatorsProps {
    images: string[];
    currentIndex: number;
    handlesDotClick: (index: number) => void;
}

const indicatorStyle: React.CSSProperties = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
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