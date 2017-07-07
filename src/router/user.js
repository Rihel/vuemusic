import User from '../pages/userCenter/user';
import userMain from '../components/userCenter/userMain/userMain.vue';

import latest from '../pages/userCenter/latest'
import local from './local'
export default {
  path: '/user',
  component: User,
  redirect: '/user/usermain',
  children: [
    {
      path:'/user/usermain',
      component:userMain
    },
    {
      path:'/user/latest',
      component:latest
    },local
  ]
}
