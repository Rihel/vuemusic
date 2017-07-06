import User from '../pages/userCenter/user';

import latest from '../pages/userCenter/latest'
import local from './local'
export default {
  path: '/user',
  component: User,
  children: [
    {
      path:'/user/latest',
      component:latest
    },local
  ]
}
