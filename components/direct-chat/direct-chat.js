export default {
    name: 'direct-chat',
    props: ['channelName'],
    data() {
        return {
            text: null
        }
    },
    methods: {
        send() {
            this.$emit('sendMessage', this.text)
        }
    }
}