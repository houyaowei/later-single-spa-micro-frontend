import { createStore } from "redux";

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log("angularjs -> increment");
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

// export const storeInstance = createStore(reducer);
