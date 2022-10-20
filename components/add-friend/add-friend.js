export default {
    name: 'add-friend',
    props: ['visibility'],
    data() {
        const title = 'adicionar amigo',
        subtitle = 'Você pode adicionar amigos com o ID deles. CuidAdO cOm As MaIúScUlAs!',
        add = 'Enviar pedido de amizade',
        placeholder = 'Insira um nome de usuário#0000'
        return {
            title,
            subtitle,
            add,
            placeholder,
        }
    }
}