<template>
  <div id="test" >
    this is test component
    <button @click="to('aaa')">按钮1</button>
    <button @click="to('bbb')">按钮2</button>
    <button @click="to('ccc')">按钮3</button>
    <component :is="current"></component>
  </div>
</template>

<script>
import aaa from './components/aaa'
import bbb from './components/bbb'
import ccc from './components/ccc'
export default {
  name: 'App',
  data(){
    return {
      current: 'aaa'
    }
  },
  components: {aaa,bbb,ccc},
  methods:{
    to(com){
      this.current = com
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
