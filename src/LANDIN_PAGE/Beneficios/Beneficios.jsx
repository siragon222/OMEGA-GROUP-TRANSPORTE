import React from 'react';
import Card_Beneficios from './Card_Beneficios';
import './Beneficios.css';

// Importamos los SVG de beneficios
import icon_beneficios_1 from '../../assets/icon_beneficios_1.webp';
import icon_beneficios_2 from '../../assets/icon_beneficios_2.webp';
import icon_beneficios_3 from '../../assets/icon_beneficios_3.webp';
import icon_beneficios_4 from '../../assets/icon_beneficios_4.webp';
import icon_beneficios_5 from '../../assets/icon_beneficios_5.webp';
import icon_beneficios_6 from '../../assets/icon_beneficios_6.webp';

const Beneficios = () => {
  const beneficiosData = [
    {
      image: icon_beneficios_1, // Icono de beneficio 1
      title: 'Seguridad Integral',
      description: 'Vehículos con última tecnología y mantenimiento riguroso para tu tranquilidad.',
    },
    {
      image: icon_beneficios_2, // Icono de beneficio 2
      title: 'Puntualidad Garantizada',
      description: 'Llega a tu destino a tiempo gracias a nuestra logística avanzada.',
    },
    {
      image: icon_beneficios_3, // Icono de beneficio 3
      title: 'Máxima Versatilidad',
      description: 'Flota variada que se adapta a cualquier necesidad de transporte.',
    },
    {
      image: icon_beneficios_4, // Icono de beneficio 4
      title: 'Confort Superior',
      description: 'Disfruta de un viaje placentero en nuestros vehículos modernos y cómodos.',
    },
    {
      image: icon_beneficios_5, // Icono de beneficio 5
      title: 'Conductores Profesionales',
      description: 'Nuestro equipo de conductores es de total confianza y está altamente capacitado.',
    },
    {
      image: icon_beneficios_6, // Icono de beneficio 6
      title: 'Ahorro Inteligente',
      description: 'Reduce costos operativos con nuestras soluciones de transporte eficientes.',
    },
  ];

  return (
    <section className="beneficios-section">
      <h2 className="beneficios-title">Nuestros Beneficios</h2>
      <div className="beneficios-container">
        {beneficiosData.map((beneficio, index) => (
          <Card_Beneficios
            key={index}
            image={beneficio.image}
            title={beneficio.title}
            description={beneficio.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Beneficios;
