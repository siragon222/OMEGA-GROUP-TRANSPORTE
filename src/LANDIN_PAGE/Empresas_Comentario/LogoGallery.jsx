import React from 'react';
import styles from './LogoGallery.module.css';

const LogoGallery = ({ logos, activeIndex, onLogoClick, onLogoHover, isMobile }) => {
  return (
    <div className={`${styles.logoGallery} ${isMobile ? styles.mobile : styles.desktop}`}>
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className={`${styles.logoContainer} ${index === activeIndex ? styles.active : ''}`}
          onClick={() => onLogoClick(index)}
          onMouseEnter={() => onLogoHover(index)}
        >
          <img 
            src={logo} 
            alt={`Logo empresa ${index + 1}`} 
            className={styles.logo}
          />
        </div>
      ))}
    </div>
  );
};

export default LogoGallery;