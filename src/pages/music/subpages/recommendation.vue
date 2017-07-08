<template>
  <div>
  
    <template v-if="isDone">
      <banner :banners="$store.state.banners"></banner>
      <div class="classify">
        <div class="classify-item">
          <lazy-image :src="require('./icon1.png')"></lazy-image>
          <span>每日歌曲推荐</span>
        </div>
        <div class="classify-item">
          <lazy-image :src="require('./icon2.png')"></lazy-image>
          <span>每日歌曲推荐</span>
        </div>
        <div class="classify-item">
          <lazy-image :src="require('./icon3.png')"></lazy-image>
          <span>每日歌曲推荐</span>
        </div>
      </div>
      <div class="recommend-item">
        <div class="title">
          <div class="title-left">
            <i class="fa fa-music"></i>
            <span>推荐歌单</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="list">
          <figure class="item" v-for="item,index in personalized ">
            <router-link :to="'/personalized/'+item.id">
              <lazy-image :src="item.picUrl"></lazy-image>
              <figcaption>
                {{item.name}}
              </figcaption>
            </router-link>
          </figure>
        </div>
      </div>
      <div class="recommend-item privatecontent">
        <div class="title">
          <div class="title-left">
            <i class="fa fa-music"></i>
            <span>独家放送</span>
            <i class="fa fa-angle-right"></i>
          </div>
  
        </div>
        <div class="list">
          <figure class="item" v-for="item,index in privatecontent ">
            <lazy-image :src="item.picUrl"></lazy-image>
            <figcaption>
              {{item.name}}
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="recommend-item mvs">
        <div class="title">
          <div class="title-left">
            <i class="fa fa-music"></i>
            <span>推荐MV</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="list">
          <figure class="item" v-for="item,index in mvs ">
            <lazy-image :src="item.picUrl"></lazy-image>
            <figcaption>
              <small> {{item.name}}</small>
              <span>{{item.artistName}}</span>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="recommend-item mvs">
        <div class="title">
          <div class="title-left">
            <i class="fa fa-music"></i>
            <span>推荐电台</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="list">
          <figure class="item" v-for="item,index in djprogram ">
            <lazy-image :src="item.picUrl"></lazy-image>
            <figcaption>
              <small> {{item.name}}</small>
              <span>{{item.artistName}}</span>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="recommend-item mvs">
        <div class="title">
          <div class="title-left">
            <i class="fa fa-music"></i>
            <span>推荐节目</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="list">
          <figure class="item" v-for="item,index in recommend ">
            <lazy-image :src="item.coverUrl"></lazy-image>
            <figcaption>
              <small> {{item.name}}</small>
              <span>{{item.artistName}}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </template>
    <loading v-if="!isDone"></loading>
  </div>
</template>

<script>
import banner from "../../../components/banner";
import lazyImage from "../../../components/lazyImage";
import loading from "../../../components/loading";
export default {
  name: 'app',
  components: {
    banner,
    'lazy-image': lazyImage,
    loading
  },
  data() {
    return {
      banners: [],
      personalized: [],
      newsong: [],
      privatecontent: [],
      mvs: [],
      djprogram: [],
      recommend: [],
      isDone: false
    }
  },

  created() {

    if (!this.isDone) {
      Promise.all([this.$http.get('http://localhost:3000/banner'),
      this.$http.get('http://localhost:3000/personalized'),

      this.$http.get('http://localhost:3000/personalized/privatecontent'),
      this.$http.get('http://localhost:3000/personalized/mv'),
      this.$http.get('http://localhost:3000/personalized/djprogram'),
      this.$http.get('http://localhost:3000/program/recommend')
      ])
        .then((datas) => {
          // console.log(datas);
          this.banners = datas[0].data.banners;
          this.personalized = datas[1].data.result;
          this.privatecontent = datas[2].data.result;
          this.mvs = datas[3].data.result;
          this.djprogram = datas[4].data.result;
          this.recommend = datas[5].data.programs;
          this.isDone = true;

        })
    }
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
  padding: 10px 0;
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

.privatecontent {
  .list {
    .item {
      width: 50%;
      padding: 10px 0;
      &:nth-of-type(3) {
        width: 100%;
      }
    }
  }
}

.mvs {
  .list {

    .item {
      width: 50%;
      &:nth-of-type(2n) {
        padding-left: 2px;
      }
      &:nth-of-type(2n-1) {
        padding-right: 2px;
      }
      figcaption {
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: auto;
        small {
          margin: 5px 0;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
