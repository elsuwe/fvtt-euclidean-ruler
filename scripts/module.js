/* globals
game,
Hooks
*/
"use strict";

import { registerManhattanRuler } from "./patching.js";

export const MODULE_ID = "manhattanruler";

export function log(...args) {
  try {
    const isDebugging = game.modules.get("_dev-mode")?.api?.getPackageDebugValue(MODULE_ID);
    if (isDebugging) {
      console.log(MODULE_ID, "|", ...args);
    }
  } catch (e) {
    // empty
  }
}

// https://github.com/League-of-Foundry-Developers/foundryvtt-devMode
Hooks.once("devModeReady", ({ registerPackageDebugFlag }) => {
  registerPackageDebugFlag(MODULE_ID);
});

Hooks.once("libRulerReady", async function() {
  registerManhattanRuler();
});
