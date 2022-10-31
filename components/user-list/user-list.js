export default {
    name: 'user-list',
    computed: {
        friends() {
            return this.$store.getters['friend/friends']
        }
    }
}