<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="r('/')">路由 /</button>
    <button @click="r('/test')">路由 /test</button>
    <button @click="back">回退</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is child ---ccc component'
    }
  },
  methods:{
    r(path){
      this.$router.push({path:path})
    },
    back(){
      VK.back()
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
a {
  color: #42b983;
}
</style>
