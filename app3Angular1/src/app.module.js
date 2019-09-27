import angular from "angular";
import "@uirouter/angularjs";
import ngRedux from "ng-redux";
// import storeIndex from "./reducers/index";
import * as store from "./reducers/store2";
import counter from "./components/counter";

angular
  .module("app", ["ui.router", ngRedux])
  .config($ngReduxProvider => {
    //如果store使用combineReducers,这里该使用createStoreWith
    // $ngReduxProvider.createStoreWith(storeIndex);
    $ngReduxProvider.provideStore(store.storeInstance);
  })
  .directive("cusCounter", counter);
