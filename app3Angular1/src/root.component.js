import angular from "angular";

angular.module("app").component("root", {
  template: `
            <div style="margin-top: 100px;">
              Angular 1.6 project
            </div>

            <div>
              <cus-counter></cus-counter>
            </div>

            <div>
              <div>二级路由</div>
              <a href="/a1App/subroute1">subroute1</a>
              <a href="/a1App/subroute2">subroute2</a>
            </div>
            <ui-view />
        `
});
