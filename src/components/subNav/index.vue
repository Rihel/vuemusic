<!--
    subNavs组件
    作者：Lewis
-->
<template>
  <div class="subnav">
    <ul class="zql-hot">
      <li v-for="item,index in navs" @click="moveActive(index)">
        <router-link :to="item.path">{{item.text}}</router-link>
      </li>
      <div class="move" :style="{left:isActive*25+'%'}"></div>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['navs'],
    data(){
     return {
       isActive:0
     }
  },
  methods:{
    moveActive(index){
      this.isActive=index;
    } 
   }
  }
</script>

<style lang="scss">
  .subnav {
    /*position:fixed;*/
    width: 100%;
    .zql-hot {
      position: relative;
      .move {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 25%;
        height: 4px;
        background-color: #b30000;
        transition: all 0.5s;
      }
    }
  }

</style>
