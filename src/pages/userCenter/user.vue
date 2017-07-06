<template>
  <div>
    <navTop>
    </navTop>
    <router-view></router-view>
    <section class="jem-main">
      <ul class="jem-my-content">
        <li class="jem-user-info">
          <img class="jem-head" src="./my-head.png" alt="fff">
          <div class="jem-user-content">
            <p class="jem-user-name">小草的幽思</p>
            <ul>
              <li class="jem-detail-info">动态6</li>
              <li class="jem-detail-info">关注8</li>
              <li class="jem-detail-info">粉丝15</li>
              <li></li>
              <li></li>
              <li>随便听听</li>
            </ul>
          </div>
        </li>
  
        <li class="jem-music-state jem-my">
            <img class="local-music-icon" src="./my-local-music-icon.png" alt="fff">
            
            <p class="clearfix">
          <router-link to="/user/local">
              本地音乐
              <span>207首</span>
              <i class="fa fa-play-circle-o pull-right"></i>
          </router-link>
              
            </p>
        </li>
  
        <li class="jem-recent-play jem-my">
          <img class="local-music-icon" src="./my-recent-play-icon.png" alt="fff">
          <p class="clearfix">
            <router-link to="/user/latest">
            
            最近播放
            <span>共34首，8首离线可播</span>
            <i class="fa fa-angle-right pull-right"></i>
            </router-link>
          </p>
        </li>
        <li class="jem-mydownload jem-my">
          <img class="local-music-icon" src="./my-download-icon.png" alt="fff">
          <p class="clearfix">我的下载
            <span>一首</span>
            <i class="fa fa-angle-right pull-right"></i>
          </p>
        </li>
        <li class="jem-self-list">
          <p class="list-title clearfix">自建歌单
            <span class="pull-right">+新建</span>
          </p>
          <div class="star">
            <img src="./my-star.png" alt="fff">
            <div class="what-i-like">
              <p>我喜欢的单曲</p>
              <span>0首</span>
            </div>
            <i class="fa fa-angle-right"></i>
          </div>
        </li>
        <li class="jem-my-collect">
          <div class="collect-title">
            <p>我的收藏</p>
            <ul>
              <li class="song-list">歌单</li>
              <li class="album">专辑</li>
              <li class="singer">歌手</li>
            </ul>
          </div>
          <p class="words">
            <img src="./my-collect-icon.png" alt="fff"> 碰到喜欢的内容，收藏一下就不会丢失啦
          </p>
        </li>
  
      </ul>
  
    </section>
  </div>
</template>

<script>
import navTop from '../../components/J_navTop/navTop'

export default {
  components: {
    navTop: navTop,

  },
}
</script>

<style lang="scss">
@import '../../scss/_H_user.scss';
</style>
