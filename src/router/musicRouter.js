import Music from '../pages/music';

import List from '../pages/music/subpages/list';
import RadioStation from '../pages/music/subpages/radioStation';
import SongSheet from '../pages/music/subpages/songSheet';
import Recommendation from '../pages/music/subpages/recommendation';

export default {
  path: '/music',
  component: Music,
  // 默认路由
  redirect:'/music/recommendation',
  children: [{
      path: '/music/recommendation',
      component: Recommendation
    },
    {
      path: '/music/list',
      component: List
    }, {
      path: '/music/songSheet',
      component: SongSheet
    },
    {
      path: '/music/radioStation',
      component: RadioStation
    }
  ]
}
