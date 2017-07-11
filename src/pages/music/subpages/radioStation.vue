<template>
  <div>
    <template v-if="radio.isShow">
      <banner :banners="radio.banners"></banner>
      <div class="wzx-radio clearfix">
        <div class="radio-choose clearfix">
          <div class="choose-left">
            <i class="choose-headphone">
                    <img src="../../../assets/img/wzx-headphone.png" alt="">
                </i>
            <h3>电台分类</h3>
          </div>
          <div class="choose-right choose-left">
            <i class="choose-headphone">
                    <img src="../../../assets/img/wzx-people.png" alt="">
                </i>
            <h3>电台排行</h3>
          </div>
        </div>
        <div class="radio-groom">
          <div class="groom-nav">
            <div class="nav-red"></div>
            <span>电台个性推荐</span>
          </div>
          <div class="groom-list">
            <figure class="groom-item" v-for="item,index in radio.recommend">
              <lazy-image :src="item.picUrl"></lazy-image>
              <figcaption>{{item.name}}</figcaption>
            </figure>
          </div>
        </div>
        <div class="radio-groom">
          <div class="groom-nav">
            <div class="nav-red"></div>
            <span>商业财经</span>
          </div>
          <div class="groom-list">
            <figure class="groom-item" v-for="item,index in radio.type1">
              <lazy-image :src="item.picUrl"></lazy-image>
              <figcaption>{{item.name}}</figcaption>
            </figure>
          </div>
        </div>
        <div class="radio-groom">
          <div class="groom-nav">
            <div class="nav-red"></div>
            <span>明星做主播</span>
          </div>
          <div class="groom-list">
            <figure class="groom-item" v-for="item,index in radio.type2">
              <lazy-image :src="item.picUrl"></lazy-image>
              <figcaption>{{item.name}}</figcaption>
            </figure>
          </div>
        </div>
        <div class="radio-groom">
          <div class="groom-nav">
            <div class="nav-red"></div>
            <span>音乐故事</span>
          </div>
          <div class="groom-list">
            <figure class="groom-item" v-for="item,index in radio.type3">
              <lazy-image :src="item.picUrl"></lazy-image>
              <figcaption>{{item.name}}</figcaption>
            </figure>
          </div>
        </div>
        <div class="radio-groom">
          <div class="groom-nav">
            <div class="nav-red"></div>
            <span>情感调频</span>
          </div>
          <div class="groom-list">
            <figure class="groom-item" v-for="item,index in radio.type4">
              <lazy-image :src="item.picUrl"></lazy-image>
              <figcaption>{{item.name}}</figcaption>
            </figure>
          </div>
        </div>
        <div class="radio-groom">
          <div class="groom-nav">
            <div class="nav-red"></div>
            <span>有声书</span>
          </div>
          <div class="groom-list">
            <figure class="groom-item" v-for="item,index in radio.type5">
              <lazy-image :src="item.picUrl"></lazy-image>
              <figcaption>{{item.name}}</figcaption>
            </figure>
          </div>
        </div>
        <div class="radio-groom">
          <div class="groom-nav">
            <div class="nav-red"></div>
            <span>电台分类</span>
          </div>
        </div>
        <div class="radio-top " v-for="item,index in radio.catelist">
          <div class="radio-top-name">{{item.name}}</div>
        </div>

      </div>
    </template>
    <loading v-if="!radio.isShow"></loading>
  </div>
</template>

<script>
import banner from '../../../components/banner'
import lazyImage from '../../../components/lazyImage'
import loading from '../../../components/loading'
import {mapActions,mapState} from 'vuex'
export default {

  components:{
    banner,
    'lazy-image':lazyImage,
    loading,
  },
   computed:mapState({
      radio:state=>state.music.radio
    }),
  methods:{
    ...mapActions([
      'getRadioApi'
    ])
  },
   created() {
     this.getRadioApi();

    },
    
}
</script>

<style lang="scss">
  .groom-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .groom-item {
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

  .radio-top {
    .radio-top-name {
      float: left;
      width: 40%;
      margin-left: 35px;
      margin-bottom: 10px;
      padding-top: 10px;
      padding-bottom: 5px;
      color: #b30000;
      font-size: 16px;
    }
  }

</style>
