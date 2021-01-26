import {ui} from 'kaltura-player-js';

import styles from './WatermarkContainer.css';

const {
  /**
   * @jsx h
   * @ignore
   */
  h,
  preactHooks: {useEffect, useState},
  redux: {connect}
} = ui;

// A component that displays a blinking watermark in the video container in random positions
const WatermarkContainer = props => {
  const {
    // player state
    isPlaying,

    // plugin configs
    duration,
    text,
    showEvery
  } = props;

  // Initially, show the watermark in the top left corner, until user presses play (see useEffect())
  const [position, setPosition] = useState(5);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    // Hide the watermark right after switching isPlaying to true
    setIsVisible(false);

    // Show the watermark each N seconds afterwards
    let timeout;
    const interval = setInterval(() => {
      // Show the watermark in a random position
      setPosition(Math.floor(Math.random() * 6) + 1);
      setIsVisible(true);

      // ... and hide it after a while
      timeout = setTimeout(() => setIsVisible(false), duration * 1000);
    }, showEvery * 1000);

    return () => {
      clearInterval(interval);

      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isPlaying, setPosition, setIsVisible, showEvery, duration]);

  return isVisible && <div className={`${styles.container} ${styles['position' + position]}`}>{text}</div>;
};

// Monitor the player state
const mapStateToProps = state => ({isPlaying: !state.engine.prePlayback});
const WatermarkContainerWithState = connect(mapStateToProps)(WatermarkContainer);

export {WatermarkContainerWithState as WatermarkContainer};
