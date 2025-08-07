import React, { useEffect, useRef, useState } from 'react';
import formularioIma from '../../assets/formulario_ima.png';
import './FormularioSection.css';

const FormularioSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, to_email: 'siragon222@gmail.com' }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('¡Formulario enviado con éxito!');
        setName('');
        setEmail('');
        setAcceptTerms(false);
      } else {
        setSubmitMessage('Error al enviar el formulario. Por favor, inténtelo de nuevo.');
      }
    } catch (error) {
      setSubmitMessage('Error al enviar el formulario. Por favor, inténtelo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="formulario-section" ref={sectionRef}>
      <div className={`formulario-container ${isVisible ? 'visible' : ''}`}>
        <div className="image-container">
          <img src={formularioIma} alt="Formulario imagen" />
        </div>
        <div className="form-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                required
              />
              <label htmlFor="acceptTerms">Acepto los términos y condiciones</label>
            </div>
            <button type="submit" className="formulario-button" disabled={!acceptTerms || isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormularioSection;
