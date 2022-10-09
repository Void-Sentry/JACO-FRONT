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