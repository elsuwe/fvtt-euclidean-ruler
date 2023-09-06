[![Version (latest)](https://img.shields.io/github/v/release/caewok/fvtt-manhattan-ruler)](https://github.com/caewok/fvtt-manhattan-ruler/releases/latest)
[![Foundry Version](https://img.shields.io/badge/dynamic/json.svg?url=https://github.com/caewok/fvtt-manhattan-ruler/releases/latest/download/module.json&label=Foundry%20Version&query=$.minimumCoreVersion&colorB=blueviolet)](https://github.com/caewok/fvtt-manhattan-ruler/releases/latest)
[![License](https://img.shields.io/github/license/caewok/fvtt-manhattan-ruler)](LICENSE)

![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https://forge-vtt.com/api/bazaar/package/manhattanruler&colorB=4aa94a)
![Latest Release Download Count](https://img.shields.io/github/downloads/caewok/fvtt-manhattan-ruler/latest/module.zip)
![All Downloads](https://img.shields.io/github/downloads/caewok/fvtt-manhattan-ruler/total)

# Manhattan Ruler

This module modifies the Foundry ruler to use [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) measurement, sometimes known as taxicab geometry. In other words, diagonals are equal to the distance moved horizontally + vertically along the grid.

0.1.0 onwards requires Foundry v10.

# Installation
Add this [Manifest URL](https://github.com/caewok/fvtt-manhattan-ruler/releases/latest/download/module.json) in Foundry to install.

## Dependencies
- [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper)

## Known conflicts

None at the moment...

# Setting and control toggle (from v0.1)
A setting is provided that allows the user to display or not display a control toggle, under the ruler control button. If the setting is not enabled, Manhattan distance will always be used as the ruler measurement. If it is enabled, then the control toggle determines whether or not Manhattan distance is used.
