const usuariosCadastrados = [];

export default class UsuarioService {
  static buscarTodos() {
    try {
      return usuariosCadastrados;
    } catch (error) {
      throw error;
    }
  }

  static cadastrar(usuario) {
    try {
      usuariosCadastrados.push(usuario);
    } catch (error) {
      throw error;
    }
  }

  static atualizar(usuario) {
    try {
      // Altera no DB
    } catch (error) {
      throw error;
    }
  }

  static remover(usuario) {
    try {
      // Remove no DB
    } catch (error) {
      throw error;
    }
  }
}
