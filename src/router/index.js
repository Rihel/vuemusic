import Vue from 'vue'
import Router from 'vue-router'

/*********** userCenter start ************* */
import UserCenterRouter from './userCenterRouter';
/*********** userCenter end ************* */


Vue.use(Router)

export default new Router({
  routes: [
    UserCenterRouter
  ]
})
