export default {
    reset_state({ commit }) {
        commit('set_chats', [])
    },
    chats({ commit, getters }) {
        console.log(getters['friends'])

        const data = getters['friends']
    }
}