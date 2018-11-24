<template>
  <div id="app">
    <mynav v-if="$store.state.isshow"></mynav>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>
import mynav from './components/mynav'
import myfooter from './components/myfooter'
export default {
  name: 'App',
  components: {
    mynav,
    myfooter
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
}img{
    display: block;
  }</style>
