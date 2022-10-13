export default {
    data() {
        return {
            alert: {
                status: null,
                message: ''
            },
            form: {
                name: '',
                mail: '',
                pass: '',
                born: ''
            }
        }
    },
    methods: {
        async submit() {
            const { data } = await this.$axios.post('auth/register', this.form)
            this.alert.status = data.status
            this.alert.message = data.message
        }
    }
}