import Used from '../pages/used';


import Local from '../pages/Used/subpages/local';
import Played from '../pages/Used/subpages/played';
import Download from '../pages/Used/subpages/download';
import Self from '../pages/Used/subpages/self';
import Collection from '../pages/Used/subpages/collection';


export default {
  path: '/Used',
  component: Used,
  children: [{
      path: '/Used/local',
      component: Local
    },
    {
      path: '/Used/played',
      component: Played
    }, {
      path: '/Used/download',
      component: Download
    },
    {
      path: '/Used/self',
      component: Self
    },
    {
      path: '/Used/collection',
      component: Collection
    }
  ]
}
