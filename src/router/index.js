import Vue from 'vue'
import Router from 'vue-router'
import purchas from '../components/purchas'
import mall from '../components/mall'
import news from '../components/news'
import newsMovie from '../components/newsMovie'
import home from '../components/home'
import search from '../components/search'
import filmdetail from '../components/filmdetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
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
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/movie/:id',
      component: filmdetail
    }
  ]
})
