<template>
    <div>
        <header>
            <ul class="nav">
                <li class="sub-nav">
                    <i class="fa fa-bars"></i>
                </li>
                <li>我的</li>
                <li class="active">音乐</li>
                <li>动态</li>
                <li class="search-nav">
                    <i class="fa fa-search"></i>
                </li>
            </ul>
        </header>
    
        <section class="jem-hot-main">
            <ul class="main-nav">
                <li class="active">热门推荐</li>
                <li>榜单</li>
                <li>歌单</li>
                <li>电台</li>
            </ul>
            <div class="main-content">
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <img class="banner" src="./hot-banner.png" alt="fff">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="banner" src="./hot-banner.png" alt="fff">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="banner" src="./hot-banner.png" alt="fff">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
    
                <div class="classify">
                    <div class="song-recommend">
                        <img src="./hot-radio.png" alt="fff">
                        <p>每日歌曲推荐</p>
                    </div>
                    <div class="singer-recommend">
                        <img src=".//hot-microphone.png" alt="fff">
                        <p>歌手</p>
                    </div>
                    <div class="songtype-recommend">
                        <img src="./hot-clipboard.png" alt="fff">
                        <p>歌曲</p>
                    </div>
                </div>
                <div class="recommend-title">
                    <p class="main-title">
                        <img src="./hot-music-icon.png" alt="fff">推荐歌单</p>
                    <p class="sub-title">更多></p>
                </div>
                <div class="recommend-songlist">
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                </div>
                <div class="recommend-songlist">
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                </div>
                <div class="recommend-title">
                    <p class="main-title">
                        <img src="./hot-music-icon.png" alt="fff">推荐歌单</p>
                    <p class="sub-title">更多></p>
                </div>
                <div class="recommend-songlist">
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                </div>
                <div class="recommend-songlist">
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <img src="./hot-cover1.png" alt="fff">
                        <p>苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                </div>
            </div>
        </section>
    
        <footer>
            <img class="jem-cover" src="./my-cover.png" alt="">
            <div class="jem-song-info">
                <p class="jem-song-name">不该（with AMEI）</p>
                <p class="jem-song-singer">周杰伦</p>
            </div>
            <div class="jem-play-ctrl">
                <i class="fa fa-play"></i>
                <i class="fa fa-step-forward"></i>
                <i class="fa fa-list"></i>
            </div>
        </footer>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components: {
        swiper,
        swiperSlide
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
            },
            swiperSlides: [1, 2, 3, 4, 5]
        }
    },
    mounted() {
        setInterval(() => {
            console.log('simulate async data')
            let swiperSlides = this.swiperSlides
            if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
        }, 3000)
    }
}

</script>

<style lang="scss">
@import '../../../scss/_H_hot.scss';
</style>