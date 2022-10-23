export default {
    name: 'login',
    data() {
        return {
            form: {
                name: '',
                pass: ''
            }
        }
    },
    methods: {
        async login() {
            const { data } =  await this.$axios.post('auth/login', this.form)
            this.$axios.setToken(data.item.token, 'Bearer')
            this.$store.commit('user/add', data.item.user)
            this.$router.push('/friends/online')
        }
    }
}