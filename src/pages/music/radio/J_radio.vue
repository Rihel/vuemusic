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
    
        <section class="yao-radio-main">
            <ul class="main-nav">
                <li>热门推荐</li>
                <li>榜单</li>
                <li>歌单</li>
                <li class="active">电台</li>
            </ul>
            <div class="main-content">
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <img class="banner" src="./radio-banner.png" alt="fff">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="banner" src="./radio-banner.png" alt="fff">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="banner" src="./radio-banner.png" alt="fff">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="classify">
                    <div class="raido-recommend radio-classify">
                        <img src="./radio-radio.png" alt="fff">
                        <p>每日歌曲推荐</p>
                    </div>
                    <div class="raido-recommend radio-ranking">
                        <img src=".//radio-microphone.png" alt="fff">
                        <p>歌手</p>
                    </div>
                </div>
                <div class="recommend-title">
                    电台个性推荐
                </div>
                <div class="recommend-songlist">
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                </div>
                <div class="recommend-songlist">
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
    
                </div>
                <div class="recommend-songlist">
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
    
                </div>
                <div class="recommend-songlist">
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
                    <div class="recommend-songitem">
                        <div class="item-cover">
                            <img src="./radio-cover1.png" alt="fff">
                            <p class="cover-info">李卤味</p>
                        </div>
                        <p class="cover-describe">苏打绿陪你一起走过 在每一个难忘的瞬间</p>
                    </div>
    
                </div>
            </div>
        </section>
    
        <footer>
            <img class="yao-cover" src="./my-cover.png" alt="">
            <div class="yao-song-info">
                <p class="yao-song-name">不该（with AMEI）</p>
                <p class="yao-song-singer">周杰伦</p>
            </div>
            <div class="yao-play-ctrl">
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
@import '../../../scss/_J_radio.scss';
</style>