import { createRouter, createWebHistory } from 'vue-router'
import Food from '../views/foods/index.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import AuthLayout from '../components/layouts/AuthLayout.vue'
import store from '../store'

const routes = [
    {
        path: '/',
        redirect: '/foods',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '/foods', name: 'Foods', component: Food }
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta: { IsGuest: true },
        children: [
            {
                path: '/login', name: 'Login', component: Login
            },
            {
                path: '/register', name: 'Register', component: Register
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' })
    } else if (store.state.user.token && (to.meta.IsGuest)) {
        next({ name: 'Foods' })
    } else {
        next()
    }
})

export default router