import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/Feed.vue')
  },
  {
    path: '/usersList',
    name: 'UsersList',
    component: () => import('../views/UsersList')
  },
  {
    path: '/profileUpdate',
    name: 'ProfileUpdate',
    component: () => import('../views/ProfileUpdate')
  },
  {
    path: '/postUpdate',
    name: 'PostUpdate',
    component: () => import('../views/PostUpdate')
  },
  {
    path: '/onePost',
    name: 'OnePost',
    component: () => import('../views/OnePost')
  },
  {
    path: '/updateComment',
    name: 'UpdateComment',
    component: () => import('../views/UpdateComment')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router