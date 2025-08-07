import ServiciosTransporteCard from './ServiciosTransporteCard';
import styles from './ServiciosDeTransporte.module.css';
import ServicioIma1 from '../../assets/Servicio_Ima_1.webp';
import ServicioIma2 from '../../assets/Servicio_Ima_2.webp';
import ServicioIma3 from '../../assets/Servicio_Ima_3.webp';
import ServicioIma4 from '../../assets/Servicio_Ima_4.webp';

const serviciosData = [
  {
    id: 1,
    imagen: ServicioIma1,
    titulo: 'Camionetas Wagon y Doble Cabina 4x4',
    descripcion: 'Perfectas para traslados ejecutivos o rutas rurales. Potencia, versatilidad y comodidad en trayectos exigentes.'
  },
  {
    id: 2,
    imagen: ServicioIma2,
    titulo: 'Buses (30 a 40 pasajeros)',
    descripcion: 'Máxima capacidad, sin renunciar a la calidad. Perfectos para turismo, eventos o transporte masivo empresarial.'
  },
  {
    id: 3,
    imagen: ServicioIma3,
    titulo: 'Buses (20 a 30 pasajeros)',
    descripcion: 'Pensadas para equipos medianos que valoran el espacio, el confort y la puntualidad en cada recorrido.'
  },
  {
    id: 4,
    imagen: ServicioIma4,
    titulo: 'Microbuses (8 a 19 pasajeros)',
    descripcion: 'La opción ideal para grupos pequeños. Comodidad y eficiencia para cada traslado, sin perder cercanía ni control.'
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