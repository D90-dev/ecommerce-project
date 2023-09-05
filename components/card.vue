
<template>
  <div :class="styles.block">
    <div
      class="bg-no-repeat bg-cover bg-center relative"
      :class="styles.image"
      :style="{ backgroundImage: `url(/_nuxt/assets/images/${card.bgImage})` }"
    >
      <div v-if="haveFavorite" class="absolute bottom-4 right-4">
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="black" d="M21.1248 11.8125L12.0623 21.25L2.87477 11.8125C-0.37523 8.46251 0.520604 5 1.37477 3.6875C5.37477 -1.0625 10.1664 2.04167 12.0623 4.18751C14.4623 1.03751 18.0206 0.958339 19.4998 1.31251C25.4498 4.41251 23.0623 9.60417 21.1248 11.8125Z" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="text-2xl font-light capitalize flex justify-between mb-1.5">
      <span>{{ card.category }}</span>
      <span>{{ card.price }}</span>
    </div>
    <p class="text-pale-silver text-2xl font-light capitalize">
      {{ card.subcategory }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Card, CardStyles } from "@/interface/base";
const props = defineProps({
  card: {
    type: Object as PropType<Card>,
    required: true,
  },
  styles: {
    type: Object as PropType<CardStyles>,
    required: true,
  },
  haveFavorite: {
    type: Boolean,
    required: true,
  },
});
</script>