[![Version (latest)](https://img.shields.io/github/v/release/elsuwe/fvtt-euclidean-ruler)](https://github.com/elsuwe/fvtt-euclidean-ruler/releases/latest)
[![Foundry Version](https://img.shields.io/badge/dynamic/json.svg?url=https://github.com/elsuwe/fvtt-euclidean-ruler/releases/latest/download/module.json&label=Foundry%20Version&query=$.minimumCoreVersion&colorB=blueviolet)](https://github.com/elsuwe/fvtt-euclidean-ruler/releases/latest)
[![License](https://img.shields.io/github/license/elsuwe/fvtt-euclidean-ruler)](LICENSE)

![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https://forge-vtt.com/api/bazaar/package/euclideanruler&colorB=4aa94a)
![Latest Release Download Count](https://img.shields.io/github/downloads/elsuwe/fvtt-euclidean-ruler/latest/module.zip)
![All Downloads](https://img.shields.io/github/downloads/elsuwe/fvtt-euclidean-ruler/total)

# Euclidean Ruler

This module modifies the Foundry ruler to use [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) measurement.
It was developed to support gameplay on gridded maps for the [Savage Worlds Adventure Edition System](https://gitlab.com/peginc/swade/), but is not limited to that.

This was original forked from [manhattan ruler](https://github.com/caewok/fvtt-manhattan-ruler) by [caewok](https://github.com/caewok), thank you for the great work.

# Installation
Add this [Manifest URL](https://github.com/elsuwe/fvtt-euclidean-ruler/releases/latest/download/module.json) in Foundry to install.

## Dependencies
- [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper)

## Known conflicts

None at the moment...

# Setting and control toggle
A setting is provided that allows the user to display or not display a control toggle, under the ruler control button.
If the setting is not enabled, Euclidean distance will always be used as the ruler measurement.
If it is enabled, then the control toggle determines whether or not Euclidean distance is used.
