<template>
  <div>
    <img class="main-bg" src="../../assets/img/bg.png" alt="">
    <tou></tou>
    <div>
      <sub-nav :navs="subNavs"></sub-nav>
      <router-view></router-view>
    </div>
    <jiao></jiao>
  </div>
</template>

<script>
import tou from '../../components/Header/Header'
import jiao from '../../components/Footer/Footer'
import subNav from '../../components/subNav'

export default {
  components: {
    tou,
    jiao,
    'sub-nav': subNav
  },
      data() {
      return {
        subNavs: [{
            text: '热门推荐',
            path: './recommendation'
          },
          {
            text: '榜单',
            path: './lists'
          },
          {
            text: '歌单',
            path: './songSheet'
          },
          {
            text: '电台',
            path: './radioStation'
          }
        ]
      }
    }
  
}
</script>

<style lang="scss">
  // hubvus
.zql-songs-items {
    width: 100%;
    .wl-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        figure {
            display: flex;
            justify-content: space-between;
            .zql-lists-pic {
                position: relative;
                img {
                    width: 100%;
                }
                i {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    color: #fff;
                }
            }
            figcaption {
                p {
                    margin: 5px 0;
                    font-size: 16px;
                }
                span {
                    font-size: 13px;
                }
            }
        }
    }
    .title {
        margin-top: 10px;
        font-size: 18px;
    }
    .wl-global {
        padding-top: 10px;
         display: flex;
          justify-content: space-between;
           flex-wrap: wrap;
        .global-list {
            width: 33%;
            margin-top: 15px;
            a {
                display: block;
                position: relative;
                width: 100%;
                img {
                    width: 100%;
                }
                span {
                    position: absolute;
                    bottom: 15px;
                    left: 15px;
                    color: #fff;
                }
            }
        }
    }
}
</style>
