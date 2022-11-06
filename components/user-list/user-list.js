export default {
    name: 'user-list',
    computed: {
        friends() {
            return this.$store.getters['friend/friends']
        }
        // chats() {
        //     return this.$store.getters['friend/id_friends']
        // }
    },
    async mounted() {
        // this.$store.commit('chat_private/set_friends', this.$store.getters['friend/id_friends'])
        // console.log(Array.from(data))
        // for(let i = 0; i < data.length; i++)
        // {
        //     console.log(i)
        //     await this.$axios.post('chat/private/authenticated_list', { friends: data[i].id })
        // }
        // console.log(this.$store.getters['chat_private/friends'])
        // this.$store.dispatch('chat_private/chats')
        // console.log(this.$store.getters['chat_private/chats'])
    }
}