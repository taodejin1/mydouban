<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "./assets/css/reset.css";
  html {
    font-size: 62.5%;
  }
  #app {
    max-width: 41rem;
    margin: 0 auto;
  }

</style>
