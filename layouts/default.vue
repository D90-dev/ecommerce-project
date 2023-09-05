<template>
    <div>
        <Header />
        <div class="py-2.5 bg-light-gray">
            <p class="text-jet-black capitalize font-light flex items-center flex-col">Free Shipping & 60 day free returnes <NuxtLink to="/" class="underline text-xs text-center">Join Now</NuxtLink></p>
        </div>
        <div>
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script lang="ts" setup></script>