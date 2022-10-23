<template>
    <div class="h-auto px-12 text-primary flex flex-col">
        <div class="my-4 w-full bg-tertiary rounded-xl flex flex-row">
            <input class="mx-1.5 w-full rounded-xl bg-tertiary h-12 placeholder:text-primary focus:outline-none"
                :placeholder="placeholder" />
            <button class="mr-1.5 my-auto text-success">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#385E72" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
        <h1 class="uppercase" v-html="title"></h1>
        <div class="overflow-y-auto">
            <friend v-for="n in 50" key="1"/>
        </div>
    </div>
</template>
<script src="./everyone.js"></script>