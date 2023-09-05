<template>
    <div>
        <NuxtLayout to="/">
            <img src="@/assets/images/svg/right-arrow.svg" alt="icon">
            Back to shopping bag
        </NuxtLayout>
        <slot />
        <NuxtLayout to="/">
            <img src="@/assets/images/svg/logo.svg" alt="logo"> 
        </NuxtLayout>
        <p>
            Delivery Country: <span>United States</span>
            <img src="@/assets/images/svg/united-states.svg" alt="US flag"> 
        </p>
    </div>
</template>

<script setup lang="ts"></script>