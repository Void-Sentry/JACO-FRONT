<template>
    <div class="flex flex-col">
        <home-top-bar :name="messages.length >= 0 && (aux.friend?.user_from.id === $store.getters['user/user'].id ? aux.friend?.user_to.name : aux.friend?.user_from.name)" :type="chat" />
        <div class="flex flex-col-reverse h-full overflow-y-auto">
            <ul class="mx-1.5">
                <li v-for="n in messages">
                    <message :message="n.message" :user_from="n.user_from.name" />
                </li>
            </ul>
        </div>
            
        <direct-chat class="mt-auto mb-px" :info="messages" :channelName="messages.length >= 0 && (aux.friend?.user_from.id === $store.getters['user/user'].id ? aux.friend?.user_to.name : aux.friend?.user_from.name)" @sendMessage="receiveMessage" />
    </div>
</template>
<script src="./chat.js">
</script>