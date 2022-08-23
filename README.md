# PlayKit JS Blinking Watermark - a plugin for the [PlayKit JS Player]

PlayKit JS Blinking Watermark displays a configurable text string on top of the video layer in a random position from time to time.

The plugin is written in [ECMAScript6] and compiled to ECMAScript5 using [Babel] and [Webpack].
It uses [Preact] to render UI components.

[preact]: https://preactjs.com/
[ecmascript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[babel]: https://babeljs.io
[webpack]: https://webpack.js.org/

## Getting Started

### Prerequisites

The plugin requires [PlayKit JS Player] to be loaded first.

[playkit js player]: https://github.com/kaltura/kaltura-player-js

### Installing

First, clone and run [yarn] to install dependencies:

[yarn]: https://yarnpkg.com/lang/en/

```cmd
git clone https://github.com/kaltura-ps/playkit-js-blinking-watermark.git
cd playkit-js-blinking-watermark
yarn install
```

### Building

Then, build the player

```cmd
yarn build
```

### Embed the library in your test page

Finally, add the bundle as a script tag in your page, and initialize the player

```html
<script type="text/javascript" src="/PATH/TO/FILE/playkit.js"></script>
<!--PlayKit player-->
<script type="text/javascript" src="/PATH/TO/FILE/playkit-blinking-watermark.js"></script>
<!--PlayKit Blinking Watermark plugin-->
<div id="player-placeholder" style="height:640px; width:360px">
  <script type="text/javascript">
    var playerContainer = document.querySelector("#player-placeholder");
    var config = {
      ...
      plugins: {
        blinkingWatermark: {
          ...
        }
      }
      ...
    };
    var player = KalturaPlayer.setup(config);
  </script>
</div>
```

### Run development server

Test page (hosted in [src/index.html](src/index.html)) could be run with following command
to debug the plugin code during the development process:

```cmd
yarn dev
```

## Configuration

The plugin allows to configure the following parameters:

- `text`, string - the text string to display on top of the player as a watermark. Default: `"watermarked"`.
  The common use-case is to display the name of the currently logged-in user.
- `showEvery`, number - the interval of showing the watermark layer, in seconds. Default: `120` (which is 2 minutes).
- `duration`, number - the watermark will be visible for this amount of seconds. Default: `2`.

## License

This project is licensed under the AGPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details
