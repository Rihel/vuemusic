import Music from '../pages/music';

import List from '../pages/music/subpages/lists';
import RadioStation from '../pages/music/subpages/radioStation';
import SongSheet from '../pages/music/subpages/songSheet';
import Recommendation from '../pages/music/subpages/recommendation';
import Boutique from '../pages/music/subpages/boutique.vue';
import SongSheetDelate from '../pages/music/subpages/songSheetDelate.vue'
export default {
    path: '/music',
    component: Music,
    children: [{
            path: '/music/recommendation',
            component: Recommendation
        },
        {
            path: '/music/lists',
            component: List
        }, {
            path: '/music/songSheet',
            component: SongSheet
        },
        {
            path: '/music/radioStation',
            component: RadioStation
        },
        {
            path: '/music/songSheet/Boutique',
            component: Boutique
        }
    ]
}