import singleSpaAngular1 from "single-spa-angular1";
import angular from "angular";

import "./app.module.js";
import "./routes.js";

const angularLifecycles = singleSpaAngular1({
  angular,
  domElementGetter,
  mainAngularModule: "app",
  uiRouter: true,
  preserveGlobal: false
  // template: "angular-js"
});

export const bootstrap = [angularLifecycles.bootstrap];
export const mount = [angularLifecycles.mount];

export const unmount = [angularLifecycles.unmount];

function domElementGetter() {
  let el = document.getElementById("app3");
  if (!el) {
    el = document.createElement("div");
    el.id = "app3";
    el.style = "margin-top:100px";
    document.body.appendChild(el);
  }

  return el;
}
