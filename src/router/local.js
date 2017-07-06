import local from '../pages/userCenter/local/local'


import song from '../pages/userCenter/local/localSong'
import file from '../pages/userCenter/local/localFile'
import  singer from '../pages/userCenter/local/localSinger'
import ablum from '../pages/userCenter/local/localAblum'


export default {
    path:'/user/local',
    component:local,
    redirect:'/user/local/song',
    children: [{
      path: '/user/local/song',
      component: song
    },
    {
      path: '/user/local/file',
      component: file
    }, {
      path: '/user/local/singer',
      component: singer
    },
    {
      path: '/user/local/ablum',
      component: ablum
    }
  ]


}