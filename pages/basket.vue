<template>
    <div class="px-4.5percent sm:px-5">
        <p class="text-center mt-5 text-xs mb-10">Women / New Arrivals / View all</p>
        <h1 class="text-center mb-20 text-4xl capitalize tracking-[1.8px]">SHOPPING BAG</h1>
        <div class="flex mb-136px items-start">
            <div class="w-full mr-89px">
                <basket-product  v-for="(item, index) in 5" :key="index" class="w-full mb-8" />
            </div>
            <order-details />
        </div>
        <div class="mb-180px">
            <h6 class="mb-26px capitalize text-2xl">Recently viewed</h6>
            <div class="flex justify-between">
                <Card v-for="(item, index) in data.recentlyViewed" :key="index" :card="item" :styles="styles" :haveFavorite="true" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import data from '@/assets/data/data.json';
const styles = ref({
    block: 'w-[calc(33.3%-8px)] md:w-[calc(50%-8px)] xs:w-full xs:mb-5',
    image: 'h-530px mb-26px xl:h-400 lg:h-250px xs:h-400'
})
</script>