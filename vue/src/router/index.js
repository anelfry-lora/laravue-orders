import { createRouter, createWebHistory } from 'vue-router'
import Food from '../views/Food.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'

const routes = [
    {
        path: '/',
        name: 'Food List',
        component: Food 
    },
   
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router