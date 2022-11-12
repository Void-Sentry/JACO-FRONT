<template>
    <div class="flex flex-row flex-wrap my-1.5 text-primary">
        <div class="w-12 h-12 rounded-full bg-primary"></div>
        <div class="my-auto ml-4"><i v-html="user_from"></i></div>
        <div class="w-full mx-12" v-html="message"></div>
    </div>
</template>
<script src="./message.js">
</script>