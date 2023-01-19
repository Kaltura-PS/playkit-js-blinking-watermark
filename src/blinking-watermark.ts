import { BasePlugin, KalturaPlayer, ui } from 'kaltura-player-js';
import { WatermarkContainer } from './components/WatermarkContainer/WatermarkContainer';

export const pluginName = 'blinkingWatermark';

export interface PluginConfig {
  duration: number;
  text: string;
  showEvery: number;
}

export class BlinkingWatermark extends BasePlugin<PluginConfig> {
  protected static defaultConfig = {
    duration: 3,
    text: 'watermarked',
    showEvery: 3
  };

  constructor(name: string, player: KalturaPlayer, config: PluginConfig = BlinkingWatermark.defaultConfig) {
    super(name, player, config);
    player.ui.addComponent({
      label: 'blinkingWatermarkContainerComponent',
      presets: [
        ui.ReservedPresetNames.Playback,
        ui.ReservedPresetNames.Live,
        ui.ReservedPresetNames.Error,
        ui.ReservedPresetNames.Ads,
        ui.ReservedPresetNames.Idle
      ],
      container: ui.ReservedPresetAreas.InteractiveArea,
      get: WatermarkContainer,
      props: this.config
    });
  }

  public static isValid(): boolean {
    return true;
  }
}
