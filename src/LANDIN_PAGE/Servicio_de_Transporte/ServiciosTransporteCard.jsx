import { useState } from 'react';
import styles from './ServiciosDeTransporte.module.css';

const ServiciosTransporteCard = ({ imagen, titulo, descripcion }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}>
      <img src={imagen} alt={titulo} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{titulo}</h3>
      <div className={`${styles.cardDescription} ${isExpanded ? styles.expanded : ''}`}>
        <p>{descripcion}</p>
      </div>
      <button 
        className={styles.cardButton}
        onClick={toggleExpanded}
      >
        {isExpanded ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  );
};

export default ServiciosTransporteCard;