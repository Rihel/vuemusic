<template>
    <div class="list-top">
        <div class="top-left">
            <router-link to="/music"><i class="fa fa-arrow-left"></i></router-link>
            <span>歌单</span>
        </div>
        <div class="top-right">
            <i class="fa fa-search"></i>
            <span>
                <i class="fa fa-ellipsis-v"></i>
            </span>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss">
@import "../../scss/_function.scss";
@import '../../scss/_common.scss';
.list-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    height: rem(85);
    line-height: rem(85);
    background: $primary-color;
    z-index: 9999;
    .top-left {
        padding-left: 20px;
        font-size: 18px;
        color: #fff;
        .fa{
            color: #fff;
        }
    }
    .top-right {
        padding-right: 20px;
        font-size: 18px;
        color: #fff;
        span {
            margin-left: 30px;
            font-size: 18px;
            color: #fff;
        }
    }
}
</style>