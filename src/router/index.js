import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '@/views/PagesView'
import HomeView from '@/views/HomeView'
import MovieView from '@/views/MovieView'
import BookView from '@/views/BookView'
import StatusView from '@/views/StatusView'
import GroupView from '@/views/GroupView'
import SearchResult from '@/views/SearchResult'
import DetailView from '@/views/DetailView'
import MovieDetail from '@/views/MovieDetail'

import Register from '@/components/Register'
import Login from '@/components/Login'
import Download from '@/components/Download'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path:'/',
        redirect: '/pages/home'
    },
    {
        path:'/pages',
        name:'PagesView',
        component:PagesView,
        children: [
            {
                path:'/',
                redirect:'/pages/home'
            },
            {
                path:'home',
                name:'HomeView',
                component:HomeView
            },
            {
                path:'movie',
                name:'MovieView',
                component:MovieView,
            },
            {
                path:'book',
                name:'BookView',
                component:BookView
            },
            {
                path:'status',
                name:'StatusView',
                component:StatusView
            },
            {
                path:'group',
                name:'GroupView',
                component:GroupView
            }
        ],
    },
    {
      path:'/detail/:detailId',
      name:'DetailView',
      component: DetailView
    },
    {
        path:'/movie/:detailId',
        name:'MovieDetail',
        component: MovieDetail
    },
    {
        path:'/login',
        name:'login',
        component: Login
    },
    {
        path:'/register',
        name:'register',
        component: Register
    },
    {
        path:'/result',
        name:'SearchResult',
        component:SearchResult
    },
    {
        path:'/download',
        name:'download',
        component:Download
    },
    {
        path: '*',
        redirect: '/pages/home'
    }
  ]
})
