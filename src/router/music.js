import Music from '../pages/music/music';

import List from '../pages/music/list/C_list';
import Radio from '../pages/music/radio/J_radio';
import Top from '../pages/music/top/S_top';
import Hot from '../pages/music/hot/H_hot';
import SubList from "../pages/music/list/subPage/subList.vue"
import SubTop from "../pages/music/top/subPage/SubTop.vue"


export default {
  path: '/music',
  component: Music,
  redirect: '/music/hot',
  children: [{
      path: '/music/hot',
      component: Hot
    },
    {
      path: '/music/list',
      component: List
    }, {
      path: '/music/top',
      component: Top
    },
    {
      path: '/music/radio',
      component: Radio
    },
    {
      path:'/subList/:id',
      component:SubList
    },
     {
      path:'/subTop/:id',
      component:SubTop
    },
  ]
}
