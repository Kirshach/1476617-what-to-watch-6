import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({isPlaying, ...props}) => {
  const {src} = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(null);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => {
      setIsLoaded(true);
    };

    return () => {
      videoRef.current.oncanplaythrough = null;
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
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool,
  muted: PropTypes.bool,
  poster: PropTypes.string,
  src: PropTypes.string,
};

export default VideoPlayer;
