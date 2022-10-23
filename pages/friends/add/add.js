export default {
    name: 'add-friend',
    layout: 'base',
    data() {
        const [title, subtitle, add, placeholder] = [
            'adicionar amigo', 
            'Você pode adicionar amigos com o ID deles. CuidAdO cOm As MaIúScUlAs!', 
            'Enviar pedido de amizade', 
            'Insira um nome de usuário#0000'
        ]
        return {
            title,
            subtitle,
            add,
            placeholder,
        }
    }
}