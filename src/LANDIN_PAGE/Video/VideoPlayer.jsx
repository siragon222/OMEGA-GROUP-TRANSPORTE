import React, { useRef, useEffect } from 'react';
import styles from './VideoPlayer.module.css';
import videoGPS from '../../assets/video_omega.mp4';

const VideoPlayer = ({ src = videoGPS, type = 'video/mp4' }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the video is visible
    };

    // Intenta reproducir con sonido; si es bloqueado, hace fallback a muted autoplay
    const handlePlayAttempt = async () => {
      try {
        // intenta reproducir tal cual (con sonido)
        await video.play();
      } catch (err) {
        // si autoplay con sonido es bloqueado por el navegador, reproducir silenciado
        try {
          video.muted = true;
          await video.play();
        } catch (err2) {
          // si también falla, no hacemos nada (evitar errores en consola)
        }
      }
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handlePlayAttempt();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(video);

    return () => {
      // limpiar observer de forma segura
      observer.disconnect();
    };
  }, [src]);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.videoPlayer}
        loop
        playsInline
        preload="metadata"
      >
        <source src={src} type={type} />
        Tu navegador no soporta video HTML5.
      </video>
    </div>
  );
};

export default VideoPlayer;