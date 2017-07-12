import Vue from 'vue';
const apiBaseUrl = 'http://localhost:3000'
export default {
  // 获取首页banner
  getMusicData: store => {
    Promise.all([Vue.http.get(`${apiBaseUrl}/banner`),
        Vue.http.get(`${apiBaseUrl}/personalized`),
        Vue.http.get(`${apiBaseUrl}/personalized/privatecontent`),
        Vue.http.get(`${apiBaseUrl}/personalized/mv`),
        Vue.http.get(`${apiBaseUrl}/personalized/djprogram`),
        Vue.http.get(`${apiBaseUrl}/program/recommend`)
      ])
      .then((datas) => {
        let finishData = {};
        finishData.banners = datas[0].data.banners;
        finishData.personalized = datas[1].data.result;
        finishData.privatecontent = datas[2].data.result;
        finishData.mvs = datas[3].data.result;
        finishData.djprogram = datas[4].data.result;
        finishData.recommend = datas[5].data.programs;

        store.commit('initMusicData', finishData);
        store.commit('done');
      })
  },
  //获取歌单详情
  getPlayListDetail: (store, id) => {
    Vue.http.get(`${apiBaseUrl}/playlist/detail?id=${id}`)
      .then(data => {
        const result = data.data;
        if (result.code === 200) {
          store.commit('updataPlayListDetail', {
            playList: result.playlist,
            privileges: result.privileges
          })
        }
      })
  }
}
