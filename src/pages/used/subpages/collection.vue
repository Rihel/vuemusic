<template>
  <div>
    <span class="alert1">此乃收藏页面</span>
    <br>
    <span class="alert1">页面尚未完成</span>
    <br>
    <span class="alert1">道友速速返回</span>
    <br>
    <i class="alert1 fa fa-hand-o-down"></i>
    <br>
    <router-link class="alert" to="/">传送门</router-link>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="">
  .alert1 {
    margin: 50px;
    color: firebrick;
    font-size: 30px;
  }

  .alert {
    margin: 50px;
    color: dodgerblue;
    font-size: 50px;
  }

</style>
