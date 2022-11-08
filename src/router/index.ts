import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/take', // typically would be the home page. But perhaps Take Quizzes will be home page?
  },
  {
    path: '/tabs/',
    component: TabsPage, // requested on application load
    children: [
      {
        path: '',
        redirect: '/tabs/take'
      },
      {
        path: 'take',
        component: () => import('@/views/take/TakeQuizzes.vue') // lazy loaded
      },
      {
        path: 'create',
        component: () => import('@/views/create/CreateQuizzes.vue')
      },
      {
        path: 'browse',
        component: () => import('@/views/browse/BrowseQuizzes.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
