import { createStore } from "vuex"

const store = createStore({
    state: {
        user: {
            data: {},
            token:'',
        }
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            //AXIOS
            // return axiosClient.post('/register', user)
            //     .then(({ data }) => {
            //         commit('setUser', data)
            //         return data;
            //     })
            //FETCH
            return fetch(`http://localhost:8000/api/register`, {
                headers: {
                    "content-type": "application/json",
                    Accept: "application/json"
                },
                method: "POST",
                body: JSON.stringify(user),
            })
            .then((res) => res.json())
            .then((res) => {
                commit("setUser", res)
                return res
            })
        },
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
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