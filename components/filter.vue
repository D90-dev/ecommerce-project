<template>
    <div class="flex items-start w-full">
      <div class="w-full bg-light-gray border border-pale-gray relative">
        <div
          class="py-2.5 px-5 flex items-center justify-between"
          @click="emit('toggleCollapse')"
        >
          <p v-html="filter.name" class="cursor-pointer"></p>
          <img
            class="ml-1.5 cursor-pointer transition-all"
            src="@/assets/images/svg/arrow-down.svg"
            alt="icon"
            :class="{'rotate-180': collapseState}"
          />
        </div>
        <div
          class="px-5 pb-4 position bottom-0 left-0 max-h-44 overflow-y-auto"
          v-show="collapseState"
        >
          <!-- Your variants rendering logic here -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const { filter, collapseState } = defineProps(['filter', 'collapseState']);
  const emit = defineEmits();
  
  // Replace the variants rendering logic here
  </script>