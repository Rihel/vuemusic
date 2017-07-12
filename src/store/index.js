import Vue from 'vue';
import Vuex from 'vuex';

import music from './music';
Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    nowMusicData: {

    }
  },
  getters: {
    bgPic: state => {
      return state.nowMusicData.picUrl;
    }
  },
  mutations: {
    changeNowMusicData: (state, data) => {
      state.nowMusicData = data;
    }
  },
  actions: {
    getNowMusic: (store, id) => {
      if (id == undefined) {
        return;
      }
      Promise.all([
        Vue.http.get('http://localhost:3000/music/url?id=' + id),
        Vue.http.get('http://localhost:3000/song/detail?ids=' + id)
      ]).then(data => {
        let finish = {};
        finish.url = data[0].data.data[0].url;
        finish.id = data[1].data.songs[0].al.id;
        finish.songName = data[1].data.songs[0].name;
        finish.picUrl = data[1].data.songs[0].al.picUrl;
        finish.singer = data[1].data.songs[0].ar[0].name;
        store.commit('changeNowMusicData', finish);
      })
    }
  },
  modules: {
    music
  }
})
