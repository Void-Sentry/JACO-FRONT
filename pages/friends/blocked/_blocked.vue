<template>
    <div class="h-auto px-12 my-4 text-primary flex flex-col">
        <h1 class="uppercase" v-html="title"></h1>
        <div class="overflow-y-auto">
            <div class="w-full flex flex-col my-4">
                <div class="h-px w-full bg-tertiary mb-4"></div>
                <div class="flex flex-row" v-for="n in friends">
                    <div class="my-auto w-12 h-12 bg-[#D9D9D9] rounded-full flex flex-row"></div>
                    <h1 class="ml-1.5 my-auto" v-html="n.user_to.id === $store.getters['user/user'].id ? n.user_from.name : n.user_to.name"></h1>
                    <button class="mr-4 my-auto ml-auto" @click.stop="unblock(n)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#4CAF50" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./blocked.js"></script>