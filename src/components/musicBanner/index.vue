<!--
    muisc轮播banner组件
    作者：zx
-->
<template>
  <div>
    <div class="subnav">
      <ul class="zql-hot">
        <li v-for="item,index in navs" @click="moveActive(index)">
          <a>{{item.text}}</a>
        </li>
        <div class="move" :style="{left:isActive*25+'%'}"></div>
      </ul>
    </div>
    <div class="wzx-banner">
      <swiper :options="swiperOption">
        <swiperSlide>
          <recommend></recommend>
        </swiperSlide>
        <swiperSlide>
          <lists></lists>
        </swiperSlide>
        <swiperSlide>
          <songSheet></songSheet>
        </swiperSlide>
        <swiperSlide>
          <radioStation></radioStation>
        </swiperSlide>
      </swiper>
    </div>
  </div>
</template>

<script>
import subNav from '../../components/subNav'
import recommend from '../../pages/music/subpages/recommendation'
import lists from '../../pages/music/subpages/lists'
import radioStation from '../../pages/music/subpages/radioStation'
import songSheet from '../../pages/music/subpages/songSheet'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export  default {
        components: {
         swiper,
         swiperSlide,
         recommend,
         lists,
         radioStation,
         songSheet,

      },
      data(){
       return {
         isActive:0,
          navs: [{
            text: '热门推荐',
            // path: './recommendation'
          },
          {
            text: '榜单',
            // path: './lists'
          },
          {
            text: '歌单',
            // path: './songSheet'
          },
          {
            text: '电台',
            // path: './radioStation'
          }
        ],
         swiperOption: {
        //   autoplay: 1000,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : false,
          observeParents:true,
          loop:true,
          onSlideChangeEnd: swiper => {  
                  //这个位置放swiper的回调方法  
                this.isActive = swiper.realIndex;  
             } 
        },
      }
      
    },
    methods:{
        moveActive(index){
          this.isActive=index;
         } 
      },
}
</script>

<style lang="scss">
  .subnav {
    /*position:fixed;*/
    width: 100%;
    .zql-hot {
      position: relative;
      .move {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 25%;
        height: 4px;
        background-color: #b30000;
        transition: all 0.5s;
      }
    }
  }

</style>
