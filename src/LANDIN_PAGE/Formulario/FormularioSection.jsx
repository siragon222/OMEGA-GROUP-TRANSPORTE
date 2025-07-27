import React, { useEffect, useRef, useState } from 'react';
import formularioIma from '../../assets/formulario_ima.png';
import './FormularioSection.css';

const FormularioSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="formulario-section" ref={sectionRef}>
      <div className={`formulario-container ${isVisible ? 'visible' : ''}`}>
        <div className="image-container">
          <img src={formularioIma} alt="Formulario imagen" />
        </div>
        <div className="button-container">
          <button className="formulario-button">RELLENA CUESTIONARIO</button>
        </div>
      </div>
    </section>
  );
};

export default FormularioSection;
