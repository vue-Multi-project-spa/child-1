<template>
  <div id="test" >
    this is test component
    <button @click="to('bbb')">按钮2</button>
    <button @click="to('ccc')">按钮3</button>
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
    }
  }
}
</script>

<style>
</style>
