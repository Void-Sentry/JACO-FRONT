export default {
    resetState(state) {
        Object.assign(state, { 
            friends: [], 
            id_friends: [], 
            pending: []  
        })
    },
    friendList (state, friend) {
        state.friends.push(friend)
    },
    removeFriendList (state) {
        state.friends = []
    },
    removeById (state, id) {
        const item = state.id_friends.find(item => item.id_user === id)
        state.friends = state.friends.filter(arr => arr.user_from === item.id || arr.user_to === item.id)
        this.$axios.delete('friend', { params: item })
    },
    storeIdFriends (state, item) {
        state.id_friends.indexOf(item.id) === -1 && state.id_friends.push(item)
    },
    removePendingFriends (state) {
        state.pending = []
    },
    addPendingFriends (state, item) {
        state.pending.push(item)
    },
    reset_id_friends(state) {
        state.id_friends = []
    }
}