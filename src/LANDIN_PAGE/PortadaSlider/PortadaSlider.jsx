import React, { useState, useEffect } from 'react';
import './PortadaSlider.css';
import SliderImage from './SliderImage';
import car_1 from './car_1.png';
import car_2 from './car_2.png';
import car_3 from './car_3.png';
import car_4 from './car_4.png';
import car_5 from './car_5.png';
import Carretera from './Carretera.png';
// Importar las nuevas imágenes de fondo
import bg_1 from './bg_1.jpg';
import bg_2 from './bg_2.jpg';
import bg_3 from './bg_3.jpg';
import bg_4 from './bg_4.jpg';
import bg_5 from './bg_5.jpg';

const PortadaSlider = () => {
    const images = [car_1, car_2, car_3, car_4];
    const backdropImages = [bg_1, bg_2, bg_3, bg_4]; // Reemplazamos los colores por imágenes
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [currentMobileImageIndex, setCurrentMobileImageIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleDesktopBackground = () => {
            if (!isMobile) {
                const sliderContainer = document.querySelector('.portada-slider-container');
                if (sliderContainer) {
                    const minWidth = 769;
                    const maxWidth = 1920; // Example max width for desktop
                    const minBgY = 0; // 0% (top) when screen is at minWidth
                    const maxBgY = 50; // 50% (center) when screen is at maxWidth

                    const currentWidth = window.innerWidth;

                    let newBgY = maxBgY;
                    if (currentWidth < maxWidth) {
                        // Calculate a percentage based on how much the screen has shrunk
                        const widthRatio = (currentWidth - minWidth) / (maxWidth - minWidth);
                        newBgY = minBgY + (maxBgY - minBgY) * Math.max(0, Math.min(1, widthRatio));
                    }
                    sliderContainer.style.backgroundPositionY = `${newBgY}%`;
                }
            }
        };

        // Initial call and add event listener
        handleDesktopBackground();
        window.addEventListener('resize', handleDesktopBackground);

        return () => {
            window.removeEventListener('resize', handleDesktopBackground);
        };
    }, [isMobile]); // Depend on isMobile to re-run when mobile state changes

    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setCurrentMobileImageIndex((prevIndex) => 
                    (prevIndex + 1) % images.length
                );
            }, 3000); // Change image every 3 seconds for mobile

            return () => clearInterval(interval);
        } /* else {
            // Optionally, if you had a desktop-specific carousel logic, you'd put it here.
            // For now, desktop shows all images side-by-side as already implemented.
        } */
    }, [isMobile, images.length]);

    return (
        <div className="portada-slider-container">
            {images.map((image, index) => (
                <SliderImage 
                    key={index} 
                    image={image} 
                    alt={`Car ${index + 1}`} 
                    backdropImage={backdropImages[index]} // Pasamos la imagen de fondo en lugar del color
                    index={index}
                    className={isMobile 
                        ? (index === currentMobileImageIndex ? 'active-mobile' : '') 
                        : 'desktop-animate'} 
                />
            ))}
            <h1 className="slider-title">
              <span className="thin-text">Movilizamos tu operación sin fallas:</span>
              <span className="bold-text">Transporte 100% efectivo</span>
            </h1>
        </div>
    );
};

export default PortadaSlider;
