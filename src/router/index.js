import Vue from 'vue'
import Router from 'vue-router'
import Music from '../pages/music';
import musicRouter from "./musicRouter";
import dynamicRouter from './dynamicRouter';
import SearchRouter from './searchRouter';

import UserCenterRouter from './userCenterRouter';
import Search from '../pages/search';
import SongSheetList from '../pages/songSheetList';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'music',
      component: Music,
      redirect:'/music/recommendation'
    },{
      path:'/personalized/:id',
      component:SongSheetList
    } ,musicRouter,
    dynamicRouter, SearchRouter, UserCenterRouter
  ],
  linkActiveClass: 'active'
})
