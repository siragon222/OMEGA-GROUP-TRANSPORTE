import React, { useState, useEffect } from 'react';
import './PortadaSlider.css';
import SliderImage from './SliderImage';
import car_1 from './car_1.webp';
import car_2 from './car_2.webp';
import car_3 from './car_3.webp';
import car_4 from './car_4.webp';
import car_5 from './car_5.webp';
import Carretera from './Carretera.webp';
// Importar las nuevas imágenes de fondo
import bg_1 from './bg_1.webp';
import bg_2 from './bg_2.webp';
import bg_3 from './bg_3.webp';
import bg_4 from './bg_4.webp';
import bg_5 from './bg_5.webp';

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
            <div className="slider-overlay">
              <h1 className="slider-title">
                <span className="thin-text">Movilizamos tu operación sin fallas:</span>
                <span className="bold-text">Transporte 100% efectivo</span>
              </h1>
              <div className="slider-cta-wrapper">
                <a
                  href="https://wa.me/573144686437?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20el%20alquiler%20de%20transporte."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slider-cta-button"
                  aria-label="Abrir WhatsApp para solicitar una cotización"
                >
                  Solicita tu cotización ¡ahora!
                </a>
              </div>
            </div>
        </div>
    );
};

export default PortadaSlider;
