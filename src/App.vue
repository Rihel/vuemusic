<template>
  <div id="app">
<!--<<<<<<< HEAD
  <navTop></navTop>
=======
  
>>>>>>> 86dcac3250bd2cde041b1a1d83b1e395a644f07a-->
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
