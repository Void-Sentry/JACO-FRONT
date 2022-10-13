export default {
    name: 'profile',
    computed: {
        name() {
            return this.$store.state.user.user.name
        },
        id() {
            return this.$store.state.user.user.id
        }
    },
    methods: {
        async logout() {
            await this.$axios.post('auth/logout')
            this.$router.push('/auth/login')
        }
    }
}