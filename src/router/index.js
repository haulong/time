import Vue from 'vue'
import Router from 'vue-router'
import purchas from '../components/purchas'
import mall from '../components/mall'
import news from '../components/news'
import newsMovie from '../components/newsMovie'
import trailer from '../components/trailer.vue'
import toplist from '../components/toplist.vue'
import review from '../components/review.vue'
import home from '../components/home'
import search from '../components/search'
import filmdetail from '../components/filmdetail'
import detailList from '../components/detailList.vue'
import comment from '../components/comment.vue'
import detailmain from '../components/detailmain.vue'
import cityList from '../components/cityList.vue' 
import theater from '../components/theater.vue'
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
      path:"/citylist",
      component:cityList
    },
    {
      path:"/theater/:cinemaid",
      component:theater
    },
    {
      path: '/news',
      component: news,
      children: [
        {
          path: 'movie/:id',
          path:"newsMovie",
          component: newsMovie
        },
         {
          path:"trailer",
          component: trailer
        },
         {
          path:"toplist",
          component: toplist
        },
         {
          path:"review",
          component: review
        },
        {
          path:'/',
          component:newsMovie
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
    },
	{
      path:"/detailList/:Did",
      component:detailList
    },
    {
      path:"/detailmain/:newsid",
      component:detailmain
    },
    {
      path:"/comment/:newsid",
      component:comment
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
