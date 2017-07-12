<template>
  <div>
    <div class="yf-view">
      <div class="container">
        <img :src="detail.picUrl" alt="">

        <h2 class="song-title">{{detail.name}}</h2>
        <h3 class="song-author">{{detail.singer}}</h3>




        <div class="yf-opation">
          <a class="fa fa-heart-o" href="#"></a>
          <a class="fa fa-arrow-down" href="#"></a>
          <a class="fa fa-chain-broken" href="#"></a>
          <a class="fa fa-commenting-o" href="#"></a>
          <a href="#">···</a>
        </div>
      </div>

    </div>
    <div class="yf-footer">
      <div class="container">
        <div class="yf-rate">
          <div class="now-rate">00:00</div>
          <div class="view-rate">
            <div class="zero">

            </div>
          </div>
          <div class="all-rate">00:00</div>
        </div>

        <div class="yf-control">
          <a class="fa fa-random" ></a>
          <a class="fa fa-step-backward" ></a>
          <a class="fa fa-pause-circle-o"  @click="play()" v-if="isPlay"></a>
          <a class="fa fa-play-circle-o"  @click="play()" v-if="!isPlay"></a>
          <a class="fa fa-step-forward" ></a>
          <a class="fa fa-list-ul controls" ></a>
        </div>
        <audio ref="audio" :src="url"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState } from 'vuex';
    export default {
    data() {
      return {
        id: this.$route.params.id,
        isPlay: false,
        url: '',
        detail: {
          name: '',
          singer: '',
          picUrl: '',
          id:''
        }
      }
    },
    computed: mapState({
      musicId: state => state.music.musicId
    }),
    methods: {
      play() {
        this.isPlay = !this.isPlay;
        let myaudio = this.$refs.audio;
        if (this.isPlay) {
          myaudio.play();
        } else {
          myaudio.pause();
        }
      },
      getMusic(id) {
        Promise.all([
          this.$http.get('http://localhost:3000/music/url?id=' + id),
          this.$http.get('http://localhost:3000/song/detail?ids=' + id)
        ]).then(data => {
          console.log(data);
          this.url = data[0].data.data[0].url;
          this.detail.name = data[1].data.songs[0].name;
          this.detail.picUrl = data[1].data.songs[0].al.picUrl;
          this.detail.singer = data[1].data.songs[0].ar[0].name;
          this.detail.id=id;
           let audio = this.$refs.audio;
          audio.autoplay = 'autoplay';
          this.isPlay = true;
        })
      },
      autoPlay(){
        
      }
    },
    // watch: {
    //   musicId(newValue, oldValue) {
    //     if (newValue !== oldValue) {
    //       this.getMusic(newValue);
    //       let audio = this.$refs.audio;
    //       audio.autoplay = 'autoplay';
    //       this.isPlay = true;
    //     }
    //   }
    // },
    created() {
      this.getMusic(this.musicId);
      //  this.autoPlay();
    }
  }
</script>
