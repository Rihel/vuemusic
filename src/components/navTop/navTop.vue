
<template>
    <header>
        <ul class="nav-top">
            <li>
               <a href="#" class="fa fa-list-ul"></a>
            </li>
            <li>
                <router-link to="/">我的</router-link>
            </li>
            <li>
                <router-link to="/">音乐</router-link>
            </li>
            <li>
                <router-link to="/">动态</router-link>
            </li>
            <li>
                <a href="#" class="fa fa-search"></a>
            </li>
        </ul>
    </header>
</template>
    
<script>

import '../../../node_modules/font-awesome/scss/font-awesome.scss'
export default {

}
</script>
    
<style lang="scss">
    .nav-top{
        padding: 25px;
        li{
            display:flex;
            width: 100%;
            justify-content: space-around;
            a{
                font-size: rem(35);
            }
        }
    }
</style>
    
