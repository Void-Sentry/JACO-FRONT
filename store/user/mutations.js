export default {
    add (state, { id, name, mail, born }) {
        state.user = {
            id: id,
            name: name,
            mail: mail,
            born: born
        }
    },
    setUser (state) {
        Object.assign(state, { user: null })
    }
}