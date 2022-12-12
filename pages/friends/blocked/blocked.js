export default {
    name: 'blocked',
    layout: 'base',
    data () {
        const [title, placeholder] = ['bloqueados', 'Pesquisar']
        return {
            title,
            placeholder,
            friends: []
        }
    },
    methods: {
        unblock(n) {
            this.$axios.$patch(`friend/restore_friend/${n.id}`)
            this.$store.dispatch('friend/update')
        }
    },
    async mounted() {
        const { item } = await this.$axios.$get('friend/blocked_friends')
        this.friends = item
    }
}