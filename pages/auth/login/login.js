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
        login() {
            this.$axios.post('auth/login', this.form).then(res => {
                this.$axios.setToken(res.data.item.token, 'Bearer')
                this.$store.commit('user/add', res.data.item.user)
                this.$router.push('/home')
            }).catch(() => {})
        }
    }
}