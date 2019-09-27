/**
 * Note: I'm refactoring the app, this file is temporary unused;
 *
 * sub app registration
 */
import * as singleSpa from "single-spa";

var SystemJS = require("systemjs");
if (SystemJS._nodeRequire) {
  SystemJS._nodeRequire = undefined;
}

function genActiveRule(routerPrefix) {
  console.log("getActiveRule");
  return location => location
    .pathname
    .startsWith(routerPrefix);
}

/**
 *  return a Promise or a async
 **/
export async function loadApp(appName, pathName, appURL, storeURL, globalEventDistributor) {
  let storeModule = {},
    customerProp = {
      globalEventDistributor
    };
  try {
    if (storeURL) {
      storeModule = storeURL
        ? await SystemJS.import (storeURL)
        : {
          storeInstance: null
        };
    }
  } catch (e) {
    console.log("cann't load the store, the reason is:" + e);
  }
  if (storeModule && storeModule.storeInstance && globalEventDistributor) {
    let store = storeModule.storeInstance
      ? storeModule.storeInstance
      : storeModule.default.storeInstance;
    customerProp.store = store;
    globalEventDistributor.register(store);
  }
  // console.log(SystemJS.import(appURL));

  singleSpa.registerApplication(appName, () => SystemJS.import (appURL), genActiveRule(pathName), customerProp);
}
