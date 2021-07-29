import { log } from "./module.js";

 /*
  * Function to measure the Manhattan distance between two points on the 2D canvas.
  * Measures absolute distance between the points on each axis
  * @param {[{ray: Ray}]} segments     An Array of measured movement segments. (1 in default implementation)   
  *                                    Each should be an object with the property "ray" containing a Ray. 
  * @return {Number} The distance of the segment.
  */
export function distanceFunctionManhattan(distance_segments) {
  log(`distance segments`, distance_segments);

  return distance_segments.reduce((acc, segment) => {
    const pixel_distance = Math.abs(segment.ray.A.x - segment.ray.B.x) + Math.abs(segment.ray.A.y - segment.ray.B.y);
    const grid_distance = pixel_distance / canvas.scene.data.grid * canvas.scene.data.gridDistance;
    return acc + grid_distance;
  }, 0);
}
