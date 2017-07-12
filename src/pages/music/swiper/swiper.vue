<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide>
                <hot></hot>
            </swiper-slide>
            <swiper-slide>
                <ranklist></ranklist>
            </swiper-slide>
            <swiper-slide>
                <songlist></songlist>
            </swiper-slide>
            <swiper-slide>
                <raido></raido>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import navTop from '../../../components/J_navTop/navTop'

import hot from '../hot/H_hot'
import ranklist from '../top/S_top.vue'
import songlist from '../list/C_list.vue'
import raido from '../radio/J_radio'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components: {
        navTop, swiper, swiperSlide, hot, ranklist, songlist, raido
    },
    name: 'carrousel',

    data() {
        return {
            swiperOption: {
                setWrapperSize: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                mousewheelControl: true,
                observeParents: true,
                loop: true,
            },
            swiperSlides: [1, 2, 3, 4],
        }
    },
    mounted() {
        setInterval(() => {
            let swiperSlides = this.swiperSlides
            if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
        }, 3000)
    }

}
</script>

<style lang="scss">
.main-slider-point {
    display: flex;
    position: fixed;
    top: 4.5rem;
    width: 100%;
    justify-content: space-between;
    z-index: 9999;
    span {
        display: inline-block;
        width: 25%;
        height: 3rem;
        border-radius: 0;
        z-index: 999;
    }
}

.main-nav {
    position: fixed;
    top: 4rem;
    display: flex;
    width: 100%;
    height: 3.55rem;
    background: #fdfcfa;
    justify-content: space-around;
    align-items: center;
    z-index: 997;
    li {
        width: 25%;
        height: 100%;
        border-bottom: 0.025rem solid #ddd9d2;
        line-height: 3.55rem;
        text-align: center;
        a {
            font-size: 1.55rem;
            font-weight: bold;
        }
    }
    li.active {
        border-color: #b30000;
        a {
            color: #b30000;
        }
    }
}
</style>
