import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { home } from './views/home'

const routes: Array<RouteRecordRaw> = []

routes.push(home)

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router