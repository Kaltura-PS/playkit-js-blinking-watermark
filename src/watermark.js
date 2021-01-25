import {BasePlugin} from 'kaltura-player-js';
import {WatermarkContainer} from './components/WatermarkContainer/WatermarkContainer';

export class Watermark extends BasePlugin {
    static isValid() {
        return true;
    }

    getUIComponents() {
        return [
            {
                label: 'blinkingWatermarkContainerComponent',
                presets: ['Playback', 'Live', 'Error', 'Ads', 'Idle'],
                container: 'InteractiveArea',
                get: WatermarkContainer
            }
        ];
    }
}
