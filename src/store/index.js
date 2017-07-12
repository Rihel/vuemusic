import Vue from 'vue'
import Vuex from 'vuex'
import Music from './music'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musicId: '',
    modules: {
      Music,
    }
  }


})
