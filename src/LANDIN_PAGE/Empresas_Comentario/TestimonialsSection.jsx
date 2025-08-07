import React, { useState, useEffect, useCallback } from 'react';
import LogoGallery from './LogoGallery';
import TestimonialCard from './TestimonialCard';
import styles from './TestimonialsSection.module.css';

// Importar los logos desde la carpeta assets
import logo1 from '../../assets/logo_empre_1.svg';
import logo2 from '../../assets/logo_empre_2.svg';
import logo3 from '../../assets/logo_empre_3.svg';
import logo4 from '../../assets/logo_empre_4.svg';
import logo5 from '../../assets/logo_empre_5.svg';
import logo6 from '../../assets/logo_empre_6.svg';

const TestimonialsSection = () => {
  // Datos de ejemplo para los testimonios
  const testimonials = [
    {
      id: 1,
      logo: logo1,
      companyName: 'Concremack',
      testimonialText: 'Excelente servicio de transporte. Siempre puntuales y profesionales. Recomendamos ampliamente sus servicios para cualquier necesidad logística.'
    },
    {
      id: 2,
      logo: logo2,
      companyName: 'Braserv',
      testimonialText: 'Hemos trabajado con Transportes Omega por más de 5 años y su servicio ha sido impecable. Su atención al cliente y eficiencia son incomparables.'
    },
    {
      id: 3,
      logo: logo3,
      companyName: 'UT Mantenimiento Estatico VRO',
      testimonialText: 'Gracias a la puntualidad y profesionalismo de Transportes Omega, nuestra cadena de suministro ha mejorado significativamente. Son socios confiables.'
    },
    {
      id: 4,
      logo: logo4,
      companyName: 'MANSEL',
      testimonialText: 'La seguridad y cuidado con que manejan nuestra mercancía es excepcional. Definitivamente la mejor opción en servicios de transporte.'
    },
    {
      id: 5,
      logo: logo5,
      companyName: 'Discon',
      testimonialText: 'Desde que contratamos a Transportes Omega, nuestros tiempos de entrega se han reducido considerablemente. Un servicio altamente recomendable.'
    },
    {
      id: 6,
      logo: logo6,
      companyName: 'Independence',
      testimonialText: 'Su flexibilidad para adaptarse a nuestras necesidades cambiantes ha sido fundamental para nuestro negocio. Excelente equipo y servicio.'
    },
  ];

  // Estado para controlar el testimonio activo
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isAutoChanging, setIsAutoChanging] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Función para cambiar el testimonio activo
  const handleLogoClick = (index) => {
    setActiveTestimonialIndex(index);
    // Detener el cambio automático temporalmente cuando el usuario hace clic
    setIsAutoChanging(false);
    // Reanudar el cambio automático después de 10 segundos
    setTimeout(() => setIsAutoChanging(true), 10000);
  };

  // Función para cambiar el testimonio al pasar el mouse
  const handleLogoHover = useCallback((index) => {
    if (!isMobile) {
      setActiveTestimonialIndex(index);
    }
  }, [isMobile]);

  // Efecto para cambiar automáticamente los testimonios
  useEffect(() => {
    let interval;
    
    if (isAutoChanging) {
      interval = setInterval(() => {
        setActiveTestimonialIndex((prevIndex) => 
          (prevIndex + 1) % testimonials.length
        );
      }, 5000); // Cambiar cada 5 segundos
    }
    
    return () => clearInterval(interval);
  }, [isAutoChanging, testimonials.length]);

  // Efecto para detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Comprobar al cargar
    checkIfMobile();
    
    // Comprobar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Lo que dicen nuestros clientes</h2>
        
        <div className={styles.testimonialContent}>
          <div className={styles.logoGalleryContainer}>
            <LogoGallery 
              logos={testimonials.map(t => t.logo)} 
              activeIndex={activeTestimonialIndex} 
              onLogoClick={handleLogoClick}
              onLogoHover={handleLogoHover}
              isMobile={isMobile}
            />
          </div>
          
          <div className={styles.testimonialCardContainer}>
            <TestimonialCard 
              testimonial={testimonials[activeTestimonialIndex]} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;