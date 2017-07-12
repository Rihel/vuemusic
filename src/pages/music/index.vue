<template>
  <div >
    <mainnav></mainnav>
    <subnav :navs="navs"></subnav>
    <router-view></router-view>

  </div>
</template>

<script>
  import mainnav from '../../components/mainNav';
  import subnav from '../../components/subNav';
  import musicPlayBox from '../../components/musicPlayBox';
  export default {
    name: 'app',
    components: {
      mainnav,
      subnav
    },
    data(){
      return{
        navs:[
          {
            title:'热门推荐',
            path:'/music/recommendation',
          },
          {
            title:'榜单',
            path:'/music/list'
          },
          {
            title:'歌单',
            path:'/music/songSheet'
          },
          {
            title:'电台',
            path:'/music/radioStation'
          }
        ]
      }
    },
    methods: {

    }
  }

</script>

<style lang="scss">


</style>
