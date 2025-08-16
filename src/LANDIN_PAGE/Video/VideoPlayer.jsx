import React, { useRef, useEffect, useState } from 'react';
import styles from './VideoPlayer.module.css';
import videoGPS from '../../assets/video_omega.mp4';

const VideoPlayer = ({ src = videoGPS, type = 'video/mp4' }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the video is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (isPlaying) {
            video.play();
          }
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
  }, [src, isPlaying]);

  const handlePlayToggle = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
      setShowOverlay(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowOverlay(true);
  };

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.videoPlayer}
        src={src}
        type={type}
        loop
        playsInline
        muted={!isPlaying} // Mute video if not playing
        onClick={handlePlayToggle} // Toggle play/pause on video click
        onEnded={handleVideoEnd}
      />
      {showOverlay && (
        <div className={styles.videoOverlay} onClick={handlePlayToggle}>
          <button className={styles.unmuteButton}>
            <svg className={styles.playIcon} viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Reproducir Video
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;