import {BasePlugin} from 'kaltura-player-js';
import {WatermarkContainer} from './components/WatermarkContainer/WatermarkContainer';

export class Watermark extends BasePlugin {
  static defaultConfig = {
    duration: 2,
    text: 'watermarked',
    showEvery: 120
  };

  static isValid() {
    return true;
  }

  getUIComponents() {
    return [
      {
        label: 'blinkingWatermarkContainerComponent',
        presets: ['Playback', 'Live', 'Error', 'Ads'],
        container: 'InteractiveArea',
        get: WatermarkContainer,
        props: this.config
      }
    ];
  }
}
