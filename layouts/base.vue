<template>
    <div class="flex flex-row h-screen w-screen">
        <server-list />
        <div class="relative bg-quartenary w-full h-auto rounded-3xl my-1.5">
            <home-top-bar />
            <Nuxt class="relative h-5/6" />
        </div>
        <user-list />
    </div>
</template>
<script src="./javascript/base.js"></script>