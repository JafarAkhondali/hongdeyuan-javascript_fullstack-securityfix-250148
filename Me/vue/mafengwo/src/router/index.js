import Vue from 'vue'
import Router from 'vue-router'
import Lanuch from '@/components/lanuch'
import HelloWorld from '@/components/HelloWorld'
import Mine from '@/components/mine/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lanuch',
      component: Lanuch
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})