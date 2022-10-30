export default {
    name: 'online',
    layout: 'base',
    async fetch() {
        await this.$store.dispatch('friend/update')
        this.friends = await this.$store.getters['friend/friends']
    },
    data () {
        const [title, placeholder] = ['disponíveis', 'Pesquisar']
        return {
            title,
            placeholder,
            friends: []
        }
    }
}