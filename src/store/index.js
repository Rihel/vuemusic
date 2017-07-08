import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    musicId: 18602345,
    banners: [],
  },
  mutations: {
    chageMusicId(state, id) {
      state.musicId = id;
    },
    updateBanners(state, banners) {
      state.banners = banners;
    }
  },
  actions: {
    getBanners: store => {
      Vue.http.get('http://localhost:3000/banner')
        .then(data => {
          store.commit('updateBanners', data.data.banners);
          console.log('初始化完成')
        })
    }
  }
})
