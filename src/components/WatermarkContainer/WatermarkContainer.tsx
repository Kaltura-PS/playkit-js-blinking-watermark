import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { PluginConfig } from '../../blinking-watermark';

import * as styles from './WatermarkContainer.scss';

interface Props {
  isPlaying: boolean;
}

// A component that displays a blinking watermark in the video container in random positions
const WatermarkContainer = (props: PluginConfig & Props): h.JSX.Element | null => {
  const {
    // player state
    isPlaying,

    // plugin configs
    duration,
    text,
    showEvery
  } = props;

  // Initially, show the watermark in the top left corner, until user presses play (see useEffect())
  const [position, setPosition] = useState<number>(5);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    // Hide the watermark right after switching isPlaying to true
    setIsVisible(false);

    // Show the watermark each N seconds afterwards
    let timeout: number;
    const interval = setInterval(() => {
      // Show the watermark in a random position
      setPosition(Math.floor(Math.random() * 6) + 1);
      setIsVisible(true);

      // ... and hide it after a while
      timeout = window.setTimeout(() => setIsVisible(false), duration * 1000);
    }, showEvery * 1000);

    return (): void => {
      clearInterval(interval);

      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isPlaying, setPosition, setIsVisible, showEvery, duration]);

  if (!isVisible) {
    return null;
  }

  return <div className={`${styles.container} ${styles[`position${position}`]}`}>{text}</div>;
};

// Monitor the player state
const mapStateToProps = (state: any): { isPlaying: boolean } => {
  return { isPlaying: !state.engine.prePlayback };
};
const WatermarkContainerWithState = (KalturaPlayer.ui as any).redux.connect(mapStateToProps)(WatermarkContainer);

export { WatermarkContainerWithState as WatermarkContainer };
