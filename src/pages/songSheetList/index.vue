<template>
    <div>
        <div class="playlist-warpper" v-if="isDone">
            <div class="playlist-detail">
    
                <div class="up">
                    <div class="top">
                        <router-link class="fa fa-angle-left" to="/music"></router-link>
                        <h2>歌单</h2>
                    </div>
                    <div class="detail-top">
                        <div class="coverImg">
                            <img :src="detail.coverImgUrl" />
                        </div>
                        <div class="detail-text">
                            <p>{{detail.name}}</p>
                            <div class="user">
                                <div class="user-face">
                                    <!-- <img :src="detail.creator.avatarUrl" /> -->
                                </div>
                                <!-- <span>{{detail.creator.nickname}}</span> -->
                            </div>
                        </div>
                    </div>
                    <ul class="detail-bottom">
                        <li>{{detail.subscribedCount}}</li>
                        <li>{{detail.commentCount}}</li>
                        <li>{{detail.shareCount}}</li>
                        <li>下载</li>
                    </ul>
                </div>
                <img class="detail-bg" :src="detail.coverImgUrl" />
            </div>
            <div class="playlist-list">
                <div class="control">
    
                </div>
                <ul class="play-list">
                    <li v-for="item,index in detail.tracks" @click="getNowMusic(item.id)">
                        <div class="song">
                            <span>{{index+1}}</span>
                            <div class="song-info">
                                <h4>{{item.name}}</h4>
                                <p>{{item.ar[0].name}}-{{item.al.name}}</p>
                            </div>
                        </div>
                        <div class="song-control">
                            <i class="fa fa-youtube-play" v-show="item.mv!==0"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <loading v-if="!isDone"></loading>
    </div>
</template>
<script>
import loading from '../../components/loading';
import { mapMutations, mapActions, mapState } from 'vuex';
export default {
    components: {
        loading
    },
    data() {
        return {
            isDone: false
        }
    },
    computed: {
        ...mapState({
            privileges: state => state.music.privileges,
            detail: state => state.music.playList
        })
    },
    created() {
        this.isDone=false;
        const id = this.$route.params.id;
        console.log('歌单id为', id);
        // console.log(window.location)
        this.getPlayListDetail(id);
        this.isDone = true;
    },
    methods: {
        ...mapMutations([
            'chageMusicId'
        ]),
        ...mapActions([
            'getPlayListDetail',
            'getNowMusic'
        ])
    }
}
</script>
<style lang="scss">
.playlist-warpper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: -4.35rem;
    overflow: scroll;
}

.playlist-detail {
    position: relative;
    width: 100%;
    height: 25vh;
    overflow: hidden;
    .top {
        width: 100%;
        position: relative;
        margin-bottom: 10px;
        height: 20px;
        a {
            position: absolute;
            left: 20px;
            top: 0;
            font-weight: bold;
            font-size: 2em;
            color: #fff;
        }
        h2 {
            width: 100%;
            text-align: center;
            line-height: 25px;
            font-size: 1.5em;
            color: #fff;
        }
    }
    .up {

        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        .detail-top {
            padding: 10px;
            display: flex;
            width: 100%;
            justify-content: space-around;
            .coverImg {
                width: 120px;
                img {
                    width: 100%;
                }
            }
            .detail-text {
                width: 65%;
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                p {
                    color: #fff;
                    font-size: 20px;
                    line-height: 1.2;
                }
                .user {
                    display: flex;
                    align-items: center;
                    .user-face {
                        width: 30px;
                        border-radius: 50%;
                        overflow: hidden;
                        margin-right: 10px;
                        img {
                            width: 100%;
                        }
                    }
                    span {
                        color: #fff;
                    }
                }
            }
        }
        .detail-bottom {
            display: flex;
            justify-content: space-around;
            width: 100%;
            li {
                color: #fff;
            }
        }
    }
    .detail-bg {
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.5);
        width: 100%;
        height: 100%;
        filter: blur(15px);
    }
}

.playlist-list {
    .play-list {
        background: #fff;
        li {
            display: flex;
            height: 50px;
            align-items: center;
            border-bottom: 1px solid #ddd;
            .song {
                display: flex;
                align-items: center;
                height: 100%;
                span {
                    width: 50px;
                    text-align: center;
                    font-size: 20px;
                    height: 100%;
                    line-height: 50px;
                    position: relative;
                    &:after {
                        content: '';

                        position: absolute;
                        width: 100%;
                        height: 1px;
                        background: #fff;
                        bottom: -1px;
                        left: 0;
                    }
                }
                .song-info {

                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: 100%;
                    padding: 5px 0 5px 5px;
                    h4 {
                        font-size: 16px;
                    }
                    p {
                        color: gray;
                    }
                }
            }
        }
    }
}
</style>