<template>
    <div>
        <ul class="mb-9" v-for="(item, index) in props" :key="index">
            <li class="capitalize mb-4 tracking-[0.8px]">{{ item.category }}</li>
            <li class="capitalize mb-4 font-light text-sm tracking-[0.7px]" v-for="(i, ind) in item.subcategories" :key="`subitem${ind}`">{{ i }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Categories } from '@/interface/base'
const props = defineProps({
  category: {
    type: Object as PropType<Categories>,
    required: true
  }
})
</script>