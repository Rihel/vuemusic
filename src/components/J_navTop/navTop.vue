
<template>
    <header>
        <ul class="nav-top">
            <li>
                <a href="#" class="fa fa-list-ul"></a>
            </li>
            <li>
                <router-link to="/user">我的</router-link>
            </li>
            <li>
                <router-link class="active" to="/music">音乐</router-link>
            </li>
            <li>
                <router-link to="/trends">动态</router-link>
            </li>
            <li>
                <a href="#" class="fa fa-search"></a>
            </li>
        </ul>
    </header>
</template>
    
<script>

import '../../../node_modules/font-awesome/scss/font-awesome.scss'
import '../../scss/_common.scss'
export default {

}
</script>
    
<style lang="scss">
@import "../../scss/_common.scss";
@import "../../scss/_function.scss";
.nav-top {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: space-around;
    width: 100%;
    height: rem(85);
    background: #b30000;
    line-height: rem(85);
    z-index: 999;
    li {
        a {
            font-size: rem(36);
            color: rgba(255,255,255,.5);
        }
        .router-link-exact-active.active{
            color: #fff;
        }
    }
}
</style>
    
