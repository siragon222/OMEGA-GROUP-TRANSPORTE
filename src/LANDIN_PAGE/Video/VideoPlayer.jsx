import React, { useRef, useEffect } from 'react';
import styles from './VideoPlayer.module.css';
import videoGPS from '../../assets/video_GPS.mp4';

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

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, [src]);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.videoPlayer}
        src={src}
        type={type}
        loop
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;