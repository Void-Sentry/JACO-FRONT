<template>
    <div class="h-auto px-12 my-4 text-primary flex flex-col">
        <h1 class="uppercase" v-html="title"></h1>
        <div class="overflow-y-auto my-4">
        <div class="h-px w-full bg-tertiary mb-4"></div>
            <div class="flex flex-row" v-for="n in friends" :key="n.id">
                <div class="my-auto w-12 h-12 bg-[#D9D9D9] rounded-full flex flex-row"></div>
                <h1 class="ml-1.5 my-auto" v-html="n.name"></h1>
                <button class="mr-4 my-auto ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#4CAF50" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </button>
                <button class="mr-4 my-auto ml-px">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#F44336" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script src="./pending.js"></script>