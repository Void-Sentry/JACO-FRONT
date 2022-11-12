export default {
    name: 'direct-chat',
    props: ['channelName'],
    data() {
        return {
            text: null
        }
    },
    methods: {
        async send() {
            this.$axios.$post('message', { message: this.text, chat_private_id: this.$route.params.chat, user_from: this.$store.getters['user/user'].id })
            this.$emit('sendMessage')
        }
    }
}