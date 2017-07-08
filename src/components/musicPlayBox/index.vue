<template>
    <div class="con">
        <div class="music-play-box">
            <div class="song-detail">
                <img :src="detail.picUrl" />
                <div class="text">
                    <h5 class="song-name">{{detail.songName}}</h5>
                    <small class="song-author">{{detail.singer}}</small> {{musicId}}
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
        <audio ref="audio"></audio>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            isPlay: false,
            url: '',
            currentTime: 0,
            detail: {
                id: 0,
                name: '',
                picUrl: '',
                singer: '',
            }
        }
    },
    computed: mapState({
        musicId: state => state.musicId
    }),
    created() {
        this.getMusic(this.musicId);
    },
    watch: {
        currentTime(newValue, oldValue) {
            if (newValue == 0) {
                return;
            }
        },
        musicId(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.getMusic(newValue);
                let audio = this.$refs.audio;
                audio.autoPlay = true;
            }
        }

    },
    methods: {
        play() {
            this.isPlay = !this.isPlay;
            let audio = this.$refs.audio;
            audio.src = this.url;   
            console.log(audio.src)

            if (this.isPlay) {
                console.log(this.currentTime);
                audio.currentTime = this.currentTime;
                audio.play();
            } else {

                audio.pause();
                console.log(audio.currentTime, '当前播放位置')
            }


        },
        getMusic(id) {
            Promise.all([
                this.$http.get('http://localhost:3000/music/url?id=' + id),
                this.$http.get('http://localhost:3000/song/detail?ids=' + id)
            ]).then(data => {

                this.url = data[0].data.data[0].url;
                this.detail.id = data[1].data.songs[0].al.id;
                this.detail.songName = data[1].data.songs[0].name;
                this.detail.picUrl = data[1].data.songs[0].al.picUrl;
                this.detail.singer = data[1].data.songs[0].ar[0].name;
                this.play();
            })
        }
    },
    mounted() {
        let audio = this.$refs.audio;
        audio.ontimeupdate = e => {
            if (this.isPlay) {
                this.currentTime = audio.currentTime;
            }
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