<template>
<<<<<<< HEAD
  <!--<div>
      <span class="alert1">此乃榜单页面</span>
      <br>
      <span class="alert1">页面尚未完成</span>
      <br>
      <span class="alert1">道友速速返回</span>
      <br>
      <i class="alert1 fa fa-hand-o-down"></i>
      <br>
      <router-link class="alert" to="/">传送门</router-link>
    </div>-->
  
=======

>>>>>>> 71e9ce05d2be54efff88a53b57cc7194b2e8c155
  <!--榜单页面-->
  <!--作者：Lewis-->
  
<div class="zql-songs-items"> 
    <div class="title">官方榜</div>
<div class=wl-list>
    <figure v-for="item,index in list">
      <div class="zql-songs-pic">
        <img :src="item.coverImgUrl" alt="">
        <i class="fa fa-play-circle-o fa-3x"></i>
      </div>
      <figcaption>
        <dl>
          <dt>{{item.name}}</dt>
          <dd>
            <span>1</span>{{item.tracks[0].name}}-{{item.tracks[0].artists[0].name}}</dd>
          <dd>
            <span>2</span>{{item.tracks[1].name}}-{{item.tracks[1].artists[0].name}}</dd>
          <dd>
            <span>3</span>{{item.tracks[2].name}}-{{item.tracks[2].artists[0].name}}</dd>
        </dl>
        <i class="fa fa-chevron-right fa-2x"></i>
      </figcaption>
    </figure>
    </div>
    <div class="title">全球榜</div>
   <div class="wl-global">
     <div class="global-list" v-for="item,index in list">
       <a href="#">
         <img :src="item.coverImgUrl" alt="">
         <span>每周更新</span>
       </a>
      <p>{{item.name}}</p>
     </div>
   </div>
  
  </div>
</template>

<script>
import '../../../assets/scss/scssBypages/lists/lists.scss';
export default {
  components: {

  },
  data() {

    return {
      list: [],
     
    }
  },
  created() {
  
    for ( var i=0;i<22;i++){
      this.number=i;
      this.$http.get('http://localhost:3000/top/list?idx=' + this.number).then(data => {
        if (data.data.code === 200) {
          this.list.push(data.data.result);
         
        }

        })
    }
     console.log(this.list);

  }
}
</script>

<<<<<<< HEAD
<style lang="">
/*.alert1 {
    margin: 50px;
    color: firebrick;
    font-size: 30px;
  }

  .alert {
    margin: 50px;
    color: dodgerblue;
    font-size: 50px;
  }*/
</style>
=======
>>>>>>> 71e9ce05d2be54efff88a53b57cc7194b2e8c155
