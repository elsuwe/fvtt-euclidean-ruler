import { MODULE_ID } from "./module.js";
import { distanceFunctionManhattan } from "./segment.js";

export function registerManhattanRuler() {
  libWrapper.register(MODULE_ID, 'window.libRuler.RulerSegment.prototype.distanceFunction', distanceFunctionManhattan, 'OVERRIDE');
}