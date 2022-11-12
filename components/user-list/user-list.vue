<template>
    <div class="relative bg-quartenary w-[30rem] m-1.5 rounded-3xl flex flex-col">
        <h1 class="text-xl text-primary mx-auto mb-8 mt-8">Canais privados</h1>
        <div class="overflow-y-auto h-full">
            <div class="flex flex-row mx-7 mt-1.5" v-for="n in items" :key="n.id">
                <div class="w-12 h-12 rounded-full bg-[#D9D9D9]"></div>
                <NuxtLink :to="`/chat/private/${n.id}`">
                    <button class="w-64 h-12 ml-1.5 rounded-3xl bg-tertiary flex flex-row">
                        <h1 class="text-primary my-auto mx-auto" v-html="n.friend.user_to.id === $store.getters['user/user'].id ? n.friend.user_from.name : n.friend.user_to.name"></h1>
                    </button>
                </NuxtLink>
            </div>
        </div>
        <profile />
    </div>
</template>
<script src="./user-list.js">
</script>