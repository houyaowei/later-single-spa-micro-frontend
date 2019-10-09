/**
 * application  entry
 * 1、sub app registration
 * 2、global event distributor registration
 */
window.SystemJS = window.System;

import * as singleSpa from "single-spa";
import * as isActive from "./activityFns";

singleSpa.registerApplication("reactApp", () => SystemJS.import ("@portal/reactApp"), isActive.app1React);
singleSpa.registerApplication("vueApp", () => SystemJS.import ("@portal/vueApp"), isActive.app2Vue);
singleSpa.registerApplication("a1App", () => SystemJS.import ("@portal/a1App"), isActive.n1App);
singleSpa.start();
