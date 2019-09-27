import { Action, createStore, Store } from "redux";

export interface IAppState {
  count: number;
}
export const INITIAL_STATE: IAppState = {
  count: 0
};

export class CounterActions {
  static INCREMENT = "INCREMENT";
  static DECREMENT = "DECREMENT";

  increment(): Action {
    return {
      type: CounterActions.INCREMENT
    };
  }
  decrement(): Action {
    return {
      type: CounterActions.DECREMENT
    };
  }
}

export function rootReducer(state: IAppState, action: Action): IAppState {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return {
        count: state.count + 1
      };
    case CounterActions.DECREMENT:
      return {
        count: state.count - 1
      };
  }
  return state;
}

export const storeInstance: Store<IAppState> = createStore(
  rootReducer,
  INITIAL_STATE
);
