<template>
  <!--推荐页面-->
  <!--作者：Lewis-->
  <div>
    <banner :banners="banners"></banner>
    <div class="zql-content">
      <div class="zql-items">
        <figure>
          <lazy-image :src="require('../../../assets/img/radio.png')" alt=""></lazy-image>
          <figcaption>每日歌曲推荐</figcaption>
        </figure>
        <figure>
          <lazy-image :src="require('../../../assets/img/MICROPHONE.png')" alt=""></lazy-image>
          <figcaption>歌手</figcaption>
        </figure>
        <figure>
          <lazy-image :src="require('../../../assets/img/book.png')" alt=""></lazy-image>          
          <figcaption>歌曲分类</figcaption>
        </figure>
      </div>
      <div class="zql-sings">
        <div class="zql-title">
          <h3> <img src="../../../assets/img/music.png" alt="">推荐歌单</h3>
          <a class="zql-more" href="#">更多 ></a>
        </div>
        <div class="zql-s-items">
          <figure v-for="item,index in personalized">
            <lazy-image :src="item.picUrl"></lazy-image>
            <figcaption>{{item.name}}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '../../../components/banner'
import lazyImage from '../../../components/lazyImage'
export default {
  components:{
    banner,
    'lazy-image':lazyImage
  },
  data(){
    return {
      banners:[],
      personalized: [],
    }
  },
  created() {
    this.$http.get('http://localhost:3000/banner')
    .then(data=>{
      if(data.data.code===200){
        this.banners=data.data.banners
      }
      return this.$http.get('http://localhost:3000/personalized')
    })
    .then(data=>{
       if(data.data.code===200){
        //  console.log(data)
         this.personalized=data.data.result
      }
    })
  }
}
</script>

<style lang="scss">

</style>
