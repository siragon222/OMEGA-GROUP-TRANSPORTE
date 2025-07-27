import React from 'react';
import Beneficios from './Beneficios/Beneficios';
import './Landin_Page.css';
import PortadaSlider from './PortadaSlider/PortadaSlider';
import TestimonialsSection from './Empresas_Comentario/TestimonialsSection';
import ServiciosDeTransporte from './Servicio_de_Transporte/ServiciosDeTransporte';
import VideoPlayer from './Video/VideoPlayer';
import FormularioSection from './Formulario/FormularioSection';

function Landin_Page() {
  return (
    <div className="landing-page-container">
      {/* You can add other components here later */}
      <PortadaSlider />
      <Beneficios />
      <TestimonialsSection />
      <ServiciosDeTransporte />
      <VideoPlayer src="/src/assets/video_GPS.mp4" type="video/mp4" />
      <FormularioSection />
    </div>
  );
}

export default Landin_Page;
