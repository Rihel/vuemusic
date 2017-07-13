import Vue from 'vue'
import Vuex from 'vuex'
import Music from './music'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // musicId: '27731239',
    musicId:'435948397',
    modules: {
      Music,
    },
    musicData:{
      singdata:'',
      songname:'',
      singer:'',
      singpic:''
    }
  },
  mutations:{
    changeId(state,id){
      state.musicId=id;
      console.log(state.musicId)
    }
  },
  //  created() {
  //       Promise.all([vue.http.get('http://localhost:3000/music/url?id='+this.musicId),
  //       vue.http.get('http://localhost:3000/song/detail?ids='+this.musicId)]).
  //           then(data => {
  //             var info=musicData
  //               musicData.url = data[0].body.data[0].url;
  //               musicData.singdata = data[1].data.songs[0];
  //               musicData.songname = this.singdata.name;
  //               musicData.singer = this.singdata.ar[0].name;
  //               musicData.pic = this.singdata.al.picUrl;

  //           })
  //           console.log(musicData)
  //   },


})
