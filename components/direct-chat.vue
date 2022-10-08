<template>
    <div class="bg-quartenary w-96 m-1.5 rounded-3xl flex flex-col">
        <h1 class="text-xl text-primary mx-auto mb-8 mt-8">Canais privados</h1>
        <div class="mx-7 mt-1.5 flex flex-row" v-for="n in 18">
            <div class="w-12 h-12 rounded-full bg-[#D9D9D9]"></div>
            <div class="w-64 h-12 ml-1.5 rounded-3xl bg-tertiary"></div>
        </div>
    </div>
</template>