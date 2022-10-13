export default {
    layout: 'base',
    mounted() {
        console.log(this.$store.state.user.user)
    }
}