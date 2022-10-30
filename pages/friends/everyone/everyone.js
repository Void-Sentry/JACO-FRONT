export default {
    name: 'everyone',
    layout: 'base',
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
            all_friends: []
        }
    }
}