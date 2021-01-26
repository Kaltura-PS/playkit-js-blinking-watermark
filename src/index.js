import {registerPlugin} from 'kaltura-player-js';
import {Watermark} from './watermark';

var __VERSION__;
var __NAME__;

const VERSION = __VERSION__;
const NAME = __NAME__;

export {Watermark as Plugin};
export {VERSION, NAME};

const pluginName = 'blinkingWatermark';
registerPlugin(pluginName, Watermark);
