<template>
  <div class="hello">
    <p @click="getCarousels">get Carousels </p>
    <img v-lazy="item.url" v-for="(item,index) in list" :key="index">
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  methods:{
    getCarousels(){
      $.ajax({
        type:'post',
        url:'http://118.24.4.133:2255/admin/carousels',
        success:(data)=>{
          this.list = this.list.concat(data.data)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
img{
  width: 200px;
  height: 200px;
}
</style>
