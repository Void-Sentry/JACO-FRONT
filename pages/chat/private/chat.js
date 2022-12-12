export default {
    layout: 'chat',
    data() {
        return {
            chat: true,
            messages: [],
            aux: []
        }
    },
    methods: {
        async receiveMessage() {
            const { item } = await this.$axios.$get(`chat/private/show/${this.$route.params.chat}`)
            this.messages = item.messages
            this.aux = item
        }
    },
    mounted() {
        this.receiveMessage()
    }
}