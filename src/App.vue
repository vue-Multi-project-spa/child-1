<template>
  <div id="test" >
    this is test-app component
    <button @click="r('/test/aaa')">路由 /test/aaa</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {}
  },
  methods:{
    r(path){
      this.$router.push({path:path})
    }
  }
}
</script>

<style>
</style>
