import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'



// <<<<<<< HEAD
import Music from '../pages/music/music'
import MusicRouter from './music'
import Trends from './trends'
import User from './user'


// =======
// >>>>>>> 86dcac3250bd2cde041b1a1d83b1e395a644f07a

Vue.use(Router)
Vue.use(VueAwesomeSwiper)



export default new Router({
// <<<<<<< HEAD
  routes: [{
      path:'/',
      name:'music',
      component:Music
    },
    MusicRouter,Trends,User
  ],
  linkActiveClass:'active'
  

})
