import { createRouter, createWebHistory } from "vue-router";
import ToolOne from '../views/ToolOne.vue'
import ToolTwo from '../views/ToolTwo.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/tool-one',
        name: 'ToolOne',
        component: ToolOne,
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