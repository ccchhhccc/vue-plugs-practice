<template>
  <div class="hello">
    <p @click="getCarousels">test nprogress</p>
    <li v-for="(item,index) in list" :key="index">{{item}}</li>
  </div>
</template>

<script>
import NProgress from "nprogress";
import $ from "jquery";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: []
    };
  },
  methods: {
    //获取轮播图列表
    getCarousels() {
      console.log(233)
      let that = this;
      NProgress.start();
      console.log('???')
      $.ajax({
        type: "post",
        url: "http://118.24.4.133:2255/admin/carousels",
        success: function(data) {
          console.log(data)
          NProgress.done();
          that.list = data.data;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  color: #42b983;
}
</style>
