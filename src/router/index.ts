import { createRouter, createWebHistory } from 'vue-router'
import ProgramRouter from "@/router/modules/program"

const router = createRouter({
  history: createWebHistory(),
  routes: [  // 一级路由
    {
      path: '/',
      redirect: '/auth/login',
      component: () => import('@/views/auth/Index.vue'),
      children: []
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      component: () => import('@/views/auth/Index.vue'),
      children: [ // 二级路由
        {
          path: 'login',
          component: () => import('@/views/auth/LoginPage.vue')
        },
        {
          path: 'register',
          component: () => import('@/views/auth/RegisterPage.vue')
        }
      ]
    },
    {
      path: '/student',
      redirect: '/student/home-page',
      component: () => import('@/views/student/Index.vue'),
      children: [
        {
          path: 'home-page',
          component: () => import('@/views/student/HomePage.vue')
        },
        {
          path: 'video',
          component: () => import('@/views/student/Video.vue')
        },
        ProgramRouter
      ]
    },
    {
      path: '/teacher',
      redirect: '/teacher/student-inform',
      component: () => import('@/views/teacher/Index.vue'),
      children: [
        {
          path: 'student-inform',
          component: () => import('@/views/teacher/Student-Inform.vue')
        },
        {
          path: 'statistic-inform',
          component: () => import('@/views/teacher/Statistic-Inform.vue')
        }
      ]
    }
  ]
})

export default router
