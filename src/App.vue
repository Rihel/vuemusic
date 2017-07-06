<template>
  <div id="app">

  <router-view></router-view>
  <!--<myfooter></myfooter>-->
  <hot></hot>
  </div>
</template>

<script>
import navTop from './components/J_navTop/navTop'
import footer from './components/J_footer/footer'
import hot from './pages/music/radio/J_radio'
export default {
  name: 'app',
  components:{
    navTop:navTop,
<<<<<<< HEAD
    myfooter:footer,
=======
    hot:hot,
    // myfooter:footer,

>>>>>>> 91c8edd5d5faf8f3561341003c7f4cae2ec05d07
  }
}
</script>

<style>

</style>
