<template>
    <header>
        <div class="py-2 px-4.5percent bg-light-gray flex justify-end sm:px-5">
            <ul class="flex items-center">
                <li class="border-r border-jet-black"><NuxtLink class="px-4" to="/help">Help</NuxtLink></li>
                <li class="border-r border-jet-black"><NuxtLink class="px-4" to="/join-us">Join Us</NuxtLink></li>
                <li><NuxtLink class="px-4" to="/">Sign In</NuxtLink></li>
            </ul>
        </div>
        <div class="px-4.5percent sm:px-5 flex justify-between items-center">
            <NuxtLink to="/">
                <img class="sm:w-12" src="@/assets/images/svg/logo.svg" alt="logo">
            </NuxtLink>
            <div class="flex items-center">
                <nav class="mr-6 lg:hidden">
                    <NuxtLink class="font-light capitalize text-jet-black mr-6" to="/help">New Releases</NuxtLink>
                    <NuxtLink class="font-light capitalize text-jet-black mr-6" to="/help">Men</NuxtLink>
                    <NuxtLink class="font-light capitalize text-jet-black mr-6" to="/help">Women</NuxtLink>
                    <NuxtLink class="font-light capitalize text-jet-black mr-6" to="/help">Kids</NuxtLink>
                    <NuxtLink class="font-light capitalize text-jet-black mr-6" to="/help">Customize</NuxtLink>
                    <NuxtLink class="font-light capitalize text-jet-black" to="/help">Sale</NuxtLink>
                </nav>
                <div class="searchbar relative w-44 h-10 my-2.5 mr-6 sm:hidden">
                    <img src="@/assets/images/svg/search.svg" alt="search icon" class="absolute inset-2">
                    <input placeholder="Search" class="bg-light-gray rounded-full w-full h-full pl-11 placeholder:font-light placeholder:text-pale-silver outline-none" type="text" id="search">
                </div>
                <div class="flex items-center">
                    <button class="mr-3">
                        <img src="@/assets/images/svg/heart.svg" alt="icon">
                    </button>
                    <button>
                        <img src="@/assets/images/svg/bag.svg" alt="icon">
                    </button>
                </div>
                <div class="hidden lg:flex items-center relative ml-3">
                    <button>
                        <svg viewBox="0 0 100 80" width="24" height="20">
                            <rect width="100" height="5"></rect>
                            <rect y="30" width="100" height="5"></rect>
                            <rect y="60" width="100" height="5"></rect>
                        </svg>
                    </button>
                    <nav class="absolute right-0 top-9 bg-white flex flex-col py-1 px-5 w-40 z-50">
                        <NuxtLink class="font-light capitalize text-jet-black mr-6 py-1" to="/help">New Releases</NuxtLink>
                        <NuxtLink class="font-light capitalize text-jet-black mr-6 py-1" to="/help">Men</NuxtLink>
                        <NuxtLink class="font-light capitalize text-jet-black mr-6 py-1" to="/help">Women</NuxtLink>
                        <NuxtLink class="font-light capitalize text-jet-black mr-6 py-1" to="/help">Kids</NuxtLink>
                        <NuxtLink class="font-light capitalize text-jet-black mr-6 py-1" to="/help">Customize</NuxtLink>
                        <NuxtLink class="font-light capitalize text-jet-black py-1" to="/help">Sale</NuxtLink>
                    </nav>
                </div>
            </div>
        </div>
        <div class="hidden sm:flex justify-end">
            <div class="searchbar relative w-44 h-10 my-2.5 sm:mx-5">
                <img src="@/assets/images/svg/search.svg" alt="search icon" class="absolute inset-2">
                <input placeholder="Search" class="bg-light-gray rounded-full w-full h-full pl-11 placeholder:font-light placeholder:text-pale-silver outline-none" type="text" id="search">
            </div>
        </div>
    </header>
</template>

<script setup lang="ts"></script>