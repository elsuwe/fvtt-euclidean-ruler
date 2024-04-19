/* globals
canvas,
ui
*/
"use strict";

import { getSetting, SETTINGS } from "./settings.js";

 /*
  * Override Ruler.prototype._computeDistance.
  * Function to measure the Manhattan distance between two points on the 2D canvas.
  * @param {boolean} gridSpaces    Base distance on the number of grid spaces moved?
  * @return {Number} The distance of the segment.
  */
export function _computeDistanceRuler(wrapper, gridSpaces) { // eslint-disable-line no-unused-vars
  if ( getSetting(SETTINGS.ADD_CONTROL) ) {
    const token_controls = ui.controls.controls.find(elem => elem.name === "token");
    const euclidean_control = token_controls.tools.find(elem => elem.name === "euclidean-distance");
    if ( !euclidean_control.active ) return wrapper(gridSpaces);
  }

  const { size, distance } = canvas.scene.dimensions;
  const gridConversion = distance / size;
  let totalDistance = 0;
  const ln = this.segments.length;
  for ( let i = 0; i < ln; i += 1 ) {
    const s = this.segments[i];
    const x_distance = Math.abs(s.ray.A.x - s.ray.B.x)
    const y_distance = Math.abs(s.ray.A.y - s.ray.B.y)
    const pixel_distance = Math.sqrt(x_distance ** 2 + y_distance ** 2);
    const d = Math.round(pixel_distance * gridConversion);

    s.last = i === (ln - 1);
    s.distance = d;
    totalDistance += d;
    this.totalDistance = totalDistance;
  }
}
