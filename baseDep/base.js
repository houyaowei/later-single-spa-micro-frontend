window.SystemJS = window.System;

function insertNewImportMap(mapJson) {
  const scriptObj = document.createElement("script");
  scriptObj.type = "systemjs-importmap";
  scriptObj.innerHTML = JSON.stringify(mapJson);

  const allImportMaps = document.querySelectorAll('script[type="systemjs-importmap"]');
  allImportMaps[allImportMaps.length - 1].insertAdjacentElement("afterEnd", scriptObj);
}

const devLibs = {
  imports: {
    react: "/libs/frameworks/react/react.development.js",
    // vue: "https://www.unpkg.com/vue@2.6.10/dist/vue.js",
    "react-dom": "/libs/frameworks/react/react-dom.development.js",
    "single-spa": "https://unpkg.com/single-spa@4.3.2/lib/umd/single-spa.min.js"
  }
};
const prodLibs = {
  imports: {
    react: "/dist/libs/framework/react/react.development.js",
    "react-dom": "/dist/libs/framework/react/react-dom.development.js",
    "single-spa": "/dist/libs/single-spa.min.js"
  }
};

const devMode = true;

if (devMode) {
  insertNewImportMap(devLibs);
} else {
  insertNewImportMap(prodLibs);
}
