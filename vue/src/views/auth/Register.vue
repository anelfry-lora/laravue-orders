<script setup>
import InputLabel from '../../components/InputLabel.vue';
import Input from '../../components/Input.vue';
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
        <form class="space-y-6" action="#" method="POST">
            <div class="md:grid-cols-2 md:gap-4 grid">
                <div class="group relative z-0 w-full">
                    <InputLabel for="name" value="First Name" />
                    <Input id="name" type="text" autofocus autocomplete="first-name" />
                </div>
                <div class="group relative z-0 w-full">
                    <InputLabel for="last-name" value="Last Name" />
                    <Input id="last-name" type="text" autocomplete="last-name" />
                </div>
            </div>
            <div>
                <InputLabel for="email" value="Email address" />
                <Input id="email" type="email" class="block w-full" autocomplete="email" />
            </div>
            <div>
                <InputLabel for="password" value="Password" />
                <Input id="password" type="password" class="block w-full" autocomplete="password" />
            </div>
            <div>
                <InputLabel for="confirm-password" value="Confirm Password" />
                <Input id="confirm-password" type="password" class="block w-full" />
            </div>
            <div>
                <button type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                    in</button>
            </div>
        </form>
    </div>
</template>


<style scoped></style>