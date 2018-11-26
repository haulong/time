import Vue from 'vue'
import Router from 'vue-router'
import purchas from '../components/purchas'
import mall from '../components/mall'
import news from '../components/news'
import newsMovie from '../components/newsMovie'
import home from '../components/home'
import search from '../components/search'
import toplist from '../components/toplist'
import movie from '../components/movie'
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
      path: '/movie',
      component: movie
    },
       {
      path: '/toplist',
      component: toplist
    },
     {
      path: '/toplistMovie',
      component: toplistMovie
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
      path: '/news',
      component: news,
      children: [
        {
          path: 'movie/:id',
          component: newsMovie
        },

      
      ]
    },
    {
      path: '/search',
      component: search
    }
  ]
})
