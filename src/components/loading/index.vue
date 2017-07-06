<template>
  <div class="loading">
    <div><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>
    <span>正在加载中...</span>
  </div>
</template>

<script>
    export default{

    }
</script>
<style lang="scss">
    .loading{
        display: flex;
        flex-direction: column;
        
        text-align: center;
        div{
            padding: 10px 0;
            i{
            color: darkred;
        }
        }
        
    }
</style>

