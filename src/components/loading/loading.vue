<template>
    <div class="loading">   
        <div>
            <i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>
        </div>
        <span>加载数据...</span>
    </div>
</template>
<script>
 export default{
   
 }
</script>
<style lang="scss">
    .loading{
        margin-top: 100px;
        display:flex;
        flex-direction:column;
        text-align:center;
        div{
            padding:10px 0;
        }
        i{
            color:red;
        }
        span{
            color:red;
        }
   
    }
</style>