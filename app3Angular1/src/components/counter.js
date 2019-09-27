/**
 * counter controller,
 * register the component to redux
 */
import * as CounterActions from "../actions/CounterAction";

export default function counter() {
  return {
    restrict: "E",
    controllerAs: "counter",
    controller: CounterController,
    template: require("./counter.html")
  };
}

class CounterController {
  constructor($ngRedux, $scope) {
    //connect an angular component to redux
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterActions)(this);
  }
  mapStateToThis(state) {
    return {
      value: state
    };
  }
}
