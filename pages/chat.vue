<template>
    <div class="w-full h-full flex flex-col">
        <home-top-bar :type="chat" />
        <div class="flex flex-col-reverse h-full">
            <ul class="mx-1.5">
                <li v-for="n in 5">
                    <message :profile="profile" />
                </li>
            </ul>
        </div>
            
        <direct-chat class="mt-auto mb-px" @sendMessage="receiveMessage" />
    </div>
</template>
<script>
export default {
    layout: 'chat',
    data() {
        return {
            chat: true,
            profile: {
                name: 'Oséias',
                date: null,
                photo: null,
                message: null
            }
        }
    },
    methods: {
        receiveMessage(text) {
            this.profile.message = text
        }
    }
}
</script>