<template>
    <div class="bg-white shadow-[0_4px_40px_0_rgba(0,0,0,0.10)] px-23px pt-34px pb-5 w-max">
        <div class="mb-60px">
            <label class="font-light tracking-[0.8px] mb-15px block" for="discount">Add a Discount Code</label>
            <div class="flex">
                <input class="border border-pale-gray px-2.5 h-12" type="text" id="discount">
                <button class="h-12 px-8 ml-2.5 border border-black text-black">ADD</button>
            </div>
        </div>
        <div class="pb-30px border-b border-black">
            <div class="flex justify-between mb-15px">
                <span class="font-light text-sm">Order value</span>
                <span class="text-sm">$25</span>
            </div>
            <div class="flex justify-between mb-15px">
                <span class="font-light text-sm">Discount</span>
                <span class="text-sm">$0</span>
            </div>
            <div class="flex justify-between">
                <span class="font-light text-sm">Delivery</span>
                <span class="text-sm">$5</span>
            </div>
        </div>
        <div class="flex justify-between mt-15px mb-30px">
            <span class="text-sm">Total</span>
            <span class="text-sm">$30</span>
        </div>
        <button class="bg-black w-full text-white tracking-[0.8px] py-15px mb-30px">CONTINUE TO CHECKOUT</button>
        <p class="font-light text-sm mb-2.5">We accept</p>
        <div class="flex">
            <img class="mr-5" src="@/assets/images/mastercard.png" alt="mastercard">
            <img class="mr-5" src="@/assets/images/visa.png" alt="visa">
            <img src="@/assets/images/paypal.png" alt="paypal">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>