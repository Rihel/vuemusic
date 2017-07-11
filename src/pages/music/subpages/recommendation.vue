<template>
  <!--推荐页面-->
  <!--作者：Lewis-->
  <div>
    <template v-if="isShow">
      <banner :banners="musicData.banners"></banner>
      <div class="zql-content">
        <div class="zql-items">
          <figure>
            <lazy-image :src="require('../../../assets/img/radio.png')" alt=""></lazy-image>
            <figcaption>每日歌曲推荐</figcaption>
          </figure>
          <figure>
            <lazy-image :src="require('../../../assets/img/MICROPHONE.png')" alt=""></lazy-image>
            <figcaption>歌手</figcaption>
          </figure>
          <figure>
            <lazy-image :src="require('../../../assets/img/book.png')" alt=""></lazy-image>
            <figcaption>歌曲分类</figcaption>
          </figure>
        </div>
        <div class="zql-sings">
          <div class="zql-title">
            <h3> <img src="../../../assets/img/music.png" alt="">推荐歌单</h3>
            <a class="zql-more" href="#">更多 <i class="fa fa-angle-right"></i></a>
          </div>
          <div class="zql-s-items">

            <figure v-for="item,index in musicData.personalized">
              <router-link :to="'/songSheetDelate/'+item.id">
                <div class="zql-count">
                  <i class="fa fa-headphones"></i><span>{{Math.floor(item.playCount/10000)+'万'}}</span>
                </div>
                <lazy-image :src="item.picUrl"></lazy-image>
                <figcaption class="textEllipsis">{{item.name}}</figcaption>
              </router-link>
            </figure>

          </div>
          <div class="zql-title">
            <h3> <img src="../../../assets/img/music.png" alt="">独家放送</h3>
            <a class="zql-more" href="#">更多 <i class="fa fa-angle-right"></i></a>
          </div>
          <div class="zql-s-items private">
            <figure v-for="item,index in musicData.private">
              <lazy-image :src="item.sPicUrl"></lazy-image>
              <figcaption class="textEllipsis">{{item.name}}</figcaption>
            </figure>
          </div>
          <div class="zql-title">
            <h3> <img src="../../../assets/img/music.png" alt="">最新音乐</h3>
            <a class="zql-more" href="#">更多 <i class="fa fa-angle-right"></i></a>
          </div>
          <div class="zql-s-items new">
            <figure v-for="item,index in musicData.newsongs">
              <lazy-image :src="item.song.album.picUrl"></lazy-image>
              <figcaption class="textLine">{{item.name}}
                <p class="sub-title">{{item.song.artists[0].name}}</p>
              </figcaption>
            </figure>
          </div>
          <div class="zql-title">
            <h3> <img src="../../../assets/img/music.png" alt="">推荐MV</h3>
            <a class="zql-more" href="#">更多 <i class="fa fa-angle-right"></i></a>
          </div>
          <div class="zql-s-items mv">
            <figure v-for="item,index in musicData.mv">
              <lazy-image :src="item.picUrl"></lazy-image>
              <figcaption class="textLine">{{item.name}}
                <p class="sub-title">{{item.artistName}}</p>
              </figcaption>
            </figure>
          </div>
          <div class="zql-title">
            <h3> <img src="../../../assets/img/music.png" alt="">推荐节目</h3>
            <a class="zql-more" href="#">更多 <i class="fa fa-angle-right"></i></a>
          </div>
          <div class="zql-s-items program">
            <figure v-for="item,index in musicData.programs">
              <figcaption>{{item.name}}
                <p class="sub-title">阅读 {{item.listenerCount}}</p>
              </figcaption>
              <div class="sub-pic">
                <lazy-image :src="item.coverUrl"></lazy-image>
              </div>
            </figure>
          </div>
          <div class="zql-title">
            <h3> <img src="../../../assets/img/music.png" alt="">主播电台</h3>
            <a class="zql-more" href="#">更多 <i class="fa fa-angle-right"></i></a>
          </div>
          <div class="zql-s-items dj">
            <figure v-for="item,index in musicData.djs">
              <div class="zql-name">
                <lazy-image :src="item.picUrl"></lazy-image>
                <p>{{item.program.dj.nickname}}</p>
              </div>
              <figcaption class="textEllipsis">{{item.name}}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </template>
    <loading v-if="!isShow"></loading>
  </div>
</template>

<script>
import banner from '../../../components/banner'
import lazyImage from '../../../components/lazyImage'
import loading from '../../../components/loading'
import { mapActions, mapState } from 'vuex'
export default {
  components:{
    banner,
    'lazy-image':lazyImage,
    loading,
  },
 computed:{
   ...mapState({
     musicData:state=>state.music.musicData,
     isShow:state=>state.music.isShow
   })
 },
  methods: {
        ...mapActions([
            'getMusicData'
        ])
    },
   created() {
     this.getMusicData();
    },
}
</script>

<style lang="scss">
  @import "../../../assets/scss/_common.scss";

</style>
