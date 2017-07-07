<template>
    <ul class="main-nav">
        <li v-for="item,index in music" :key="index" @click="isActive(index)">
            <router-link :to="item.path">{{item.title}}</router-link>
        </li>
        <div class="line" :style="{left:rank*25+'%'}"></div>
    </ul>
</template>

<script>


export default {
    props:['music'],
   data(){
       return {
           rank:0
       }
   },
   methods:{
       isActive(index){
           this.rank=index;
       }
   }
    
   
}
</script>

<style lang="scss">
@import '../../scss/_function.scss';
@import '../../scss/_common.scss';
.main-nav {
    position: fixed;
    top: rem(85);
    display: flex;
    width: 100%;
    height: 3.55rem;
    background: #fdfcfa;
    justify-content: space-around;
    align-items: center;
    z-index: 999;
    li {
        width: 25%;
        height: 100%;
        line-height: 3.55rem;
        text-align: center;
        a {
            display: block;
            width: 100%;
            height: 100%;
            font-size: 1.55rem;
            font-weight: bold;
            &.active{
                color:$primary-color;
            }
        }
    }
    .line{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 25%;
        height: rem(4);
        background-color:$primary-color;
        transition: all .5s;

    }
}
</style>
