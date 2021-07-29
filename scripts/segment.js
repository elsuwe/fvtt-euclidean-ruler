 /*
  * Function to measure the Manhattan distance between two points on the 2D canvas.
  * Measures absolute distance between the points on each axis
  * @param {[{ray: Ray}]} segments     An Array of measured movement segments. (1 in default implementation)   
  *                                    Each should be an object with the property "ray" containing a Ray. 
  * @return {Number} The distance of the segment.
  */
export distanceFunctionManhattan(distance_segments) {
  return distances.reduce((acc, ray) {
    return acc + Math.abs(ray.A.x - ray.B.x) + Math.abs(ray.A.y - ray.B.y);
  }, 0);
}   