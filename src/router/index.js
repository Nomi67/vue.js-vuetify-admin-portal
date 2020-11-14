import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/overview.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import( '../views/pages/users.vue')
  },
  {
    path: '/courses',
    name: 'Course',
    component: () => import( '../views/pages/courses.vue')
  },
  {
    path: '/course-provider',
    name: 'Course Provider',
    component: () => import( '../views/pages/courseProviders.vue')
  },
  {
    path: '/stats',
    name: 'Statistics',
    component: () => import( '../views/pages/mainStats.vue')
  },
  {
    path: '/about', 
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
