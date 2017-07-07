<template>
  <div>
    <div class="wyf-header">
        <div class="wyf-header-left"><router-link class="fonts" to="/music/songSheet"><span class="fa fa-arrow-left"></span>歌单</router-link></div>
        <ul class="wyf-header-right">
            <li class="fa fa-search"></li>
            <li class="fa fa-ellipsis-v"></li>
        </ul>
    </div>

    <div class="song-detail">
        <div class="song-detail-top">
            <div class="songimg-wrap">
            <img src="../../../assets/img/wl-singer3.jpg" alt="">
            <span class="listencount"><i class="fa fa-headphones"></i>30万</span>
            <span class="icons fa fa-clock-o"></span>
        </div>
        <div class="songcontent">
            <div class="songsheet-title">怀旧 | 暧昧不明关系研究会</div>
            <div class="songsheet-user">
                <img src="../../../assets/img/wl-singer3.jpg" alt="">
                <span class="user-name">浩子Joe<i class="fa fa-angle-right"></i></span>
                
            </div>
        </div>

        </div>
        
        <ul class="song-detail-bottom">
            <li><i class="fa fa-folder-o"></i><span>1420</span></li>
            <li><i class="fa fa-commenting-o"></i><span>26</span></li>
            <li><i class="fa fa-link"></i><span>16</span></li>
            <li><i class="fa fa-download"></i><span>下载</span></li>
        </ul>

    </div>


    <div class="all-song-list">
    <ul class="play-list">
        <li class="play-all"><i class="fa fa-play-circle-o"></i>播放全部<span class="song-all">(共<span>30</span>首)</span></li>
        <li class="more-choose"><i class="fa fa-list-ul"></i>多选</li>
    </ul>

    <div class="songs-name">
        <div class="num">1</div>
        <div class="songs-detail">
            <div class="songs-wrap">
                <h2 class="songs-detail-name">野花</h2>
            <p class="songs-detail-singer">林忆莲-野花</p>
            </div>
            <span class="more-menu fa fa-ellipsis-v"></span>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
    export default {
        components: {

        },
        data() {
            return {

            }
        },
        created() {
            this.$http.get('http://localhost:3000/playlist/detail?id=24381616')
                .then(data => {
                    console.log(data)
                })
        }
    }
</script>
<style lang="scss">
    body {
        background-image: none;
        .wyf-header {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            background: rgba(0, 0, 0, .7);
            .wyf-header-left {
                .fonts {
                    font-size: 14px;
                    color: white;
                    span {
                        margin-right: 20px;
                    }
                }
            }
            .wyf-header-right {
                li {
                    padding: 0 10px;
                    font-size: 16px;
                    color: white;
                }
            }
        }
        .song-detail {
            padding: 10px;
            background: rgba(0, 0, 0, .7);
            .song-detail-top {
                display: flex;
                align-items: center;
                .songimg-wrap {
                    position: relative;
                    width: 120px;
                    height: 120px;
                    img {
                        width: 120px;
                        height: 120px;
                    }
                    .listencount {
                        position: absolute;
                        top: 3px;
                        right: 5px;
                        color: white;
                    }
                    .icons {
                        position: absolute;
                        bottom: 3px;
                        right: 5px;
                        color: white;
                    }
                }
                .songcontent {
                    display: flex;
                    flex-direction: column;
                    margin-left: 20px;
                    .songsheet-title {
                        color: white;
                        font-size: 20px;
                        margin-bottom: 30px;
                    }
                    .songsheet-user {
                        display: flex;
                        align-items: center;
                        img {
                            width: 30px;
                            height: 30px;
                            margin-right: 10px;
                            border-radius: 15px;
                        }
                        span {
                            font-size: 16px;
                            color: white;
                            i {
                                margin-left: 5px;
                            }
                        }
                    }
                }
            }
            .song-detail-bottom {
                display: flex;
                justify-content: space-between;
                padding: 15px 30px 5px 10px;
                li {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    color: white;
                    font-size: 16px;
                }
            }
        }

        .all-song-list{
            
            .play-list{
                display: flex;
                justify-content: space-between;
                padding: 10px;
                border-bottom: 1px solid #eee;
                li.play-all{
                    font-size: 14px;
                    i{
                        font-size: 16px;
                        margin-right: 10px;
                    }
                    .song-all{
                        color: #666;
                    }
                }
            }
            .songs-name{
                display: flex;
                padding: 10px 0 0 10px;
                .num{
                    padding: 10px;
                }
                .songs-detail{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    padding-right: 20px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #eee;
                    .songs-wrap{
                        margin-left: 10px;
                        .songs-detail-name{
                            margin-bottom: 5px;
                            font-size: 16px;
                        }
                        .songs-detail-singer{
                            color: #666;
                        }
                    }
                    .more-menu{
                        margin-top: 10px;
                        color: #666;
                    }
                }
            }
        }
    }
</style>