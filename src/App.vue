<template>
  <div id="app">


  <router-view></router-view>
  <myfooter></myfooter>
  <hot></hot>

 

  </div>
</template>

<script>
import navTop from './components/J_navTop/navTop'
import footer from './components/J_footer/footer'
import hot from './pages/music/hot/H_hot'
export default {
  name: 'app',
  components: {
    navTop: navTop,
    myfooter: footer,
    hot: hot,
  }
}
</script>

<style>

</style>
