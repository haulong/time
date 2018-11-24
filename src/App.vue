<template>
  <div id="app">
    <mynav></mynav>
    <router-view></router-view>
  </div>
</template>

<script>
import mynav from './components/mynav'
export default {
  name: 'App',
  components: {
    mynav
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html{
    font-size: 26.66666667vw;
  }
  body{
    font-size:0.16rem;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  html,body{
  height:100%;
}
</style>
