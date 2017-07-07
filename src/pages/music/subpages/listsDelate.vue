<!--
    author:hubvues
-->
<template>
    <div class="wl-lists-rank">
       
 <div class="wl-detail">
     <div class="wl-meun">
                <div class="go-back"><i class="fa fa-arrow-left"></i><span>云音乐标榜</span></div>
                <div class="control">
                    <i class="fa fa-search"></i>
                    <i class="fa fa-ellipsis-v"></i>
                </div>
            </div>
    </div>
    <div class="wl-detail-banner">
        <div class="banner-info">
            <span class="tags">云音乐</span>
            <img src="" alt="">
            <span class="up-time">最近更新：7月3日</span>
            
        </div>
        <ul class="control-button">
            <li><i class="fa fa-search"></i><span>5000</span></li>
            <li><i class="fa fa-search"></i><span>5000</span></li>
            <li><i class="fa fa-search"></i><span>5000</span></li>
            <li><i class="fa fa-search"></i><span>5000</span></li>
        </ul>
    </div>
    <ul class="wl-play-list">
        <div class="title">
            <div class="title-left">
                <i class="fa fa-play"></i>
                <p>播放全部<span>（共100首）</span></p>
            </div>
            <div class="title-right">
                <i class="fa fa">多选</i>
                
            </div>
        </div>
        <ul class="rank">
            <li>
                <div class="rank-left">
                <div class="ranking">
                    <i class="fa"></i>
                    <span>1</span>
                    <p><i class="fa fa-arrow-top"></i>120%</p>
                </div>
               
                </div>
                <div class="rank-right">
                     <div class="songs-name">
                    <p>追光者<span>(电影主题 《秘果》插曲)</span></p>
                    <div class="singer-info">
                        <span class="hot">SQ</span>
                        <span>王博文-因为有你</span>
                    </div>
                </div>
                    <i class="fa fa-ellipsis-v fa-2x"></i>
                </div>
            </li>
        </ul>
    </ul>
    </div>
    
   
</template>
<script>
    export default {

    }
</script>
<style lang="scss">
    .wl-lists-rank {
        background: #fff;
    }
    
    .wl-detail {
        .wl-meun {
            position: fixed;
            top: 0;
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 10px;
            background: blue;
            .go-back {
                i {
                    color: #fff;
                    font-size: 18px;
                }
                span {
                    margin-left: 15px;
                    color: #fff;
                    font-size: 16px;
                }
            }
            .control {
                display: flex;
                justify-content: space-between;
                width: 15%;
                color: #fff;
                font-size: 18px;
            }
        }
    }
    
    .wl-detail-banner {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: skyblue;
        height: 250px;
        padding: 80px 20px 0;
        .banner-info {
            display: flex;
            flex-direction: column;
            .tags {
                color: #fff;
                font-size: 14px;
            }
            .up-time {
                color: #fff;
                font-size: 14px;
            }
        }
        .control-button {
            display: flex;
            justify-content: space-around;
            li {
                display: flex;
                flex-direction: column;
                text-align: center;
                i {
                    color: #fff;
                    font-size: 16px;
                }
                span {
                    margin-top: 8px;
                    color: #fff;
                }
            }
        }
    }
    
    .wl-play-list {
        padding: 0 10px;
        .title {
            display: flex;
            justify-content: space-between;
            padding: 15px 0;
            .title-left {
                p {
                    display: inline-block;
                    font-size: 14px;
                    span {
                        color: #e0e0e0;
                    }
                }
            }
        }
        .rank {
            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0;
            }
            .rank-left {
                .ranking {
                    span {
                        color: red;
                        font-size: 14px;
                        margin-bottom: 4px;
                    }
                }
            }
            .rank-right {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-basis: 88%;
                .songs-name {
                    p {
                        font-size: 16px;
                        span {
                            color: #d5d5d5;
                            font-size: 16px;
                        }
                    }
                    .singer-info {
                        margin-top: 8px;
                        .hot {
                            border: 1px solid red;
                            color: red;
                            font-size: 8px;
                        }
                        span {
                            color: #d5d5d5;
                        }
                    }
                }
                i.fa {
                    color: #d5d5d5;
                }
            }
        }
    }
</style>