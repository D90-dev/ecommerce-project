<template>
    <div class="mb-120px">
        <p class="text-center mt-5 text-xs mb-60px">Women / New Arrivals / View all</p>
        <div class="px-4.5percent flex">
            <div class="w-1/6">
                <Categories :category="item" v-for="(item, index) in data.categories" :key="index" />
            </div>
            <div class="w-5/6">
                <h5 class="capitalize text-4xl tracking-[1.8px] mb-30px">VIEW ALL</h5>
                <div class="flex mb-8">
                    <Filter v-for="(filter, index) in data.filter"
                        :key="`dropdown-${index}`"
                        :filter="filter"
                        :collapseState="collapseStates[index]"
                        @toggleCollapse="toggleCollapse(index)" />
                </div>
                <div class="flex flex-wrap justify-between">
                    <Card class="mb-6" v-for="(item, index) in data.products" :key="index" :card="item" :styles="styles" />
                </div>
            </div>
        </div>
        <thank-you></thank-you>
    </div>
</template>

<script setup lang="ts">
import data from '@/assets/data/data.json';

const collapseStates = ref(new Array(data.filter.length).fill(false));

const toggleCollapse = (index : number) => {
  collapseStates.value[index] = !collapseStates.value[index];
};

const styles = ref({
    block: 'w-[calc(33.3%-8px)] md:w-[calc(50%-8px)] xs:w-full xs:mb-5',
    image: 'h-530px mb-26px xl:h-400 lg:h-250px xs:h-400'
})
</script>