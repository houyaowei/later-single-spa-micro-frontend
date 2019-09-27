/**
 * application  entry
 * 1、sub app registration
 * 2、global event distributor registration
 */
window.SystemJS = window.System;

import * as singleSpa from "single-spa";
import * as isActive from "./activityFns"

// import {GlobalEventdistributor} from "./globalEventdistributor"; import
// {loadApp} from "./loader"; import "./style.css"; async function init() { let
// globalEventdistributor = new GlobalEventdistributor();   let applications =
// [];   applications.push(loadApp("reactApp", "/reactApp",
// "/reactApp/entry.js", "/reactApp/store.js", globalEventdistributor));
// applications.push(loadApp("vueApp", "/vueApp", "/vueApp/entry.js",
// "/vueApp/store.js", globalEventdistributor));
// applications.push(loadApp("a1App", "/a1App", "/a1App/entry.js",
// "/a1App/store.js", globalEventdistributor));
// applications.push(loadApp("a7App", "/a7App", "/a7App/entry.js",
// "/a7App/store.js", globalEventdistributor));   await
// Promise.all(applications);   singleSpa.start(); } init();

singleSpa.registerApplication("reactApp", () => SystemJS.import ("@sub/reactApp"), isActive.app1React);
singleSpa.registerApplication("vueApp", () => SystemJS.import ("@sub/vueApp"), isActive.app2Vue);

singleSpa.start();
