<template>
  <div>
    <img class="main-bg" src="../../assets/img/bg.png" alt="">
    <tou></tou>
    <div>
      <ul class="zql-hot">
        <li>
          <router-link to="/music/recommendation">热门推荐</router-link>
        </li>
        <li>
          <router-link to="/music/lists">榜单</router-link>
        </li>
        <li>
          <router-link to="/music/songSheet">歌单</router-link>
        </li>
        <li>
          <router-link to="/music/radioStation">电台</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
    <jiao></jiao>
  </div>
</template>

<script>
import tou from '../../components/Header/Header'
import jiao from '../../components/Footer/Footer'
export default {
components: {
    tou,
    jiao
  },
    }
</script>

<style lang="">

</style>
