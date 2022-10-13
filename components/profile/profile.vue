<template>
    <div class="rounded-b-3xl bg-tertiary h-[4.3rem] w-full flex flex-row text-primary">
        <div class="w-12 h-12 rounded-full bg-[#D9D9D9] my-auto ml-7"></div>
        <div class="m-auto flex flex-col">
            <span class="m-auto" v-html="name"></span>
            <span class="m-auto" v-html="`#${id}`"></span>
        </div>
        <button class="my-auto mr-7" @click.stop="logout">
            <svg class="w-10 h-10" fill="none" stroke="#385E72" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                </path>
            </svg>
        </button>
    </div>
</template>
<script src="./profile.js"></script>