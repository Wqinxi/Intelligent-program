import type { RouteRecordRaw } from "vue-router";

const ProgramRouter: RouteRecordRaw = {
    path: 'program',
    redirect: '/program/task1',
    component: () => import('@/views/student/program/Index.vue'),
    children: [
        {
            path: 'task1',
            component: () => import('@/views/student/program/Task1.vue')
        },
        {
            path: 'task2',
            component: () => import('@/views/student/program/Task2.vue')
        },
        {
            path: 'task3',
            component: () => import('@/views/student/program/Task3.vue')
        }
    ]
}

export default ProgramRouter
