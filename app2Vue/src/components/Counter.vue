<template>
  <!-- we can use functional component -->
  <div>
    <h1>counter using vuejs-redux</h1>
    <div class="counter">{{ count.count }}</div>

    <el-col :span="11">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>本地计数</span>
        </div>
        <el-button type="primary" @click="increment()">增加</el-button>
        <el-button @click="decrement()">减小</el-button>
      </el-card>
    </el-col>
    <el-col :span="11">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>全局计数</span>
        </div>
        <el-button type="primary" @click="globalIncrement()">增加</el-button>
        <el-button @click="globalDecrement()">减小</el-button>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

export default {
  props: ["actions", "count", "store"],
  methods: {
    increment: function() {
      this.store.dispatch({ type: "INCREMENT" });
    },
    decrement() {
      this.store.dispatch({ type: "DECREMENT" });
    },
    globalIncrement() {
      window.globalEventDistributor.dispatch({ type: "INCREMENT" });
    },
    globalDecrement() {
      window.globalEventDistributor.dispatch({ type: "DECREMENT" });
    }
  }
};
</script>
<style scoped>
.counter {
  color: red;
  font-size: 30px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
