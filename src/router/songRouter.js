import Song from '../pages/song';

import songOne from '../pages/song/subpages/song-one';
import songTwo from '../pages/song/subpages/song-two';
import songThree from '../pages/song/subpages/song-three';

export default {
  path: '/song',
  component: Song,
  children: [{
      path: '/Song/songOne',
      component: songOne
    },
    {
      path: '/Song/songTwo',
      component: songTwo
    }, {
      path: '/Song/songThree',
      component: songThree
    }
  ]
}
