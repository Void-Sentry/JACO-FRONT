export default ({ app, redirect }) => {
    if (!app.store.state.user.user)
        redirect('/auth/login')
}