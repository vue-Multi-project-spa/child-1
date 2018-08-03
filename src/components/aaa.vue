<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="r('/test/aaa/bbb')">路由 /test/aaa/bbb</button>
    <button @click="back">回退</button>
    <button @click="r('/child3/3')">路由 /child3/3</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is child ---aaa component'
    }
  },
  created(){
    console.log('aaa',this.$route.params)
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
  color: red;
}

</style>
