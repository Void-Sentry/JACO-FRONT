export default {
    name: 'friend',
    props: ['friend'],
    methods: {
        async remove() {
            await this.$store.commit('friend/removeById', this.friend.id)
        }
    }
}