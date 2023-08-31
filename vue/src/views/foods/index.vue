<script setup>
import { computed } from 'vue';
import store from '../../store';
import Page from '../layouts/page.vue';
import FoodsList from '../../components/frontend/FoodsList.vue';

const foods = computed(()=> store.state.foods);
</script>

<template>
    <Page title="List Foots"> 
        <section>
			<FoodsList :foods="foods"/>
		</section>
    </Page>
</template>
  
