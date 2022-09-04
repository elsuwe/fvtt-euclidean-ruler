/* globals
game,
*/
"use strict";

import { MODULE_ID } from "./module.js";

export const SETTINGS = {
  ADD_CONTROL: "add-control-toggle"
};

export function getSetting(settingName) {
  return game.settings.get(MODULE_ID, settingName);
}

export async function toggleSetting(settingName) {
  const curr = getSetting(settingName);
  return await game.settings.set(MODULE_ID, settingName, !curr);
}

export async function setSetting(settingName, value) {
  return await game.settings.set(MODULE_ID, settingName, value);
}

export function registerSettings() {
  game.settings.register(MODULE_ID, SETTINGS.ADD_CONTROL, {
    name: game.i18n.localize(`${MODULE_ID}.settings.${SETTINGS.ADD_CONTROL}.name`),
    hint: game.i18n.localize(`${MODULE_ID}.settings.${SETTINGS.ADD_CONTROL}.hint`),
    scope: "user",
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true
  });
}