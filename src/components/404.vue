<template>
  <div id="test" >
    this is 404 component
    
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
