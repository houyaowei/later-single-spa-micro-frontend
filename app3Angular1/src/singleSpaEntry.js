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

export function bootstrap(props) {
  return angularLifecycles.bootstrap(props);
}

export function mount(props) {
  window.globalEventDistributor = props.globalEventDistributor;
  return angularLifecycles.mount(props);
}

export function unmount(props) {
  return angularLifecycles.unmount(props);
}

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
