import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Download from '../components/Download'
import Manuals from '../components/Manuals'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/main',
      component:Main
    },
    {
      path: '/download',
      component:Download
    },
    {
      path: '/manuals',
      component:Manuals
    }
  ]
})
