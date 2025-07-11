import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Dashboard from '@/views/auth/Dashboard.vue'
import DefaultLayout from '@/components/DefaultLayout.vue'
import NotFound from '@/views/NotFound.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
          meta: { requiresGuest: true}
        },
        {
          path:'/dashboard',
          name: 'dashboard',
          component: Dashboard,
          meta: { requiresAuth: true}
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresGuest: true}
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { requiresGuest: true}
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  
  if(to.matched.some(record => record.meta.requiresAuth) && !auth.isLoggedIn){
    next({name: 'login'})
  } else if(to.matched.some(record => record.meta.requiresGuest) && auth.isLoggedIn) {
    next({name: 'dashboard'})
  } else {
    next()
  }
})

export default router
