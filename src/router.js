import Vue from 'vue'
import Router from 'vue-router'
import film from './views/film.vue'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/film"
    },
    {
      path: '/film',
      redirect: '/film/nowplaying',
      name: 'film',
      component: film,
      children: [
        {
          path: 'nowplaying',
          name: 'nowplaying',
          component: () => import(/* webpackChunkName: "nowplaying" */ '@/components/film/nowplaying/nowplaying.vue')  //路由懒加载
        },
        {
          path: 'comingsoon',
          name: 'comingsoon',
          component: () => import(/* webpackChunkName: "comingsoon" */ '@/components/film/comingsoon/comingsoon.vue')  //路由懒加载
        },

      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: () => import(/* webpackChunkName: "cinema" */ './views/cinema.vue')  //路由懒加载
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "mine" */ './views/mine.vue')  //路由懒加载
    },
{
  path:'/city',
      name:'city',
  component:()=>import(/* webpackChunkName: "city" */ '@/components/city/city.vue')//路由懒加载
},
    {
      path:'/contents',
      name:'contents',
      component:()=>import(/* webpackChunkName: "contents" */ '@/components/commons/contents.vue')
    }
  ]
})
