<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="item,index in banners" :key="index">
            <img class="banner" :src="item.pic" alt="fff">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
    components: {
        swiper,
        swiperSlide,
    },
    name: 'carrousel',

    data() {
        return {
            swiperOption: {
                autoplay: 1500,
                setWrapperSize: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                mousewheelControl: true,
                observeParents: true,
                loop:true,
            },
            swiperSlides: [1, 2, 3, 4, 5],
            banners: [],
        }
    },
    created() {
        this.$http.get('http://localhost:3000/banner')
            .then(function (data) {
                this.banners = data.body.banners
            });

    },
    mounted() {
        setInterval(() => {
            let swiperSlides = this.swiperSlides
            if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
        }, 3000)
    }
}
</script>

<style>

</style>
