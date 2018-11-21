import Vue from 'vue'
import Router from 'vue-router'
import purchas from '../components/purchas'
import mall from '../components/mall'
import news from '../components/news'
import newsMovie from '../components/newsMovie'
import home from '../components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
    	path: '/purchas',
    	component: purchas
    },
    {
    	path: '/mall',
    	component: mall
    },
    {
      path: '/news',
      component: news,
      children: [
        {
          path: 'movie/:id',
          component: newsMovie
        }
      ]
    }
  ]
})
