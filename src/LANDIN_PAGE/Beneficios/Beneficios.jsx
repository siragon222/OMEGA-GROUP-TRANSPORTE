import React from 'react';
import Card_Beneficios from './Card_Beneficios';
import './Beneficios.css';

// Importamos los SVG de beneficios
import icon_beneficios_1 from '../../assets/icon_beneficios_1.svg';
import icon_beneficios_2 from '../../assets/icon_beneficios_2.svg';
import icon_beneficios_3 from '../../assets/icon_beneficios_3.svg';
import icon_beneficios_4 from '../../assets/icon_beneficios_4.svg';
import icon_beneficios_5 from '../../assets/icon_beneficios_5.svg';
import icon_beneficios_6 from '../../assets/icon_beneficios_6.svg';

const Beneficios = () => {
  const beneficiosData = [
    {
      image: icon_beneficios_1, // Icono de beneficio 1
      title: 'Beneficio 1',
      description: 'Descripción del beneficio 1. Este es un texto de ejemplo para el beneficio.',
    },
    {
      image: icon_beneficios_2, // Icono de beneficio 2
      title: 'Beneficio 2',
      description: 'Descripción del beneficio 2. Aquí puedes detallar más sobre lo que se ofrece.',
    },
    {
      image: icon_beneficios_3, // Icono de beneficio 3
      title: 'Beneficio 3',
      description: 'Descripción del beneficio 3. Continuamos con los ejemplos para ilustrar los servicios.',
    },
    {
      image: icon_beneficios_4, // Icono de beneficio 4
      title: 'Beneficio 4',
      description: 'Descripción del beneficio 4. Un texto más para completar el contenido de las tarjetas.',
    },
    {
      image: icon_beneficios_5, // Icono de beneficio 5
      title: 'Beneficio 5',
      description: 'Descripción del beneficio 5. Próximo beneficio con información relevante para el usuario.',
    },
    {
      image: icon_beneficios_6, // Icono de beneficio 6
      title: 'Beneficio 6',
      description: 'Descripción del beneficio 6. Último beneficio con detalles adicionales.',
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
