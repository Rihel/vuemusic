<template>
    <div class="subnav">
        <ul>
            <li v-for="item,index in navs" :key="index" @click="moveActive(index)">
                <router-link :to="item.path">{{item.title}}</router-link>
            </li>
        </ul>
        <div class="move" :style="{left:isActive*25+'%'}"></div>
    </div>
</template>
<script>
export default {
    props: ['navs'],
    data() {
        return {
            isActive:0
        }
    },
    created() {
        console.log(this.navs);
    },
    methods:{
        moveActive(index){
            this.isActive=index;
        }
    }
}

</script>
<style lang="scss">
@import '../../assets/scss/_var.scss',
'../../assets/scss/_funcions.scss';
.subnav {
    position: relative;
    width: 100%;
    height: rem(71);
    ul {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: rem(71);
        li {
            // width: 25%;
            flex: 1;
            height: rem(71);
            line-height: rem(71);
            text-align: center;
            a {
                display: block;
                width: 100%;
                height: 100%;
                border-bottom: {
                    style: solid;
                    color: #ddd;
                    width: rem(4);
                }
                &.active{
                    color: $primary-color;
                }
            }
        }
    }
    .move {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 25%;
        height: rem(4);
        background-color: $primary-color;
        transition: all 0.5s;
    }
}
</style>
