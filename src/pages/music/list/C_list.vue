<template>
<!--音乐>歌单 的页面组件
作者：陈嘉验-->
    <main>
        <div class="container">
            <ul class="c-list">
                <li class="c-item">
                    <div class="c-billboard">
                        <div class="c-img">
                            <img src="C_list-1.png" alt="">
                            <i class="fa fa-play-circle-o"></i>
                        </div>
                        <dl>
                            <dt>新歌榜</dt>
                            <dd>
                                <span class="NO-1">1</span>告白气球　-　周杰伦</dd>
                            <dd>
                                <span class="NO-2">2</span>天若有情 - Lin</dd>
                            <dd>
                                <span class="NO-3">3</span>July - 吴亦凡</dd>
                        </dl>
                    </div>
                    <i class="fa fa-chevron-right c-more"></i>
                </li>
                <li class="c-item">
                    <div class="c-billboard">
                        <div class="c-img">
                            <img src="C_list-2.png" alt="">
                            <i class="fa fa-play-circle-o"></i>
                        </div>
                        <dl>
                            <dt>热歌榜</dt>
                            <dd>
                                <span class="NO-1">1</span>痛快的哀艳-苏打绿 </dd>
                            <dd>
                                <span class="NO-2">2</span>天若有情 - Lin</dd>
                            <dd>
                                <span class="NO-3">3</span>下完这场鱼-后弦 </dd>
                        </dl>
                    </div>
                    <i class="fa fa-chevron-right c-more"></i>
                </li>
                <li class="c-item">
                    <div class="c-billboard">
                        <div class="c-img">
                            <img src="C_list-3.png" alt="">
                            <i class="fa fa-play-circle-o"></i>
                        </div>
                        <dl>
                            <dt>华语金曲榜</dt>
                            <dd>
                                <span class="NO-1">1</span>那一年-许巍</dd>
                            <dd>
                                <span class="NO-2">2</span>演员-薛之谦</dd>
                            <dd>
                                <span class="NO-3">3</span>告白气球　-　周杰伦</dd>
                        </dl>
                    </div>
                    <i class="fa fa-chevron-right c-more"></i>
                </li>
                <li class="c-item">
                    <div class="c-billboard">
                        <div class="c-img">
                            <img src="C_list-4.png" alt="">
                            <i class="fa fa-play-circle-o"></i>
                        </div>
                        <dl>
                            <dt>影视金曲榜</dt>
                            <dd>
                                <span class="NO-1">1</span>大王叫我来巡山-贾乃亮 </dd>
                            <dd>
                                <span class="NO-2">2</span>下雨了-薛之谦</dd>
                            <dd>
                                <span class="NO-3">3</span>世间始终你好</dd>
                        </dl>
                    </div>
                    <i class="fa fa-chevron-right c-more"></i>
                </li>
            </ul>
        </div>
    </main>
</template>
<script>
export default {}
</script>
<style lang="scss">
main {
    background: url(./C_list-bg.png) no-repeat;
}

.c-list {
    .c-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 20px 10px;
        border-bottom: 1px solid #c4c3b6;
        .c-billboard {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .c-img {
                position: relative;
                margin-right: 20px;
                img {
                    width: 116px;
                    height: 116px;
                }
                .fa {
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                    font-size: 30px;
                    color: #fff;
                }
            }
        }
        dl {
            dt {
                margin-bottom: 20px;
                font-size: 18px;
                font-weight: bold;
            }
            dd {
                margin: 5px 0;
                font-size: 14px;
                span {
                    margin-right: 10px;
                    font-size: 14px;
                }
                .NO-1 {
                    color: red;
                }
                .NO-2 {
                    color: orangered;
                }
                .NO-3 {
                    color: orange;
                }
            }
        }
        .c-more {
            font-size: 24px;
            color: rgba(0, 0, 0, .4);
        }
    }
}
</style>

