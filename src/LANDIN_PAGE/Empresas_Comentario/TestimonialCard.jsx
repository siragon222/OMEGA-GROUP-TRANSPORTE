import React, { useState, useEffect } from 'react';
import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ testimonial }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonial);

  useEffect(() => {
    // Cuando cambia el testimonio, primero hacemos fade out
    setIsVisible(false);
    
    // Después de la animación de fade out, actualizamos el contenido
    const timer = setTimeout(() => {
      setCurrentTestimonial(testimonial);
      setIsVisible(true); // Y hacemos fade in
    }, 300); // Duración de la transición
    
    return () => clearTimeout(timer);
  }, [testimonial]);

  return (
    <div className={`${styles.testimonialCard} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.testimonialContent}>
        <p className={styles.testimonialText}>"{currentTestimonial.testimonialText}"</p>
        <div className={styles.companyInfo}>
          <img 
            src={currentTestimonial.logo} 
            alt={`Logo de ${currentTestimonial.companyName}`} 
            className={styles.companyLogo}
            loading="lazy"
          />
          <h3 className={styles.companyName}>{currentTestimonial.companyName}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;