/* globals
canvas
*/
"use strict";

 /*
  * Override Ruler.prototype._computeDistance.
  * Function to measure the Manhattan distance between two points on the 2D canvas.
  * @param {boolean} gridSpaces    Base distance on the number of grid spaces moved?
  * @return {Number} The distance of the segment.
  */
export function _computeDistanceRuler(gridSpaces) { // eslint-disable-line no-unused-vars
  const { grid, gridDistance } = canvas.scene.data;
  const gridUnits = grid * gridDistance;
  let totalDistance = 0;
  const ln = this.segments.length;
  for ( let i = 0; i < ln; i += 1 ) {
    const s = this.segments[i];
    const pixel_distance = Math.abs(s.ray.A.x - s.ray.B.x) + Math.abs(s.ray.A.y - s.ray.B.y);
    const d = pixel_distance / gridUnits;

    s.last = i === (ln - 1);
    s.distance = d;
    totalDistance += d;
    s.text = this._getSegmentLabel(s, totalDistance);
  }
}
