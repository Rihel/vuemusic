<template>
  <div>
    <img class="main-bg" src="../../assets/img/bg.png" alt="">
    <tou></tou>
    <div class="wzx-main clearfix">
      <div class="main-user clearfix">
        <img src="../../assets/img/user-face.png" alt="">
        <div class="user-content">
          <h2>小草的幽思</h2>
          <span>动态 6</span>
          <i>|</i>
          <i>关注 8</i>
          <span>|</span>
          <span>粉丝 15</span>
        </div>
        <span class="walkaw">随便听听</span>
      </div>
      <ul class="main-top clearfix">
        <li>
          <img class="icon" src="../../assets/img/MUSIC-NOTE.png" alt="">
          <div class="music-room clearfix">
            <router-link to="/used/local">
              <h2>本地音乐</h2>
            </router-link>
            <span>207首</span>
          </div>
          <img class="icon2" src="../../assets/img/play.png" alt="">
        </li>
        <li>
          <img class="icon" src="../../assets/img/clock.png" alt="">
          <div class="music-room clearfix">
            <router-link to="/used/played">
              <h2>最近播放</h2>
            </router-link>
            <span>共34首，8首离线可播</span>
          </div>
          <i class="icon3 fa fa-chevron-right"></i>
        </li>
        <li>
          <img class="icon" src="../../assets/img/MUSIC-NOTE.png" alt="">
          <div class="music-room clearfix">
            <h2>我的下载</h2>
            <span>一首</span>
          </div>
          <i class="icon3 fa fa-chevron-right"></i>
        </li>
      </ul>
      <ul class="main-bottom clearfix ">
        <li>
          <h3>自建歌单</h3>
          <img src="../../assets/img/heard.png" alt="">
          <h2>我喜欢的单曲</h2>
          <span class="song-num">0 首</span>
          <span class="song-new">+ 新建</span>
          <i class="icon3 fa fa-chevron-right"></i>
        </li>
        <li class="li2 clearfix">
          <h2 class="good-h2">我的收藏</h2>
          <div class="spans clearfix">
            <span>歌单</span>
            <span>|</span>
            <span>专辑</span>
            <span>|</span>
            <span>歌手</span>
          </div>
          <div class="good-tip clearfix">
            <p>
              <img src="../../assets/img/star.png" alt="">碰到喜欢的内容，收藏一下就不会丢失啦</p>
          </div>
          <i class="icon3 icon4 fa fa-chevron-right"></i>
        </li>
      </ul>
      <ul class="main-bottom clearfix ">
        <li>
          <h3>自建歌单</h3>
          <img src="../../assets/img/heard.png" alt="">
          <h2>我喜欢的单曲</h2>
          <span class="song-num">0 首</span>
          <span class="song-new">+ 新建</span>
          <i class="icon3 fa fa-chevron-right"></i>
        </li>
        <li class="li2 clearfix">
          <h2 class="good-h2">我的收藏</h2>
          <div class="spans clearfix">
            <span>歌单</span>
            <span>|</span>
            <span>专辑</span>
            <span>|</span>
            <span>歌手</span>
          </div>
          <div class="good-tip clearfix">
            <p>
              <img src="../../assets/img/star.png" alt="">碰到喜欢的内容，收藏一下就不会丢失啦</p>
          </div>
          <i class="icon3 icon4 fa fa-chevron-right"></i>
        </li>
      </ul>
      <ul class="main-bottom clearfix ">
        <li>
          <h3>自建歌单</h3>
          <img src="../../assets/img/heard.png" alt="">
          <h2>我喜欢的单曲</h2>
          <span class="song-num">0 首</span>
          <span class="song-new">+ 新建</span>
          <i class="icon3 fa fa-chevron-right"></i>
        </li>
        <li class="li2 clearfix">
          <h2 class="good-h2">我的收藏</h2>
          <div class="spans clearfix">
            <span>歌单</span>
            <span>|</span>
            <span>专辑</span>
            <span>|</span>
            <span>歌手</span>
          </div>
          <div class="good-tip clearfix">
            <p>
              <img src="../../assets/img/star.png" alt="">碰到喜欢的内容，收藏一下就不会丢失啦</p>
          </div>
          <i class="icon3 icon4 fa fa-chevron-right"></i>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <jiao></jiao>
  </div>
</template>

<script>
import tou from '../../components/Header/Header'
import jiao from '../../components/Footer/Footer'
export default {
components: {
    tou,
    jiao
  },
    }
</script>
