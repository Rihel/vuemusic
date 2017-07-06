<template>
  <div>
      <header>
          本地歌曲
      </header>
    <mainNav></mainNav>
      <router-view></router-view>
  </div>

</template>

<script>
import mainNav from '../../../components/mainNav/mainNav'
export default {
    components:{
        mainNav,
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
}
  
</style>
