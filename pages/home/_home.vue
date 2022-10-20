<template>
    <div>
        <home-top-bar @disponibility="disponibility = !disponibility" @everyone="everyone = !everyone"
            @pending="pending = !pending" @blocked="blocked = !blocked" @add="add = !add" />
        <add-friend :visibility="add" />
    </div>
</template>
<script src="./home.js">
</script>