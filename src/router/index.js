import Vue from 'vue'
import Router from 'vue-router'
import purchas from '../components/purchas.vue'
import mall from '../components/mall.vue'
import news from '../components/news.vue'
import newsMovie from '../components/newsMovie.vue'
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
      children: {
      	path: 'movie/:id',
      	coponent: newsMovie
      }
    },
    }
    // {
    // 	path: 'purchas',
    // 	component: purchas
    // },
    // {
    // 	path: 'mall',
    // 	component: mall
    // },
    // {
    //   path: '/news',
    //   component: news,
    //   children: {
    //   	path: 'movie/:id',
    //   	coponent: newsMovie
    //   }
    // },
    // {
    //   patha: '/trailer',
    //   component: news
    // },
    // {
    // 	path: '/toplist',
    // 	component: toplist,
    // 	children: {
    // 	  path: 'movie/2/:id',
    //   	  coponent: toplistMovie
    // 	}
    // },
    // {
    // 	path: 'review',
    // 	component: review,
    // 	children: {
    // 	  path: 'detail/:id',
    //   	  coponent: detail
    // 	}
    // },
    // {
    //   path: '*',
    //   redirect: '/'
    // }   
  ]
})
