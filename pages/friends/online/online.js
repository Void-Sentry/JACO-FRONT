export default {
    name: 'online',
    layout: 'base',
    watch: {
        search(value) {
            if(this.filtered.length === 0 || this.search === '')
                this.filtered = this.friends
            this.filtered = this.filtered.filter(friend => {
                return friend.name.includes(value)
            })
        }
    },
    async fetch() {
        await this.$store.dispatch('friend/update')
        this.friends = await this.$store.getters['friend/friends']
        this.filtered = this.friends
    },
    data () {
        const [title, placeholder] = ['disponíveis', 'Pesquisar']
        return {
            title,
            placeholder,
            friends: [],
            filtered: [],
            search: ''
        }
    }
}