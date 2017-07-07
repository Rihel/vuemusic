<template>
  <div id="app">

  <router-view></router-view>
  <myfooter></myfooter>

 

  </div>
</template>

<script>
import navTop from './components/J_navTop/navTop'
import footer from './components/J_footer/footer'
export default {
  name: 'app',

  components: {
    navTop: navTop,
    myfooter: footer,
  }
}
</script>

<style>

</style>
