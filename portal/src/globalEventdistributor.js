/**
 * 全局事件
 */
export class GlobalEventdistributor {
  constructor() {
    this.stores = [];
  }
  register(store) {
    this
      .stores
      .push(store);
  }
  dispatch(event) {
    this
      .stores
      .forEach(s => {
        // console.log(s);
        s.dispatch(event);
      });
  }
}
