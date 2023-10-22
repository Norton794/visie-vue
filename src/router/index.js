import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditView from '../views/EditView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cad',
      name: 'cad',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CadView.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../views/DetailsView.vue'),
      props: true
    },
    
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView,
      props: true
    }
  ]
})

export default router
