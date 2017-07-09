<template>
  <div>
    <div class="yf-choose clearfix">
      <router-link to="/UserCenter"><i class="fa fa-angle-left"></i></router-link>
      <span>最近播放</span>
      <span class="yf-clear">清空</span>
    </div>
    <div class="yf-view">
      <div class="container">
        <div class="play-all">
          <i class="fa fa-play-circle-o"></i>
          <p>播放全部</p><span class="song-num">(共10首)</span>
        </div>

        <div class="song-list">
          <div class="song-content active">
            <div class="content-left">
              <h2>爱火花</h2>
              <h3>周笔畅 - 我是歌手第二季 第六期</h3>
            </div>
            <div class="content-right">···</div>
          </div>

          <div class="song-content">
            <div class="content-left">
              <h2>爱火花</h2>
              <h3>周笔畅 - 我是歌手第二季 第六期</h3>
            </div>
            <div class="content-right">···</div>
          </div>
          <div class="song-content">
            <div class="content-left">
              <h2>爱火花</h2>
              <h3>周笔畅 - 我是歌手第二季 第六期</h3>
            </div>
            <div class="content-right">···</div>
          </div>
          <div class="song-content">
            <div class="content-left">
              <h2>爱火花</h2>
              <h3>周笔畅 - 我是歌手第二季 第六期</h3>
            </div>
            <div class="content-right">···</div>
          </div>
          <div class="song-content">
            <div class="content-left">
              <h2>爱火花</h2>
              <h3>周笔畅 - 我是歌手第二季 第六期</h3>
            </div>
            <div class="content-right">···</div>
          </div>
          <div class="song-content">
            <div class="content-left">
              <h2>爱火花</h2>
              <h3>周笔畅 - 我是歌手第二季 第六期</h3>
            </div>
            <div class="content-right">···</div>
          </div>
          <div class="song-content">
            <div class="content-left">
              <h2>爱火花</h2>
              <h3>周笔畅 - 我是歌手第二季 第六期</h3>
            </div>
            <div class="content-right">···</div>
          </div>
          <div class="song-content">
            <div class="content-left">
              <h2>爱火花</h2>
              <h3>周笔畅 - 我是歌手第二季 第六期</h3>
            </div>
            <div class="content-right">···</div>
          </div>
          <div class="song-content">
            <div class="content-left">
              <h2>爱火花</h2>
              <h3>周笔畅 - 我是歌手第二季 第六期</h3>
            </div>
            <div class="content-right">···</div>
          </div>
        </div>
      </div>
    </div>
    <jiao></jiao>
  </div>
</template>

<script>
import jiao from '../../../components/Footer/Footer'
export default {
components: {
    jiao
  },
}
</script>

<style lang="">
  body {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }

  .yf-choose {
    position: relative;
    width: 100%;
    padding: 15px;
    background-color: #b30000;
  }

  .yf-choose i {
    margin-top: -5px;
    color: white;
    font-size: 16px;
  }

  .yf-choose span {
    margin-left: 40px;
    color: white;
    font-size: 16px;
  }

  .yf-choose .yf-clear {
    position: absolute;
    right: 5%;
    color: white;
    font-size: 16px;
  }



  .yf-view .play-all {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid #7b7978;
  }

  .yf-view .play-all i {
    font-size: 30px;
    color: #b30000;
  }

  .yf-view .play-all p {
    margin-top: 8px;
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  .yf-view .play-all .song-num {
    margin-top: 10px;
    font-size: 14px;
    color: #7b7978;
  }

  .yf-view .song-list .song-content {

    padding: 15px 0;
    border-bottom: 1px solid #7b7978;
  }

  .yf-view .song-list .song-content {
    display: flex;
    justify-content: space-between;
  }

  .yf-view .song-list .song-content .content-left h2 {
    font-size: 20px;
    font-weight: bold;
  }

  .yf-view .song-list .song-content .content-left h3 {
    margin-top: 5px;
    font-size: 16px;
  }

  .yf-view .song-list .active h2,
  .yf-view .song-list .active h3 {
    color: #b30000;
  }

  .yf-view .song-list .song-content .content-right {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    border: 1px solid #7b7978;
    line-height: 28px;
    text-align: center;
    border-radius: 15px;
    font-weight: bold;
  }





  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-left: 2px;
    padding-right: 22px;
    padding-bottom: 5px;
    background: rgba(255, 255, 255, .7);
  }

  .footer .footer-img {
    float: left;
    margin-right: 11px;
  }

  .footer .footer-img img {
    width: 36px;
    height: 36px;
  }

  .footer .song-main {
    float: left;
  }

  .footer .song-main h2 {
    line-height: 26px;
    font-size: 16px;
    font-weight: bold;
  }

  .footer .song-main span {
    color: #2b2a29;
    font-size: 12px;
  }

  .footer .icons {
    float: right;
    margin-top: 13px;
  }

  .footer .icons i {
    margin-left: 20px;
    color: #b30000;
    font-size: 20px;
  }

</style>
