import { createRouter, createWebHistory } from 'vue-router'
import Food from '../views/Food.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import DefaultLayout from '../components/DefaultLayout.vue'

const routes = [
    {
        path: '/',
        redirect: '/food',
        component: DefaultLayout,
        children: [
            { path: '/food', name: 'food', component: Food }
        ]
    },
    {
        path: '/login', name: 'Login', component: Login
    },
    {
        path: '/register', name: 'Register', component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router