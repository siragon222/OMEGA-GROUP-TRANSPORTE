import ServiciosTransporteCard from './ServiciosTransporteCard';
import styles from './ServiciosDeTransporte.module.css';

const serviciosData = [
  {
    id: 1,
    imagen: '/src/assets/Servicio_Ima_1.webp',
    titulo: 'Transporte de Carga',
    descripcion: 'Servicio especializado en transporte de carga pesada con cobertura nacional.'
  },
  {
    id: 2,
    imagen: '/src/assets/Servicio_Ima_2.webp',
    titulo: 'Logística Integral',
    descripcion: 'Soluciones logísticas completas para optimizar su cadena de suministro.'
  },
  {
    id: 3,
    imagen: '/src/assets/Servicio_Ima_3.webp',
    titulo: 'Distribución Local',
    descripcion: 'Servicio de distribución eficiente para entregas locales y regionales.'
  },
  {
    id: 4,
    imagen: '/src/assets/Servicio_Ima_4.webp',
    titulo: 'Transporte Especializado',
    descripcion: 'Servicios de transporte adaptados a necesidades específicas de cada cliente.'
  },
  {
    id: 5,
    imagen: '/src/assets/Servicio_Ima_5.webp',
    titulo: 'Almacenamiento',
    descripcion: 'Soluciones de almacenamiento seguro y eficiente para sus productos.'
  }
];

const ServiciosDeTransporte = () => {
  return (
    <section className={styles.serviciosContainer}>
      <div className={styles.serviciosGrid}>
        {serviciosData.map((servicio) => (
          <ServiciosTransporteCard
            key={servicio.id}
            imagen={servicio.imagen}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiciosDeTransporte;