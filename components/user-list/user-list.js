export default {
    name: 'user-list',
    data() {
        return {
            items: []
        }
    },
    async fetch(){
        const { items } = await this.$axios.$get('chat/private/authenticated_list')
        this.items = items
    }
}