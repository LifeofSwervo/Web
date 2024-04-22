import React from 'react';

interface CarouselImagesProps {
    images: string[];
    currentIndex: number;
}

const carouselImageStyle: React.CSSProperties = {
    width: '300px',
    height: '150px',
}

const CarouselImages: React.FC<CarouselImagesProps> = ({ images, currentIndex }) => {
    return (
        <img
            key={currentIndex}
            src={images[currentIndex]}
            style={carouselImageStyle}
        />
    );
};

export default CarouselImages;