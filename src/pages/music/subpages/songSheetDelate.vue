<!--歌单详情数据加载-->
<!--作者：Lewis-->
<template>
  <div>
    <div class="wyf-header">
      <div class="wyf-header-left">
        <router-link class="fonts" to="/music/songSheet"><span class="fa fa-arrow-left"></span>歌单</router-link>
      </div>
      <ul class="wyf-header-right">
        <li class="fa fa-search"></li>
        <li class="fa fa-ellipsis-v"></li>
      </ul>
    </div>
    <template v-if="isShow">


      <div class="song-detail">
         <div class="global-bg song-bg">
            <div class="mark"></div>
            <img class="main-bg" :src="detail.coverImgUrl" alt/>
          </div>
        <div class="song-detail-top">
          <div class="songimg-wrap">
            <img :src="detail.coverImgUrl" alt="">
            <span class="listencount"><i class="fa fa-headphones"></i>{{Math.floor(detail.playCount/10000)}}万</span>
            <span class="icons fa fa-clock-o"></span>
          </div>
          <div class="songcontent">
            <div class="songsheet-title">{{detail.name}}</div>
            <div class="songsheet-user">
              <div class="wrapper">
                <img :src="detail.creator.avatarUrl" alt="">
              </div>
              <span class="user-name">{{detail.creator.nickname}}<i class="fa fa-angle-right"></i></span>

            </div>
          </div>

        </div>

        <ul class="song-detail-bottom">
          <li><i class="fa fa-folder-o"></i><span>{{detail.subscribedCount}}</span></li>
          <li><i class="fa fa-commenting-o"></i><span>{{detail.commentCount}}</span></li>
          <li><i class="fa fa-link"></i><span>{{detail.shareCount}}</span></li>
          <li><i class="fa fa-download"></i><span>下载</span></li>
        </ul>

      </div>


      <div class="all-song-list">
        <ul class="play-list">
          <li class="play-all"><i class="fa fa-play-circle-o"></i>播放全部<span class="song-all">(共<span>{{tracks.length}}</span>首)</span>
          </li>
          <li class="more-choose"><i class="fa fa-list-ul"></i>多选</li>
        </ul>

        <div v-for="item,index in tracks" @click="changeMusicId(item.id)">
          <div class="songs-name">
            <div class="num">{{index+1}}</div>
            <div class="songs-detail">
              <div class="songs-wrap">
                <h2 class="songs-detail-name">{{item.name}}</h2>
                <p class="songs-detail-singer">{{item.ar[0].name}}-{{item.al.name}}</p>
              </div>
              <span class="more-menu fa fa-ellipsis-v"></span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <loading v-if="!isShow"></loading>
    <my-footer class="song-footer"></my-footer>
  </div>
</template>
<script>
  import loading from '../../../components/loading'
  import footer from '../../../components/Footer/Footer'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      loading,
      'my-footer': footer
    },
    data() {
      return {
        id: this.$route.params.id,
        detail: {},
        tracks: [],
        isShow: false
      }
    },
    created() {
      this.$http.get('http://localhost:3000/playlist/detail?id='+this.id)
        .then(data => {
          // console.log(data)
          this.detail = data.data.playlist;
          this.tracks = this.detail.tracks;
          this.isShow = true;
        })
    },
    methods: {
      ...mapMutations([
        'changeMusicId'
      ])
    }
  }

</script>
<style lang="scss">
  body {
    position: relative;
    background-image: none;
    .song-footer {
       .global-bg {
         display: none;
      }
    }
    .wyf-header {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 10px;
      background: rgba(0, 0, 0, .4);
      z-index: 5;
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
      padding:40px 10px 10px;
      .song-bg {
       display:block;
       .mark {
          position:absolute;
          background: rgba(0, 0, 0, 0.3);
       }
       .main-bg {
          position:absolute;
        }
       }
      .song-detail-top {
        display: flex;
        align-items: center;
        .songimg-wrap {
          position: relative;
          width: 260px;
          img {
            width: 100%;
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
            line-height: 26px;
            color: white;
            font-size: 20px;
            margin-bottom: 30px;
          }
          .songsheet-user {
            display: flex;
            align-items: center;
            .wrapper {
              width: 30px;
              height: 30px;
              img {
                width: 100%;
                margin-right: 10px;
                border-radius: 15px;
              }
            }
            span {
              margin: 0 10px;
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
          i {
            margin-bottom: 5px;
          }
        }
      }
    }

    .all-song-list {
      background-color: white;
      .play-list {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #eee;
        li.play-all {
          font-size: 14px;
          i {
            font-size: 16px;
            margin-right: 10px;
          }
          .song-all {
            color: #666;
          }
        }
      }
      .songs-name {
        display: flex;
        padding: 10px 0 0 10px;
        .num {
          padding: 10px;
        }
        .songs-detail {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding-right: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
          .songs-wrap {
            margin-left: 10px;
            .songs-detail-name {
              margin-bottom: 5px;
              font-size: 16px;
            }
            .songs-detail-singer {
              color: #666;
            }
          }
          .more-menu {
            margin-top: 10px;
            color: #666;
          }
        }
      }
    }
  }

</style>
