<template>
  <div>
    <img class="main-bg" :src="detail.picUrl" alt="">
    <div class="footer">
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
  </div>

</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex';
  export default {
    data() {
      return {
        isPlay: false,
        url: '',
        detail: {
          name: '',
          singer: '',
          picUrl: ''
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
          this.url = data[0].data.data[0].url;
          this.detail.name = data[1].data.songs[0].name;
          this.detail.picUrl = data[1].data.songs[0].al.picUrl;
          this.detail.singer = data[1].data.songs[0].ar[0].name;
        })
      }
    },
    watch: {
      musicId(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.getMusic(newValue);
          let audio = this.$refs.audio;
          audio.autoplay = 'autoplay';
          this.isPlay = true;
        }
      }
    },
    created() {
      this.getMusic(this.musicId);
    }
  }

</script>

<style lang="">


</style>
