<template>
  <div>
    <navTop></navTop>
    <musicnav></musicnav>
    <router-view></router-view>
  </div>
</template>

<script>
import navTop from '../../components/J_navTop/navTop'
import musicnav from '../../components/music/musicNav/musicNav'
export default {
  components: {
    navTop, musicnav,
  }
}
</script>

<style lang="scss">

</style>
