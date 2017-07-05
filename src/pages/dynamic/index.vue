<template>
  <div>
    <tou></tou>
    <div class="main ">
      <div class="wl-dynamic">
        <div class="wl-banner">
          <ul>
            <li>
              <a href="#">
                <img src="../../assets/img/wl-dynamic.jpg" alt="">
              </a>
              <div class="mark">
                <div class="info">
                  <h3>#你最想看谁的演唱会?</h3>
                  <span>已有167人加入</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="container">
          <div class="wl-hot-topic">
            <div class="titles">
              <h2>热门话题</h2>
              <a class="more" href="">
                更多
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
            <div class="wl-topic">
              <figure>
                <figcaption class="mark">#你单曲循环最多的是哪一首歌呢？</figcaption>
                <a href="#">
                  <img src="../../assets/img/wl-dynamic1.jpg" alt="">
                </a>
              </figure>
              <figure>
                <figcaption class="mark">#你单曲循环最多的是哪一首歌呢？</figcaption>
                <a href="#">
                  <img src="../../assets/img/wl-dynamic3.jpg" alt="">
                </a>
              </figure>
            </div>
            <ul class="wl-topic-list">
              <li>
                <div class="title">
                  <figure>
                    <img src="../../assets/img/wl-dynamic-user.png" alt="">
                    <div class="wl-content">
                      <figcaption>欢乐颂音乐带你发现世界</figcaption>
                      <span>11-29</span>
                    </div>
                  </figure>
                  <div class="fous">
                    <span>
                      <i>+</i> 关注</span>
                  </div>
                </div>
                <article>
                  <p>今天是钟汉良欧巴的生日！想不起来是什么时候开始关注他的作品， 不例外的从电视剧电影里认识他，从而了解原来他还是歌手，并且 获得不少奖项!
                  </p>
                  <p>唱跳俱佳，影视双栖，用对演艺事业的不懈追求书写小太阳的耀眼 荣光
                  </p>
                </article>
                <div class="wl-tag">
                  <span>#手拉手一起做歌单</span>
                </div>
                <div class="wl-share-imgs">
                  <div class="imgs-left">
                    <img src="../../assets/img/wl-dynamic4.jpg" alt="">
                  </div>
                  <div class="imgs-right">
                    <a href="">
                      <img src="../../assets/img/wl-dynamic5.jpg" atl>
                    </a>
                    <a href="">
                      <img src="../../assets/img/wl-dynamic6.jpg" atl>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
  
          </div>
        </div>
      </div>
    </div>
    <jiao></jiao>
  </div>
</template>

<script>
import '../../assets/css/wl-dynamic.css'
import tou from '../../components/Header/Header'
import jiao from '../../components/Footer/Footer'
export default {
  components: {
    tou,
    jiao
  },
}
</script>
