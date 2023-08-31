import { createStore } from "vuex"
import axiosClient from "../axios";

const tpmFoods = [
    {
        id: 100,
        name: 'Ensalada de Champinion',
        description: "this is some description",
        slug: "ensalada-de-champinion",
        image: "https://www.hogarmania.com/archivos/201605/5759-2-ensalada-de-lechuga-champinones-y-pistachos-xl-848x477x80xX.jpg",
        status: 1,
    },
    {
        id: 200,
        name: 'Ensalada',
        description: "this is some description",
        slug: "ensalada",
        image: "https://www.hogarmania.com/archivos/201605/5759-2-ensalada-de-lechuga-champinones-y-pistachos-xl-848x477x80xX.jpg",
        status: 1,
    },
    {
        id: 300,
        name: 'Ensalada Verde',
        description: "this is some description",
        slug: "ensalada-verde",
        image: "https://www.hogarmania.com/archivos/201605/5759-2-ensalada-de-lechuga-champinones-y-pistachos-xl-848x477x80xX.jpg",
        status: 1,
    },
    {
        id: 400,
        name: 'Ensalada de Atum',
        description: "this is some description",
        slug: "ensalada-de-atum",
        image: "https://www.hogarmania.com/archivos/201605/5759-2-ensalada-de-lechuga-champinones-y-pistachos-xl-848x477x80xX.jpg",
        status: 1,
    },
    {
        id: 500,
        name: 'Ensalada de Marizco',
        description: "this is some description",
        slug: "ensalada-de-marizco",
        image: "https://www.hogarmania.com/archivos/201605/5759-2-ensalada-de-lechuga-champinones-y-pistachos-xl-848x477x80xX.jpg",
        status: 1,
    },
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        foods: [...tpmFoods],
    },
    getters: {},
    actions: {
        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(res => {
                    commit('logout')
                    return res;
                })
        },
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({ data }) => {
                    commit('setUser', data)
                    return data;
                })
        },
        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({ data }) => {
                    commit('setUser', data)
                    return data;
                })
        },
    },
    mutations: {
        logout: (state) => {
            state.user.token = null;
            state.user.data = {}
            sessionStorage.removeItem('TOKEN');
        },
        setUser: (state, userData) => {
            state.user.token = userData.token
            state.user.name = userData.name
            sessionStorage.setItem('TOKEN', userData.token);
        },
    },
    modules: {}
});

export default store;