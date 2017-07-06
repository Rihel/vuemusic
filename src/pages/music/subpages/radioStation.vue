<template>
  <div>
    <banner :banners="banners"></banner>
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
          <figure class="groom-item" v-for="item,index in recommend">
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
          <figure class="groom-item" v-for="item,index in type1">
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
          <figure class="groom-item" v-for="item,index in type2">
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
          <figure class="groom-item" v-for="item,index in type3">
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
          <figure class="groom-item" v-for="item,index in type4">
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
          <figure class="groom-item" v-for="item,index in type5">
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
      <div class="radio-top " v-for="item,index in catelist">
        <div class="radio-top-name">{{item.name}}</div>
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
      isDone: false,
      banners:[],
      recommend: [],
      type1:[],
      type2:[],
      type3:[],
      type4:[],
      type5:[],
      catelist:[],
    }
  },
   created() {
      if (!this.isDone) {
      Promise.all([this.$http.get('http://localhost:3000/banner'),
      this.$http.get('http://localhost:3000/dj/recommend'),
      this.$http.get('http://localhost:3000/dj/recommend/type?type=1'),
      this.$http.get('http://localhost:3000/dj/recommend/type?type=2'),
      this.$http.get('http://localhost:3000/dj/recommend/type?type=3'),
      this.$http.get('http://localhost:3000/dj/recommend/type?type=4'),
      this.$http.get('http://localhost:3000/dj/recommend/type?type=5'),
      this.$http.get('http://localhost:3000/dj/catelist')
      ])
        .then((datas) => {
          // console.log(datas[7])
          // console.log(datas[2].body.djRadios[0].category)
          this.banners = datas[0].data.banners;
          this.recommend = datas[1].body.djRadios.slice(0,6);
          this.type1 = datas[2].body.djRadios.slice(0,3);
          this.type2 = datas[3].body.djRadios.slice(0,3);
          this.type3 = datas[4].body.djRadios.slice(0,3);
          this.type4 = datas[5].body.djRadios.slice(0,3);
          this.type5 = datas[6].body.djRadios.slice(0,3);
          this.catelist = datas[7].body.categories
          this.isDone=true;
        })
    }
    // this.$http.get('http://localhost:3000/banner')
    // .then(data=>{
    //   if(data.data.code===200){
    //     this.banners=data.data.banners
    //   }
    //   return this.$http.get('http://localhost:3000/dj/recommend/type?type=1')
    // })
    // .then(data=>{
    //   console.log(data.body.djRadios[0])
    //    if(data.body.code===200){
    //      this.personalized=data.body.djRadios.slice(0,3)
    //      console.log(this.personalized)
    //   }
    // })
  }
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
