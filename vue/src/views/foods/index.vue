<script setup>
import { computed } from 'vue';
import store from '../../store';
import Page from '../layouts/page.vue';
import FoodsList from '../../components/frontend/FoodsList.vue';
import Loading from '../../components/Loading.vue';
import Pagination from '../../components/Pagination.vue';

const foods = computed(()=> store.state.foods);

store.dispatch('getFoods');
</script>

<template>
    <Page title="List Foots"> 
        <Loading  v-if="foods.loading"/>
        <section v-else>
			<FoodsList :foods="foods.data"/>
            <Pagination :value="foods" :dispatch="'getFoods'"/>
		</section>
    </Page>
</template>
  
