<template>
  <div id="app">
    <toast ref="toast"></toast>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  mounted(){
    this.$refs.toast.show("Hello Toast");
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
