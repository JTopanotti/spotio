import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Playlist from '@/components/playlist/Playlist'
import apiService from '../services/api.service'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path: '/login',
      beforeEnter: () => {
        apiService.login().then(res => {
          if (res) {
            window.location = res
          }
        })
      }
    },
    {
      path: '/redirect',
      beforeEnter: (to) => {
        if (to.query && to.query.code) {
          apiService.loginRedirect(to.query.code).then(() => router.push({ path: '/home' }))
        }
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/playlist/:id',
      name: 'Playlist',
      component: Playlist
    }
  ]
})

// router.afterEach((to, from) => console.log(to, from))

export default router
