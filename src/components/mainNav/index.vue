<template>
    <ul class="main-nav">
        <li>
            <i class="fa fa-navicon "></i>
        </li>
        <li>
            <router-link to="/userCenter">我的</router-link>
        </li>
        <li>
            <router-link to="/music">音乐</router-link>
        </li>
        <li>
            <router-link to="/dynamic">动态</router-link>
        </li>
        <li>
            <router-link to="/search">
                <i class="fa fa-search"></i>
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {}

</script>
<style lang="scss">
@import "../../assets/scss/_var.scss";
@import "../../assets/scss/_funcions.scss";
.main-nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: rem(128-40);
    align-items: center;
    background: {
        color: $primary-color;
    }

    i,
    a {
        color: rgba(255, 255, 255, .5);
        font-size: rem(36);
    }
    .router-link-exact-active.active{
        color: #fff;
        i{
            color: #fff;
        }
    }
}
</style>
