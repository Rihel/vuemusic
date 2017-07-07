import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'



import Music from '../pages/music/music'
import MusicRouter from './music'
import Trends from './trends'
import User from './user'




Vue.use(Router)
Vue.use(VueAwesomeSwiper)



export default new Router({

  routes: [{
      path:'/',
      name:'music',
      redirect:'/music/hot',
      component:Music
    },
    MusicRouter,Trends,User
  ],
  linkActiveClass:'active'
  

})
