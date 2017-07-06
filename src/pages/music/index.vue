<template>
  <div>
    <img class="main-bg" src="../../assets/img/bg.png" alt="">
    <tou></tou>
    <div>
      <sub-nav :navs="subNavs"></sub-nav>
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
      data() {
      return {
        subNavs: [{
            text: '热门推荐',
            path: './recommendation'
          },
          {
            text: '榜单',
            path: './lists'
          },
          {
            text: '歌单',
            path: './songSheet'
          },
          {
            text: '电台',
            path: './radioStation'
          }
        ]
      }
    }
  
}
</script>

<style lang="scss">
 
</style>
