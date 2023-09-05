<template>
    <div class="px-4.5percent sm:px-5">
        <div class="flex mb-94px sm:mb-10 md:flex-col-reverse">
            <div class="bg-[url('@/assets/images/image2.png')] bg-no-repeat bg-cover w-1/2 h-990 flex flex-col justify-end pb-30px pl-8 xl:h-700 lg:h-560 md:h-400 md:w-full">
                <h2 class="text-6xl text-white font-black w-48 capitalize mb-5px">MOM JEANS</h2>
                <p class="capitalize text-white mb-3.5">ground-breaking comfort and style---truly Air beyond compare.</p>
                <button class="btn-white">Shop</button>
            </div>
            <div class="bg-[url('@/assets/images/image1.png')] bg-no-repeat bg-cover w-1/2 h-990 flex items-end pb-84px xl:h-700 lg:h-560 md:h-400 md:w-full">
                <p class="text-center w-full capitalize text-jet-black">ground-breaking comfort and style-beyond compare.</p>
            </div>
        </div>
        <div class="mb-94px sm:mb-10">
            <h3 class="capitalize text-2xl mb-26px">The Latest And Greatest</h3>
            <div class="flex justify-between flex-wrap">
                <Card v-for="(item, index) in data.theLatestAndGreatest" :key="index" :card="item" :styles="styles" />
            </div>
        </div>
        <div class="mb-94px sm:mb-10">
            <h3 class="capitalize text-2xl mb-26px">Enjoy every moment of summer</h3>
            <div class="flex justify-between md:flex-col-reverse">
                <div class="bg-[url('@/assets/images/image6.png')] bg-no-repeat bg-cover bg-center h-990 w-[calc(50%-7.5px)] flex flex-col justify-end pb-10 pl-9 xl:h-700 xs:h-400 md:w-full">
                    <p class="mb-4 capitalize text-white text-lg">New Arrivals for the Season</p>
                    <button class="btn-black">Shop</button>
                </div>
                <div class="bg-[url('@/assets/images/image7.png')] bg-no-repeat bg-cover bg-center h-990 w-[calc(50%-7.5px)] flex flex-col justify-end pb-10 pl-9 xl:h-700 xs:h-400 md:w-full">
                    <p class="mb-2.5 capitalize text-white text-lg">Beautiful, luxurious <span class="block">comfortable</span></p>
                    <button class="btn-white">Shop</button>
                </div>
            </div>
        </div>
        <div class="mb-94px sm:mb-10">
            <h3 class="capitalize text-2xl mb-26px">Featured Footwear</h3>
            <div class="bg-[url('@/assets/images/image8.png')] bg-no-repeat bg-cover bg-center h-1300 flex flex-col justify-end pb-10 pl-9 xl:h-700">
                <h2 class="capitalize font-black text-6xl mb-1.5">AIR MAX 95</h2>
                <p class="capitalize font-light mb-7">ground-breaking comfort and style---truly Air beyond compare.</p>
                <button class="btn-black">Shop</button>
            </div>
        </div>
        <div class="mb-94px sm:mb-10">
            <h3 class="capitalize text-2xl mb-26px">Do sports right now</h3>
            <div class="flex justify-between md:flex-col-reverse">
                <div class="bg-[url('@/assets/images/image9.png')] bg-no-repeat bg-cover bg-center h-750 w-[calc(50%-7.5px)] flex flex-col justify-end pb-10 pl-9 xl:h-700 lg:h-560 md:h-400 md:w-full">
                    <p class="mb-2.5 capitalize text-white text-lg">Exercise your body <span class="block">and mind</span></p>
                    <button class="btn-white">Shop</button>
                </div>
                <div class="bg-[url('@/assets/images/image10.png')] bg-no-repeat bg-cover bg-center h-750 w-[calc(50%-7.5px)] flex flex-col justify-end pb-10 pl-9 xl:h-700 lg:h-560 md:h-400 md:w-full">
                    <p class="mb-4 capitalize text-white text-lg">Live each moment</p>
                    <button class="btn-black">Shop</button>
                </div>
            </div>
        </div>
        <div class="mb-10"> 
            <h3 class="capitalize text-2xl mb-26px">accessories</h3>
            <div class="flex justify-between flex-wrap">
                <div class="w-[calc(33.3%-8px)] md:w-[calc(50%-8px)] xs:w-full md:mb-5">
                    <div class="bg-[url('@/assets/images/image11.png')] bg-no-repeat bg-cover bg-center h-530px mb-26px xl:h-400 lg:h-250px xs:h-400"></div>
                    <p class="text-2xl font-light capitalize">Summer Bags</p>
                </div>
                <div class="w-[calc(33.3%-8px)] md:w-[calc(50%-8px)] xs:w-full md:mb-5">
                    <div class="bg-[url('@/assets/images/image12.png')] bg-no-repeat bg-cover bg-center h-530px mb-26px xl:h-400 lg:h-250px xs:h-400"></div>
                    <p class="text-2xl font-light capitalize">Glasses</p>
                </div>
                <div class="w-[calc(33.3%-8px)] md:w-[calc(50%-8px)] xs:w-full">
                    <div class="bg-[url('@/assets/images/image13.png')] bg-no-repeat bg-cover bg-center h-530px mb-26px xl:h-400 lg:h-250px xs:h-400"></div>                                     
                    <p class="text-2xl font-light capitalize">Hats</p>
                </div>
            </div>
        </div>
        <div class="bg-[url('@/assets/images/image14.png')] bg-no-repeat bg-cover bg-center mb-94px flex flex-col justify-center items-center h-400">
            <h4 class="mb-61px capitalize text-4xl">Join our big family!</h4>
            <div class="flex">
                <button class="btn-black mx-3.5">Join Us</button>
                <button class="btn-black mx-3.5">Sign In</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import data from '@/assets/data/data.json'
const styles = ref({
    block: 'w-[calc(33.3%-8px)] md:w-[calc(50%-8px)] xs:w-full xs:mb-5',
    image: 'h-530px mb-26px xl:h-400 lg:h-250px xs:h-400'
})
</script>