<template>
    <div v-if="!type" class="bg-tertiary w-full h-16 rounded-t-3xl flex flex-row">
        <div class="my-auto ml-9 mr-px">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#385E72"
                class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        </div>
        <div class="flex flex-row text-xl">
            <p class="my-auto mx-3.5 text-primary">Amigos</p>
            <div class="my-auto h-6 w-px bg-primary"></div>
            <button class="my-auto mx-3.5 text-primary hover:underline">Disponível</button>
            <button class="my-auto text-primary hover:underline">Todos</button>
            <button class="my-auto mx-3.5 text-primary hover:underline">Pendente</button>
            <button class="my-auto text-primary hover:underline">Bloqueado</button>
        </div>
        <button class="text-success my-auto ml-auto mr-9 hover:underline flex flex-row text-xl">
            <p class="my-auto mr-1.5">Adicionar amigo</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50"
                class="w-10 h-10 my-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
        </button>
    </div>
    <div v-else class="bg-tertiary w-full h-16 rounded-t-3xl flex flex-row">
        <div class="w-12 h-12 rounded-full bg-[#D9D9D9] ml-9 my-auto"></div>
        <p class="m-auto text-xl text-primary">Nome do meliante</p>
        <button
            class=" my-auto mr-9 hover:bg-secondary hover:rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#385E72"
                class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
        </button>
    </div>
</template>
<script src="./home-top-bar.js">
</script>