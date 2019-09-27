import angular from "angular";
import "./root.component.js";
import "./subroute1.component.js";
import "./subroute2.component.js";

angular.module("app").config(($stateProvider, $locationProvider) => {
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state("root", {
      url: "/a1App",
      template: "<root />"
    })

    .state("root.subroute1", {
      url: "/subroute1",
      template: "<subroute1 />"
    })

    .state("root.subroute2", {
      url: "/subroute2",
      template: "<subroute2 />"
    });
});
