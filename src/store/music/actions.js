import Vue from 'vue';
const api1 = 'http://localhost:3000/'
export default {

  getRadioApi: store => {
    Promise.all([Vue.http.get('http://localhost:3000/banner'),
        Vue.http.get('http://localhost:3000/dj/recommend'),
        Vue.http.get('http://localhost:3000/dj/recommend/type?type=1'),
        Vue.http.get('http://localhost:3000/dj/recommend/type?type=2'),
        Vue.http.get('http://localhost:3000/dj/recommend/type?type=3'),
        Vue.http.get('http://localhost:3000/dj/recommend/type?type=4'),
        Vue.http.get('http://localhost:3000/dj/recommend/type?type=5'),
        Vue.http.get('http://localhost:3000/dj/catelist')
      ])
      .then((datas) => {
        let find = {}
        find.banners = datas[0].data.banners;
        find.recommend = datas[1].body.djRadios.slice(0, 6);
        find.type1 = datas[2].body.djRadios.slice(0, 3);
        find.type2 = datas[3].body.djRadios.slice(0, 3);
        find.type3 = datas[4].body.djRadios.slice(0, 3);
        find.type4 = datas[5].body.djRadios.slice(0, 3);
        find.type5 = datas[6].body.djRadios.slice(0, 3);
        find.catelist = datas[7].body.categories
        find.isShow = true;
        store.commit('getRadio', find);
      })
  },

  initlists: store => {
    Vue.http.get('${api}/top/list?idx=1')
      .then(data => {
        store.commit('getlists', data.data.result)
        console.log(111)
      })
  },

}
