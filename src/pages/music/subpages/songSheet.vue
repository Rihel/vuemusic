<template>

  <!--歌单页面-->
  <!--作者：Lewis-->
<<<<<<< HEAD
  <div class="wyf">
    <template v-if="isShow">
      <router-link to="/music/songSheet/Boutique">
        <div class="boutique">
        
      <img src="../../../assets/img/wzx-lowmusic.png" alt="">
      <div class="boutique-right">
        <h2><span class="fa fa-heart-o"></span>精品歌单<span class="fa fa-angle-right"></span></h2>
        <h3>民谣歌手的无词之歌也很美</h3>
        <p>有些感动，与歌词无关。</p>
      </div>
    </div>
      </router-link>
      

    <div class="choose-list">
      <div class="all-song">
        全部歌单<span class="fa fa-angle-right"></span>
      </div>
      <ul>
        <li>华语</li>
        <li>轻音乐</li>
        <li>摇滚</li>
      </ul>
    </div>

    <div class="song-list">
      <div v-for="item,index in personalized" class="songs">
        <div class="img-wrap">
          <img :src="item.coverImgUrl" alt="">
          <h4 class="user-name"><span class="fa fa-user"></span>{{item.creator.nickname}}</h4>
          <h5><i class="fa fa-headphones"></i> {{Math.floor(item.playCount/10000)}}万</h5>
        </div>
        
        <h2>{{item.name}}</h2>
        
        
      </div>
    </div>
    </template>
    <loading v-if="!isShow"></loading>
=======
  <div class="zql-lists">
    <div class="zql-title">
      <h3> <img src="../../../assets/img/music.png" alt="">全部<i class="fa fa-chevron-circle-down"></i></h3>
      <p><a class="zql-superhot active" href="#">最热</a>|<a class="zql-new" href="#">最新</a></p>
    </div>
    <div class="zql-lists-items">
      <figure>
        <div class="zql-lists-pic">
          <img src="../../../assets/img/zql-hot1.png" alt="">
          <i class="fa fa-play-circle-o fa-4x"></i>
        </div>
        <figcaption>
          <p>执子之手，与子相守</p>
          <span>by 陌咩咩</span>
        </figcaption>
      </figure>
      <figure>
        <div class="zql-lists-pic">
          <img src="../../../assets/img/zql-hot1.png" alt="">
          <i class="fa fa-play-circle-o fa-4x"></i>
        </div>
        <figcaption>
          <p>执子之手，与子相守</p>
          <span>by 陌咩咩</span>
        </figcaption>
      </figure>
      <figure>
        <div class="zql-lists-pic">
          <img src="../../../assets/img/zql-hot1.png" alt="">
          <i class="fa fa-play-circle-o fa-4x"></i>
        </div>
        <figcaption>
          <p>执子之手，与子相守</p>
          <span>by 陌咩咩</span>
        </figcaption>
      </figure>
      <figure>
        <div class="zql-lists-pic">
          <img src="../../../assets/img/zql-hot1.png" alt="">
          <i class="fa fa-play-circle-o fa-4x"></i>
        </div>
        <figcaption>
          <p>执子之手，与子相守</p>
          <span>by 陌咩咩</span>
        </figcaption>
      </figure>
      <figure>
        <div class="zql-lists-pic">
          <img src="../../../assets/img/zql-hot1.png" alt="">
          <i class="fa fa-play-circle-o fa-4x"></i>
        </div>
        <figcaption>
          <p>执子之手，与子相守</p>
          <span>by 陌咩咩</span>
        </figcaption>
      </figure>
      <figure>
        <div class="zql-lists-pic">
          <img src="../../../assets/img/zql-hot1.png" alt="">
          <i class="fa fa-play-circle-o fa-4x"></i>
        </div>
        <figcaption>
          <p>执子之手，与子相守</p>
          <span>by 陌咩咩</span>
        </figcaption>
      </figure>
    </div>
>>>>>>> 3a855b9c2fc0bed8b2d070d1a5e97afa8f0565af
  </div>
</template>

<script>
import loading from '../../../components/loading'
import lazyImage from '../../../components/lazyImage'
    export default {
      
        components:{
          loading,
          'lazy-image':lazyImage
        },
        data(){
          return{
            banner:[],
            personalized:[],
            isShow:false
          }
        },
        created(){
          this.$http.get('http://localhost:3000/top/playlist/highquality')
          .then(data=>{
            
            if(data.data.code===200){
              this.personalized=data.data.playlists;
              console.log(data.data.playlists)
              this.isShow=true;
            }
          })
        }
    }

</script>
<style lang="scss">
  
</style>


