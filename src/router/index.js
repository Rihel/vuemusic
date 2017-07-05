import Vue from 'vue'
import Router from 'vue-router'

import Music from '../pages/music/music'


Vue.use(Router)

export default new Router({
  routes: [{
      path:'/',
      name:'music',
      component:Music
    },
  
  ]
})
