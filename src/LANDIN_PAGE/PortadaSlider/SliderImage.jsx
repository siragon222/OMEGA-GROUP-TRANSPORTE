import React, { useEffect, useRef } from 'react';
import './SliderImage.css';

const SliderImage = ({ image, alt, backdropColor, index, className }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        if (itemRef.current) {
            // Stagger animation only for desktop view, controlled by CSS class
            if (itemRef.current.classList.contains('desktop-animate')) {
                itemRef.current.style.animationDelay = `${index * 0.4}s`;
            } else {
                itemRef.current.style.animationDelay = '0s';
            }
        }
    }, [index, className]);

    return (
        <div className={`image-item-wrapper ${className}`} ref={itemRef}>
            <div className="image-backdrop" style={{ backgroundColor: backdropColor }}></div>
            <img
                src={image}
                alt={alt}
                className="portada-slider-image"
            />
        </div>
    );
};

export default SliderImage; 