<template>
    <div class="con">
        <div class="music-play-box">
            <div class="song-detail">
                <img :src="musicDetail.picUrl" />
                <div class="text">
                    <h5 class="song-name">{{musicDetail.songName}}</h5>
                    <small class="song-author">{{musicDetail.singer}}</small>
                </div>
            </div>
            <div class="song-control">
                <span class="fa fa-pause" v-if="isPlay" @click="play()"></span>
                <span class="fa fa-play" v-if="!isPlay" @click="play()"></span>
                <span class="fa fa-step-forward"></span>
                <span class="fa fa-list-ul"></span>
            </div>
        </div>
        <div class="bg"></div>
        <audio ref="audio" :src="musicDetail.url"></audio>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            isPlay: false
        }
    },
    computed: mapState({
        musicDetail: state => state.nowMusicData
    }),
    created() {

    },
    watch: {


    },
    methods: {
        play() {
            this.isPlay = !this.isPlay;
        }
    }

}
</script>
<style lang="scss">
@import "../../assets/scss/_var.scss";
@import "../../assets/scss/_funcions.scss";
.con {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: rem(87);
    width: 100%;
}

.music-play-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: rem(87);
    z-index: 1;
    background: rgba(255, 255, 255, .5);
    justify-content: space-between;
    .song-detail {
        padding: 3px;
        display: flex;
        img {
            width: 50px;
            height: auto;
        }
        .text {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 10px;
            h5 {
                font-size: 16px;
            }
            small {
                font-size: 12px;
            }
        }
    }
    .song-control {
        display: flex;
        height: 100%;
        align-items: center;
        span {
            width: 40px;
            font-size: 150%;
            color: $primary-color;
        }
    }
}

.bg {
    position: absolute;
    background: rgba(255, 255, 255, .8);
    bottom: -10px;
    left: 0;
    right: 0;
    display: flex;
    height: rem(100);
    filter: blur(5px);
    transform: scaleX(2);
}
</style>