import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import home from '../pages/home/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: home,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;