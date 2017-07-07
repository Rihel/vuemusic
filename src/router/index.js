import Vue from 'vue'
import Router from 'vue-router'

/*********** userCenter start ************* */
import userCenter from '../pages/userCenter';
import UserCenterRouter from './userCenterRouter';
/*********** userCenter end ************* */


/*********** music start ************* */
import Music from '../pages/music';
import musicRouter from "./musicRouter";

/*********** music end ************* */


/*********** Search start ************* */
import Search from '../pages/search';
import SearchRouter from './searchRouter';
/*********** Search end ************* */


/*********** Dynamic start ************* */
import Dynamic from '../pages/dynamic';
import dynamicRouter from './dynamicRouter';
/*********** Dynamic start ************* */


/*********** Song start ************* */
import Song from '../pages/song';
import SongRouter from './songRouter';
/*********** Song end ************* */


/*********** Used start ************* */
import Used from '../pages/used';
import UsedRouter from './usedRouter';
/*********** Used end ************* */

import SongSheetDelate from '../pages/music/subpages/songSheetDelate';
import SongSheetDelateRouter from './songSheetDelateRouter';

import listsDelate from '../pages/music/subpages/listsDelate';
import listsDelateRouter from './listsDelateRouter';



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'userCenter',
            component: userCenter
        },
        musicRouter,
        dynamicRouter,
        SearchRouter,
        UserCenterRouter,
        SongRouter,
        UsedRouter,
        listsDelateRouter, 
        SongSheetDelateRouter 

    ],
    linkActiveClass: 'active'
})