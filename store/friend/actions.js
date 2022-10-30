export default {
    resetState({ commit }) {
        commit('resetState')
    },
    removeFriendList({ commit }) {
        commit('removeFriendList')
    },
    resetPendingList({ commit }) {
        commit('removePendingFriends')
    },
    async update({ dispatch, commit, getters }) {
        if(getters['friends'].length === 0) {
            const { data } = await this.$axios.get(`friend/auth_user_list_friends/${this.app.store.state.user.user.id}`)
            dispatch('removeFriendList')
            data.item.map(arr => {
                arr.user_to.id === this.app.store.state.user.user.id
                    ? commit('storeIdFriends', { id: arr.id, id_user: arr.user_from.id })
                    : commit('storeIdFriends', { id: arr.id, id_user: arr.user_to.id })
                arr.user_to.id === this.app.store.state.user.user.id
                    ? commit('friendList', arr.user_from)
                    : commit('friendList', arr.user_to)
            })
        }
    },
    async pending({ dispatch, commit }) {
        const { data } = await this.$axios.get(`friend/pending/${this.app.store.state.user.user.id}`)
        dispatch('resetPendingList')
        data.item.map(arr => commit('addPendingFriends', arr.pending))
    }
}