<template>
    <div>
        <banner :banners="banners"></banner>
        <div class="classify">
            <div class="classify-item">
                <img src="./icon1.png" />
                <span>每日歌曲推荐</span>
            </div>
            <div class="classify-item">
                <img src="./icon2.png" />
                <span>每日歌曲推荐</span>
            </div>
            <div class="classify-item">
                <img src="./icon3.png" />
                <span>每日歌曲推荐</span>
            </div>
        </div>
        <div class="recommend-item">
            <div class="title">
                <div class="title-left">
                    <i class="fa fa-music"></i>
                    <span>推荐歌单</span>
                </div>
                <div class="title-right">
                    更多
                    <i class="fa fa-angle-right"></i>
                </div>
            </div>
            <div class="list">
                <figure class="item" v-for="item,index in personalized ">
                    <img :src="item.picUrl" />
                    <figcaption>
                        {{item.name}}
                    </figcaption>
                </figure>
            </div>
        </div>
        <div class="recommend-item">
            <div class="title">
                <div class="title-left">
                    <i class="fa fa-music"></i>
                    <span>推荐音乐</span>
                </div>
                <div class="title-right">
                    更多
                    <i class="fa fa-angle-right"></i>
                </div>
            </div>
            <div class="list">
                <figure class="item" v-for="item,index in newsong ">
                    <img :src="item.picUrl" />
                    <figcaption>
                        {{item.name}}
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
import banner from "../../../components/banner";
export default {
    name: 'app',
    components: {
        banner,
    },
    data() {
        return {
            banners: [],
            personalized: [],
            newsong: []
        }
    },
    created() {

        this.$http.get('http://localhost:3000/banner').
            then(data => {
                if (data.data.code === 200) {
                    console.log(data.data.banners)
                    this.banners = data.data.banners
                }
            });
        this.$http.get('http://localhost:3000/personalized')
            .then(data => {
                if (data.data.code === 200) {
                    console.log(data.data.result)
                    this.personalized = data.data.result
                }
            })
        this.$http.get('http://localhost:3000/personalized/newsong')
            .then(data => {
                if (data.data.code === 200) {
                    console.log(data.data.result)
                    this.newsong = data.data.result
                }
            })
        //    跨域  主机名或者端口号或者域名不一致的时候，通过ajax请求数据，则会被限制
        /*
            本地防护策略
        */
    }
}
</script>

<style lang="scss">
@import "../../../assets/scss/_var.scss";
.classify {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    .classify-item {
        width: 25%;
        padding: 10px 10px 0;
        text-align: center;
        display: flex;
        flex-direction: column;

        justify-content: space-between;
        img {
            max-width: 100%;
        }
        span {
            margin: 10px 0;
        }
    }
}

.recommend-item {
    padding: 10px;
    .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .title-left {

            i {
                color: $primary-color;
                padding-right: 4px;
                font-size: 1.1em;
            }
            span {
                font-size: 1.1em;
            }
        }
        .title-right {
            font-size: 1.1em;
            i {
                color: #222;
            }
        }
    }
    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
            width: 30%;
            margin-bottom: 10px;
            img {
                max-width: 100%;
            }
            figcaption {
                margin-top: 10px;
                height: 2.3em;
                line-height: 1.2;
                overflow: hidden;
            }
        }
    }
}
</style>
