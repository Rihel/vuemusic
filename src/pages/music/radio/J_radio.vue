<template>
    <div>
        <header>
            <ul class="nav">
                <li class="sub-nav">
                    <i class="fa fa-bars"></i>
                </li>
                <li>我的</li>
                <li class="active">音乐</li>
                <li>动态</li>
                <li class="search-nav">
                    <i class="fa fa-search"></i>
                </li>
            </ul>
        </header>
    
        <section class="yao-radio-main">
            <ul class="main-nav">
                <li>热门推荐</li>
                <li>榜单</li>
                <li>歌单</li>
                <li class="active">电台</li>
            </ul>
            <div class="main-content">
                <banner> </banner>
                <div class="classify">
                    <div class="raido-recommend radio-classify">
                        <img src="./radio-radio.png" alt="fff">
                        <p>每日歌曲推荐</p>
                    </div>
                    <div class="raido-recommend radio-ranking">
                        <img src=".//radio-microphone.png" alt="fff">
                        <p>歌手</p>
                    </div>
                </div>
                <div class="radio-type" v-for="item,index in radioType">
                    <div class=" radio-title">
                        {{item[0].category}}
                        <i class="fa fa-angle-right"></i>
                    </div>
                    <div class="recommend-radioItem">
                        <figure class="recommend-item" v-for="items,indexs in item" v-if="indexs<3">
                            <img :src="items.picUrl">
                            <figcaption>
                                {{items.name}}
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    
        <footer>
            <img class="yao-cover" src="./my-cover.png" alt="">
            <div class="yao-song-info">
                <p class="yao-song-name">不该（with AMEI）</p>
                <p class="yao-song-singer">周杰伦</p>
            </div>
            <div class="yao-play-ctrl">
                <i class="fa fa-play"></i>
                <i class="fa fa-step-forward"></i>
                <i class="fa fa-list"></i>
            </div>
        </footer>
    </div>
</template>

<script>
import banner from '../../../components/music/radio/banner/banner'


export default {
    components: {
        banner: banner,
    },

    data() {
        return {
            total: '',
            radioType: [],
        }
    },
    created() {
        this.$http.get('http://localhost:3000/dj/catelist')
            .then(function (data) {
                this.total = data.body.categories.length;
            })
            .then(function () {
                for (var i = 0; i < this.total + 1; i++) {
                    this.$http.get('http://localhost:3000/dj/recommend/type?type=' + i)
                        .then(function (data) {
                            if (data.body.djRadios.length > 0) {
                                this.radioType.push(data.body.djRadios)
                            }
                        });
                }
                console.log(this.radioType)

            })




    },

}


</script>

<style lang="scss">
@import '../../../scss/_J_radio.scss';
</style>