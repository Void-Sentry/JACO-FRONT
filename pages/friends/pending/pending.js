export default {
    name: 'pending',
    layout: 'base',
    async fetch() {
        await this.$store.dispatch('friend/pending')
        this.friends = this.$store.getters['friend/pending']
    },
    data () {
        const [title, placeholder] = ['solicitações pendentes', 'Pesquisar']
        return {
            title,
            placeholder,
            friends: []
        }
    },
    methods: {
        async accept(id) {
            await this.$axios.patch(`friend/accept_friend/${id}`)
        }
    }
}