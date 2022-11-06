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
        const { data } = await this.$axios.get(`friend/auth_user_list_friends/${this.app.store.state.user.user.id}`)
        dispatch('removeFriendList')
        // dispatch('reset_id_friends')
        data.item.map(arr => {
            arr.user_to.id === this.app.store.state.user.user.id
                ? commit('storeIdFriends', { id: arr.id, id_user: arr.user_from.id })
                : commit('storeIdFriends', { id: arr.id, id_user: arr.user_to.id })
            arr.user_to.id === this.app.store.state.user.user.id
                ? commit('friendList', arr.user_from)
                : commit('friendList', arr.user_to)
        })

        console.log(getters['id_friends'])
    },
    async pending({ dispatch, commit }) {
        const { data } = await this.$axios.get(`friend/pending/${this.app.store.state.user.user.id}`)
        dispatch('resetPendingList')
        data.item.map(arr => commit('addPendingFriends', arr.pending))
    }
}