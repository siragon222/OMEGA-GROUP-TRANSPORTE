import ServiciosTransporteCard from './ServiciosTransporteCard';
import styles from './ServiciosDeTransporte.module.css';
import ServicioIma1 from '../../assets/Servicio_Ima_1.webp';
import ServicioIma2 from '../../assets/Servicio_Ima_2.webp';
import ServicioIma3 from '../../assets/Servicio_Ima_3.webp';
import ServicioIma4 from '../../assets/Servicio_Ima_4.webp';
import ServicioIma5 from '../../assets/Servicio_Ima_5.webp';
const serviciosData = [
  {
    id: 1,
    imagen: ServicioIma1,
    titulo: 'Duster ( hasta 4 pasajeros)',
    descripcion: 'Perfecta para transporte ejecutivo y corporativo: comodidad, discreción y puntualidad.'
  },
  {
    id: 2,
    imagen: ServicioIma2,
    titulo: 'Camionetas Wagon y Doble Cabina 4x4',
    descripcion: 'Perfectas para traslados ejecutivos o rutas rurales. Potencia, versatilidad y comodidad en trayectos exigentes.'
  },
  {
    id: 3,
    imagen: ServicioIma3,
    titulo: 'Microbuses (8 a 19 pasajeros)',
    descripcion: 'La opción ideal para grupos pequeños. Comodidad y eficiencia para cada traslado, sin perder cercanía ni control.'
  },
  {
    id: 4,
    imagen: ServicioIma4,
    titulo: 'Buses (20 a 30 pasajeros)',
    descripcion: 'Pensadas para equipos medianos que valoran el espacio, el confort y la puntualidad en cada recorrido.'
  },
  {
    id: 5,
    imagen: ServicioIma5,
    titulo: 'Buses (30 a 40 pasajeros)',
    descripcion: 'Máxima capacidad, sin renunciar a la calidad. Perfectos para turismo, eventos o transporte masivo empresarial.'
  }
];

const ServiciosDeTransporte = () => {
  return (
    <section className={styles.serviciosContainer}>
      <h2 className={styles.sectionTitle}>Nuestra Flota</h2>
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
      <div className={styles.ctaWrapper}>
        <a
          href="https://wa.me/573144686437?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20el%20alquiler%20de%20transporte."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          aria-label="Abrir WhatsApp para solicitar una cotización"
        >
          Solicita tu cotización ¡ahora!
        </a>
      </div>
    </section>
  );
};

export default ServiciosDeTransporte;