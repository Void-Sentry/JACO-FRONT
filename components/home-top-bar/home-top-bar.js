export default {
    name: 'home-top-bar',
    props: ['type'],
    methods: {
        event(eventName) {
            this.$emit(eventName)
        }
    }
}