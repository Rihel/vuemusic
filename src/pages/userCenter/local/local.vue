<template>
  <div>
    <header>
      <router-link to="/user">
        <i class="fa fa-angle-left"></i>&nbsp本地歌曲</router-link>
    </header>
    <mainNav :music="music"></mainNav>
    <router-view class="local"></router-view>
  </div>

</template>

<script>
import mainNav from '../../../components/mainNav/mainNav'
export default {
    components:{
        mainNav,
    },
    data(){
        return{
            music: [
                {
                    path: '/user/local/song',
                    title: '歌曲'
                },
                {
                    path: '/user/local/file',
                    title: "文件夹"
                },
                {
                    path: '/user/local/singer',
                    title: "歌手",
                },
                {
                    path: '/user/local/ablum',
                    title: '专辑'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
  @import '../../../scss/_function.scss';
  @import '../../../scss/_common.scss';

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: rem(85);
    line-height: rem(85);
    background: $primary-color;
    text-indent: rem(15);
    z-index:999;
    a {
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
    }
  }

  .local {
    margin-top: 200px;
  }

</style>
