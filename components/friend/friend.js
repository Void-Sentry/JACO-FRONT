export default {
    name: 'friend',
    props: ['friend'],
    methods: {
        async block() {
            const item = this.$store.getters['friend/id_friends'].find(item => item.id_user === this.friend.id)
            await this.$axios.$patch(`friend/block_friend/${item.id}`)
            this.$store.dispatch('friend/update')
        },
        async remove() {
            await this.$store.commit('friend/removeById', this.friend.id)
        }
    }
}