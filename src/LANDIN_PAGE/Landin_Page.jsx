import React from 'react';
import Beneficios from './Beneficios/Beneficios';
import './Landin_Page.css';
import PortadaSlider from './PortadaSlider/PortadaSlider';
import TestimonialsSection from './Empresas_Comentario/TestimonialsSection';
import ServiciosDeTransporte from './Servicio_de_Transporte/ServiciosDeTransporte';
import VideoPlayer from './Video/VideoPlayer';
import FormularioSection from './Formulario/FormularioSection';
import videoGPS from '../assets/video_GPS.mp4';
import Footer from './Footer/Footer';
import RedSeparator from '../components/RedSeparator/RedSeparator';

const Landin_Page = () => {
  return (
    <div className="landing-page-container">
      <PortadaSlider />
      <RedSeparator />
      <Beneficios />
      <TestimonialsSection />
      <ServiciosDeTransporte />
      <RedSeparator />
      <VideoPlayer 
        src={videoGPS} 
        type="video/mp4" 
        autoplay={true}
        muted={true}
      />
      <RedSeparator />
      <FormularioSection />
       <RedSeparator />
      <Footer />
    </div>
  );
}

export default Landin_Page;
