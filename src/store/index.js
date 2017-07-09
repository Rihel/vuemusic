import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    getlists(state, lists) {
      state.lists = lists;
    }
  },
  actions: {
    initlists: context => {
        Vue.http.get('http://localhost:3000/top/list?idx=0')
          .then(data => {
            context.commit('getlists',data.data.result)
            console.log(data.data.result)
          })
      
    }
  }
})
