import Music from '../pages/music/music';

import List from '../pages/music/list/C_list';
import Radio from '../pages/music/radio/J_radio';
import Top from '../pages/music/top/S_top';
import Hot from '../pages/music/hot/H_hot';

export default {
  path: '/music',
  component: Music,
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
    }
  ]
}
