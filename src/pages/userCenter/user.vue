<template>
  <div>
    <navTop></navTop>
    <ul>
      <li>
        <router-link to="/user/local">本地歌曲</router-link>
      </li>
      <li>
        <router-link to="/user/latest">最近播放</router-link>
      </li>
  
      </ul>
  </div>
</template>

<script>
import navTop from '../../components/J_navTop/navTop'

export default {
  components: {
    navTop: navTop,

  },
}
</script>

<style lang="scss">
@import '../../scss/_function.scss';

ul {
  padding-top: rem(200);
  li{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #000;
    a{
      color: #000;
    }
  }
}

</style>
