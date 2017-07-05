<!--
    subNavs组件
    作者：Lewis
-->
<template>
  <ul class="zql-hot">
    <li v-for="navs,index in subNavs">
      <router-link :to="navs.path">{{navs.text}}</router-link>
    </li>

  </ul>
</template>

<script>
  export default {
    props: ['navs'],
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
