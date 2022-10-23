<template>
    <div class="px-12 text-primary">
        <h1 class="uppercase my-4" v-html="title"></h1>
        <h4 class="mb-4" v-html="subtitle"></h4>
        <div class="h-12 w-full bg-tertiary rounded-xl flex flex-row">
            <input class="mx-1.5 w-full rounded-xl bg-tertiary h-full placeholder:text-primary focus:outline-none"
                :placeholder="placeholder" />
            <button class="mr-1.5 m-auto text-success w-64" v-html="add"></button>
        </div>
    </div>
</template>
<script src="./add.js"></script>