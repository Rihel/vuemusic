<!--
    author:hubvues
-->
<template>
<div class="wl-lists-rank">

  <div class="wl-detail">
    <div class="wl-meun">
      <router-link to="/music/lists">
        <div class="go-back">
          <i class="fa fa-arrow-left"></i>
          <span>{{idxUser.listName}}</span>
        </div>
      </router-link>
      <div class="control">
        <i class="fa fa-search"></i>
        <i class="fa fa-ellipsis-v"></i>
      </div>
    </div>
  </div>
  <div class="wl-detail-banner">
    <div class="banner-info">
      <span class="tags">云音乐</span>
      <img :src='idxUser.picUrl' alt="">
    <i class="fa fa-info-circle  description" @click="isShowInfo=!isShowInfo">
      <p v-if="isShowInfo">{{description}}<i class="fa fa-caret-up fa-3x"></i></p>
    </i>
      <span class="up-time">最近更新：7月3日</span>

    </div>
    <ul class="control-button">
      <li>
        <i class="fa fa-folder-o"></i>
        <span>{{idxUser.subscribedCount}}万</span>
      </li>
      <li>
        <i class="fa fa-commenting-o"></i>
        <span>{{idxUser.commentCount}}</span>
      </li>
      <li>
        <i class="fa fa-share-alt"></i>
        <span>{{idxUser.shareCount}}</span>
      </li>
      <li>
        <i class="fa fa-download"></i>
        <span>下载</span>
      </li>
    </ul>
  </div>
  <ul class="wl-play-list">
    <div class="title">
      <div class="title-left">
        <i class="fa fa-play-circle-o"></i>
      </div>
      <div class="title-right">
       
        <p>播放全部
          <span>（共{{idx.length}}首）</span>
        </p>
        <span>
            <i class="fa fa-list-ul"></i> 多选</span>

      </div>
    </div>
     
    <ul class="rank">
      <li v-for="item,index in idx">
        <div class="rank-left">
          <div class="ranking">
            <i class="fa"></i>
            <span :class="index+1<4? 'active':''">{{index+1}}</span>
            <!-- <p>
               <i class="fa fa-arrow-up"></i>{{item.score}}%</p>  -->
          </div>
        </div>
        <div class="rank-right">
          <div class="songs-name">
            <p class="textLine">
              <span>{{item.name}}</span>{{item.alia[0]}}
            </p>
            <div class="singer-info textLine">
              <span class="hot">SQ</span> {{item.ar[0].name}} - {{item.al.name}}
            </div>
          </div>
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </li>
    </ul>
  </ul>
  <loading v-if="!isShow"></loading>
  <playbox></playbox>
</div>
</template>
<script>
import loading from '../../../components/loading';
import playbox from '../../../components/Footer/Footer';
export default {
  components: {
    loading,
    
    playbox,

  },
  data() {
    return {
      isShowInfo:false,
      id: this.$route.params.id,
      idx: [],
      isShow:false,
      description:'',
      idxUser: {
        abulmName: '',
        listName: '',
        picUrl: '',
        shareCount: '',
        subscribedCount: '',
        commentCount: ''
      }
    }
  },
  created() {

    this.$http.get('http://localhost:3000/playlist/detail?id=' + this.id)
      .then(datas => {

       
        this.description= datas.data.playlist.description;
        this.idxUser.listName = datas.data.playlist.name;
        this.idxUser.picUrl = datas.data.playlist.coverImgUrl;
        this.idxUser.shareCount = datas.data.playlist.shareCount;
        // console.log(this.idxUser.shareCount)
        this.idxUser.subscribedCount = datas.data.playlist.subscribedCount;
        this.idxUser.commentCount = datas.data.playlist.commentCount;
        this.idxUser.subscribedCount = Math.floor(this.idxUser.subscribedCount / 10000);
        this.idx = datas.data.playlist.tracks;
        this.isShow = true;
      })

  }
}
</script>
<style lang="scss">
@import '../../../assets/scss/_common.scss';
body{
  background: #fff;
}
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
    padding: 15px;
    background: rgba(89, 219, 234, 1);
    z-index: 100;
    .go-back {
      i {
        color: #fff;
        font-size: 18px;
      }
      span {
        margin-left: 15px;
        color: #fff;
        font-size: 18px;
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
  height: 250px;
  padding: 50px 20px 0px;
  background: rgba(89, 219, 234, 1);
  .banner-info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 150px;
    img {
      position: absolute;
      top: 0px;
      width: 150px;
      height: 150px;
      z-index: 1;
    }
    .description{
      position: absolute;
      top:57%;
      left: 132px;
      color: #fff;
      font-size: 20px;
       z-index: 10;
       p{
         position: absolute;
         top: 30px;
         left: -142px;
        width: 300px;
         padding: 5px;
         line-height: 1.2em;
         background: rgba(0,0,0,.8);
         color: #fff;
         border-radius: 3px;
         i.fa-caret-up{
           position:absolute;
           top: -22px;
           left:50%;
           margin-left: -10px;
           color:rgba(0, 0, 0, .8);
         }
       }
    }
    span {
      text-indent: 15px;
    }
    .tags {
      color: #fff;
      font-size: 14px;
      z-index: 2;
    }
    .up-time {
      color: #fff;
      font-size: 14px;
      z-index: 2;
    }
  }
  .control-button {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    li {
      display: flex;
      flex-direction: column;
      text-align: center;
      i {
        color: #fff;
        font-size: 16px;
      }
      span {
        margin-top: 4px;
        color: #fff;
      }
    }
  }
}

.wl-play-list {
  
  .title {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
    .title-left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16%;
      i.fa-play-circle-o {
        color: #333;
        font-size: 20px;
      }
    }
    .title-right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-basis: 84%;
      padding-right: 10px;
      p {
        font-size: 16px;
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
    }
    .rank-left {
      width: 16%;
      .ranking {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;;
        width: 100%;
        height: 35px;
        span {
          color: #d5d5d5;
          font-size: 14px;
        }
        span.active {
          color: red;
        }
        p {
          color: #d5d5d5;
          font-size: 10px;
          i.fa {
            font-size: 8px;
            font-weight: 300;
          }
        }
      }
    }
    .rank-right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 84%;
      padding: 10px 20px 10px 0;
      border-bottom: 1px solid #eee;
      .songs-name {
        max-width: 95%;
        p {
          line-height: 1.5em;
          font-size: 14px;
          color: #d5d5d5;
          span {
            font-size: 14px;
            color: #333;
          }
        }
        .singer-info {
          width: 100%;
          line-height: 1.5em;
          color: #d5d5d5;
          .hot {
            border: 1px solid red;
            color: red;
            font-size: 8px;
          }
        }
      }
      i.fa {
        color: #d5d5d5;
        font-size: 18px;
      }
    }
  }
}
</style>
