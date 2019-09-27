import angular from "angular";

angular.module("app").component("root", {
  template: `
            <div style="margin-top: 100px;">
              Angular 1.6 project
            </div>

            <div>
              <cus-counter></cus-counter>
            </div>
        `
});
