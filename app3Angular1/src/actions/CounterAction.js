export function increment() {
  return {
    type: "INCREMENT"
  };
}

export function decrement() {
  return {
    type: "DECREMENT"
  };
}

/**
 * 高侵入性
 */
export function globalIncrement() {
  window.globalEventDistributor.dispatch({ type: "INCREMENT" });
}
export function globalDecrement() {
  window.globalEventDistributor.dispatch({ type: "DECREMENT" });
}
