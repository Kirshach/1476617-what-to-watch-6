import React, {forwardRef, useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = forwardRef(({isPlaying, ...props}, externalVideoRef) => {
  const internalVideoRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(null);

  const {src} = props;
  const videoRef = externalVideoRef || internalVideoRef;

  useEffect(() => {
    videoRef.current.oncanplay = () => {
      setIsLoaded(true);
    };

    return () => {
      videoRef.current.oncanplay = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (isLoaded && isPlaying) {
      if (currentTime) {
        videoRef.current.currentTime = currentTime;
      }
      videoRef.current.play();
    } else if (isLoaded) {
      setCurrentTime(videoRef.current.currentTime);
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [isPlaying]);

  return <video ref={videoRef} {...props} muted />;
});

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool,
  muted: PropTypes.bool,
  poster: PropTypes.string,
  src: PropTypes.string,
};

VideoPlayer.displayName = `VideoPlayer`;

export default VideoPlayer;
