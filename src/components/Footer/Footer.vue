<template>
  <div class="footer ">
    <div class="footer-img">
      <router-link to="/song/songOne">
        <img :src="detail.picUrl" alt="">
      </router-link>
    </div>
    <div class="song-main clearfix">
      <h2>{{detail.name}}</h2>
      <span>{{detail.singer}}</span>
    </div>
    <div class="icons">
      <i class="fa fa-play" @click="play()" v-if="!isPlay"></i>
      <i class="fa fa-pause" @click="play()" v-if="isPlay"></i>
      <i class="fa fa-step-forward"></i>
      <i class="fa fa-list-ul"></i>
    </div>
    <audio ref="audio" :src="url"></audio>
  </div>
</template>

<script>
    export default {
    
        data(){
          return {
              isPlay:false,
              url:'',
              detail:{
                name:'',
                singer:'',
                picUrl:''
              }
          }
        },
        methods:{
          play(){
           this.isPlay=!this.isPlay;
           let myaudio=this.$refs.audio;
           if(this.isPlay){
              myaudio.play();
           }
             else {
               myaudio.pause();
             } 
          }
        },
        created(){
              Promise.all([
                  this.$http.get('http://localhost:3000/music/url?id=432506345'),
                  this.$http.get('http://localhost:3000/song/detail?ids=432506345')
              ]).then(data=>{
                // console.log(data);
                 this.url=data[0].data.data[0].url;
                 this.detail.name=data[1].data.songs[0].name;
                 this.detail.picUrl=data[1].data.songs[0].al.picUrl;
                 this.detail.singer=data[1].data.songs[0].ar[0].name;
              })
        }
    }
</script>

<style lang="">

</style>