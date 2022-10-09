<template>
    <div class="bg-quartenary w-28 rounded-3xl m-1.5">
        <button class="bg-tertiary w-20 h-20 rounded-full mt-20 m-auto flex flex-col">
            <svg class="w-12 h-12 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="#385E72">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        </button>
        <button class="bg-[#D9D9D9] w-20 h-20 rounded-full mt-7 m-auto flex flex-col" v-for="n in 2"></button>
        <button class="bg-tertiary w-20 h-20 rounded-full mt-7 m-auto flex flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#385E72"
                class="w-12 h-12 m-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        </button>
        <button class="bg-tertiary w-20 h-20 rounded-full mt-7 m-auto flex flex-col">
            <svg class="w-12 h-12 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="#385E72">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</template>
<script src="./server-list.js">
</script>