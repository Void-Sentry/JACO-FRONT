export default {
    name: 'everyone',
    layout: 'base',
    watch: {
        init: {
            immediate: true,
            handler() {
                this.filtered = this.friends
            }
        },
        search(value) {
            if(this.filtered.length === 0 || this.search === '')
                this.filtered = this.friends
            this.filtered = this.filtered.filter(friend => {
                return friend.name.includes(value)
            })
        }
    },
    asyncData({ store }) {
        const friends = store.state.friend.friends
        return {
            friends
        }
    },
    data () {
        const [title, placeholder] = ['todos os amigos', 'Pesquisar']
        return {
            title,
            placeholder,
            filtered: [],
            search: ''
        }
    }
}