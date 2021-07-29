[![Version (latest)](https://img.shields.io/github/v/release/caewok/fvtt-manhattan-ruler)](https://github.com/caewok/fvtt-manhattan-ruler/releases/latest)
[![Foundry Version](https://img.shields.io/badge/dynamic/json.svg?url=https://github.com/caewok/fvtt-manhattan-ruler/releases/latest/download/module.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=blueviolet)](https://github.com/caewok/fvtt-manhattan-ruler/releases/latest)
[![License](https://img.shields.io/github/license/caewok/fvtt-manhattan-ruler)](LICENSE)

# Manhattan Ruler

This module modifies the Foundry ruler to use [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) measurement, sometimes known as taxicab geometry. In other words, diagonals are equal to the distance moved horizontally + vertically along the grid.

# Installation
Add this [Manifest URL](https://github.com/caewok/fvtt-manhattan-ruler/releases/latest/download/module.json) in Foundry to install.

## Dependencies
- [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper)
- [libRuler](https://github.com/caewok/fvtt-lib-ruler)

## Known conflicts
- [Terrain Ruler](https://github.com/manuelVo/foundryvtt-terrain-ruler)
- [Drag Ruler](https://github.com/manuelVo/foundryvtt-drag-ruler)

I hope to have a future compatibility fix, based in libRuler, that allows Terrain Ruler and Drag Ruler to play nicely with Manhattan Ruler.

In general, modules that overwrite or extend the Ruler Class without using libRuler may cause the Manhattan Ruler module to fail to display or calculate correctly. 


