import Song from '../pages/song';

import songOne from '../pages/song/subpages/song-one';
import songTwo from '../pages/song/subpages/song-two';
import songThree from '../pages/song/subpages/song-three';

export default {
  path: '/song',
  component: Song,
  children: [{
      path: '/song/songOne/:id',
      component: songOne
    },
    {
      path: '/song/songTwo',
      component: songTwo
    }, {
      path: '/song/songThree',
      component: songThree
    }
  ]
}
