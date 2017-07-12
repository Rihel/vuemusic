<template>
    <div>
        <section class="jem-hot-main">
            <div class="main-content">
                <banner></banner>
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
                <div class="recommend-title songlist-title">
                    <p class="main-title">
                        <img src="./hot-music-icon.png" alt="fff">推荐歌单</p>
                    <p class="sub-title">更多></p>
                </div>
                <div class="recommend-songlist">
                    <figure class="recommend-songitem" v-for="item,index in recommendList ">
                        <lazyImg :src="item.picUrl"></lazyImg>
                        <figcaption>
                            {{item.name}}
                            <p class="play-count">
                                <i class="fa fa-headphones"></i>&nbsp{{Math.floor(item.playCount)}}</p>
                        </figcaption>
                    </figure>
                </div>
                <div class="recommend-title normal-title  oneOnly-title">
                    独家放送
                    <i class="fa fa-angle-right"></i>
                </div>
                <div class="recommend-oneOnly">
                    <div class="recommend-songitem" v-for="item,index in oneOnly" v-if="index>0">
                        <lazyImg :src="item.picUrl"></lazyImg>
                        <p>{{item.name}}</p>
                    </div>
                    <div class="recommend-songitem huge-screen" v-for="item,index in oneOnly" v-if="index===0">
                        <img :src="item.picUrl" alt="fff">
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <div class="recommend-title normal-title  mv-title">
                    推荐MV
                    <i class="fa fa-angle-right"></i>
                </div>
                <div class="recommend-mv">
                    <figure class="recommend-item" v-for="item,index in newMv ">
                        <lazyImg :src="item.picUrl"></lazyImg>
                        <figcaption>
                            <p class="song-name"> {{item.name}}</p>
                            <p class="singer-name"> {{item.artistName}}</p>
                            <p class="play-count">
                                <i class="fa fa-video-camera"></i>&nbsp{{Math.floor(item.playCount)}}</p>
                        </figcaption>
                    </figure>
                </div>
                <div class="recommend-title normal-title  dj-title">
                    主播电台
                    <i class="fa fa-angle-right"></i>
                </div>
                <div class="recommend-djprogram">
                    <figure class="recommend-item" v-for="item,index in djprogram ">
                        <lazyImg :src="item.picUrl"></lazyImg>
                        <figcaption>
                            {{item.name}}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import lazyImg from '../../../components/lazyImage/lazyimg';
import banner from '../../../components/music/hot/banner/banner'


export default {
    data() {
        return {
            recommendList: [],
            oneOnly: [],
            newMv: [],
            djprogram: [],
        }
    },

    components: {
        lazyImg,
        banner: banner,

    },
    created() {
        Promise.all([this.$http.get('http://localhost:3000/personalized'),
        this.$http.get('http://localhost:3000/personalized/privatecontent'),
        this.$http.get('http://localhost:3000/personalized/mv'),
        this.$http.get('http://localhost:3000/personalized/djprogram')
        ])
            .then((datas) => {
                this.recommendList = datas[0].body.result
                this.oneOnly = datas[1].body.result
                this.newMv = datas[2].body.result
                this.djprogram = datas[3].body.result;
            })
    },
}

</script>

<style lang="scss">
@import '../../../scss/_H_hot.scss';

</style>