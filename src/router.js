import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chat',
      name: 'chat',
      props: true,
      beforeEnter: (to, from, next) => {
        const {
          params: { name },
        } = to
        // if name is not set, then redirect user to home screen
        if (!name) next({ name: 'home' })
        next()
      },
      component: () => import('./views/Chat.vue'),
    },
  ],
})
