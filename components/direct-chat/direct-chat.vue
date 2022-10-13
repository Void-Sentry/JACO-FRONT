<template>
    <div class="bg-tertiary w-full h-16 rounded-b-3xl flex flex-row">
        <button class="my-auto ml-9 mr-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#385E72"
                class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
        </button>
        <input v-model="text" @keypress.enter="send" type="text"
            class="my-auto text-xl text-primary placeholder:text-primary focus:outline-none h-full bg-tertiary w-full mx-1.5"
            :placeholder="`Conversar em @${channelName}`" />
        <button class="text-success my-auto mr-9 ml-auto hover:underline text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#385E72"
                class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
        </button>
    </div>
</template>
<script src="./direct-chat.js">
</script>