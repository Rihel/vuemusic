<template>
  <div>
    <div class="wl-header">
      <div class="wl-header-top">
        <div class="container">
          <div class="wl-location"><router-link to="/"><i class="fa fa-chevron-left fa-fw"></i></router-link>本地歌曲</div>

          <div class="wl-nav">
            <div class="wl-search"><i class="fa fa-search"></i></div>
            <i class="fa fa-list"></i>
          </div>
        </div>
      </div>
      <div class="wl-tabs ">
        <ul class="wl-tab-list">
          <li>歌曲</li>
          <li>文件夹</li>
          <li class="active">歌手</li>
          <li>专辑</li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <ul class="wl-singer">
          <li>
            <div class="wl-singer-info">
              <img src="../../../assets/img/wl-singer1.jpg" alt="">
              <div class="wl-singer-content">
                <p>陈奕迅</p>
                <span>3首</span>
              </div>
            </div>
            <div class="wl-icon-message">
              <img src="../../../assets/img/singer-more.png" alt="">
            </div>
          </li>
          <li>
            <div class="wl-singer-info">
              <img src="../../../assets/img/wl-singer2.jpg" alt="">
              <div class="wl-singer-content">
                <p>苏打绿</p>
                <span>8首</span>
              </div>
            </div>
            <div class="wl-icon-message">
              <img src="../../../assets/img/singer-more.png" alt="">
            </div>
          </li>
          <li>
            <div class="wl-singer-info">
              <img src="../../../assets/img/wl-singer3.jpg" alt="">
              <div class="wl-singer-content">
                <p>王力宏</p>
                <span>15首</span>
              </div>
            </div>
            <div class="wl-icon-message">
              <img src="../../../assets/img/singer-more.png" alt="">
            </div>
          </li>
          <li>
            <div class="wl-singer-info">
              <img src="../../../assets/img/wl-singer4.jpg" alt="">
              <div class="wl-singer-content">
                <p>张震岳</p>
                <span>20首</span>
              </div>
            </div>
            <div class="wl-icon-message">
              <img src="../../../assets/img/singer-more.png" alt="">
            </div>
          </li>
          <li>
            <div class="wl-singer-info">
              <img src="../../../assets/img/wl-singer5.jpg" alt="">
              <div class="wl-singer-content">
                <p>张靓颖</p>
                <span>6首</span>
              </div>
            </div>
            <div class="wl-icon-message">
              <img src="../../../assets/img/singer-more.png" alt="">
            </div>
          </li>
          <li>
            <div class="wl-singer-info">
              <img src="../../../assets/img/wl-singer6.jpg" alt="">
              <div class="wl-singer-content">
                <p>张杰</p>
                <span>5首</span>
              </div>
            </div>
            <div class="wl-icon-message">
              <img src="../../../assets/img/singer-more.png" alt="">
            </div>
          </li>
          <li>
            <div class="wl-singer-info">
              <img src="../../../assets/img/wl-singer7.jpg" alt="">
              <div class="wl-singer-content">
                <p>TF boy</p>
                <span>2首</span>
              </div>
            </div>
            <div class="wl-icon-message">
              <img src="../../../assets/img/singer-more.png" alt="">
            </div>
          </li>

        </ul>
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
  /*
    singer style 
    author:hubvues 王龙
*/

  .wl-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 51;
  }

  .wl-header .fa {
    color: #fff;
    font-size: 18px;
  }

  .wl-header .wl-header-top {
    padding: 10px 0;
    background: #b30000;
  }

  .wl-header .wl-header-top .container {
    display: flex;
    justify-content: space-between;
  }

  .wl-header .wl-header-top .wl-location {
    margin-left: -8px;
    font-size: 18px;
    color: #fff;
  }

  .wl-header .wl-header-top .wl-nav {
    display: flex;
    justify-content: center;
  }

  .wl-header .wl-header-top .wl-nav .wl-search {
    margin-right: 15px;
  }

  .wl-header .wl-tabs {
    background: #f7f2ec;
  }

  .wl-header .wl-tabs .wl-tab-list {
    display: flex;
    justify-content: space-between;
  }

  .wl-header .wl-tabs .wl-tab-list li {
    width: 25%;
    padding: 15px 0;
    border-bottom: 2px solid transparent;
    font-size: 16px;
    text-align: center;
  }

  .wl-header .wl-tabs .wl-tab-list li:hover,
  .wl-header .wl-tabs .wl-tab-list li.active {
    border-bottom-color: #b30000;
    color: #b30000;
  }

  .main {
    position: relative;
    margin-top: 87px;
  }



  .wl-singer {
    position: relative;
    z-index: 50;
  }

  .wl-singer li {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    width: 100%;
    border-bottom: 1px solid #b4b4ae;
  }

  .wl-singer li .wl-singer-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wl-singer li .wl-singer-info img {
    max-width: 66px;
    height: 66px;
    /* filter: blur(1px); */
  }

  .wl-singer li .wl-singer-content {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin-left: 10px;
  }

  .wl-singer li .wl-singer-content p {
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .wl-singer li .wl-singer-content span {
    color: #414141;
    font-size: 14px;
  }

  .wl-singer li .wl-icon-message {
    display: flex;
    align-items: center;
  }

  .wl-singer li .wl-icon-message img {
    width: 30px;
    height: 30px;
  }

</style>
