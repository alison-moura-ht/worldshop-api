import UsuarioModel from "../model/usuario.model.js";
const usuariosCadastrados = [];

export default class UsuarioService {
  static async buscarTodos() {
    try {
      return await UsuarioModel.find();
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
