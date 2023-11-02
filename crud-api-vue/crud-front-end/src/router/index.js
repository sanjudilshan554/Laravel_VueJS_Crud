import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registration from '../views/registration/registrationView.vue'
import update from '../views/updateUser/updateView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Registration
    },{
      path: '/update:id',
      name: 'update',
      component: update
    },
   
  ]
})

export default router
