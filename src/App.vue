<template>
  <div id="app">
  <navTop></navTop>
    <router-view></router-view>
  </div>
</template>

<script>
import navTop from './components/navTop/navTop'
export default {
  name: 'app',
  components:{
    navTop:navTop,

  }
}
</script>

<style>

</style>
