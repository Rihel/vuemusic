<template>
  <div>
    <img class="main-bg" src="../../assets/img/bg.png" alt="">
    <tou></tou>
    <div>
      <sub-nav></sub-nav>
      <router-view></router-view>
    </div>
    <jiao></jiao>
  </div>
</template>

<script>
import tou from '../../components/Header/Header'
import jiao from '../../components/Footer/Footer'
import subNav from '../../components/subNav'

export default {
  
  components: {
    tou,
    jiao,
    'sub-nav': subNav
  },
}
</script>

<style lang="">

</style>
