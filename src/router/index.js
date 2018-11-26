import Vue from 'vue'
import Router from 'vue-router'
import purchas from '../components/purchas'
import mall from '../components/mall'
import news from '../components/news'
import newsMovie from '../components/newsMovie'
import trailer from '../components/trailer.vue'
import toplist from '../components/toplist.vue'
// import review from '../components/review.vue'
import home from '../components/home'
import search from '../components/search'
import filmdetail from '../components/filmdetail'
import detailList from '../components/detailList.vue'
import comment from '../components/comment.vue'
import detailmain from '../components/detailmain.vue'
import cityList from '../components/cityList.vue' 
import theater from '../components/theater.vue'
import online from '../components/onlineticket.vue'
import datail from '../components/datail'
import datail2 from '../components/datail2'
import datail3 from '../components/datail3'
import boxoffice from '../components/boxoffice'
import boxoffice2 from '../components/boxoffice2'
import boxoffice3 from '../components/boxoffice3'
import boxoffice4 from '../components/boxoffice4'
import boxoffice5 from '../components/boxoffice5'
import boxoffice6 from '../components/boxoffice6'
import toplistMovie from '../components/toplistMovie'
import toplistMovie_review from '../components/toplistMovie_review'
import toplistMovie_1 from '../components/toplistMovie_1'
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
      path:"/theater/:cinemaid/date/:date",
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
          path:"toplistMovie",
          component: toplistMovie
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
      path:"/online/:dId",
      component:online
    },
    {
      path:"/detailmain/:newsid",
      component:detailmain
    },
	{
      path: '/toplistMovie_1',
      component: toplistMovie_1
    },
    {
      path: '/toplistMovie_review/:id',
      component: toplistMovie_review
    },
     {
      path: '/datail/:id',
      component: datail
    },
    {
      path: '/datail2',
      component: datail2
    },
     {
      path: '/datail3',
      component: datail3
    },
    {
      path: '/boxoffice',
      component: boxoffice
    },
     {
      path: '/boxoffice2',
      component: boxoffice2
    },
     {
      path: '/boxoffice3',
      component: boxoffice3
    },
     {
      path: '/boxoffice4',
      component: boxoffice4
    },
     {
      path: '/boxoffice5',
      component: boxoffice5
    },
     {
      path: '/boxoffice6',
      component: boxoffice6
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















