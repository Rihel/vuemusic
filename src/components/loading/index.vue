<template>
    <div class="loading">
        <div>
            <i class="fa fa-spinner fa-spin fa-2x  fa-fw"></i>
        </div>
        <span>正在加载中...</span>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import "../../assets/scss/_var.scss";
.loading {
    display: flex;
    flex-direction: column;
    text-align: center;
    >div {
        padding: 10px 0;
       i{
            color: $primary-color;
       }
    }
}
</style>

