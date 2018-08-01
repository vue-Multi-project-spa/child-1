<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="r('/test/ccc')">路由 /test/ccc</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is child ---bbb component'
    }
  },
  methods:{
    r(path){
      this.$router.push({path:path})
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
