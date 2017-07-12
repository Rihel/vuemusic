<!--
    轮播banner组件
    作者：Lewis
-->
<template>
  <div class="zql-banner">
     <swiper :options="swiperOption">
            <swiperSlide v-for="item,index in banners" :key="index">
                <img :src="item.pic" />
            </swiperSlide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export  default {
        props:['banners'],
        components: {
         swiper,
         swiperSlide
      },
      data(){
       return {
         swiperOption: {
          autoplay: 1000,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : false,
          observeParents:true,
          loop:true
        },
      }
    }
}
</script>


