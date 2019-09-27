<template>
  <div id="app4">
    <img src="./assets/logo.png" />
    <Provider :mapStateToProps="mapStateToProps" :store="localStore">
      <template #default="{count}">
        <Counter :count="count" :store="localStore" />
      </template>
    </Provider>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Provider from "vuejs-redux";
import { mapStateToProps } from "redux";
import * as Store from "./store.js";

// console.log("storeInstance:", Store.storeInstance);
export default {
  name: "app4",
  components: {
    Counter,
    Store,
    Provider
  },
  methods: {
    mapStateToProps(state) {
      return { count: state };
    }
  },
  data: () => ({
    count: 0,
    localStore: Store.storeInstance
  })
};
</script>

<style>
#app4 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
