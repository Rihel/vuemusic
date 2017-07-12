<template>
    <div>
        <navTop></navTop>
        <div class="trends">
            <div class="trends-banner">
                <div class="trends-title">
                    <div class="trends-context">
                        <p class="trends-maintil">#你最想看谁的演唱会？</p>
                        <p class="trends-subtil">已有167人加入</p>
                    </div>
                </div>
            </div>
            <div class="trends-content">
                <div class="trends-topics">
                    <p class="topics-title">热门话题</p>
                    <p class="topics-more">更多></p>
                </div>
                <div class="trends-topics-cover">
                    <div class="topics topics-first">
                        <div class="topics-text">
                            <p>#你单曲循环最多的
                                <br>是哪一首歌？</p>
                        </div>
                    </div>
                    <div class="topics topics-second">
                        <div class="topics-text">
                            <p>#你单曲循环最多的
                                <br>是哪一首歌？</p>
                        </div>
                    </div>
                </div>
                <div class="trends-hot-title">
                    <div class="writer">
                        <img src="./icon1.png">
                        <div class="writer-info">
                            <p>欢乐颂音乐带你发现世界</p>
                            <p>11-29</p>
                        </div>
                        <p class="star">+关注</p>
                    </div>
                    <div class="hot-title">
                        <p>今天是钟汉良欧巴的生日！想不起来是什么时候开始关注他的作品， 不例外的从电视剧电影里认识他，从而了解原来他还是歌手，并且 获得不少奖项!
                        </p>
                        <p>唱跳俱佳，影视双栖，用对演艺事业的不懈追求书写小太阳的耀眼 荣光
                        </p>
                    </div>
                </div>
                <div class="make-songlist">
                    <p class="make-title">#手拉手一起做歌单</p>
                    <div class="make-songcover">
                        <img class="main-song" src="./trends-cover3.png">
                        <div class="thumbnail">
                            <img class="first-makes" src="./trends-cover4.png">
                            <img class="second-makes" src="./trends-cover5.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navTop from '../../components/J_navTop/navTop'

export default {
    data() {
        return {

        }
    },
    components: {
        navTop: navTop,

    },
    created() {

    },
}
</script>
   
        
<style lang="scss">
.trends {
    width: 100%;
    margin-top: 4.25rem;
    background: url('./my-bg.png') no-repeat center;
    background-size: cover;
    .trends-banner {
        width: 100%;
        background: url("./trends-banner.png") no-repeat center;
        background-size: cover;
        .trends-title {
            display: flex;
            width: 100%;
            padding: 1.5rem 0;
            background-color: rgba(0, 0, 0, .5);
            justify-content: center;
            align-items: center;
            .trends-context {
                width: 28rem;
                padding: 2.5rem 1rem;
                border: 1px solid #fff;
                border-radius: 4px;
                p {
                    width: 100%;
                    color: #fff;
                }
                .trends-maintil {
                    margin-bottom: 1.5rem;
                    font-size: 2.5rem;
                    text-align: left;
                }
                .trends-subtil {
                    font-size: 1.5rem;
                    text-align: right;
                }
            }
        }
    }
    .trends-content {
        padding: 1rem 1rem 6rem;
        background-color: rgba(255, 255, 255, .5);
        .trends-topics {
            display: flex;
            margin-bottom: 1rem;
            justify-content: space-between;
            align-items: center;
            p.topics-title {
                font-size: 2rem;
                font-weight: bold;
            }
            p.topics-more {
                font-size: 1rem;
                color: #333;
            }
        }
        .trends-topics-cover {
            display: flex;
            width: 100%;
            height: 8rem;
            justify-content: space-between;
            align-items: center;
            .topics {
                width: 49%;
                height: 100%;
                .topics-text {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, .3);
                    justify-content: center;
                    align-items: center;
                    p {
                        line-height: 1.5rem;
                        font-size: 1rem;
                        color: #fff;
                    }
                }
            }
            .topics-first {
                background: url('./trends-cover.png') no-repeat center;
                background-size: cover;
            }
            .topics-second {
                background: url('./trends-cover2.png') no-repeat center;
                background-size: cover;
            }
        }
        .trends-hot-title {
            .writer {
                display: flex;
                width: 100%;
                height: 5rem;
                margin: 1rem 0;
                justify-content: space-between;
                align-items: center;
                img {
                    height: 100%;
                }
                .writer-info {
                    padding-left: 1rem;
                    flex-grow: 2;
                    p {
                        line-height: 1.5rem;
                        font-size: 1.5rem;
                    }
                }
                .star {
                    display: flex;
                    height: 1.5rem;
                    padding: 0 .5rem;
                    border: 2px solid #e76450;
                    border-radius: 3px;
                    background-color: #e79550;
                    color: #b30000;
                    justify-content: center;
                    align-items: center;
                }
            }
            .hot-title {
                width: 100%;
                p {
                    margin-bottom: 1rem;
                    line-height: 2rem;
                    font-size: 1.2rem;
                }
            }
        }
        .make-songlist {
            width: 100%;
            p.make-title {
                display: flex;
                width: 50%;
                height: 2rem;
                padding: 0 .5rem;
                border: 2px solid #e76450;
                border-radius: 3px;
                background-color: #e79550;
                font-size: 1.5rem;
                color: #b30000;
                justify-content: center;
                align-items: center;
            }
            .make-songcover {
                display: flex;
                width: 100%;
                height: 13rem;
                margin-top: 1rem;
                justify-content: space-between;
                align-items: center;
                .main-song {
                    width: 58%;
                    height: 100%;
                }
                .thumbnail {
                    position: relative;
                    width: 40%;
                    height: 100%;
                    img {
                        position: absolute;
                        right: 0;
                        width: 99%;
                    }
                    .first-makes {
                        top: 0;
                    }
                     .second-makes {
                        bottom: 0;
                    }
                }
            }
        }
    }
}
</style>
