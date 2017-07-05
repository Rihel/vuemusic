<template>
    <div class="banner">
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
export default {

    props: ['banners'],
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                autoplay: 1000,
                initialSlide: 1,
                loop: true,
                pagination: '.swiper-pagination',
                onSlideChangeEnd: swiper => {
                    // console.log('onSlideChangeEnd', swiper.realIndex)
                }
            }
        }
    },
    created() {
        console.log(this.banners, 'banner组件');
    }
}    
</script>
<style lang="scss">
    .banner{
        img{
            max-width: 100%;
            
        }
    }
</style>

