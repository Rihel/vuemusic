<template>
    <!--音乐>歌单 的页面组件
        作者：陈嘉验-->
    <main>
        <div class="container">
            <ul class="c-top">
    
                <li class="c-item" v-for="item,index in newList">
                   <router-link :to="'/SubTop/'+item.body.result.id">
                        <div class="c-billboard">
                        <div class="c-img">
                            <img :src="item.body.result.coverImgUrl" alt="">
                            <i class="fa fa-play-circle-o"></i>
                        </div>
                        <dl>
                            <dt>{{item.body.result.name}}</dt>
                            <dd>
                                <span class="NO-1">1</span>{{item.body.result.tracks[0].name}} - {{item.body.result.tracks[0].artists[0].name}}</dd>
                            <dd>
                                <span class="NO-2">2</span>{{item.body.result.tracks[1].name}} - {{item.body.result.tracks[1].artists[0].name}}</dd>
                            <dd>
                                <span class="NO-3">3</span>{{item.body.result.tracks[2].name}} - {{item.body.result.tracks[2].artists[0].name}}</dd>
                        </dl>
                    </div>
                    <!--<i class="fa fa-chevron-right c-more"></i>-->
                   </router-link>
                </li>
    
            </ul>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            newList: [],
            
        }
    },
    created() {
        Promise.all([this.$http.get('http://localhost:3000/top/list?idx=0'),
        this.$http.get('http://localhost:3000/top/list?idx=1'),
        this.$http.get('http://localhost:3000/top/list?idx=2'),
        this.$http.get('http://localhost:3000/top/list?idx=3'),
        this.$http.get('http://localhost:3000/top/list?idx=4'),
        this.$http.get('http://localhost:3000/top/list?idx=5'),
        this.$http.get('http://localhost:3000/top/list?idx=6'),
        this.$http.get('http://localhost:3000/top/list?idx=7'),
        this.$http.get('http://localhost:3000/top/list?idx=8'),
        this.$http.get('http://localhost:3000/top/list?idx=9'),
        this.$http.get('http://localhost:3000/top/list?idx=10'),
        this.$http.get('http://localhost:3000/top/list?idx=11'),
        this.$http.get('http://localhost:3000/top/list?idx=12'),
        this.$http.get('http://localhost:3000/top/list?idx=13'),
        this.$http.get('http://localhost:3000/top/list?idx=14'),
        this.$http.get('http://localhost:3000/top/list?idx=15'),
        this.$http.get('http://localhost:3000/top/list?idx=16'),
        this.$http.get('http://localhost:3000/top/list?idx=17'),
        this.$http.get('http://localhost:3000/top/list?idx=18'),
        this.$http.get('http://localhost:3000/top/list?idx=19'),
        this.$http.get('http://localhost:3000/top/list?idx=20'),
        this.$http.get('http://localhost:3000/top/list?idx=21'),
        ])
            .then((datas) => {
                this.newList = datas;
            })
    },

}
</script>
<style lang="scss">
@import "../../../scss/_function.scss";

.c-top {
    width: 100%;
    margin: rem(150) 0 6rem;
    .c-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: rem(10) 0 rem(10) ;
        border-bottom: 1px solid #c4c3b6;
        .c-billboard {
            display: flex;
            max-width:95%;
            justify-content: space-between;
            align-items: center;
            .c-img {
                position: relative;
                margin-right: rem(30);
                img {
                    width: rem(216);
                    height: rem(216);
                }
                .fa {
                    position: absolute;
                    right: rem(10);
                    bottom: rem(10);
                    font-size: rem(80);
                    color: #fff;
                }
            }
        }
        dl {
            dt {
                margin-bottom: rem(30);
                font-size: rem(38);
                font-weight: bold;
            }
            dd {
                margin: rem(15) 0;
                font-size: rem(28);
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

