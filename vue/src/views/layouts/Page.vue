<script setup>
import { defineProps } from 'vue';
import Header from '../../components/Header.vue';
import MainContent from '../../components/MainContent.vue';

const props = defineProps({
    title: String,
})
</script>

<template>
    <Header> {{ title }} </Header>
    <MainContent>
       <slot/> 
    </MainContent>
</template>