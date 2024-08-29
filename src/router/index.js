import { createRouter, createWebHistory } from "vue-router";
import Converters from '../views/Converters.vue'
import ToolTwo from '../views/ToolTwo.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/converters',
        name: 'Converters',
        component: Converters,
    },
    {
        path: '/tool-two',
        name: 'ToolTwo',
        component: ToolTwo,
    }]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
