<template>
  <div>
      <header>
         <router-link to="/user"> <本地歌曲</router-link>
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
                    path: '/user/local/ablum',
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

header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: rem(85);   
    line-height: rem(85);
    background: $primary-color;
    
    text-indent: rem(30);
    a{
        font-size: 16px;
    color: #fff;
    }
}
  .local{
      margin-top: 200px;
  }
  
</style>
