import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: app
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
