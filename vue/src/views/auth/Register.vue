<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import InputLabel from '../../components/InputLabel.vue';
import Input from '../../components/Input.vue';
import PrimaryButton from '../../components/PrimaryButton.vue';
import store from "../../store";
import { useRouter } from 'vue-router'
import { ref } from 'vue';

const router = useRouter();
const user = {
    name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
};
const errors = ref({});
const loading = ref(false);

const register = (ev) => {
    ev.preventDefault()
    loading.value = true;
    store.dispatch('register', user)
        .then((res) => {
            loading.value = false;
            router.push({
                name: 'Foods'
            });
        })
        .catch(err => {
            loading.value = false;
            if (err.response.status === 422) {
                errors.value = err.response.data.errors
            }
        });
}
</script>

<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="w-auto h-10 mx-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company" />
        <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Register for free
        </h2>

        <p class="mt-2 text-sm text-center text-gray-600">
            Or
            {{ ' ' }}
            <router-link :to="{ name: 'Login' }" class="hover:text-indigo-500 font-medium text-indigo-600">
                login in to your account
            </router-link>
        </p>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
        <form class="space-y-2" method="POST" @submit="register">
            <div class="md:grid-cols-2 md:gap-4 grid">
                <div class="group relative z-0 w-full space-y-2">
                    <InputLabel for="name" value="First Name" />
                    <Input id="name" type="text" autofocus autocomplete="first-name" v-model="user.name"/>
                </div>
                <div class="group relative z-0 w-full space-y-2">
                    <InputLabel for="last_name" value="Last Name" />
                    <Input id="last_name" type="text" autocomplete="last_name" v-model="user.last_name"/>
                </div>
            </div>
            <div>
                <InputLabel for="email" value="Email address" />
                <Input id="email" type="email" class="block w-full" autocomplete="email" v-model="user.email"/>
            </div>
            <div>
                <InputLabel for="password" value="Password" />
                <Input id="password" type="password" class="block w-full" autocomplete="current-password" v-model="user.password"/>
            </div>
            <div>
                <InputLabel for="password_confirmation" value="Password Confirmation" />
                <Input id="password_confirmation" type="password" class="block w-full"
                    autocomplete="current-password_confirmation" v-model="user.password_confirmation"/>
            </div>
            <div>
                <PrimaryButton class="group relative flex justify-center w-full" :disabled="loading"
                    :class="{ 'cursor-not-allowed': loading, 'hover:bg-gray-500': loading }">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3" v-if="loading">
                        <LockClosedIcon class="group-hover:text-gray-400 w-5 h-5 text-gray-500" aria-hidden="true" />
                    </span>
                    <svg v-if="loading" class="animate-spin w-5 h-5 mr-3 -ml-1 text-white"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    Sign in
                </PrimaryButton>
            </div>
        </form>
    </div>
</template>


<style scoped></style>