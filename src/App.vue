<template>
  <div id="test" >
    this is test component
    <button @click="to('bbb')">按钮2</button>
    <button @click="to('ccc')">按钮3</button>
    <button @click="r('/test/aaa')">路由 /test/aaa</button>
    <component :is="current"></component>
  </div>
</template>

<script>
import bbb from './components/bbb'
import ccc from './components/ccc'
export default {
  name: 'App',
  data(){
    return {
      current: 'bbb'
    }
  },
  components: {bbb,ccc},
  methods:{
    to(com){
      this.current = com
    },
    r(path){
      this.$router.push({path:path})
    }
  }
}
</script>

<style>
</style>
