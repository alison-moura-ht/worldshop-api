const usuariosCadastrados = []

export default class UsuarioService {

    static buscarTodos() {
        return usuariosCadastrados
    }

    static cadastrar(usuario) {
        // Validação de dados/regra de negócio
        usuariosCadastrados.push(usuario)
    }

    static atualizar(usuario) {
        // Altera no DB
    }

    static remover(usuario) {
        // Remove no DB
    }

}